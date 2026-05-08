import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Entreprise Carport Aluminium Belleville-en-Beaujolais — Installateur Local | THERA Fermetures',
  description: 'Carport aluminium sur mesure à Belleville-en-Beaujolais par THERA Fermetures. Abri voiture design, pose rapide, fabrication française. Devis gratuit.',
  keywords: ['carport aluminium Belleville-en-Beaujolais', 'abri voiture Belleville-en-Beaujolais', 'carport sur mesure Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-belleville-en-beaujolais' },
  openGraph: {
    title: 'Carport Aluminium sur Mesure Belleville-en-Beaujolais — THERA Fermetures',
    description: 'Protection voitures sur mesure a Belleville-en-Beaujolais. Devis gratuit.',
    images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: 'Carport aluminium Belleville-en-Beaujolais' }],
  },
}

export default function CarportPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium à Belleville-en-Beaujolais"
      subtitle="Abris voiture sur mesure — protection élégante et durable pour 1 à 4 véhicules, nord Beaujolais"
      description="THERA Fermetures réalise des carports aluminium sur mesure à Belleville-en-Beaujolais et ses environs. Les maisons pavillonnaires du nord Beaujolais nécessitent souvent des abris voiture adaptés aux contraintes de terrain. Nous proposons des solutions claustra, bardage ou toiture polycarbonate selon votre architecture et vos besoins."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium sur mesure a Belleville-en-Beaujolais par THERA Fermetures"
      features={[
        'Dimensions sur mesure (1 a 4+ voitures)',
        'Structure aluminium',
        'Toiture polycarbonate ou panneaux sandwich',
        'Options claustra, bardage ou facade pleine',
        'Eclairage LED integre possible',
        'Declaration prealable facilitee (< 20m2)',
        'Garantie 10 ans',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
        { src: '/images/carports/Carport-poteau-deporte.avif', alt: 'Carport poteau déporté', caption: 'Carport poteau déporté' },
      ]}
      advantages={[
        { icon: '', title: 'Protection totale', text: 'Pluie, grele, neige, soleil — vos vehicules sont proteges 365 jours par an sans risque de dommages.' },
        { icon: '', title: 'Sur mesure absolu', text: 'Chaque carport est dimensionne selon votre terrain, votre maison et vos vehicules. Aucun compromis.' },
        { icon: '', title: 'Entretien zero', text: "L'aluminium traite ne rouille pas, ne se deforme pas et ne necessite aucun traitement. Simple a nettoyer." },
        { icon: '', title: 'Design integre', text: 'Coloris assortis a votre maison, claustra, bardage — votre carport devient un element architectural a part entiere.' },
        { icon: '', title: 'Installation express', text: 'Grace a notre fabrication precise, la pose se fait en 1-2 jours avec un minimum de desagrement.' },
        { icon: '', title: 'Valeur immobiliere', text: 'Un carport bien integre peut augmenter la valeur de votre bien de 3 a 7% selon les agences immobilieres.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Livraison']}
      seoText="Entreprise Thera Fermetures : vente et installation de carport aluminium sur mesure à Belleville-en-Beaujolais et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
            heroH1="Vente et installation de carport aluminium moderne et sur mesure à Belleville-en-Beaujolais"
            ctaText="Obtenir mon devis carport a Belleville-en-Beaujolais"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de carports aluminium sur mesure à Belleville-en-Beaujolais. Fabrication française, pose en 1-2 jours. Devis gratuit.',
        url: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-belleville-en-beaujolais',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Belleville-en-Beaujolais' },
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