import type { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

async function getPageConfig() {
  try {
    const { data } = await getSupabaseAdmin()
      .from('site_config')
      .select('cle,valeur')
      .in('cle', ['carports_titre', 'carports_sous_titre', 'carports_description', 'carports_meta_title', 'carports_meta_description'])
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }: { cle: string; valeur: string | null }) => { if (valeur) cfg[cle] = valeur })
    return cfg
  } catch { return {} }
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getPageConfig()
  return {
    title: cfg.carports_meta_title || 'Carports Aluminium sur Mesure - Villefranche-sur-Saône | THERA Fermetures',
    description: cfg.carports_meta_description || 'Carports aluminium sur mesure pour 1 à 4 voitures. Design épuré, pose rapide, entretien zéro. Fabrication française. Beaujolais & Rhône. Devis gratuit.',
    keywords: ['carports aluminium villefranche-sur-saône', 'abri voiture aluminium beaujolais', 'carport sur mesure rhône', 'abri voiture design'],
    alternates: { canonical: 'https://thera-fermetures.fr/carports' },
    openGraph: {
      title: cfg.carports_meta_title || 'Carports Aluminium sur Mesure — THERA Fermetures Beaujolais',
      description: cfg.carports_meta_description || 'Protection voitures sur mesure, design épuré, pose rapide. Devis gratuit.',
      images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: 'Carport aluminium THERA Fermetures' }],
    },
  }
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carport Aluminium sur Mesure',
  description: 'Carports aluminium sur mesure fabriqués en France et installés par THERA Fermetures dans le Beaujolais.',
  provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
  areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
  serviceType: 'Installation de carports aluminium sur mesure',
}

export default async function CarportsPage() {
  const cfg = await getPageConfig()

  return (
    <ProductTemplate
      title={cfg.carports_titre || 'Carports Aluminium'}
      subtitle={cfg.carports_sous_titre || 'Abris voiture sur mesure — protection élégante et durable pour 1 à 4 véhicules, sans permis sous 20m²'}
      description={cfg.carports_description || "Les carports aluminium THERA Fermetures offrent une protection élégante et pérenne pour vos véhicules. Conçus entièrement sur mesure, ils s'intègrent harmonieusement à l'architecture de votre maison. L'aluminium traité résiste à toutes les conditions climatiques sans rouille ni déformation, pour des dizaines d'années sans entretien."}
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt="Carport aluminium claustra sur mesure installé par THERA Fermetures"
      features={[
        'Dimensions sur mesure (1 à 4+ voitures)',
        'Structure aluminium',
        'Toiture polycarbonate ou panneaux sandwich',
        'Options claustra, bardage ou façade pleine',
        'Éclairage LED intégré possible',
        'Déclaration préalable facilitée (< 20m²)',
        'Garantie 10 ans',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
        { src: '/images/carports/Carport-poteau-deporte.avif', alt: 'Carport poteau déporté', caption: 'Carport poteau déporté' },
      ]}
      advantages={[
        { icon: '', title: 'Protection totale', text: 'Pluie, grêle, neige, soleil — vos véhicules sont protégés 365 jours par an sans risque de dommages.' },
        { icon: '', title: 'Sur mesure absolu', text: 'Chaque carport est dimensionné selon votre terrain, votre maison et vos véhicules. Aucun compromis.' },
        { icon: '', title: 'Entretien zéro', text: "L'aluminium traité ne rouille pas, ne se déforme pas et ne nécessite aucun traitement. Simple à nettoyer." },
        { icon: '', title: 'Design intégré', text: "Coloris assortis à votre maison, claustra, bardage — votre carport devient un élément architectural à part entière." },
        { icon: '', title: 'Installation express', text: 'Grâce à notre fabrication précise, la pose se fait en 1-2 jours avec un minimum de désagrément.' },
        { icon: '', title: 'Valeur immobilière', text: "Un carport bien intégré peut augmenter la valeur de votre bien de 3 à 7% selon les agences immobilières." },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Livraison']}
      ctaText="Obtenir mon devis carport"
      seoText="Entreprise Thera Fermetures : vente et installation de carport aluminium sur mesure. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      structuredData={structuredData}
    />
  )
}
