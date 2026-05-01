import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Carport Aluminium sur Mesure Caluire-et-Cuire | THERA Fermetures',
  description: 'Carports aluminium sur mesure a Caluire-et-Cuire pour 1 a 4 voitures. Design epure, entretien zero, fabrication francaise. Devis gratuit.',
  keywords: ['carport aluminium Caluire-et-Cuire', 'abri voiture Caluire-et-Cuire', 'carport sur mesure Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/carports' },
  openGraph: {
    title: 'Carport Aluminium sur Mesure Caluire-et-Cuire — THERA Fermetures',
    description: 'Protection voitures sur mesure a Caluire-et-Cuire. Devis gratuit.',
    images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: 'Carport aluminium Caluire-et-Cuire' }],
  },
}

export default function CarportPage() {
  return (
    <ProductTemplate
      title="Carports Aluminium a Caluire-et-Cuire"
      subtitle="Abris voiture sur mesure — protection elegante et durable pour 1 a 4 vehicules dans la region Rhône (69)"
      description="THERA Fermetures concoit et installe des carports aluminium sur mesure a Caluire-et-Cuire depuis 2015. Chaque carport est dimensionne selon votre terrain, votre maison et vos vehicules. L'aluminium traite resiste a toutes les conditions climatiques sans rouille ni deformation, pour des dizaines d'annees sans entretien."
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium sur mesure a Caluire-et-Cuire par THERA Fermetures"
      features={[
        'Dimensions sur mesure (1 a 4+ voitures)',
        'Structure aluminium anti-corrosion',
        'Toiture polycarbonate, aluminium ou panneaux sandwich',
        'Options claustra, bardage ou facade pleine',
        'Eclairage LED integre possible',
        'Declaration prealable facilitee (< 20m2)',
        'Garantie 10 ans structure et finitions',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
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
      ctaText="Obtenir mon devis carport a Caluire-et-Cuire"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Carports Aluminium',
        description: 'Specialiste carports aluminium a Caluire-et-Cuire depuis 2015.',
        areaServed: { '@type': 'City', name: 'Caluire-et-Cuire' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}