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
      youtubeId="wVuPyTZSGig"
      youtubeStart={22}
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
      variantMinimalText={true}
      variantSectionTitle="Les types de portails"
      variants={[
        {
          title: 'Portail Coulissant',
          badge: 'Le plus populaire',
          description: "Le portail coulissant s'ouvre en glissant latéralement sur un rail au sol. Il est adapté aux seuils plats ou légèrement en pente et simple à motoriser. Son mécanisme robuste garantit des milliers de cycles d'ouverture sans défaillance. Compatible avec toutes les motorisations du marché. Cette solution permet un gain de place au niveau du dégagement de l'entrée, c'est la plus confortable. Il est possible de mettre deux vantaux coulissants antagonistes, s'ouvrant d'un côté et de l'autre.",
          specs: [],
          image: '/images/portails/portail_coulissant_alu_ajouré_villefranche.jpg',
          imageAlt: 'Portail coulissant aluminium ajouré Villefranche-sur-Saône THERA Fermetures',
        },
        {
          title: 'Portail Battant',
          badge: 'Design premium',
          description: "Cette solution est idéale si votre entrée est installée sur un terrain avec suffisamment de profondeur pour accueillir l'ouverture battante de deux vantaux. Les vantaux peuvent avoir des dimensions différentes (1/3 ou 2/3 par exemple).",
          specs: [],
          image: '/images/portails/Portail_battant_aluminium_rillieux.png',
          imageAlt: 'Portail battant aluminium Rillieux THERA Fermetures',
        },
        {
          title: 'Portail Autoportant',
          badge: 'Sans rail au sol',
          description: "Le portail autoportant est une variante du coulissant qui ne nécessite aucun rail au sol. Parfait pour les allées avec caniveaux, sol pavés ou irrégulier, il repose sur des roues portantes fixées sur un socle en béton de côté. C'est une solution robuste pour les grandes ouvertures.",
          specs: [
            "Aucun rail enterré dans le sol — installation propre",
            "Idéal pour allées en pente, avec caniveaux ou pavées",
            "Porte à faux intégré pour équilibre parfait",
            "Structure renforcée pour les portails lourds",
          ],
          image: '/images/portails/portail-aluminium-autoportant.jpg',
          imageAlt: 'Portail autoportant aluminium THERA Fermetures',
        },
      ]}
      afterVariants={
        <>
          {/* ===== ENCART AUTRES SOLUTIONS ===== */}
          <ScrollReveal>
            <div className="px-4 sm:px-8 md:px-[72px] py-12 text-center" style={{ borderTop: '1px solid #eee' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, marginBottom: 24, color: '#1a1b1e' }}>À chaque contrainte une solution</h2>
              <div style={{ width: 64, height: 2, background: '#22c55e', margin: '0 auto 20px' }} />
              <p style={{ fontSize: 18, color: '#444', lineHeight: 1.8, maxWidth: 680, margin: '0 auto 8px' }}>
                Ces trois solutions sont les plus courantes mais il existe d&apos;autres types de portails coulissants et battants qui peuvent répondre à des contraintes spécifiques, comme le manque de place ou les terrains en pente.
              </p>
              <p style={{ fontSize: 18, color: '#222', fontWeight: 600, margin: '0 auto 24px', maxWidth: 680 }}>
                Chaque contrainte a sa réponse. Consultez-nous, nous trouverons la vôtre&nbsp;!
              </p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#1a1b1e', color: '#fff', padding: '14px 32px', fontSize: 14, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Prendre contact
              </a>
            </div>
          </ScrollReveal>

          {/* ===== AUTOMATISMES ===== */}
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row overflow-hidden" style={{ minHeight: 420 }}>
              <div className="bg-dark flex flex-col justify-center px-8 py-12 lg:px-12 lg:w-2/5 flex-shrink-0">
                <div className="section-tag mb-5" style={{ color: '#22c55e' }}>Automatismes</div>
                <h3 style={{ color: '#fff', fontWeight: 300, lineHeight: 1.2, margin: '0 0 4px', fontSize: 27 }}>
                  Motorisez,
                </h3>
                <h3 style={{ color: '#fff', fontWeight: 700, lineHeight: 1.2, margin: '0 0 20px', fontSize: 27 }}>
                  ouvrez simplement !
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: 1.75, marginBottom: 28 }}>
                  Marques références Roger Technology et Somfy. Ouverture par télécommande, badge de proximité ou smartphone — installation et maintenance assurée.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Roger Technology', sub: 'Haut de gamme, précises et silencieuses' },
                    { title: 'Somfy', sub: 'Domotique et application mobile' },
                    { title: 'BFT / NICE / CAME', sub: 'Fiabilité et simplicité' },
                    { title: 'Compatibilité', sub: 'Une seule télécommande pour votre portail et votre porte de garage !' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <div>
                        <p style={{ color: '#fff', fontSize: 17, fontWeight: 700, margin: '0 0 2px' }}>{item.title}</p>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 16, margin: 0 }}>{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex-1 min-h-[300px] lg:min-h-0">
                <Image
                  src="/images/portails/Motorisation portail Roger Technology.jpg"
                  alt="Motorisation portail Roger Technology THERA Fermetures"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Inviso */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row overflow-hidden border-t border-gray-100">
              <div className="relative w-full sm:w-2/5 min-h-[300px] flex-shrink-0 bg-gray-50">
                <Image
                  src="/images/portails/morisation-integree-somfy.jpg"
                  alt="Motorisation intégrée Inviso Somfy"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 sm:w-3/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-0.5 bg-accent" />
                  <span className="uppercase tracking-widest font-medium text-muted" style={{ fontSize: 15 }}>Motorisation Somfy</span>
                </div>
                <h3 className="text-dark mb-4" style={{ fontSize: 25, fontWeight: 600 }}>Motorisation intégrée Inviso</h3>
                <p className="text-muted leading-relaxed" style={{ fontSize: 18 }}>
                  Les moteurs sont dissimulés dans les montants du portail pour les rendre invisible. Une solution esthétique mais aussi technique, elle permet une ouverture du portail vers l&apos;extérieur sans avoir de moteur dans le passage et de motoriser un portail là où il serait impossible d&apos;installer des moteurs par manque de place.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <section className="section-padding bg-light">
            <div className="container">
              <ScrollReveal className="text-center mb-12">
                <div className="section-tag justify-center">Complémentaires</div>
                <h2>Portillon et Clôtures<br className="hidden md:block" /> assortis</h2>
                <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
                  Complétez votre portail avec un portillon et une clôture aluminium assortis pour une cohérence esthétique parfaite.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Image clôture */}
                <ScrollReveal delay={0}>
                  <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl shadow-card group">
                    <Image
                      src="/images/portails/cloture-aluminium-jassans-riotier.jpg"
                      alt="Clôture aluminium Jassans-Riottier"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollReveal>

                {/* Image portail */}
                <ScrollReveal delay={80}>
                  <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl shadow-card group">
                    <Image
                      src="/images/portails/Portail-alu-neuville.jpg"
                      alt="Portail aluminium Neuville"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal className="text-center mt-10">
                <Link href="/contact" className="btn-outline-dark">
                  Demander mon projet complet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </section>

        </>
      }
      seoLinksSection={
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">Zones d&apos;intervention — Portails Aluminium</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { href: '/portail-aluminium-sur-mesure-villefranche-sur-saone', label: 'Villefranche-sur-Saône' },
              { href: '/portail-aluminium-sur-mesure-belleville-en-beaujolais', label: 'Belleville-en-Beaujolais' },
              { href: '/portail-aluminium-sur-mesure-limonest', label: 'Limonest' },
              { href: '/portail-aluminium-sur-mesure-trevoux', label: 'Trévoux' },
              { href: '/portail-aluminium-sur-mesure-lozanne', label: 'Lozanne' },
              { href: '/portail-aluminium-sur-mesure-caluire-et-cuire', label: 'Caluire-et-Cuire' },
              { href: '/portail-aluminium-sur-mesure-anse', label: 'Anse' },
              { href: '/portail-aluminium-sur-mesure-arnas', label: 'Arnas' },
              { href: '/portail-aluminium-sur-mesure-quincieux', label: 'Quincieux' },
              { href: '/portail-aluminium-sur-mesure-neuville-sur-saone', label: 'Neuville-sur-Saône' },
              { href: '/portail-aluminium-sur-mesure-chasselay', label: 'Chasselay' },
              { href: '/portail-aluminium-sur-mesure-jassans-riottier', label: 'Jassans-Riottier' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-xs text-gray-400 hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      }
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
      heroH1="Vente et installation de portails aluminium moderne et sur mesure à Villefranche-sur-Saône"
      ctaText="Obtenir mon devis portail"
      seoText="Entreprise Thera Fermetures : vente et installation de portail battant et coulissant aluminium sur mesure et de fabrication française. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
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
