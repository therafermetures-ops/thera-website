import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Réalisations - Portfolio THERA Fermetures',
  description: 'Découvrez nos 500+ installations: portails, pergolas, carports, clôtures. Portfolio professionnel à Villefranche-sur-Saône et région Beaujolais.',
  keywords: ['réalisations portails', 'portfolio aménagement extérieur', 'installations villefranche-sur-saône'],
  alternates: { canonical: 'https://thera-fermetures.fr/realisations' },
}

const realisations = [
  { title: 'Portail Aluminium Arnas', category: 'Portail', image: '/images/realisations/portail-arnas.jpg', alt: 'Portail aluminium sur mesure installé à Arnas par THERA Fermetures' },
  { title: 'Portail Aluminium Arnas (vue 2)', category: 'Portail', image: '/images/realisations/portail-aluminium-arnas.jpg', alt: 'Portail aluminium Arnas THERA Fermetures' },
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-orange-600 text-white py-20 md:py-28">
        <div className="container max-w-3xl mx-auto text-center">
          <h1>Nos Réalisations</h1>
          <p className="text-lg">Plus de 500 installations réussies dans la région Beaujolais</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Découvrez notre portfolio complet d&apos;installations. Chaque projet est une preuve de notre engagement envers l&apos;excellence et la satisfaction client.
            </p>
          </div>

          {/* Catégories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold text-sm">
                {cat}
              </span>
            ))}
          </div>

          {/* Grille photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md card-hover group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={i < 6 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{item.category}</p>
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Et bien d&apos;autres réalisations dans la région Beaujolais et Rhône!
            </p>
            <Link href="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              Demander à voir plus de photos
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Installation excellente, équipe très professionnelle! Notre portail est parfait.', author: 'M. Dupont', ville: 'Villefranche-sur-Saône', note: '⭐⭐⭐⭐⭐' },
              { text: 'Qualité exceptionnelle et service client au top. Je recommande vivement!', author: 'Mme Martin', ville: 'Arnas', note: '⭐⭐⭐⭐⭐' },
              { text: 'Notre pergola bioclimatique a transformé notre terrasse. On recommande THERA!', author: 'M. & Mme Leclerc', ville: 'Chasselay', note: '⭐⭐⭐⭐⭐' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg mb-2">{t.note}</p>
                <p className="text-gray-700 mb-4 italic">&quot;{t.text}&quot;</p>
                <p className="font-semibold text-primary">— {t.author}</p>
                <p className="text-sm text-gray-500">{t.ville}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-white mb-8">Votre Projet Est Unique</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite. Ensemble, réalisons votre projet d&apos;aménagement extérieur!
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors">
            DEMANDER UN DEVIS GRATUIT
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Réalisations THERA Fermetures',
            description: 'Portfolio de 500+ installations de portails, pergolas, carports et clôtures aluminium',
            url: 'https://thera-fermetures.fr/realisations',
            provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
          }),
        }}
      />
    </div>
  )
}
