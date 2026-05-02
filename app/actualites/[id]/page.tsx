import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { data } = await supabase.from('actualites').select('titre, description').eq('id', params.id).single()
  if (!data) return {}
  return {
    title: `${data.titre} — THERA Fermetures`,
    description: data.description.slice(0, 160),
  }
}

export default async function ActualiteDetail({ params }: { params: { id: string } }) {
  const { data: actualite } = await supabase
    .from('actualites')
    .select('*')
    .eq('id', params.id)
    .eq('statut', 'publiee')
    .single()

  if (!actualite) notFound()

  const { data: autres } = await supabase
    .from('actualites')
    .select('id, titre, date_publiee, photo_url')
    .eq('statut', 'publiee')
    .neq('id', params.id)
    .order('date_publiee', { ascending: false })
    .limit(3)

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
        {actualite.photo_url && (
          <div className="absolute inset-0 opacity-20">
            <Image src={actualite.photo_url} alt={actualite.titre} fill className="object-cover" priority />
          </div>
        )}
        <div className="relative container max-w-3xl">
          <Link href="/actualites" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            ← Toutes les actualités
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/50 text-sm">
              {new Date(actualite.date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-white">{actualite.titre}</h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          {actualite.photo_url && (
            <div className="relative h-64 md:h-96 overflow-hidden mb-10 shadow-card">
              <Image src={actualite.photo_url} alt={actualite.titre} fill className="object-cover" />
            </div>
          )}
          <div className="prose prose-lg max-w-none">
            {actualite.description.split('\n').map((para: string, i: number) =>
              para.trim() ? <p key={i} className="text-muted text-lg leading-relaxed mb-4">{para}</p> : null
            )}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link href="/contact" className="btn-primary">
              Demander un devis pour votre projet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Autres actualités */}
      {autres && autres.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container">
            <h2 className="mb-8">Autres actualités</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {autres.map(a => (
                <Link key={a.id} href={`/actualites/${a.id}`} className="bg-white overflow-hidden shadow-card hover:shadow-xl transition-all card-hover group">
                  <div className="relative h-40 bg-gray-100">
                    {a.photo_url ? (
                      <Image src={a.photo_url} alt={a.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-2xl">📰</div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted mb-2">{new Date(a.date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</p>
                    <p className="font-bold text-sm text-dark group-hover:text-primary transition-colors line-clamp-2">{a.titre}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
