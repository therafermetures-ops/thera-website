import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portail Acier & Métallique Motorisé Neuville-sur-Saône — Devis Gratuit, Installateur | THERA Fermetures',
  description: 'Installateur de portails acier et métalliques motorisés sur mesure à Neuville-sur-Saône : découpe laser, design unique, motorisation Somfy. Devis gratuit par THERA Fermetures dans le nord lyonnais (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/portail-acier-sur-mesure-neuville-sur-saone' },
  openGraph: {
    title: 'Portail Acier & Métallique Motorisé Neuville-sur-Saône | THERA Fermetures',
    description: 'Installateur de portails acier et métalliques motorisés sur mesure à Neuville-sur-Saône : découpe laser, design unique, motorisation Somfy. Devis gratuit par THERA Fermetures dans le nord lyonnais (69).',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail Acier Neuville-sur-Saône' }],
  },
}

export default function PortailAcierPage() {
  return (
    <ProductTemplate
      heroH1="Portail Acier & Métallique Neuville-sur-Saône — Installation Sur Mesure par THERA Fermetures"
      title="Portails Acier sur Mesure à Neuville-sur-Saône"
      subtitle="Portails acier sur mesure — création unique, design libre, fabrication artisanale"
      description="Ville dynamique du Val de Saône, Neuville-sur-Saône voit THERA Fermetures intervenir régulièrement pour des portails acier sur mesure. L'acier apporte une identité forte aux nouvelles constructions comme aux rénovations, avec une durabilité exceptionnelle adaptée au climat de la région."
      heroImage="/images/portails/Coulissant acier RAL 7035.jpg"
      heroImageAlt="Portail acier sur mesure à Neuville-sur-Saône par THERA Fermetures"
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
      seoText="Entreprise Thera Fermetures : vente et installation de portail acier sur mesure à Neuville-sur-Saône. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      showGalleryLink={false}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portails acier sur mesure à Neuville-sur-Saône. Design unique, découpe laser. Devis gratuit.',
        url: 'https://thera-fermetures.fr/portail-acier-sur-mesure-neuville-sur-saone',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Neuville-sur-Saône' },
        priceRange: '€€',
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        ],
      }}
    />
  )
}
