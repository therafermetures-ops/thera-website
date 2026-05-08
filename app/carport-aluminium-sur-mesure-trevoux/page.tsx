import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Entreprise Carport Aluminium Trévoux — Installateur Local | THERA Fermetures',
  description: 'Carport aluminium Trévoux (01) par THERA Fermetures. Installateur Ain et Rhône, abri voiture sur mesure, fabrication française. Devis gratuit.',
  keywords: ['carport aluminium Trévoux', 'abri voiture Trévoux', 'carport sur mesure Ain (01)'],
  alternates: { canonical: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-trevoux' },
  openGraph: {
    title: 'Carport Aluminium sur Mesure Trévoux — THERA Fermetures',
    description: 'Protection voitures sur mesure a Trévoux. Devis gratuit.',
    images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: 'Carport aluminium Trévoux' }],
  },
}

export default function CarportPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium à Trévoux"
      subtitle="Abris voiture sur mesure — installateur Ain et Rhône, intervention depuis Chasselay en moins de 20 min"
      description="Préfecture de l'Ain, Trévoux et son agglomération font partie de notre zone d'intervention régulière pour l'installation de carports aluminium. Les propriétés du Val de Saône, souvent spacieuses, accueillent idéalement nos abris voiture sur mesure 1 à 4 places. Traversée du Rhône depuis Chasselay pour intervenir en moins de 20 minutes."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium sur mesure a Trévoux par THERA Fermetures"
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
      seoText="Entreprise Thera Fermetures : vente et installation de carport aluminium sur mesure à Trévoux et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
            ctaText="Obtenir mon devis carport a Trévoux"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de carports aluminium sur mesure à Trévoux. Fabrication française, pose en 1-2 jours. Devis gratuit.',
        url: 'https://thera-fermetures.fr/carport-aluminium-sur-mesure-trevoux',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Trévoux' },
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