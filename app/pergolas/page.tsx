import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductTemplate from '../components/ProductTemplate'
import ScrollReveal from '../components/ScrollReveal'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

async function getPageConfig() {
  try {
    const { data } = await getSupabaseAdmin()
      .from('site_config')
      .select('cle,valeur')
      .in('cle', ['pergolas_titre', 'pergolas_sous_titre', 'pergolas_description', 'pergolas_meta_title', 'pergolas_meta_description'])
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }: { cle: string; valeur: string | null }) => { if (valeur) cfg[cle] = valeur })
    return cfg
  } catch { return {} }
}

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getPageConfig()
  return {
    title: cfg.pergolas_meta_title || 'Pergolas Bioclimatiques — Carat, Elements, VizVersa | THERA Fermetures',
    description: cfg.pergolas_meta_description || 'Pergolas bioclimatiques Carat (label France Garantie), Elements et VizVersa. Lames motorisées, options LED, chauffage. Installation Beaujolais & Rhône. Devis gratuit 24h.',
    keywords: ['pergola bioclimatique villefranche-sur-saône', 'pergola carat beaujolais', 'pergola elements motorisée', 'vizversa store pergola rhône'],
    alternates: { canonical: 'https://thera-fermetures.fr/pergolas' },
    openGraph: {
      title: cfg.pergolas_meta_title || 'Pergolas Bioclimatiques Carat, Elements & VizVersa — THERA Fermetures',
      description: cfg.pergolas_meta_description || 'Pergolas bioclimatiques motorisées. Modèles Carat (Origine France Garantie), Elements et VizVersa. Devis gratuit 24h.',
      images: [{ url: '/images/pergolas/pergola-bioclimatique.jpg', width: 1200, height: 630, alt: 'Pergola bioclimatique THERA Fermetures' }],
    },
  }
}

