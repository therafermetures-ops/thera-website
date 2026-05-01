import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Pergola Bioclimatique sur Mesure Trévoux | THERA Fermetures',
  description: 'Pergolas bioclimatiques motorisees a Trévoux. Lames orientables, capteur pluie, LED integree. Expert depuis 2015, fabrication francaise. Devis gratuit.',
  keywords: ['pergola bioclimatique Trévoux', 'pergola motorisee Trévoux', 'terrasse couverte Ain (01)'],
  alternates: { canonical: 'https://thera-fermetures.fr/pergolas' },
  openGraph: {
    title: 'Pergola Bioclimatique sur Mesure Trévoux — THERA Fermetures',
    description: 'Pergola motorisee sur mesure a Trévoux. Devis gratuit.',
    images: [{ url: '/images/pergolas/pergola-bioclimatique.jpg', width: 1200, height: 630, alt: 'Pergola bioclimatique Trévoux' }],
  },
}

export default function PergolaPage() {
  return (
    <ProductTemplate
      title="Pergolas Bioclimatiques a Trévoux"
      subtitle="Terrasses motorisees Carat, Elements et VizVersa — couvrez votre espace exterieur dans la region Ain (01)"
      description="THERA Fermetures transforme les terrasses de Trévoux en veritable piece de vie exterieure avec nos pergolas bioclimatiques motorisees. Trois modeles premium disponibles : Pergola Carat (label Origine France Garantie), Pergola Elements (design eleve accessible) et VizVersa (store retractable haute performance). Lames orientables de 0° a 145°, eclairage LED, chauffage infrarouge en option."
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt="Pergola bioclimatique motorisee a Trévoux par THERA Fermetures"
      features={[
        'Lames orientables de 0° a 145°',
        'Motorisation electrique silencieuse + telecommande',
        'Capteur de pluie automatique disponible',
        'Eclairage LED standard ou RGB dans les lames',
        'Chauffage infrarouge integre en option',
        'Stores et rideaux motorises en option',
        'Aluminium certifie — finitions sans vis apparentes',
        'Pose cle en main en 1 a 2 jours',
      ]}
      variants={[
        {
          title: 'Pergola Carat',
          badge: 'Origine France Garantie',
          description: "La Pergola Carat est notre modele premium, labellisee Origine France Garantie et fabriquee par Cebel, entreprise implantee au sud de Lyon. Ses poteaux en forme de diamant lui conferent une finition originale et raffinee. Tres appreciee des proprietaires de Trévoux.",
          specs: [
            'Poteaux a section diamant — design unique et contemporain',
            'Label Origine France Garantie — fabrication Cebel (Lyon)',
            'Options ajoutables apres installation (LED, stores, chauffage)',
            'Fixations invisibles — aucune vis apparente',
            'Finitions deux tons disponibles',
            'Personnalisation totale : dimensions, couleurs, options',
          ],
          image: '/images/pergolas/pergola-bioclimatique.jpg',
          imageAlt: 'Pergola Carat bioclimatique THERA Fermetures',
        },
        {
          title: 'Pergola Elements',
          badge: 'Excellent rapport qualite/prix',
          description: "La Pergola Elements est notre modele accessible et haut de gamme. Poteaux avec chanfreins, quincaillerie entierement integree sans vis apparente. Ideale pour les proprietes de Trévoux, elle offre le meilleur rapport entre investissement et performance.",
          specs: [
            'Poteaux a chanfreins — elegance accessible',
            'Quincaillerie entierement integree — zero vis visible',
            'Memes options que la Carat (LED, stores, chauffage)',
            'Fabrication aluminium qualite professionnelle',
            'Installation rapide — 1 a 2 jours selon dimensions',
            'Garantie 10 ans structure et finitions',
          ],
          image: '/images/pergolas/pergola-austral.jpg',
          imageAlt: 'Pergola Elements motorisee THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola Carat', caption: 'Pergola Carat' },
        { src: '/images/pergolas/pergola-austral.jpg', alt: 'Pergola Elements', caption: 'Pergola Elements' },
        { src: '/images/pergolas/pergola-store.jpg', alt: 'VizVersa store', caption: 'VizVersa store retractable' },
      ]}
      advantages={[
        { icon: '', title: "Confort toute l'annee", text: 'Regulation naturelle par orientation des lames. Fraicheur l\'ete, protection pluie toute l\'annee.' },
        { icon: '', title: 'Etancheite parfaite', text: 'Lames fermees a 145° : protection totale contre la pluie. Profitez de votre terrasse meme par mauvais temps.' },
        { icon: '', title: 'Pilotage intelligent', text: "Telecommande, app smartphone, capteur de pluie automatique. Votre pergola s'adapte a la meteo." },
        { icon: '', title: 'Plus-value immobiliere', text: 'Une pergola bien integree augmente la valeur et l\'attractivite de votre bien immobilier.' },
        { icon: '', title: 'Options premium', text: 'LED RGBW, chauffage infrarouge, stores motorises — votre terrasse devient un vrai salon exterieur.' },
        { icon: '', title: 'Fabriquee en France', text: 'Cebel, notre fabricant partenaire, est implante au sud de Lyon. Label Origine France Garantie.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Formation']}
      ctaText="Obtenir mon devis pergola a Trévoux"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Pergolas Bioclimatiques',
        description: 'Specialiste pergolas bioclimatiques a Trévoux depuis 2015.',
        areaServed: { '@type': 'City', name: 'Trévoux' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}