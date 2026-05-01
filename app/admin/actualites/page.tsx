import Link from 'next/link'
import { getSupabaseAdmin } from '@/lib/supabase'
import DeleteButton from './DeleteButton'

export default async function AdminActualites() {
  const { data: actualites } = await getSupabaseAdmin()
    .from('actualites')
    .select('*')
    .order('date_publiee', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Actualités</h1>
          <p className="text-gray-500 text-sm mt-1">Chaque actualité = contenu frais = meilleur classement Google</p>
        </div>
        <Link href="/admin/actualites/nouveau"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
          + Nouvelle actualité
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {actualites && actualites.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {actualites.map((a) => (
              <div key={a.id} className="flex items-start gap-4 p-5 hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
                  {a.photo_url ? (
                    <img src={a.photo_url} alt={a.titre} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-2xl">📷</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{a.titre}</p>
                    <span className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${a.statut === 'publiee' ? 'bg-green-100 text-green-700' : a.statut === 'brouillon' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}>
                      {a.statut === 'publiee' ? 'Publiée' : a.statut === 'brouillon' ? 'Brouillon' : 'Archive'}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{new Date(a.date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{a.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link href={`/admin/actualites/${a.id}`} className="text-sm text-gray-500 hover:text-orange-500 font-medium px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">Modifier</Link>
                  <DeleteButton id={a.id} titre={a.titre} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-400 text-lg mb-3">Aucune actualité</p>
            <Link href="/admin/actualites/nouveau" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">+ Créer une actualité</Link>
          </div>
        )}
      </div>
    </div>
  )
}
