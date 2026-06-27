import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Carport Aluminium Limonest — Devis Gratuit, Abri Voiture Sur Mesure | THERA Fermetures',
  description: 'Installateur de carports aluminium et abris de voiture sur mesure à Limonest : adossé ou autoporté, toiture étanche. Devis gratuit, pose par THERA Fermetures dans l\'ouest lyonnais (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-limonest' },
  openGraph: {
    title: 'Carport Aluminium Limonest | THERA Fermetures',
    description: 'Installateur de carports aluminium et abris de voiture sur mesure à Limonest : adossé ou autoporté, toiture étanche. Devis gratuit, pose par THERA Fermetures dans l\'ouest lyonnais (69).',
    images: [{ url: '/images/carports/carport-villefranche.jpg', width: 1200, height: 630, alt: 'Carport Aluminium Limonest' }],
  },
}

export default function CarportPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium à Limonest"
      subtitle="Abris voiture premium sur mesure — design intégré pour une commune résidentielle haut de gamme"
      description="Commune résidentielle haut de gamme aux portes de Lyon, Limonest demande des carports aluminium esthétiques et soignés. THERA Fermetures y conçoit des abris voiture sur mesure intégrant claustra, bardage bois ou façades pleines pour s'harmoniser avec l'architecture locale. Basés à Chasselay, voisin direct, nous intervenons en priorité sur ce secteur."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium sur mesure a Limonest par THERA Fermetures"
      features={[
        'Dimensions sur mesure (1 a 4+ voitures)',
        'Structure aluminium',
        'Toiture polycarbonate ou panneaux sandwich',
        'Options claustra, bardage ou facade pleine',
        'Eclairage LED intégré possible',
        'Declaration prealable facilitee (< 20m2)',
        'Garantie 10 ans',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
        { src: '/images/carports/Carport-poteau-deporte.avif', alt: 'Carport poteau déporté', caption: 'Carport poteau déporté' },
      ]}
      advantages={[
        { icon: '', title: 'Protection totale', text: 'Pluie, grele, neige, soleil — vos vehicules sont protégés 365 jours par an sans risque de dommages.' },
        { icon: '', title: 'Sur mesure absolu', text: 'Chaque carport est dimensionne selon votre terrain, votre maison et vos vehicules. Aucun compromis.' },
        { icon: '', title: 'Entretien zero', text: "L'aluminium traite ne rouille pas, ne se deforme pas et ne necessite aucun traitement. Simple a nettoyer." },
        { icon: '', title: 'Design intégré', text: 'Coloris assortis a votre maison, claustra, bardage — votre carport devient un element architectural a part entiere.' },
        { icon: '', title: 'Installation express', text: 'Grâce à une fabrication precise, la pose se fait en 1-2 jours avec un minimum de désagrément.' },
        { icon: '', title: 'Valeur immobiliere', text: 'Un carport bien intégré peut augmenter la valeur de votre bien de 3 a 7% selon les agences immobilieres.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Livraison']}
      seoText="Entreprise Thera Fermetures : vente et installation de carport aluminium sur mesure à Limonest et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
            heroH1="Carport Aluminium Limonest — Abri Voiture Sur Mesure par THERA Fermetures"
            ctaText="Obtenir mon devis carport a Limonest"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de carports aluminium sur mesure à Limonest. Fabrication française, pose en 1-2 jours. Devis gratuit.',
        url: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-limonest',
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
      showGalleryLink={false}
    />
  )
}