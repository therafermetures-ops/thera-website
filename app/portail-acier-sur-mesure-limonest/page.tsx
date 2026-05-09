import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portail Acier sur Mesure Limonest — Installateur Local | THERA Fermetures',
  description: 'THERA Fermetures installe vos portails acier sur mesure à Limonest. Design haut de gamme, découpe laser, motorisation discrète. Devis gratuit.',
  keywords: ['portail acier limonest', 'portail acier sur mesure limonest', 'installateur portail acier rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-acier-sur-mesure-limonest' },
  openGraph: {
    title: 'Portail Acier sur Mesure Limonest — Installateur Local | THERA Fermetures',
    description: 'THERA Fermetures installe vos portails acier sur mesure à Limonest. Design haut de gamme, découpe laser, motorisation discrète. Devis gratuit.',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail acier Limonest' }],
  },
}

export default function PortailAcierPage() {
  return (
    <ProductTemplate
      heroH1="Vente et installation de portails acier moderne et sur mesure à Limonest"
      title="Portails Acier sur Mesure à Limonest"
      subtitle="Portails acier sur mesure — création unique, design libre, fabrication artisanale"
      description="Commune résidentielle premium, Limonest accueille des propriétés exigeantes pour lesquelles THERA Fermetures propose des portails acier sur mesure haut de gamme. Découpe laser fine, finitions épurées, motorisation discrète — l'acier s'exprime avec élégance dans ce secteur prisé."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail acier sur mesure à Limonest par THERA Fermetures"
      features={[
        'Fabrication 100% sur mesure — dimensions et design libres',
        'Découpe laser pour motifs et formes personnalisés',
        'Finitions : laqué RAL, galvanisé, brut patiné, corten',
        'Portails battants, coulissants ou autoportants',
        'Motorisation Somfy / BFT intégrée',
        'Serrures et verrous haute sécurité',
        'Traitement anticorrosion garanti',
        'Garantie structure 10 ans',
      ]}
      galleryImages={[
        { src: '/images/portails/portail-arnas.jpg', alt: 'Portail acier Arnas', caption: 'Portail acier — Arnas' },
        { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail acier Trévoux', caption: 'Portail acier — Trévoux' },
        { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail acier Villefranche', caption: 'Portail acier — Villefranche' },
        { src: '/images/portails/portail-coulissant-chasselay.jpg', alt: 'Portail acier Chasselay', caption: 'Portail acier — Chasselay' },
      ]}
      advantages={[
        { icon: '', title: 'Création unique', text: "Chaque portail acier est une pièce originale. Aucun modèle catalogue — tout part de votre projet et de vos envies." },
        { icon: '', title: 'Découpe laser', text: "Motifs personnalisés avec une précision au millimètre. Votre portail devient la signature visuelle de votre propriété." },
        { icon: '', title: 'Robustesse extrême', text: "L'acier offre une résistance aux chocs et aux tentatives d'effraction supérieure à tout autre matériau." },
        { icon: '', title: 'Finitions au choix', text: "Laqué RAL, galvanisé, brut patiné, aspect corten — l'acier se décline dans toutes les esthétiques." },
        { icon: '', title: 'Motorisation intégrée', text: "Compatible toutes motorisations Somfy et BFT. Télécommande, badge, smartphone — confort et sécurité maximaux." },
        { icon: '', title: 'Fabrication locale', text: "Fabriqué par nos partenaires artisans locaux. Qualité de fabrication contrôlée, traçabilité garantie." },
      ]}
      processSteps={['Visite', 'Conception', 'Fabrication', 'Installation', 'Mise en service']}
      ctaText="Concevoir mon portail acier"
      seoText="Entreprise Thera Fermetures : vente et installation de portail acier sur mesure à Limonest. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      showGalleryLink={false}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portails acier sur mesure à Limonest. Design unique, découpe laser. Devis gratuit.',
        url: 'https://thera-fermetures.fr/portail-acier-sur-mesure-limonest',
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
      }}
    />
  )
}
