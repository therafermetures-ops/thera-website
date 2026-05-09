import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portail Acier sur Mesure Trévoux — Installateur Local | THERA Fermetures',
  description: 'THERA Fermetures installe vos portails acier sur mesure à Trévoux (01). Design unique, robustesse, motorisation. Devis gratuit.',
  keywords: ['portail acier trévoux', 'portail acier sur mesure trévoux', 'installateur portail acier ain'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-acier-sur-mesure-trevoux' },
  openGraph: {
    title: 'Portail Acier sur Mesure Trévoux — Installateur Local | THERA Fermetures',
    description: 'THERA Fermetures installe vos portails acier sur mesure à Trévoux (01). Design unique, robustesse, motorisation. Devis gratuit.',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail acier Trévoux' }],
  },
}

export default function PortailAcierPage() {
  return (
    <ProductTemplate
      heroH1="Vente et installation de portails acier moderne et sur mesure à Trévoux"
      title="Portails Acier sur Mesure à Trévoux"
      subtitle="Portails acier sur mesure — création unique, design libre, fabrication artisanale"
      description="THERA Fermetures intervient à Trévoux pour l'installation de portails acier sur mesure. Les propriétés du Val de Saône apprécient l'aspect robuste et design de l'acier. Notre équipe traverse le Rhône depuis Chasselay pour réaliser chaque projet avec soin."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail acier sur mesure à Trévoux par THERA Fermetures"
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
      seoText="Entreprise Thera Fermetures : vente et installation de portail acier sur mesure à Trévoux. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      showGalleryLink={false}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portails acier sur mesure à Trévoux. Design unique, découpe laser. Devis gratuit.',
        url: 'https://thera-fermetures.fr/portail-acier-sur-mesure-trevoux',
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
      }}
    />
  )
}
