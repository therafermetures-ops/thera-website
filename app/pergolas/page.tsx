import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Pergolas Bioclimatiques — Carat, Elements, VizVersa | THERA Fermetures',
  description: 'Pergolas bioclimatiques Carat (label France Garantie), Elements et VizVersa. Lames motorisées, options LED, chauffage. Installation Beaujolais & Rhône. Devis gratuit 24h.',
  keywords: ['pergola bioclimatique villefranche-sur-saône', 'pergola carat beaujolais', 'pergola elements motorisée', 'vizversa store pergola rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/pergolas' },
  openGraph: {
    title: 'Pergolas Bioclimatiques Carat, Elements & VizVersa — THERA Fermetures',
    description: 'Pergolas bioclimatiques motorisées. Modèles Carat (Origine France Garantie), Elements et VizVersa. Devis gratuit 24h.',
    images: [{ url: '/images/pergolas/pergola-bioclimatique.jpg', width: 1200, height: 630, alt: 'Pergola bioclimatique THERA Fermetures' }],
  },
}

export default function PergolasPage() {
  return (
    <ProductTemplate
      title="Pergolas Bioclimatiques"
      subtitle="Modèles Carat, Elements et VizVersa — transformez votre terrasse en pièce à vivre ouverte 365 jours par an"
      description="Les pergolas bioclimatiques THERA Fermetures, fabriquées par Cébel au sud de Lyon, transforment votre terrasse en véritable espace de vie. Grâce aux lames orientables motorisées, vous maîtrisez l'ensoleillement, la ventilation et la protection contre la pluie. Ajoutez éclairage LED, chauffage infrarouge ou stores motorisés pour un confort absolu en toute saison."
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt="Pergola bioclimatique Carat motorisée installée par THERA Fermetures"
      features={[
        'Lames orientables de 0° à 145° (de fermé à ouvert)',
        'Motorisation électrique silencieuse + télécommande',
        'Capteur de pluie automatique disponible',
        'Éclairage LED standard ou RGB dans les lames',
        'Chauffage infrarouge intégré en option',
        'Stores et rideaux motorisés en option',
        'Aluminium certifié — finitions sans vis apparentes',
        'Pose clé en main en 1 à 2 jours',
      ]}
      variants={[
        {
          title: 'Pergola Carat',
          badge: 'Origine France Garantie',
          description: 'La Pergola Carat est notre modèle premium, labelisée "Origine France Garantie" et fabriquée par Cébel, entreprise implantée au sud de Lyon. Elle se distingue par ses poteaux en forme de diamant qui lui confèrent une finition originale et raffinée. Toutes les options peuvent être ajoutées après installation grâce à des méthodes de fixation identiques à celles d\'usine — aucune vis apparente, une esthétique parfaite.',
          specs: [
            'Poteaux à section diamant — design unique et contemporain',
            'Label "Origine France Garantie" — fabrication Cébel (Lyon)',
            'Options ajoutables après installation (LED, stores, chauffage)',
            'Fixations invisibles — aucune vis apparente',
            'Finitions deux tons disponibles',
            'Personnalisation totale : dimensions, couleurs, options',
          ],
          image: '/images/pergolas/pergola-bioclimatique.jpg',
          imageAlt: 'Pergola Carat bioclimatique installée par THERA Fermetures',
        },
        {
          title: 'Pergola Elements',
          badge: 'Excellent rapport qualité/prix',
          description: 'La Pergola Elements est notre modèle à la fois accessible et haut de gamme. Elle met en avant son design soigné grâce à des poteaux avec chanfreins qui lui donnent un caractère unique. Comme la Carat, sa quincaillerie est entièrement intégrée sans vis apparente pour un rendu impeccable. Une solution idéale pour profiter de votre terrasse sans compromis sur la qualité.',
          specs: [
            'Poteaux à chanfreins — élégance accessible',
            'Quincaillerie entièrement intégrée — zéro vis visible',
            'Mêmes options que la Carat (LED, stores, chauffage)',
            'Fabrication aluminium qualité professionnelle',
            'Installation rapide — 1 à 2 jours selon dimensions',
            'Garantie 10 ans structure et finitions',
          ],
          image: '/images/pergolas/pergola-austral.jpg',
          imageAlt: 'Pergola Elements motorisée THERA Fermetures',
        },
        {
          title: 'VizVersa — Store Bioclimatique',
          badge: 'Alternative toile rétractable',
          description: 'Le VizVersa est une alternative innovante à la pergola traditionnelle : à la place de lames aluminium, il utilise une toile rétractable haute performance qui filtre jusqu\'à 96% des rayons UV tout en bloquant la chaleur. Sa structure fixée au sol offre une résistance au vent supérieure aux stores muraux classiques. Idéal pour couvrir de grandes surfaces avec style.',
          specs: [
            'Toile rétractable filtre 96% des rayons UV',
            'Blocage de la chaleur solaire — confort naturel',
            'Structure au sol — résistance au vent supérieure',
            'Protège de grandes surfaces en un seul tenant',
            'Design épuré — invisible quand rétractée',
            'Compatible avec éclairage et chauffage intégrés',
          ],
          image: '/images/pergolas/pergola-store.jpg',
          imageAlt: 'Pergola VizVersa store rétractable THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola Carat Limonest', caption: 'Pergola Carat — Limonest' },
        { src: '/images/pergolas/pergola-austral.jpg', alt: 'Pergola Elements motorisée', caption: 'Pergola Elements motorisée' },
        { src: '/images/pergolas/pergola-store.jpg', alt: 'VizVersa store pergola', caption: 'VizVersa — store rétractable' },
      ]}
      advantages={[
        { icon: '', title: 'Confort toute l\'année', text: 'Régulation naturelle par orientation des lames. Fraîcheur l\'été, protection pluie toute l\'année.' },
        { icon: '', title: 'Étanchéité parfaite', text: 'Lames fermées à 145° : protection totale contre la pluie. Profitez de votre terrasse même par mauvais temps.' },
        { icon: '', title: 'Pilotage intelligent', text: 'Télécommande, app smartphone, capteur de pluie automatique. Votre pergola s\'adapte à la météo.' },
        { icon: '', title: 'Plus-value immobilière', text: 'Une pergola bien intégrée augmente la valeur et l\'attractivité de votre bien immobilier.' },
        { icon: '', title: 'Options premium', text: 'LED RGBW, chauffage infrarouge, stores motorisés — votre terrasse devient un vrai salon extérieur.' },
        { icon: '', title: 'Fabriquée en France', text: 'Cébel, notre fabricant partenaire, est implanté au sud de Lyon. Label "Origine France Garantie".' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Formation']}
      ctaText="Obtenir mon devis pergola"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Pergola Bioclimatique Motorisée',
        description: 'Pergolas bioclimatiques Carat, Elements et VizVersa, fabriquées en France par Cébel.',
        brand: { '@type': 'Brand', name: 'THERA Fermetures' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}
