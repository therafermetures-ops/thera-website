import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductTemplate from '../components/ProductTemplate'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Portail Aluminium Motorisé Limonest — Devis Gratuit, Installateur Sur Mesure | THERA Fermetures',
  description: 'Installateur de portails aluminium motorisés sur mesure à Limonest : coulissants, battants et autoportants Somfy ou BFT. Devis gratuit, pose par THERA Fermetures dans l\'ouest lyonnais (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/portail-aluminium-sur-mesure-limonest' },
  openGraph: {
    title: 'Portail Aluminium Motorisé Limonest | THERA Fermetures',
    description: 'Installateur de portails aluminium motorisés sur mesure à Limonest : coulissants, battants et autoportants Somfy ou BFT. Devis gratuit, pose par THERA Fermetures dans l\'ouest lyonnais (69).',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail Aluminium Limonest' }],
  },
}

export default function PortailPage() {
  return (
    <ProductTemplate
      title="Portails Aluminium a Limonest"
      subtitle="Coulissants, battants ou autoportants — installation sur mesure dans la region Rhône (69)"
      description="Commune résidentielle prisée aux portes de Lyon, Limonest concentre de belles propriétés pour lesquelles l'esthétique du portail est primordiale. THERA Fermetures y installe des portails aluminium sur mesure alliant design contemporain et sécurité. Nos modèles ajourés, pleins ou bois composite s'intègrent parfaitement aux architectures de la commune. Basés à Chasselay, voisin direct de Limonest, nous intervenons en moins de 15 minutes."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail aluminium coulissant sur mesure a Limonest par THERA Fermetures"
      features={[
        'Aluminium extrudé première qualité (non recycle)',
        '+300 coloris disponibles — RAL standards ou sur demande',
        'Portails battants 1 ou 2 vantaux',
        'Portails coulissants autoportants ou sur rail',
        'Motorisation Somfy / BFT (télécommande, badge, GSM)',
        'Serrures et verrous haute sécurité',
        'Certifications Qualicoat et Qualimarine pour le laquage',
        'Garantie structure et peinture 10 ans',
      ]}
      variants={[
        {
          title: 'Portail Coulissant',
          badge: 'Le plus populaire',
          description: "Le portail coulissant s'ouvre en glissant latéralement. Ideal pour les entrées etroites ou les allées en pente, il est disponible sur rail ou autoportant. Solution robuste pour les proprietes de Limonest.",
          specs: [
            'Glissement lateral sur rail ou autoportant (sans rail au sol)',
            'Ideal pour allées en pente ou terrains etroits',
            'Motorisation intégrée invisible disponible',
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
          description: "Le portail battant s'ouvre comme une porte classique, en 1 ou 2 vantaux. Elegant et intemporel, il s'adapté parfaitement a tous les styles architecturaux. Motorisation totalement invisible. Très apprécié des propriétaires de Limonest.",
          specs: [
            'Ouverture en 1 ou 2 vantaux selon la largeur',
            'Motorisation intégrée et invisible dans le vantail',
            'Certifications Qualicoat et Qualimarine pour le laquage',
            'Ferrage haute sécurité — verins ou bras articulés',
            'Personnalisation totale : lames, barreaux, tole décorative',
            'Portillon assorti disponible en option',
          ],
          image: '/images/portails/Portail_battant_aluminium_rillieux.png',
          imageAlt: 'Portail battant aluminium motorisation Somfy THERA Fermetures',
        },
        {
          title: 'Portail Autoportant',
          badge: 'Sans rail au sol',
          description: "Le portail autoportant glisse latéralement sans aucun rail enterré dans le sol. Ideal pour les allées pavées, en pente ou avec caniveaux. Grandes ouvertures possibles jusqu'a 15 metres.",
          specs: [
            'Aucun rail enterré dans le sol — installation propre',
            "Ideal pour allées en pente, avec caniveaux ou pavées",
            "Grandes ouvertures possibles jusqu'a 15m",
            'Contrepoids intégré pour equilibre parfait',
            'Compatible motorisation a galets ou chaine',
            'Structure renforcée pour les portails lourds',
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
        { icon: '', title: 'Robustesse extrême', text: "Aluminium extrudé résistant aux chocs, intemperies et corrosion. Duree de vie 30+ ans." },
        { icon: '', title: 'Zero entretien', text: "L'aluminium ne rouille pas et ne se deforme pas. Un coup d'eau suffit pour retrouver l'eclat du neuf." },
        { icon: '', title: '+300 coloris', text: 'Blanc, gris anthracite, noir mat, couleurs sur demande. Finition laquée Qualicoat ultra-durable.' },
        { icon: '', title: 'Sécurité maximale', text: 'Serrures certifiées, motorisation avec detection d\'obstacles. Votre propriete est pleinement protégée.' },
        { icon: '', title: 'Motorisation smart', text: 'Télécommande, smartphone, interphone video. Compatibles Somfy, BFT — maison connectée.' },
        { icon: '', title: 'Fabrication française', text: 'Fabriques en France par des partenaires certifiés Qualicoat. Qualite et traçabilité garanties.' },
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
      heroH1="Portail Aluminium Limonest — Installation Sur Mesure par THERA Fermetures"
      ctaText="Obtenir mon devis portail a Limonest"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portails aluminium sur mesure à Limonest. Coulissant, battant, autoportant. Devis gratuit.',
        url: 'https://thera-fermetures.fr/portail-aluminium-sur-mesure-limonest',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Limonest' },
        priceRange: '€€',
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        ],
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}