import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProcessSteps from '../components/ProcessSteps'

export const metadata: Metadata = {
  title: 'Nos Réalisations — Portfolio THERA Fermetures',
  description: 'Découvrez nos installations : portails, pergolas, carports, clôtures. Portfolio professionnel à Villefranche-sur-Saône et région Beaujolais.',
  keywords: ['réalisations portails', 'portfolio aménagement extérieur', 'installations villefranche-sur-saône'],
  alternates: { canonical: 'https://thera-fermetures.fr/realisations' },
}

const realisations = [
  { title: 'Portail Aluminium Arnas', category: 'Portail', image: '/images/realisations/portail-arnas.jpg', alt: 'Portail aluminium sur mesure installé à Arnas par THERA Fermetures' },
  { title: 'Portail Aluminium Arnas', category: 'Portail', image: '/images/realisations/portail-aluminium-arnas.jpg', alt: 'Portail aluminium Arnas THERA Fermetures' },
  { title: 'Portail Coulissant Chasselay', category: 'Portail', image: '/images/realisations/portail-chasselay.jpg', alt: 'Portail coulissant aluminium installé à Chasselay' },
  { title: 'Portail Battant Lozanne', category: 'Portail', image: '/images/realisations/portail-lozanne.jpg', alt: 'Portail battant aluminium installé à Lozanne' },
  { title: 'Pergola Bioclimatique Limonest', category: 'Pergola', image: '/images/realisations/pergola-limonest.jpg', alt: 'Pergola bioclimatique installée à Limonest par THERA Fermetures' },
  { title: 'Pergola Bioclimatique Motorisée', category: 'Pergola', image: '/images/realisations/pergola-austral.jpg', alt: 'Pergola bioclimatique motorisée THERA Fermetures' },
  { title: 'Carport Aluminium Claustra', category: 'Carport', image: '/images/realisations/carport-claustra.png', alt: 'Carport aluminium avec claustra installé par THERA Fermetures' },
  { title: 'Clôture Aluminium Moderne', category: 'Clôture', image: '/images/realisations/cloture-alu.jpg', alt: 'Clôture aluminium moderne installée par THERA Fermetures' },
  { title: 'Brise-Vue Aluminium Villefranche', category: 'Clôture', image: '/images/realisations/brise-vue.jpg', alt: 'Panneau brise-vue aluminium à Villefranche-sur-Saône' },
  { title: 'Portail & Clôtures Ambérieux', category: 'Portail', image: '/images/realisations/portail-cloture-amberieux.jpg', alt: 'Portail et clôtures aluminium à Ambérieux-d\'Azergues' },
  { title: 'Portail Aluminium Caluire', category: 'Portail', image: '/images/realisations/portail-caluire.jpg', alt: 'Portail aluminium installé à Caluire-et-Cuire' },
  { title: 'Portail Battant Belleville', category: 'Portail', image: '/images/realisations/portail-belleville.jpg', alt: 'Portail battant aluminium installé à Belleville' },
]

const categories = ['Tout', 'Portail', 'Pergola', 'Carport', 'Clôture']

export default function RealisationsPage() {
  return (
    <div>
      {/* Hero — fond sombre avec image, plus d'orange */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/portails/portail-arnas.jpg" alt="Réalisations THERA Fermetures" fill className="object-cover" priority />
        </div>
        <div className="relative container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Portfolio</div>
          <h1 className="text-white mb-4">Nos réalisations</h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto font-light">
            Chaque projet illustre notre engagement pour la qualité et le sur mesure dans le Beaujolais.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="section-padding">
        <div className="container">

          {/* Filtres catégories */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full border border-dark/20 text-dark font-medium text-sm cursor-pointer hover:bg-dark hover:text-white transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Grille photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {realisations.map((item, i) => (
              <div key={i} className="bg-white overflow-hidden shadow-card card-hover group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={i < 6 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide">{item.category}</p>
                  </div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-6 font-light">
              Et bien d&apos;autres réalisations dans la région Beaujolais et Rhône.
            </p>
            <Link href="/contact" className="btn-primary">
              Demander à voir plus de photos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Votre projet</div>
          <h2 className="text-white mb-6">Votre projet est unique —<br />parlons-en.</h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto font-light">
            Visite offerte à domicile, fabrication française, installation par nos équipes.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Demander un devis gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ImageGallery',
        name: 'Réalisations THERA Fermetures',
        description: 'Portfolio d\'installations de portails, pergolas, carports et clôtures aluminium dans le Beaujolais',
        url: 'https://thera-fermetures.fr/realisations',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
      }) }} />
    </div>
  )
}
