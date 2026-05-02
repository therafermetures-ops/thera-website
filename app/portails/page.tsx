import type { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

async function getPageConfig() {
  try {
    const { data } = await getSupabaseAdmin()
      .from('site_config')
      .select('cle,valeur')
      .in('cle', ['portails_titre', 'portails_sous_titre', 'portails_description', 'portails_meta_title', 'portails_meta_description'])
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }: { cle: string; valeur: string | null }) => { if (valeur) cfg[cle] = valeur })
    return cfg
  } catch { return {} }
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getPageConfig()
  return {
    title: cfg.portails_meta_title || 'Portails Aluminium sur Mesure - Coulissant, Battant, Autoportant | THERA Fermetures',
    description: cfg.portails_meta_description || 'Portails aluminium battants, coulissants et autoportants sur mesure. Motorisation Somfy, +300 coloris, garantie 10 ans. Installation Beaujolais & Rhône. Devis gratuit 24h.',
    keywords: ['portails aluminium villefranche-sur-saône', 'portail coulissant beaujolais', 'portail battant aluminium', 'portail autoportant rhône', 'portail motorisé sur mesure'],
    alternates: { canonical: 'https://thera-fermetures.fr/portails' },
    openGraph: {
      title: cfg.portails_meta_title || 'Portails Aluminium — Coulissant, Battant, Autoportant | THERA Fermetures',
      description: cfg.portails_meta_description || 'Portails aluminium sur mesure motorisés. +300 coloris, fabrication française, garantie 10 ans. Devis gratuit 24h.',
      images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail aluminium THERA Fermetures' }],
    },
  }
}

