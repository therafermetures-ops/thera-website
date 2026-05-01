import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import ProcessSteps from '../components/ProcessSteps'

export const metadata: Metadata = {
  title: 'Actualités — THERA Fermetures Villefranche-sur-Saône',
  description: 'Suivez les dernières actualités de THERA Fermetures : nouvelles réalisations, conseils entretien, nouveautés produits dans le Beaujolais.',
  alternates: { canonical: 'https://thera-fermetures.fr/actualites' },
}

export const revalidate = 60

export default async function ActualitesPage() {
  const { data: actualites } = await supabase
    .from('actualites')
    .select('*')
    .eq('statut', 'publiee')
    .order('date_publiee', { ascending: false })
    .limit(20)

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/portails/portail-arnas.jpg" alt="Actualités THERA Fermetures" fill className="object-cover" priority />
        </div>
        <div className="relative container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Notre actualité</div>
          <h1 className="text-white mb-4">Actualités</h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto font-light">
            Nouvelles réalisations, conseils entretien et actualités THERA Fermetures dans le Beaujolais.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container">
          {actualites && actualites.length > 0 ? (
            <>
              {/* Article vedette */}
              <div className="mb-10">
                <Link href={`/actualites/${actualites[0].id}`} className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 md:h-80 bg-gray-100">
                    {actualites[0].photo_url ? (
                      <Image src={actualites[0].photo_url} alt={actualites[0].titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 text-4xl">📰</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-white p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                        {new Date(actualites[0].date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl mb-4 group-hover:text-primary transition-colors">{actualites[0].titre}</h2>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">{actualites[0].description}</p>
                    <span className="mt-6 text-primary font-semibold text-sm flex items-center gap-1">
                      Lire la suite →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Grille */}
              {actualites.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {actualites.slice(1).map((a) => (
                    <Link key={a.id} href={`/actualites/${a.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 card-hover">
                      <div className="relative h-48 bg-gray-100">
                        {a.photo_url ? (
                          <Image src={a.photo_url} alt={a.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <span className="text-gray-300 text-3xl">📰</span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          <span className="text-xs text-muted">
                            {new Date(a.date_publiee).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="font-bold text-dark text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">{a.titre}</h3>
                        <p className="text-muted text-xs leading-relaxed line-clamp-3">{a.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted text-lg mb-2">Aucune actualité pour le moment</p>
              <p className="text-muted text-sm">Revenez bientôt !</p>
            </div>
          )}
        </div>
      </section>

      <ProcessSteps />

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Votre projet</div>
          <h2 className="text-white mb-6">Votre projet, parlons-en.</h2>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Demander un devis gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
