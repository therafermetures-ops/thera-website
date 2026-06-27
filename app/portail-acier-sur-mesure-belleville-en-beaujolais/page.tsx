import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portail Acier & Métallique Motorisé Belleville-en-Beaujolais — Devis Gratuit, Installateur | THERA Fermetures',
  description: 'Installateur de portails acier et métalliques motorisés sur mesure à Belleville-en-Beaujolais : découpe laser, design unique, motorisation Somfy. Devis gratuit par THERA Fermetures dans le Beaujolais et le Rhône (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/portail-acier-sur-mesure-belleville-en-beaujolais' },
  openGraph: {
    title: 'Portail Acier & Métallique Motorisé Belleville-en-Beaujolais | THERA Fermetures',
    description: 'Installateur de portails acier et métalliques motorisés sur mesure à Belleville-en-Beaujolais : découpe laser, design unique, motorisation Somfy. Devis gratuit par THERA Fermetures dans le Beaujolais et le Rhône (69).',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail Acier Belleville-en-Beaujolais' }],
  },
}

export default function PortailAcierPage() {
  return (
    <ProductTemplate
      heroH1="Portail Acier & Métallique Belleville-en-Beaujolais — Installation Sur Mesure par THERA Fermetures"
      title="Portails Acier sur Mesure à Belleville-en-Beaujolais"
      subtitle="Portails acier sur mesure — création unique, design libre, fabrication artisanale"
      description="THERA Fermetures installe des portails acier sur mesure à Belleville-en-Beaujolais. L'acier permet de créer des entrées uniques qui se démarquent dans les quartiers résidentiels du nord Beaujolais. Fabrication artisanale, motorisation intégrée, traitement anticorrosion garanti."
      heroImage="/images/portails/Coulissant acier RAL 7035.jpg"
      heroImageAlt="Portail acier sur mesure à Belleville-en-Beaujolais par THERA Fermetures"
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
      seoText="Entreprise Thera Fermetures : vente et installation de portail acier sur mesure à Belleville-en-Beaujolais. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      showGalleryLink={false}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portails acier sur mesure à Belleville-en-Beaujolais. Design unique, découpe laser. Devis gratuit.',
        url: 'https://thera-fermetures.fr/portail-acier-sur-mesure-belleville-en-beaujolais',
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
      }}
    />
  )
}
