import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Porte de Garage Motorisée Chasselay — Devis Gratuit, Sectionnelle & Enroulable Sur Mesure | THERA Fermetures',
  description: 'Installateur de portes de garage motorisées sur mesure à Chasselay : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans le Rhône (69) et l\'Ain (01).',
  alternates: { canonical: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-chasselay' },
  openGraph: {
    title: 'Porte de Garage Motorisée Chasselay | THERA Fermetures',
    description: 'Installateur de portes de garage motorisées sur mesure à Chasselay : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans le Rhône (69) et l\'Ain (01).',
    images: [{ url: '/images/portes-garage/porte-garage-villefranche.jpg', width: 1200, height: 630, alt: 'Porte De Garage Chasselay' }],
  },
}

export default function PorteDeGaragePage() {
  return (
    <ProductTemplate
      title="Portes de Garage sur Mesure a Chasselay"
      subtitle="Sectionnelles, enroulables ou battantes — motorisées, isolees, fabriquées sur mesure a Chasselay"
      description="THERA Fermetures concoit et installe des portes de garage sur mesure a Chasselay depuis 2015. Notre showroom est installe a Chasselay — venez decouvrir nos modeles en exposition. Nos portes sectionnelles motorisées offrent sécurité maximale, isolation thermique renforcée et un design adapté a votre facade. Motorisation Somfy silencieuse, +300 coloris, garantie 5 ans."
      heroImage="/images/portes-garage/porte-garage-villefranche.jpg"
      heroImageAlt="Porte de garage sectionnelle motorisée installée a Chasselay par THERA Fermetures"
      features={[
        'Fabrication sur mesure 6 metres',
        'Motorisation Somfy silencieuse + télécommande',
        'Panneaux isolants 40mm ou 60mm disponibles',
        'Double paroi acier galvanise ou aluminium',
        '+300 coloris RAL disponibles',
        'Hublots et vitrages en option',
      ]}
      variants={[
        {
          title: 'Sectionnelle 40mm',
          badge: 'La plus populaire',
          description: "La porte sectionnelle 40mm est notre modele standard, idéal pour la majorite des garages residentiels. Elle s'ouvre verticalement le long du plafond, economisant ainsi l'espace devant et a l'intérieur du garage. Très apprecee des propriétaires de Chasselay.",
          specs: [
            'Panneaux 40mm double paroi acier galvanise',
            'Isolation mousse polyurethane haute densite',
            "Ouverture verticale — 0 cm de degagement extérieur",
            'Motorisation Somfy en option',
            'Hublots ovales ou rectangulaires disponibles',
            'Nombreux styles : lisse, rainure, bois, nervure',
          ],
          image: '/images/portes-garage/Porte de garage sectionnelle vitrée.jpg',
          imageAlt: 'Porte de garage sectionnelle vitree installée par THERA Fermetures',
        },
        {
          title: 'Sectionnelle 60mm',
          badge: "+25% d'isolation",
          description: "La porte sectionnelle 60mm est notre modele premium pour une isolation maximale. Ideale si votre garage est attenant a la maison ou si vous souhaitez un espace de travail tempere.",
          specs: [
            'Panneaux 60mm — isolation +25% vs modele 40mm',
            'Coefficient thermique Ud ≤ 0,80 W/m²K',
            'Ideale pour garage attenant ou chauffe',
            'Insonorisation renforcée — confort optimal',
            'Résistance accrue aux chocs et effractions',
            'Compatible motorisation Somfy haute performance',
          ],
          image: '/images/portes-garage/porte de garage Lyon 5 metres.jpg',
          imageAlt: 'Porte de garage sectionnelle Lyon 5 metrès THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/portes-garage/porte-garage-villefranche.jpg', alt: 'Porte de garage sectionnelle Villefranche', caption: 'Sectionnelle — Villefranche-sur-Saone' },
        { src: '/images/portes-garage/porte de garage Lyon 5 metres.jpg', alt: 'Porte de garage Lyon 5 metres', caption: 'Sectionnelle 60mm — Lyon' },
        { src: '/images/portes-garage/Porte de garage avec portillon.jpg', alt: 'Porte de garage avec portillon', caption: 'Porte de garage avec portillon' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Sécurité maximale', text: "Serrures multipoints, panneaux renforces, motorisation avec detection d'obstacles. Votre garage est pleinement sécurisé." },
        { icon: '', title: 'Isolation optimale', text: 'Panneaux 40mm ou 60mm avec mousse polyurethane. Reduisez vos pertes thermiques et votre facture energetique.' },
        { icon: '', title: 'Motorisation Somfy', text: "Télécommande, smartphone, integration domotique. Ouvrez et fermez votre garage depuis votre voiture ou votre canape." },
        { icon: '', title: '+300 coloris', text: 'RAL standards ou sur demande. Bois, lisse, rainure, nervure — la porte s\'adapté parfaitement a votre facade.' },
        { icon: '', title: 'Showroom a Chasselay', text: 'Venez voir nos modeles en exposition directement dans notre showroom situe a Chasselay.' },
        { icon: '', title: 'Garantie 5 ans', text: "Pièces et main d'oeuvre couverts 5 ans. Service apres-vente reactif base a Chasselay." },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Mise en service']}
      heroH1="Vente et installation de porte de garage sectionnelle motorisée sur mesure à Chasselay"
      ctaText="Obtenir mon devis porte de garage a Chasselay"
      seoText="Entreprise Thera Fermetures : vente et installation de porte de garage sectionnelle sur mesure a Chasselay. Notre showroom est situe a Chasselay."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Porte de Garage sur Mesure a Chasselay',
        description: 'Portes de garage sectionnelles et motorisées fabriquées sur mesure a Chasselay.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
        areaServed: { '@type': 'City', name: 'Chasselay' },
        serviceType: 'Installation de portes de garage sur mesure',
      }}
    />
  )
}
