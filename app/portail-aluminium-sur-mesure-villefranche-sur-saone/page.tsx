import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portail Aluminium sur Mesure Villefranche-sur-Saône | THERA Fermetures',
  description: 'Portails aluminium battants, coulissants et autoportants a Villefranche-sur-Saône. Expert local depuis 2015, fabrication francaise, garantie 10 ans. Devis gratuit.',
  keywords: ['portail aluminium Villefranche-sur-Saône', 'portail coulissant Villefranche-sur-Saône', 'portail sur mesure Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/portails' },
  openGraph: {
    title: 'Portail Aluminium sur Mesure Villefranche-sur-Saône — THERA Fermetures',
    description: 'Portails aluminium sur mesure a Villefranche-sur-Saône. Devis gratuit.',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail aluminium Villefranche-sur-Saône' }],
  },
}

export default function PortailPage() {
  return (
    <ProductTemplate
      title="Portails Aluminium a Villefranche-sur-Saône"
      subtitle="Coulissants, battants ou autoportants — installation sur mesure dans la region Rhône (69)"
      description="THERA Fermetures concoit et installe des portails aluminium sur mesure a Villefranche-sur-Saône depuis 2015. Chaque portail est fabrique en France avec de l'aluminium extrade premium et livre cles en main avec motorisation optionnelle Somfy ou BFT. Plus de 300 coloris disponibles pour s'adapter a votre architecture."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail aluminium coulissant sur mesure a Villefranche-sur-Saône par THERA Fermetures"
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
          description: "Le portail coulissant s'ouvre en glissant lateralement. Ideal pour les entrees etroites ou les allees en pente, il est disponible sur rail ou autoportant. Solution robuste pour les proprietes de Villefranche-sur-Saône.",
          specs: [
            'Glissement lateral sur rail ou autoportant (sans rail au sol)',
            'Ideal pour allees en pente ou terrains etroits',
            'Motorisation integree invisible disponible',
            "Larges dimensions possibles jusqu'a 10m",
            'Entretien minime — roulements en acier inoxydable',
            'Disponible avec ou sans portillon assorti',
          ],
          image: '/images/portails/portail-coulissant-chasselay.jpg',
          imageAlt: 'Portail coulissant aluminium THERA Fermetures',
        },
        {
          title: 'Portail Battant',
          badge: 'Design premium',
          description: "Le portail battant s'ouvre comme une porte classique, en 1 ou 2 vantaux. Elegant et intemporel, il s'adapte parfaitement a tous les styles architecturaux. Motorisation totalement invisible. Tres apprecie des proprietaires de Villefranche-sur-Saône.",
          specs: [
            'Ouverture en 1 ou 2 vantaux selon la largeur',
            'Motorisation integree et invisible dans le vantail',
            'Certifications Qualicoat et Qualimarine pour le laquage',
            'Ferrage haute securite — verins ou bras articules',
            'Personnalisation totale : lames, barreaux, tole decorative',
            'Portillon assorti disponible en option',
          ],
          image: '/images/portails/portail-battant-somfy.jpg',
          imageAlt: 'Portail battant aluminium motorisation Somfy THERA Fermetures',
        },
      ]}
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
      ctaText="Obtenir mon devis portail a Villefranche-sur-Saône"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Portails Aluminium',
        description: 'Specialiste portails aluminium a Villefranche-sur-Saône depuis 2015.',
        areaServed: { '@type': 'City', name: 'Villefranche-sur-Saône' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}