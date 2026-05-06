import type { Metadata } from 'next'
import ProductTemplate from '../components/ProductTemplate'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

async function getPageConfig() {
  try {
    const { data } = await getSupabaseAdmin()
      .from('site_config')
      .select('cle,valeur')
      .in('cle', ['portes_garage_titre', 'portes_garage_sous_titre', 'portes_garage_description', 'portes_garage_meta_title', 'portes_garage_meta_description'])
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }: { cle: string; valeur: string | null }) => { if (valeur) cfg[cle] = valeur })
    return cfg
  } catch { return {} }
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getPageConfig()
  return {
    title: cfg.portes_garage_meta_title || 'Portes de Garage sur Mesure — Sectionnelle, Enroulable, Battante | THERA Fermetures',
    description: cfg.portes_garage_meta_description || 'Portes de garage sectionnelles, enroulables et battantes sur mesure. Motorisation Somfy, isolation renforcée, +300 coloris. Installation Beaujolais & Rhône. Devis gratuit 24h.',
    keywords: ['porte de garage villefranche-sur-saône', 'porte garage sectionnelle beaujolais', 'porte garage motorisée rhône', 'porte garage sur mesure', 'porte garage aluminium'],
    alternates: { canonical: 'https://thera-fermetures.fr/portes-de-garage' },
    openGraph: {
      title: cfg.portes_garage_meta_title || 'Portes de Garage Sectionnelle, Enroulable & Battante — THERA Fermetures',
      description: cfg.portes_garage_meta_description || 'Portes de garage sur mesure motorisées. Sectionnelle 40mm/60mm, enroulable, battante. Devis gratuit 24h.',
      images: [{ url: '/images/portes-garage/porte-garage-villefranche.jpg', width: 1200, height: 630, alt: 'Porte de garage THERA Fermetures' }],
    },
  }
}

