import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase'

async function getStats() {
  const [{ count: total }, { count: publiees }, { count: brouillons }] = await Promise.all([
    supabaseAdmin.from('actualites').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('actualites').select('*', { count: 'exact', head: true }).eq('statut', 'publiee'),
    supabaseAdmin.from('actualites').select('*', { count: 'exact', head: true }).eq('statut', 'brouillon'),
  ])
  const { data: recentes } = await supabaseAdmin
    .from('actualites')
    .select('id, titre, statut, date_publiee')
    .order('created_at', { ascending: false })
    .limit(5)
  return { total, publiees, brouillons, recentes }
}

export default async function AdminDashboard() {
  const { total, publiees, brouillons, recentes } = await getStats()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 text-sm mt-1">Bienvenue dans l&apos;admin THERA Fermetures</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {[
          { label: 'Actualités totales', value: total ?? 0, color: 'bg-blue-50 text-blue-700', border: 'border-blue-100' },
          { label: 'Publiées', value: publiees ?? 0, color: 'bg-green-50 text-green-700', border: 'border-green-100' },
          { label: 'Brouillons', value: brouillons ?? 0, color: 'bg-yellow-50 text-yellow-700', border: 'border-yellow-100' },
        ].map(s => (
          <div key={s.label} className={`bg-white rounded-2xl p-6 border ${s.border} shadow-sm`}>
            <p className="text-gray-500 text-sm mb-2">{s.label}</p>
            <p className={`text-4xl font-black ${s.color.split(' ')[1]}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <Link href="/admin/actualites/nouveau"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-6 flex items-center gap-4 transition-colors group">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">+</div>
          <div>
            <p className="font-bold text-lg">Nouvelle actualité</p>
            <p className="text-white/70 text-sm">Publiez en 2 minutes — impact SEO immédiat</p>
          </div>
        </Link>
        <Link href="/actualites" target="_blank"
          className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl text-gray-600">↗</div>
          <div>
            <p className="font-bold text-lg text-gray-900">Voir la page actualités</p>
            <p className="text-gray-500 text-sm">Aperçu de ce que voient vos visiteurs</p>
          </div>
        </Link>
      </div>

      {/* Dernières actualités */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Dernières actualités</h2>
          <Link href="/admin/actualites" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
            Voir tout →
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentes && recentes.length > 0 ? recentes.map((a: { id: string; titre: string; statut: string; date_publiee: string }) => (
            <div key={a.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <p className="font-medium text-gray-900 text-sm truncate">{a.titre}</p>
                <p className="text-gray-400 text-xs mt-0.5">{new Date(a.date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  a.statut === 'publiee' ? 'bg-green-100 text-green-700' :
                  a.statut === 'brouillon' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-500'
                }`}>
                  {a.statut === 'publiee' ? 'Publiée' : a.statut === 'brouillon' ? 'Brouillon' : 'Archive'}
                </span>
                <Link href={`/admin/actualites/${a.id}`} className="text-gray-400 hover:text-orange-500 text-sm">
                  Modifier →
                </Link>
              </div>
            </div>
          )) : (
            <div className="px-6 py-10 text-center text-gray-400">
              <p className="text-lg mb-2">Aucune actualité</p>
              <Link href="/admin/actualites/nouveau" className="text-orange-500 hover:underline text-sm">
                Créer la première →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Conseil SEO */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <p className="font-bold text-blue-900 text-sm mb-1">Conseil SEO</p>
        <p className="text-blue-700 text-sm">Publiez 1 actualité par semaine pour améliorer votre classement Google local. Utilisez des mots-clés locaux (Villefranche, Beaujolais, portail, pergola...).</p>
      </div>
    </div>
  )
}
