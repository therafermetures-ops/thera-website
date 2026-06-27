import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Porte de Garage Motorisée Villefranche-sur-Saône — Devis Gratuit, Sectionnelle & Enroulable Sur Mesure | THERA Fermetures',
  description: 'Installateur de portes de garage motorisées sur mesure à Villefranche-sur-Saône : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans le Beaujolais et le Rhône (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-villefranche-sur-saone' },
  openGraph: {
    title: 'Porte de Garage Motorisée Villefranche-sur-Saône | THERA Fermetures',
    description: 'Installateur de portes de garage motorisées sur mesure à Villefranche-sur-Saône : sectionnelle Somfy, enroulable compacte, isolation 60mm. Devis gratuit par THERA Fermetures dans le Beaujolais et le Rhône (69).',
    images: [{ url: '/images/portes-garage/porte-garage-villefranche.jpg', width: 1200, height: 630, alt: 'Porte De Garage Villefranche-sur-Saône' }],
  },
}

export default function PorteDeGaragePage() {
  return (
    <ProductTemplate
      title="Portes de Garage sur Mesure à Villefranche-sur-Saône"
      subtitle="Sectionnelles motorisées, enroulables ou battantes — isolation renforcée, fabriquées sur mesure pour Villefranche et le Beaujolais"
      description="THERA Fermetures installe des portes de garage sur mesure à Villefranche-sur-Saône depuis 2015. Capitale du Beaujolais, Villefranche compte de nombreuses maisons individuelles et copropriétés pour lesquelles nous concevons des portes sectionnelles motorisées, des portes enroulables compactes ou des modèles battants classiques. Motorisation Somfy silencieuse, isolation 40mm ou 60mm, +300 coloris RAL. À seulement 15 minutes de nos ateliers de Chasselay, nous assurons un suivi rapide du devis à la pose."
      heroImage="/images/portes-garage/porte-garage-villefranche.jpg"
      heroImageAlt="Porte de garage sectionnelle motorisée installée à Villefranche-sur-Saône par THERA Fermetures"
      features={[
        'Porte sectionnelle motorisée — la plus demandée à Villefranche',
        'Porte enroulable — solution compacte pour petits garages',
        'Porte battante — esthétique classique pour maisons traditionnelles',
        'Motorisation Somfy silencieuse + télécommande',
        'Panneaux isolants 40mm ou 60mm — confort thermique optimal',
        'Double paroi acier galvanisé ou aluminium anti-corrosion',
        '+300 coloris RAL — finition Qualicoat 10 ans',
        'Hublots et vitrages décoratifs en option',
      ]}
      variants={[
        {
          title: 'Porte Sectionnelle Motorisée',
          badge: 'La plus populaire',
          description: "La porte sectionnelle s'ouvre verticalement le long du plafond, libérant tout l'espace devant le garage. Idéale pour les maisons individuelles de Villefranche-sur-Saône, elle offre une excellente isolation thermique et une motorisation Somfy silencieuse.",
          specs: [
            'Panneaux 40mm ou 60mm double paroi acier galvanisé',
            "Ouverture verticale — 0 cm de dégagement extérieur",
            'Isolation mousse polyuréthane haute densité',
            'Motorisation Somfy avec détection d\'obstacles',
            'Hublots ovales ou rectangulaires disponibles',
            'Styles : lisse, rainures, imitation bois, nervures',
          ],
          image: '/images/portes-garage/Porte de garage sectionnelle vitrée.jpg',
          imageAlt: 'Porte de garage sectionnelle vitrée Villefranche-sur-Saône',
        },
        {
          title: 'Porte de Garage Enroulable',
          badge: 'Gain de place maximum',
          description: "La porte de garage enroulable s'enroule dans un coffre compact au-dessus de l'ouverture. Solution idéale pour les garages où le plafond ne peut pas accueillir une sectionnelle, ou pour les copropriétés de Villefranche-sur-Saône avec contraintes d'espace.",
          specs: [
            'Coffre compact intégré au-dessus de l\'ouverture',
            'Aucune perte d\'espace au plafond — idéal petits garages',
            'Lames aluminium isolées — légères et résistantes',
            'Motorisation Somfy intégrée — commande discrète',
            'Largeur jusqu\'à 5 m sur mesure',
            'Coloris RAL standards ou sur demande',
          ],
          image: '/images/portes-garage/porte de garage Lyon 5 metres.jpg',
          imageAlt: 'Porte de garage enroulable motorisée THERA Fermetures',
        },
        {
          title: 'Sectionnelle 60mm Premium',
          badge: "+25% d'isolation",
          description: "La porte sectionnelle 60mm est notre modèle premium pour une isolation thermique maximale. Idéale si votre garage est attenant à la maison, fréquente pour les villas du Beaujolais autour de Villefranche.",
          specs: [
            'Panneaux 60mm — isolation thermique renforcée',
            'Coefficient Ud ≤ 0,80 W/m²K — classe énergétique optimale',
            'Idéale pour garage attenant ou chauffé',
            'Insonorisation renforcée — confort acoustique',
            'Résistance accrue aux chocs et effractions',
            'Compatible motorisation Somfy haute performance',
          ],
          image: '/images/portes-garage/Porte de garage avec portillon.jpg',
          imageAlt: 'Porte de garage sectionnelle 60mm premium Villefranche-sur-Saône',
        },
      ]}
      galleryImages={[
        { src: '/images/portes-garage/porte-garage-villefranche.jpg', alt: 'Porte de garage Villefranche-sur-Saône', caption: 'Sectionnelle motorisée — Villefranche-sur-Saône' },
        { src: '/images/portes-garage/porte de garage Lyon 5 metres.jpg', alt: 'Porte de garage 5 metres', caption: 'Grande sectionnelle — Beaujolais' },
        { src: '/images/portes-garage/Porte de garage avec portillon.jpg', alt: 'Porte de garage avec portillon', caption: 'Sectionnelle avec portillon piéton' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Sécurité maximale', text: "Serrures multipoints, panneaux renforcés, motorisation avec détection d'obstacles. Votre garage est pleinement sécurisé." },
        { icon: '', title: 'Isolation optimale', text: 'Panneaux 40mm ou 60mm avec mousse polyuréthane. Réduisez vos pertes thermiques et votre facture énergétique.' },
        { icon: '', title: 'Motorisation Somfy', text: "Télécommande, smartphone, intégration domotique. Ouvrez et fermez votre garage depuis votre voiture ou votre canapé." },
        { icon: '', title: '+300 coloris', text: 'RAL standards ou sur demande. Bois, lisse, rainures, nervures — la porte s\'adapte parfaitement à votre façade.' },
        { icon: '', title: 'Installation rapide', text: 'Pose professionnelle en une demi-journée. Nos techniciens interviennent à Villefranche-sur-Saône et dans tout le Beaujolais.' },
        { icon: '', title: 'Garantie 5 ans', text: "Pièces et main d'œuvre couverts 5 ans. Service après-vente réactif basé à Chasselay, à 15 minutes de Villefranche." },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      heroH1="Porte de Garage Villefranche-sur-Saône — Sectionnelle Motorisée & Enroulable par THERA Fermetures"
      ctaText="Obtenir mon devis porte de garage à Villefranche-sur-Saône"
      seoText="Entreprise Thera Fermetures : vente et installation de portes de garage sectionnelles motorisées et enroulables sur mesure à Villefranche-sur-Saône et dans tout le Beaujolais. Basés à Chasselay entre Villefranche et Limonest, intervention rapide 7j/7."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de portes de garage sectionnelles motorisées et enroulables à Villefranche-sur-Saône.',
        url: 'https://thera-fermetures.fr/porte-de-garage-sur-mesure-villefranche-sur-saone',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZA du Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Villefranche-sur-Saône' },
        priceRange: '€€',
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        ],
      }}
    />
  )
}
