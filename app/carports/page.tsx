import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Carports Aluminium sur Mesure - Villefranche-sur-Saône | THERA Fermetures',
  description: 'Carports aluminium sur mesure pour 1 à 4 voitures. Design épuré, pose rapide, entretien zéro. Fabrication française. Beaujolais & Rhône. Devis gratuit sous 24h.',
  keywords: ['carports aluminium villefranche-sur-saône', 'abri voiture aluminium beaujolais', 'carport sur mesure rhône', 'abri voiture design'],
  alternates: { canonical: 'https://thera-fermetures.fr/carports' },
  openGraph: {
    title: 'Carports Aluminium sur Mesure — THERA Fermetures Beaujolais',
    description: 'Protection voitures sur mesure, design épuré, pose rapide. Devis gratuit sous 24h.',
    images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: 'Carport aluminium THERA Fermetures' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Carport Aluminium sur Mesure',
  description: 'Carports aluminium sur mesure fabriqués en France et installés par THERA Fermetures dans le Beaujolais.',
  brand: { '@type': 'Brand', name: 'THERA Fermetures' },
  offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR' }, availability: 'https://schema.org/InStock', url: 'https://thera-fermetures.fr/carports' },
}

export default function CarportsPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium"
      subtitle="Abris voiture sur mesure — protection élégante et durable pour 1 à 4 véhicules, sans permis sous 20m²"
      description="Les carports aluminium THERA Fermetures offrent une protection élégante et pérenne pour vos véhicules. Conçus entièrement sur mesure, ils s'intègrent harmonieusement à l'architecture de votre maison. L'aluminium traité résiste à toutes les conditions climatiques sans rouille ni déformation, pour des dizaines d'années sans entretien."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium claustra sur mesure installé par THERA Fermetures"
      features={[
        'Dimensions sur mesure (1 à 4+ voitures)',
        'Structure aluminium anti-corrosion',
        'Toiture polycarbonate, aluminium ou panneaux sandwich',
        'Options claustra, bardage ou façade pleine',
        'Éclairage LED intégré possible',
        'Déclaration préalable facilitée (< 20m²)',
        'Garantie 10 ans structure et finitions',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
      ]}
      advantages={[
        { icon: '🚗', title: 'Protection totale', text: 'Pluie, grêle, neige, soleil — vos véhicules sont protégés 365 jours par an sans risque de dommages.' },
        { icon: '📐', title: 'Sur mesure absolu', text: 'Chaque carport est dimensionné selon votre terrain, votre maison et vos véhicules. Aucun compromis.' },
        { icon: '🌿', title: 'Entretien zéro', text: 'L\'aluminium traité ne rouille pas, ne se déforme pas et ne nécessite aucun traitement. Simple à nettoyer.' },
        { icon: '🎨', title: 'Design intégré', text: 'Coloris assortis à votre maison, claustra, bardage — votre carport devient un élément architectural à part entière.' },
        { icon: '⚡', title: 'Installation express', text: 'Grâce à notre fabrication précise, la pose se fait en 1-2 jours avec un minimum de désagrément.' },
        { icon: '💰', title: 'Valeur immobilière', text: 'Un carport bien intégré peut augmenter la valeur de votre bien de 3 à 7% selon les agences immobilières.' },
      ]}
      processSteps={['Visite & mesures', 'Devis 24h', 'Fabrication FR', 'Installation', 'Livraison']}
      ctaText="Obtenir mon devis carport"
      structuredData={structuredData}
    />
  )
}
