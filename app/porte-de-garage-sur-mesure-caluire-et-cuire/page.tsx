import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Porte de Garage Motorisée Caluire-et-Cuire — Devis Gratuit, Sectionnelle & Enroulable Sur Mesure | THERA Fermetures',
  description: 'Installateur de portes de garage motorisées sur mesure à Caluire-et-Cuire : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans la métropole de Lyon (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-caluire-et-cuire' },
  openGraph: {
    title: 'Porte de Garage Motorisée Caluire-et-Cuire | THERA Fermetures',
    description: 'Installateur de portes de garage motorisées sur mesure à Caluire-et-Cuire : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans la métropole de Lyon (69).',
    images: [{ url: '/images/portes-garage/porte-garage-villefranche.jpg', width: 1200, height: 630, alt: 'Porte De Garage Caluire-et-Cuire' }],
  },
}

export default function PorteDeGaragePage() {
  return (
    <ProductTemplate
      title="Portes de Garage sur Mesure à Caluire-et-Cuire"
      subtitle="Sectionnelles motorisées, enroulables ou battantes — isolation renforcée pour Caluire-et-Cuire et son arrondissement (Rhône)"
      description="THERA Fermetures installe des portes de garage sur mesure à Caluire-et-Cuire depuis 2015. Préfecture de l'métropole de Lyon — Rhône (69), Caluire-et-Cuire concentre des maisons individuelles et résidences pour lesquelles nous concevons des portes sectionnelles motorisées, enroulables compactes ou battantes classiques. Motorisation Somfy silencieuse, isolation 40mm ou 60mm, +300 coloris RAL. Intervention rapide depuis nos ateliers de Chasselay."
      heroImage="/images/portes-garage/porte-garage-villefranche.jpg"
      heroImageAlt="Porte de garage sectionnelle motorisée à Caluire-et-Cuire par THERA Fermetures"
      features={[
        'Porte sectionnelle motorisée — la plus demandée',
        'Porte enroulable — solution compacte pour petits garages',
        'Porte battante classique — esthétique traditionnelle',
        'Motorisation Somfy silencieuse + télécommande',
        'Panneaux isolants 40mm ou 60mm',
        'Double paroi acier galvanisé anti-corrosion',
        '+300 coloris RAL — finition Qualicoat 10 ans',
        'Hublots et vitrages décoratifs en option',
      ]}
      variants={[
        {
          title: 'Porte Sectionnelle Motorisée',
          badge: 'La plus populaire',
          description: "La porte sectionnelle s'ouvre verticalement le long du plafond, libérant tout l'espace devant le garage. Idéale pour les maisons individuelles de Caluire-et-Cuire et son arrondissement, motorisation Somfy silencieuse.",
          specs: [
            'Panneaux 40mm ou 60mm double paroi acier galvanisé',
            "Ouverture verticale — 0 cm de dégagement extérieur",
            'Isolation mousse polyuréthane haute densité',
            'Motorisation Somfy avec détection d\'obstacles',
            'Hublots disponibles — esthétique personnalisable',
            'Styles : lisse, rainures, imitation bois, nervures',
          ],
          image: '/images/portes-garage/Porte de garage sectionnelle vitrée.jpg',
          imageAlt: 'Porte de garage sectionnelle vitrée Caluire-et-Cuire',
        },
        {
          title: 'Porte de Garage Enroulable',
          badge: 'Gain de place',
          description: "La porte enroulable s'enroule dans un coffre compact. Solution idéale pour les garages avec plafond bas ou les maisons de centre-ville de Caluire-et-Cuire.",
          specs: [
            'Coffre compact intégré',
            'Aucune perte d\'espace au plafond',
            'Lames aluminium isolées légères',
            'Motorisation Somfy intégrée',
            'Largeur jusqu\'à 5 m sur mesure',
            'Coloris RAL standards ou sur demande',
          ],
          image: '/images/portes-garage/porte de garage Lyon 5 metres.jpg',
          imageAlt: 'Porte de garage enroulable Caluire-et-Cuire',
        },
      ]}
      galleryImages={[
        { src: '/images/portes-garage/porte-garage-villefranche.jpg', alt: 'Porte de garage Beaujolais', caption: 'Sectionnelle motorisée — Caluire-et-Cuire' },
        { src: '/images/portes-garage/porte de garage Lyon 5 metres.jpg', alt: 'Porte de garage 5m', caption: 'Grande sectionnelle' },
        { src: '/images/portes-garage/Porte de garage avec portillon.jpg', alt: 'Porte de garage avec portillon', caption: 'Sectionnelle avec portillon' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Sécurité maximale', text: "Serrures multipoints et motorisation avec détection d'obstacles." },
        { icon: '', title: 'Isolation optimale', text: 'Panneaux 40mm ou 60mm avec mousse polyuréthane.' },
        { icon: '', title: 'Motorisation Somfy', text: "Télécommande, smartphone, intégration domotique." },
        { icon: '', title: '+300 coloris', text: 'RAL standards ou sur demande — finition Qualicoat.' },
        { icon: '', title: 'Installation rapide', text: 'Pose professionnelle en une demi-journée à Caluire-et-Cuire.' },
        { icon: '', title: 'Garantie 5 ans', text: "Pièces et main d'œuvre couverts. SAV basé à Chasselay." },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      heroH1="Porte de Garage Caluire-et-Cuire — Sectionnelle Motorisée & Enroulable par THERA Fermetures"
      ctaText="Obtenir mon devis porte de garage à Caluire-et-Cuire"
      seoText="Entreprise Thera Fermetures : portes de garage sectionnelles motorisées et enroulables sur mesure à Caluire-et-Cuire et dans tout l'métropole de Lyon — Rhône (69)."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portes de garage sectionnelles motorisées et enroulables à Caluire-et-Cuire.',
        url: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-caluire-et-cuire',
        telephone: '+33474659165',
        address: { '@type': 'PostalAddress', streetAddress: '134 ZA du Crouloup', addressLocality: 'Chasselay', postalCode: '69380', addressCountry: 'FR' },
        areaServed: { '@type': 'City', name: 'Caluire-et-Cuire' },
        priceRange: '€€',
      }}
    />
  )
}