export default async function PortailsPage() {
  const cfg = await getPageConfig()

  return (
    <ProductTemplate
      title={cfg.portails_titre || 'Portails Aluminium sur Mesure'}
      subtitle={cfg.portails_sous_titre || 'Coulissants, battants ou autoportants — fabriqués en France, installés par nos équipes dans tout le Beaujolais'}
      description={cfg.portails_description || "Les portails aluminium THERA Fermetures combinent design contemporain, sécurité maximale et durabilité exceptionnelle. Chaque portail est fabriqué sur mesure à partir d'aluminium extrudé de première qualité, non recyclé, avec plus de 300 coloris disponibles. Motorisation Somfy ou BFT en option pour un accès ultra-pratique au quotidien."}
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail aluminium coulissant sur mesure installé à Arnas par THERA Fermetures"
      features={[
        'Aluminium extrudé première qualité (non recyclé)',
        '+300 coloris disponibles — RAL standards ou sur demande',
        'Portails battants 1 ou 2 vantaux',
        'Portails coulissants autoportants ou sur rail',
        'Motorisation Somfy / BFT (télécommande, badge, GSM)',
        'Serrures et verrous haute sécurité',
        'Certifications Qualicoat® et Qualimarine® pour le laquage',
        'Garantie structure et peinture 10 ans',
      ]}
      variants={[
        {
          title: 'Portail Coulissant',
          badge: 'Le plus populaire',
          description: "Le portail coulissant s'ouvre en glissant latéralement le long d'une clôture ou d'un mur. Idéal pour les entrées étroites ou les allées en pente, il est disponible sur rail ou autoportant. Son mécanisme robuste garantit des milliers de cycles d'ouverture sans défaillance. Compatible avec toutes les motorisations du marché.",
          specs: [
            "Glissement latéral sur rail ou autoportant (sans rail au sol)",
            "Idéal pour allées en pente ou terrains étroits",
            "Motorisation intégrée invisible disponible",
            "Larges dimensions possibles jusqu'à 10m",
            "Entretien minime — roulements en acier inoxydable",
            "Disponible avec ou sans portillon assorti",
          ],
          image: '/images/portails/portail-coulissant-chasselay.jpg',
          imageAlt: 'Portail coulissant aluminium installé à Chasselay par THERA Fermetures',
        },
        {
          title: 'Portail Battant',
          badge: 'Design premium',
          description: "Le portail battant s'ouvre comme une porte classique, en 1 ou 2 vantaux. Élégant et intemporel, il s'adapte parfaitement à tous les styles architecturaux. La motorisation peut être totalement invisible, intégrée dans le vantail lui-même. Certifié Qualicoat® et Qualimarine®, notre laquage résiste aux environnements les plus difficiles.",
          specs: [
            "Ouverture en 1 ou 2 vantaux selon la largeur",
            "Motorisation intégrée et invisible dans le vantail",
            "Certifications Qualicoat® et Qualimarine® pour le laquage",
            "Ferrage haute sécurité — vérins ou bras articulés",
            "Personnalisation totale : lames, barreaux, tôle décorative",
            "Portillon assorti disponible en option",
          ],
          image: '/images/portails/portail-battant-somfy.jpg',
          imageAlt: 'Portail battant aluminium motorisation intégrée Somfy THERA Fermetures',
        },
        {
          title: 'Portail Autoportant',
          badge: 'Sans rail au sol',
          description: "Le portail autoportant est une variante du coulissant qui ne nécessite aucun rail enterré dans le sol. Parfait pour les allées avec caniveaux, pavés ou en pente, il repose sur des roues portantes fixées sur un support en béton de côté. Solution élégante et robuste pour les grandes ouvertures jusqu'à 15 mètres.",
          specs: [
            "Aucun rail enterré dans le sol — installation propre",
            "Idéal pour allées en pente, avec caniveaux ou pavées",
            "Grandes ouvertures possibles jusqu'à 15m",
            "Contrepoids intégré pour équilibre parfait",
            "Compatible motorisation à galets ou chaîne",
            "Structure renforcée pour les portails lourds",
          ],
          image: '/images/portails/portail-autoportant.jpg',
          imageAlt: 'Portail autoportant aluminium industriel THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/portails/portail-arnas.jpg', alt: 'Portail aluminium Arnas', caption: 'Portail coulissant — Arnas' },
        { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail aluminium Trévoux', caption: 'Portail battant — Trévoux' },
        { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail aluminium Villefranche', caption: 'Portail sur mesure — Villefranche' },
        { src: '/images/portails/portail-coulissant-chasselay.jpg', alt: 'Portail coulissant Chasselay', caption: 'Portail coulissant — Chasselay' },
        { src: '/images/portails/portail-battant-design.jpg', alt: 'Portail battant design', caption: 'Portail battant design' },
        { src: '/images/portails/portail-coulissant-arnas.jpg', alt: 'Portail coulissant motorisé Arnas', caption: 'Portail coulissant motorisé — Arnas' },
      ]}
      advantages={[
        { icon: '', title: 'Robustesse extrême', text: 'Aluminium extrudé résistant aux chocs, intempéries et corrosion. Durée de vie 30+ ans.' },
        { icon: '', title: 'Zéro entretien', text: "L'aluminium ne rouille pas et ne se déforme pas. Un coup d'eau suffit pour retrouver l'éclat du neuf." },
        { icon: '', title: '+300 coloris', text: 'Blanc, gris anthracite, noir mat, couleurs sur demande. Finition laquée Qualicoat® ultra-durable.' },
        { icon: '', title: 'Sécurité maximale', text: "Serrures certifiées, motorisation avec détection d'obstacles. Votre propriété est pleinement protégée." },
        { icon: '', title: 'Motorisation smart', text: 'Télécommande, smartphone, interphone vidéo. Compatibles Somfy, BFT — maison connectée.' },
        { icon: '', title: 'Fabrication française', text: 'Fabriqués en France par des partenaires certifiés Qualicoat®. Qualité et traçabilité garanties.' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      ctaText="Obtenir mon devis portail"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Portails Aluminium sur Mesure',
        description: 'Portails battants, coulissants et autoportants en aluminium fabriqués en France.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
        areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
        serviceType: 'Installation de portails aluminium sur mesure',
      }}
    />
  )
}