export default async function PergolasPage() {
  const cfg = await getPageConfig()

  return (
    <ProductTemplate
      title={cfg.pergolas_titre || 'Pergolas Bioclimatiques'}
      subtitle={cfg.pergolas_sous_titre || 'Modèles Carat, Elements et VizVersa — transformez votre terrasse en pièce à vivre ouverte 365 jours par an'}
      description={cfg.pergolas_description || "Les pergolas bioclimatiques THERA Fermetures, fabriquées par Cébel au sud de Lyon, transforment votre terrasse en véritable espace de vie. Grâce aux lames orientables motorisées, vous maîtrisez l'ensoleillement, la ventilation et la protection contre la pluie. Ajoutez éclairage LED, chauffage infrarouge ou stores motorisés pour un confort absolu en toute saison."}
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt="Pergola bioclimatique Carat motorisée installée par THERA Fermetures"
      presentationImage="/images/pergolas/Pergola d'exposition à Chasselay.jpg"
      presentationImageAlt="Pergola d'exposition à Chasselay — Showroom THERA Fermetures"
      squareImages={true}
      gallerySectionTag="INSPIRATION"
      showAdvantages={false}
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
          description: "La Pergola Carat est notre modèle premium, labelisée \"Origine France Garantie\" et fabriquée par Cébel, entreprise implantée au sud de Lyon. Elle se distingue par ses poteaux en forme de diamant qui lui confèrent une finition originale et raffinée. Toutes les options peuvent être ajoutées après installation grâce à des méthodes de fixation identiques à celles d'usine — aucune vis apparente, une esthétique parfaite.",
          specs: [
            'Poteaux à section diamant — design unique et contemporain',
            'Label "Origine France Garantie" — fabrication Cébel (Lyon)',
            'Store Veozip intégré au coffre sans rail visible',
            'Fixations invisibles — aucune vis apparente',
            'Finitions deux tons disponibles',
            'Personnalisation totale : dimensions, couleurs, options',
          ],
          image: '/images/pergolas/pergola_bioclimatique_cebel.png',
          imageAlt: 'Pergola Carat bioclimatique Cébel installée par THERA Fermetures',
        },
        {
          title: 'Pergola Elements',
          badge: 'Excellent rapport qualité/prix',
          description: "La Pergola Elements est notre modèle à la fois accessible et haut de gamme. Elle met en avant son design soigné grâce à des poteaux avec chanfreins qui lui donnent un caractère unique. Comme la Carat, sa quincaillerie est entièrement intégrée sans vis apparente pour un rendu impeccable. Une solution idéale pour profiter de votre terrasse sans compromis sur la qualité.",
          specs: [
            'Poteaux à chanfreins — élégance accessible',
            'Quincaillerie entièrement intégrée — zéro vis visible',
            'Mêmes options que la Carat (LED, stores, chauffage)',
            'Fabrication aluminium qualité professionnelle',
            'Installation rapide — 1 à 2 jours selon dimensions',
            'Garantie 10 ans structure et finitions',
          ],
          image: '/images/pergolas/pergola-bioclimatique-modele-abordable.avif',
          imageAlt: 'Pergola Elements bioclimatique THERA Fermetures',
          objectFit: 'contain' as const,
        },
        {
          title: 'VizVersa — Store Bioclimatique',
          badge: 'Alternative toile rétractable',
          description: "Le VizVersa est une alternative innovante à la pergola traditionnelle : à la place de lames aluminium, il utilise une toile rétractable haute performance qui filtre jusqu'à 96% des rayons UV tout en bloquant la chaleur. Sa structure fixée au sol offre une résistance au vent supérieure aux stores muraux classiques. Idéal pour couvrir de grandes surfaces avec style.",
          specs: [
            'Toile rétractable filtre 96% des rayons UV',
            'Blocage de la chaleur solaire — confort naturel',
            'Structure au sol — résistance au vent supérieure',
            'Protège de grandes surfaces en un seul tenant',
            'Design épuré — invisible quand rétractée',
            'Compatible avec éclairage et chauffage intégrés',
          ],
          image: '/images/pergolas/pergola-toile-retractable.avif',
          imageAlt: 'Pergola VizVersa toile rétractable THERA Fermetures',
          objectFit: 'contain' as const,
        },
      ]}
      galleryImages={[
        { src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola Carat Limonest', caption: 'Pergola Carat — Limonest' },
        { src: '/images/pergolas/pergola_bioclimatique_bellevile.png', alt: 'Pergola Elements motorisée', caption: 'Pergola Elements motorisée' },
        { src: '/images/pergolas/pergola-store.jpg', alt: 'VizVersa store pergola', caption: 'VizVersa — store rétractable' },
      ]}
      afterVariants={
        <div>
          {/* Personnalisable et évolutive */}
          <section className="section-padding">
            <div className="container">
              <ScrollReveal className="text-center mb-12">
                <div className="section-tag justify-center">Complémentaires</div>
                <h2>Personnalisable<br className="hidden md:block" /> et évolutive</h2>
                <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
                  Les équipements complémentaires pour personnaliser votre pergola.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: "/images/pergolas/structure bi-ton.avif", label: "Structure bi-ton" },
                  { src: "/images/pergolas/prise-de-courant.avif", label: "Prise de courant" },
                  { src: "/images/pergolas/eclairage-blanc.avif", label: "Éclairage blanc" },
                  { src: "/images/pergolas/eclairage-couleur.avif", label: "Éclairage couleur" },
                  { src: "/images/pergolas/panneau-brise-vue.avif", label: "Panneau brise-vue" },
                  { src: "/images/pergolas/liserés.avif", label: "Liserés" },
                  { src: "/images/pergolas/enceinte-intégrée.avif", label: "Enceinte intégrée" },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="relative h-48 overflow-hidden shadow-card group">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                        <p className="text-white text-sm font-semibold">{item.label}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal className="text-center mt-12">
                <p className="text-muted text-lg max-w-3xl mx-auto mb-8">
                  La pergola Carat propose des stores dissimulés dans la structure — pas de coffre visible, ni de rails apparents — pour une esthétique parfaite même lorsque le store est ouvert.
                </p>
                <Link href="/contact" className="btn-outline-dark">
                  Configurer ma pergola
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </div>
      }
      advantages={[
        { icon: '', title: "Confort toute l'année", text: "Régulation naturelle par orientation des lames. Fraîcheur l'été, protection pluie toute l'année." },
        { icon: '', title: 'Étanchéité parfaite', text: 'Lames fermées à 145° : protection totale contre la pluie. Profitez de votre terrasse même par mauvais temps.' },
        { icon: '', title: 'Pilotage intelligent', text: "Télécommande, app smartphone, capteur de pluie automatique. Votre pergola s'adapte à la météo." },
        { icon: '', title: 'Plus-value immobilière', text: "Une pergola bien intégrée augmente la valeur et l'attractivité de votre bien immobilier." },
        { icon: '', title: 'Options premium', text: 'LED RGBW, chauffage infrarouge, stores motorisés — votre terrasse devient un vrai salon extérieur.' },
        { icon: '', title: 'Fabriquée en France', text: 'Cébel, notre fabricant partenaire, est implanté au sud de Lyon. Label "Origine France Garantie".' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Formation']}
      ctaText="Obtenir mon devis pergola"
      seoText="Entreprise Thera Fermetures : vente et installation de pergola bioclimatique design sur mesure. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Pergola Bioclimatique Motorisée',
        description: 'Pergolas bioclimatiques Carat, Elements et VizVersa, fabriquées en France par Cébel.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures' },
        areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
        serviceType: 'Installation de pergolas bioclimatiques sur mesure',
      }}
    />
  )
}
