import { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Clôtures Aluminium sur Mesure - Villefranche-sur-Saône | THERA Fermetures',
  description: 'Clôtures et brise-vue aluminium sur mesure. Modèles pleins, ajourés, mixtes. Entretien zéro, résistance totale. Beaujolais & Rhône. Devis gratuit.',
  keywords: ['clôtures aluminium villefranche-sur-saône', 'brise-vue aluminium beaujolais', 'clôture sur mesure rhône', 'panneau clôture aluminium'],
  alternates: { canonical: 'https://thera-fermetures.fr/clotures' },
  openGraph: {
    title: 'Clôtures Aluminium sur Mesure — THERA Fermetures Beaujolais',
    description: 'Clôtures et brise-vue aluminium sur mesure. Entretien zéro, résistance totale. Devis gratuit 24h.',
    images: [{ url: '/images/clotures/cloture-alu.jpg', width: 1200, height: 630, alt: 'Clôture aluminium THERA Fermetures' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clôtures Aluminium sur Mesure',
  description: 'Clôtures et brise-vue aluminium sur mesure fabriqués en France et installés par THERA Fermetures dans le Beaujolais.',
  provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
  areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
  serviceType: 'Installation de clôtures aluminium sur mesure',
}

export default function CloturesPage() {
  return (
    <ProductTemplate
      title="Clôtures Aluminium"
      subtitle="Clôtures et panneaux brise-vue sur mesure — délimitez et sécurisez votre propriété avec élégance et durabilité"
      description="Les clôtures aluminium THERA Fermetures allient légèreté, robustesse et esthétique raffinée. Entièrement personnalisables — modèles pleins pour l'intimité, ajourés pour le design, ou mixtes pour combiner les deux. L'aluminium anodisé ou laqué résiste parfaitement aux UV, aux intempéries et au temps, sans jamais rouiller."
      heroImage="/images/clotures/cloture-alu.jpg"
      heroImageAlt="Clôture aluminium moderne installée par THERA Fermetures"
      features={[
        'Aluminium anodisé ou laqué (toutes couleurs RAL)',
        'Modèles : pleins (intimité), ajourés (design), mixtes',
        'Panneaux brise-vue jusqu\'à 3m de hauteur',
        'Barrières de piscine (conformes norme NF P90-306)',
        'Résistance UV, intempéries et corrosion certifiée',
        'Fixation sur poteaux aluminium ou intégrée muret',
        'Garantie 10 ans peinture et structure',
        'Pose nette et rapide par nos équipes',
      ]}
      galleryImages={[
        { src: '/images/clotures/cloture-alu.jpg', alt: 'Clôture aluminium moderne', caption: 'Clôture aluminium' },
        { src: '/images/clotures/panneau-brise-vue.jpg', alt: 'Panneau brise-vue aluminium Villefranche', caption: 'Brise-vue aluminium — Villefranche' },
      ]}
      advantages={[
        { icon: '', title: 'Robustesse prouvée', text: 'L\'aluminium extrudé résiste aux chocs, aux cyclones et à la corrosion. Aucune détérioration dans le temps.' },
        { icon: '', title: 'Entretien inexistant', text: 'Oubliez la peinture annuelle et la rouille. Un simple rinçage à l\'eau suffit pour garder vos clôtures comme neuves.' },
        { icon: '', title: 'Tous les coloris RAL', text: 'Blanc, anthracite, bois, couleurs personnalisées — votre clôture s\'intègre parfaitement à votre maison.' },
        { icon: '', title: '100% recyclable', text: 'L\'aluminium est infiniment recyclable. Choisir l\'aluminium c\'est aussi faire un choix éco-responsable.' },
        { icon: '', title: 'Intimité & sécurité', text: 'Panneaux pleins pour une intimité totale, ou hauteur personnalisée pour protéger votre jardin efficacement.' },
        { icon: '', title: 'Légalité facilitée', text: 'Nous vous accompagnons dans les démarches administratives (déclaration préalable) si nécessaire.' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Finitions']}
      ctaText="Obtenir mon devis clôture"
      seoText="Entreprise Thera Fermetures : vente et installation de clôture aluminium sur mesure. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      structuredData={structuredData}
    />
  )
}
