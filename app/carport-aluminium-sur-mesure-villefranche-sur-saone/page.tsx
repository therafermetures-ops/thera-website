import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Carport Aluminium Villefranche-sur-Saône — Devis Gratuit, Abri Voiture Sur Mesure | THERA Fermetures',
  description: 'Installateur de carports aluminium et abris de voiture sur mesure à Villefranche-sur-Saône : adossé ou autoporté, toiture étanche. Devis gratuit, pose par THERA Fermetures dans le Beaujolais et le Rhône (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-villefranche-sur-saone' },
  openGraph: {
    title: 'Carport Aluminium Villefranche-sur-Saône | THERA Fermetures',
    description: 'Installateur de carports aluminium et abris de voiture sur mesure à Villefranche-sur-Saône : adossé ou autoporté, toiture étanche. Devis gratuit, pose par THERA Fermetures dans le Beaujolais et le Rhône (69).',
    images: [{ url: '/images/carports/carport-villefranche.jpg', width: 1200, height: 630, alt: 'Carport Aluminium Villefranche-sur-Saône' }],
  },
}

export default function CarportPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium à Villefranche-sur-Saône"
      subtitle="Abris voiture sur mesure — protection élégante et durable pour 1 à 4 véhicules, capitale du Beaujolais"
      description="Entreprise locale spécialisée en carports aluminium, THERA Fermetures intervient régulièrement à Villefranche-sur-Saône et son agglomération. Les lotissements récents et maisons individuelles de la capitale du Beaujolais constituent notre terrain d'intervention privilégié. À 15 minutes de nos ateliers, nous assurons un suivi rapide du devis à la pose pour tout abri voiture sur mesure."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium sur mesure a Villefranche-sur-Saône par THERA Fermetures"
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
      seoText="Entreprise Thera Fermetures : vente et installation de carport aluminium sur mesure à Villefranche-sur-Saône et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
            heroH1="Carport Aluminium Villefranche-sur-Saône — Abri Voiture Sur Mesure par THERA Fermetures"
            ctaText="Obtenir mon devis carport a Villefranche-sur-Saône"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de carports aluminium sur mesure à Villefranche-sur-Saône. Fabrication française, pose en 1-2 jours. Devis gratuit.',
        url: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-villefranche-sur-saone',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Villefranche-sur-Saône' },
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