export default async function PortesDeGaragePage() {
  const cfg = await getPageConfig()

  return (
    <ProductTemplate
      title={cfg.portes_garage_titre || 'Portes de Garage sur Mesure'}
      subtitle={cfg.portes_garage_sous_titre || 'Sectionnelles, enroulables ou battantes — motorisées, isolées, fabriquées sur mesure dans tout le Beaujolais'}
      description={cfg.portes_garage_description || "À ressorts de traction intégrés dans les rails ou au linteau, ces ressorts sont conçus pour compenser le poids de la porte pendant des milliers de cycles d'ouverture."}
      presentationTitle="Les portes sectionnelles"
      heroImage="/images/portes-garage/porte-garage-villefranche.jpg"
      heroImageAlt="Porte de garage sectionnelle motorisée installée à Villefranche par THERA Fermetures"
      features={[
        'Fabrication sur mesure 6 mètres',
        'Motorisation Somfy silencieuse + télécommande',
        'Panneaux isolants 40mm ou 60mm disponibles',
        'Double paroi acier galvanisé ou aluminium',
        '+300 coloris RAL disponibles',
        'Hublots et vitrages en option',
      ]}
      variants={[
        {
          title: 'Sectionnelle 40mm',
          badge: 'La plus populaire',
          description: "La porte sectionnelle 40mm est notre modèle standard, idéal pour la majorité des garages résidentiels. Elle s'ouvre verticalement le long du plafond, économisant ainsi l'espace devant et à l'intérieur du garage. Ses panneaux en double paroi acier avec mousse polyuréthane offrent une excellente isolation thermique et phonique pour un prix accessible.",
          specs: [
            'Panneaux 40mm double paroi acier galvanisé',
            'Isolation mousse polyuréthane haute densité',
            "Ouverture verticale — 0 cm de dégagement extérieur",
            'Motorisation Somfy en option',
            'Hublots ovales ou rectangulaires disponibles',
            'Nombreux styles : lisse, rainuré, bois, nervuré',
          ],
          image: '/images/portes-garage/Porte de garage sectionnelle vitrée.jpg',
          imageAlt: 'Porte de garage sectionnelle vitrée installée par THERA Fermetures',
        },
        {
          title: 'Sectionnelle 60mm',
          badge: "+25% d'isolation",
          description: "La porte sectionnelle 60mm est notre modèle premium pour une isolation maximale. Idéale si votre garage est attenant à la maison ou si vous souhaitez un espace de travail tempéré, elle réduit significativement les déperditions thermiques. Sa double paroi plus épaisse offre également une meilleure résistance aux chocs et une insonorisation renforcée.",
          specs: [
            'Panneaux 60mm — isolation +25% vs modèle 40mm',
            'Coefficient thermique Ud ≤ 0,80 W/m²K',
            'Idéale pour garage attenant ou chauffé',
            'Insonorisation renforcée — confort optimal',
            'Résistance accrue aux chocs et effractions',
            'Compatible motorisation Somfy haute performance',
          ],
          image: '/images/portes-garage/porte de garage Lyon 5 metres.jpg',
          imageAlt: 'Porte de garage sectionnelle Lyon 5 mètres THERA Fermetures',
        },
        {
          title: 'Porte Enroulable',
          badge: 'Gain de place maximal',
          description: "La porte enroulable est la solution idéale quand le plafond est bas ou lorsque vous souhaitez maximiser l'espace intérieur. Son tablier en lames d'aluminium s'enroule sur un axe en partie haute, libérant toute la hauteur utile du garage. Légère, silencieuse et motorisable, elle s'intègre parfaitement dans les garages avec peu de recul disponible.",
          specs: [
            "Tablier aluminium extrudé — léger et résistant",
            "Enroulement discret en partie haute",
            'Idéale pour plafonds bas ou faible recul',
            'Motorisation silencieuse en option',
            'Entretien minimal — pas de ressorts sous tension',
            'Finitions laquées RAL ou anodisées',
          ],
          image: undefined,
          imageAlt: 'Porte de garage enroulable aluminium THERA Fermetures',
        },
        {
          title: 'Porte Battante & Basculante',
          badge: 'Tradition & économie',
          description: "Les portes battantes (2 vantaux) et basculantes (1 seul panneau) sont des solutions économiques et robustes pour les garages avec suffisamment de dégagement extérieur. La battante s'ouvre en 2 vantaux comme une porte classique, idéale pour les grandes ouvertures. La basculante pivote vers l'extérieur puis monte parallèlement au plafond — simple, fiable et durable.",
          specs: [
            'Battante : 2 vantaux, grande ouverture possible',
            'Basculante : 1 panneau, mécanisme robuste à ressorts',
            'Acier ou aluminium disponibles selon modèle',
            'Motorisation adaptable sur basculante',
            'Solution économique pour usage courant',
            'Nombreuses couleurs et finitions disponibles',
          ],
          image: undefined,
          imageAlt: 'Porte de garage battante et basculante THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/portes-garage/porte-garage-villefranche.jpg', alt: 'Porte de garage sectionnelle Villefranche', caption: 'Sectionnelle — Villefranche-sur-Saône' },
        { src: '/images/portes-garage/porte de garage Lyon 5 metres.jpg', alt: 'Porte de garage Lyon 5 mètres', caption: 'Sectionnelle 60mm — Lyon' },
        { src: '/images/portes-garage/Porte de garage avec portillon.jpg', alt: 'Porte de garage avec portillon', caption: 'Porte de garage avec portillon' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Sécurité maximale', text: "Serrures multipoints, panneaux renforcés, motorisation avec détection d'obstacles. Votre garage est pleinement sécurisé." },
        { icon: '', title: 'Isolation optimale', text: 'Panneaux 40mm ou 60mm avec mousse polyuréthane. Réduisez vos pertes thermiques et votre facture énergétique.' },
        { icon: '', title: 'Motorisation Somfy', text: "Télécommande, smartphone, intégration domotique. Ouvrez et fermez votre garage depuis votre voiture ou votre canapé." },
        { icon: '', title: '+300 coloris', text: 'RAL standards ou sur demande. Bois, lisse, rainuré, nervuré — la porte s\'adapte parfaitement à votre façade.' },
        { icon: '', title: 'Installation rapide', text: 'Pose professionnelle en une demi-journée. Nos techniciens interviennent dans tout le Beaujolais et le Rhône.' },
        { icon: '', title: 'Garantie 5 ans', text: "Pièces et main d'œuvre couverts 5 ans. Service après-vente réactif basé à Chasselay." },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      ctaText="Obtenir mon devis porte de garage"
      seoText="Entreprise Thera Fermetures : vente et installation de porte de garage sectionnelle sur mesure et standard. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Porte de Garage sur Mesure',
        description: 'Portes de garage sectionnelles, enroulables et battantes fabriquées sur mesure.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
        areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
        serviceType: 'Installation de portes de garage sur mesure',
      }}
    />
  )
}
