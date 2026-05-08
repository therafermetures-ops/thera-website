import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Porte de Garage sur Mesure Neuville-sur-Saône | THERA Fermetures',
  description: 'Portes de garage sectionnelles motorisees a Neuville-sur-Saône. Installation par THERA Fermetures. Devis gratuit.',
  keywords: ['porte de garage Neuville-sur-Saône', 'porte garage sectionnelle Neuville-sur-Saône', 'porte garage motorisee Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-neuville-sur-saone' },
  openGraph: {
    title: 'Porte de Garage sur Mesure Neuville-sur-Saône — THERA Fermetures',
    description: 'Portes de garage sectionnelles motorisees a Neuville-sur-Saône. Devis gratuit.',
    images: [{ url: '/images/portes-garage/porte-garage-villefranche.jpg', width: 1200, height: 630, alt: 'Porte de garage Neuville-sur-Saône' }],
  },
}

export default function PorteDeGaragePage() {
  return (
    <ProductTemplate
      title="Portes de Garage sur Mesure a Neuville-sur-Saône"
      subtitle="Sectionnelles, enroulables ou battantes — motorisees, isolees, fabriquees sur mesure a Neuville-sur-Saône et alentours"
      description="THERA Fermetures concoit et installe des portes de garage sur mesure a Neuville-sur-Saône depuis 2015. Nos portes sectionnelles motorisees offrent securite maximale, isolation thermique renforcee et un design adapte a votre facade. Motorisation Somfy silencieuse, +300 coloris, garantie 5 ans."
      heroImage="/images/portes-garage/porte-garage-villefranche.jpg"
      heroImageAlt="Porte de garage sectionnelle motorisee installee a Neuville-sur-Saône par THERA Fermetures"
      features={[
        'Fabrication sur mesure 6 metres',
        'Motorisation Somfy silencieuse + telecommande',
        'Panneaux isolants 40mm ou 60mm disponibles',
        'Double paroi acier galvanise ou aluminium',
        '+300 coloris RAL disponibles',
        'Hublots et vitrages en option',
      ]}
      variants={[
        {
          title: 'Sectionnelle 40mm',
          badge: 'La plus populaire',
          description: "La porte sectionnelle 40mm est notre modele standard, ideal pour la majorite des garages residentiels. Elle s'ouvre verticalement le long du plafond, economisant ainsi l'espace devant et a l'interieur du garage. Tres apprecee des proprietaires de Neuville-sur-Saône.",
          specs: [
            'Panneaux 40mm double paroi acier galvanise',
            'Isolation mousse polyurethane haute densite',
            "Ouverture verticale — 0 cm de degagement exterieur",
            'Motorisation Somfy en option',
            'Hublots ovales ou rectangulaires disponibles',
            'Nombreux styles : lisse, rainure, bois, nervure',
          ],
          image: '/images/portes-garage/Porte de garage sectionnelle vitrée.jpg',
          imageAlt: 'Porte de garage sectionnelle vitree installee par THERA Fermetures',
        },
        {
          title: 'Sectionnelle 60mm',
          badge: "+25% d'isolation",
          description: "La porte sectionnelle 60mm est notre modele premium pour une isolation maximale. Ideale si votre garage est attenant a la maison ou si vous souhaitez un espace de travail tempere.",
          specs: [
            'Panneaux 60mm — isolation +25% vs modele 40mm',
            'Coefficient thermique Ud ≤ 0,80 W/m²K',
            'Ideale pour garage attenant ou chauffe',
            'Insonorisation renforcee — confort optimal',
            'Resistance accrue aux chocs et effractions',
            'Compatible motorisation Somfy haute performance',
          ],
          image: '/images/portes-garage/porte de garage Lyon 5 metres.jpg',
          imageAlt: 'Porte de garage sectionnelle Lyon 5 metres THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/portes-garage/porte-garage-villefranche.jpg', alt: 'Porte de garage sectionnelle Villefranche', caption: 'Sectionnelle — Villefranche-sur-Saone' },
        { src: '/images/portes-garage/porte de garage Lyon 5 metres.jpg', alt: 'Porte de garage Lyon 5 metres', caption: 'Sectionnelle 60mm — Lyon' },
        { src: '/images/portes-garage/Porte de garage avec portillon.jpg', alt: 'Porte de garage avec portillon', caption: 'Porte de garage avec portillon' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Securite maximale', text: "Serrures multipoints, panneaux renforces, motorisation avec detection d'obstacles. Votre garage est pleinement securise." },
        { icon: '', title: 'Isolation optimale', text: 'Panneaux 40mm ou 60mm avec mousse polyurethane. Reduisez vos pertes thermiques et votre facture energetique.' },
        { icon: '', title: 'Motorisation Somfy', text: "Telecommande, smartphone, integration domotique. Ouvrez et fermez votre garage depuis votre voiture ou votre canape." },
        { icon: '', title: '+300 coloris', text: 'RAL standards ou sur demande. Bois, lisse, rainure, nervure — la porte s\'adapte parfaitement a votre facade.' },
        { icon: '', title: 'Installation rapide', text: 'Pose professionnelle en une demi-journee. Nos techniciens interviennent a Neuville-sur-Saône et dans tout le Val de Saône.' },
        { icon: '', title: 'Garantie 5 ans', text: "Pieces et main d'oeuvre couverts 5 ans. Service apres-vente reactif base a Chasselay." },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Mise en service']}
      heroH1="Vente et installation de porte de garage sectionnelle motorisée sur mesure à Neuville-sur-Saône"
      ctaText="Obtenir mon devis porte de garage a Neuville-sur-Saône"
      seoText="Entreprise Thera Fermetures : vente et installation de porte de garage sectionnelle sur mesure a Neuville-sur-Saône et alentours. Base a Chasselay entre Villefranche-sur-Saone et Limonest."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Porte de Garage sur Mesure a Neuville-sur-Saône',
        description: 'Portes de garage sectionnelles et motorisees fabriquees sur mesure a Neuville-sur-Saône.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
        areaServed: { '@type': 'City', name: 'Neuville-sur-Saône' },
        serviceType: 'Installation de portes de garage sur mesure',
      }}
    />
  )
}
