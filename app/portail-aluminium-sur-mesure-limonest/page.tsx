import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductTemplate from '../components/ProductTemplate'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Portail Aluminium sur Mesure Limonest | THERA Fermetures',
  description: 'Portails aluminium battants, coulissants et autoportants a Limonest. Expert local depuis 2015, fabrication francaise, garantie 10 ans. Devis gratuit.',
  keywords: ['portail aluminium Limonest', 'portail coulissant Limonest', 'portail sur mesure Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/portails' },
  openGraph: {
    title: 'Portail Aluminium sur Mesure Limonest — THERA Fermetures',
    description: 'Portails aluminium sur mesure a Limonest. Devis gratuit.',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail aluminium Limonest' }],
  },
}

export default function PortailPage() {
  return (
    <ProductTemplate
      title="Portails Aluminium a Limonest"
      subtitle="Coulissants, battants ou autoportants — installation sur mesure dans la region Rhône (69)"
      description="THERA Fermetures concoit et installe des portails aluminium sur mesure a Limonest depuis 2015. Chaque portail est fabrique en France avec de l'aluminium extrade premium et livre cles en main avec motorisation optionnelle Somfy ou BFT. Plus de 300 coloris disponibles pour s'adapter a votre architecture."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail aluminium coulissant sur mesure a Limonest par THERA Fermetures"
      features={[
        'Aluminium extrade premiere qualite (non recycle)',
        '+300 coloris disponibles — RAL standards ou sur demande',
        'Portails battants 1 ou 2 vantaux',
        'Portails coulissants autoportants ou sur rail',
        'Motorisation Somfy / BFT (telecommande, badge, GSM)',
        'Serrures et verrous haute securite',
        'Certifications Qualicoat et Qualimarine pour le laquage',
        'Garantie structure et peinture 10 ans',
      ]}
      variants={[
        {
          title: 'Portail Coulissant',
          badge: 'Le plus populaire',
          description: "Le portail coulissant s'ouvre en glissant lateralement. Ideal pour les entrees etroites ou les allees en pente, il est disponible sur rail ou autoportant. Solution robuste pour les proprietes de Limonest.",
          specs: [
            'Glissement lateral sur rail ou autoportant (sans rail au sol)',
            'Ideal pour allees en pente ou terrains etroits',
            'Motorisation integree invisible disponible',
            "Larges dimensions possibles jusqu'a 10m",
            'Entretien minime — roulements en acier inoxydable',
            'Disponible avec ou sans portillon assorti',
          ],
          image: '/images/portails/portail_coulissant_alu_ajouré_villefranche.jpg',
          imageAlt: 'Portail coulissant aluminium THERA Fermetures',
        },
        {
          title: 'Portail Battant',
          badge: 'Design premium',
          description: "Le portail battant s'ouvre comme une porte classique, en 1 ou 2 vantaux. Elegant et intemporel, il s'adapte parfaitement a tous les styles architecturaux. Motorisation totalement invisible. Tres apprecie des proprietaires de Limonest.",
          specs: [
            'Ouverture en 1 ou 2 vantaux selon la largeur',
            'Motorisation integree et invisible dans le vantail',
            'Certifications Qualicoat et Qualimarine pour le laquage',
            'Ferrage haute securite — verins ou bras articules',
            'Personnalisation totale : lames, barreaux, tole decorative',
            'Portillon assorti disponible en option',
          ],
          image: '/images/portails/Portail_battant_aluminium_rillieux.png',
          imageAlt: 'Portail battant aluminium motorisation Somfy THERA Fermetures',
        },
        {
          title: 'Portail Autoportant',
          badge: 'Sans rail au sol',
          description: "Le portail autoportant glisse lateralement sans aucun rail enterre dans le sol. Ideal pour les allees pavees, en pente ou avec caniveaux. Grandes ouvertures possibles jusqu'a 15 metres.",
          specs: [
            'Aucun rail enterre dans le sol — installation propre',
            "Ideal pour allees en pente, avec caniveaux ou pavees",
            "Grandes ouvertures possibles jusqu'a 15m",
            'Contrepoids integre pour equilibre parfait',
            'Compatible motorisation a galets ou chaine',
            'Structure renforcee pour les portails lourds',
          ],
          image: '/images/portails/portail-aluminium-autoportant.jpg',
          imageAlt: 'Portail autoportant aluminium THERA Fermetures',
        },      ]}
      galleryImages={[
        { src: '/images/portails/portail-arnas.jpg', alt: 'Portail aluminium Arnas', caption: 'Portail coulissant — Arnas' },
        { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail aluminium Trevoux', caption: 'Portail battant — Trevoux' },
        { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail aluminium Villefranche', caption: 'Portail sur mesure — Villefranche' },
      ]}
      advantages={[
        { icon: '', title: 'Robustesse extreme', text: "Aluminium extrade resistant aux chocs, intemperies et corrosion. Duree de vie 30+ ans." },
        { icon: '', title: 'Zero entretien', text: "L'aluminium ne rouille pas et ne se deforme pas. Un coup d'eau suffit pour retrouver l'eclat du neuf." },
        { icon: '', title: '+300 coloris', text: 'Blanc, gris anthracite, noir mat, couleurs sur demande. Finition laquee Qualicoat ultra-durable.' },
        { icon: '', title: 'Securite maximale', text: 'Serrures certifiees, motorisation avec detection d\'obstacles. Votre propriete est pleinement protegee.' },
        { icon: '', title: 'Motorisation smart', text: 'Telecommande, smartphone, interphone video. Compatibles Somfy, BFT — maison connectee.' },
        { icon: '', title: 'Fabrication francaise', text: 'Fabriques en France par des partenaires certifies Qualicoat. Qualite et tracabilite garanties.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Mise en service']}
      youtubeId="wVuPyTZSGig"
      youtubeStart={22}
      afterVariants={
        <section className="section-padding bg-light">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <div className="section-tag justify-center">Complémentaires</div>
              <h2>Portillon et Clôtures<br className="hidden md:block" /> assortis</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
                Complétez votre portail avec un portillon et une clôture aluminium assortis pour une cohérence esthétique parfaite.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Image clôture */}
              <ScrollReveal delay={0}>
                <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl shadow-card group">
                  <Image
                    src="/images/portails/cloture-aluminium-jassans-riotier.jpg"
                    alt="Clôture aluminium Jassans-Riottier"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              {/* Image portail */}
              <ScrollReveal delay={80}>
                <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl shadow-card group">
                  <Image
                    src="/images/portails/Portail-alu-neuville.jpg"
                    alt="Portail aluminium Neuville"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="text-center mt-10">
              <Link href="/contact" className="btn-outline-dark">
                Demander mon projet complet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      }
      seoText="Entreprise Thera Fermetures : vente et installation de portail aluminium sur mesure à Limonest et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      ctaText="Obtenir mon devis portail a Limonest"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Portails Aluminium',
        description: 'Specialiste portails aluminium a Limonest depuis 2015.',
        areaServed: { '@type': 'City', name: 'Limonest' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}