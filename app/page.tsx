import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import ScrollReveal from './components/ScrollReveal'
import HeroSlideshow from './components/HeroSlideshow'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

async function getSiteConfig() {
  try {
    const { data } = await getSupabaseAdmin().from('site_config').select('cle,valeur')
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }) => { if (valeur) cfg[cle] = valeur })
    return cfg
  } catch { return {} }
}

export const metadata: Metadata = {
  title: 'THERA Fermetures | Portails, Pergolas & Carports Aluminium — Villefranche-sur-Saône',
  description: 'Experts en portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure depuis 2015. Réalisations dans le Beaujolais. Devis gratuit.',
  keywords: ['portails aluminium villefranche-sur-saône', 'pergolas bioclimatiques beaujolais', 'carports sur mesure rhône', 'clôtures aluminium'],
  alternates: { canonical: 'https://thera-fermetures.fr' },
}

const products = [
  { title: 'Portails Aluminium', desc: 'Battants, coulissants ou motorisés. Design sur mesure et sécurité maximale pour votre propriété.', href: '/portails', image: '/images/portails/portail-arnas.jpg', alt: 'Portail aluminium sur mesure THERA Fermetures', tag: 'Le + demandé' },
  { title: 'Pergolas Bioclimatiques', desc: 'Lames orientables motorisées. Profitez de votre terrasse 365 jours par an, pluie ou soleil.', href: '/pergolas', image: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola bioclimatique motorisée THERA Fermetures', tag: 'Tendance 2025' },
  { title: 'Carports Aluminium', desc: 'Protection élégante pour vos véhicules. Structures sur mesure, pose rapide et sans entretien.', href: '/carports', image: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra THERA Fermetures', tag: null },
  { title: 'Clôtures Aluminium', desc: 'Délimitez et sécurisez votre propriété. Modèles pleins, ajourés ou mixtes en toutes couleurs.', href: '/clotures', image: '/images/clotures/cloture-alu.jpg', alt: 'Clôture aluminium THERA Fermetures', tag: null },
]

const gallery = [
  { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail aluminium Villefranche-sur-Saône', cat: 'Portail' },
  { src: '/images/realisations/pergola-limonest.jpg', alt: 'Pergola bioclimatique Limonest', cat: 'Pergola' },
  { src: '/images/portails/portail-battant-design.jpg', alt: 'Portail battant design aluminium', cat: 'Portail' },
  { src: '/images/realisations/cloture-alu.jpg', alt: 'Clôture aluminium sur mesure', cat: 'Clôture' },
  { src: '/images/portails/20250127_173625.jpg', alt: 'Portail aluminium sur mesure 2025', cat: 'Portail' },
  { src: '/images/realisations/pergola-austral.jpg', alt: 'Pergola motorisée bioclimatique', cat: 'Pergola' },
  { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail aluminium Trévoux', cat: 'Portail' },
  { src: '/images/realisations/portail-caluire.jpg', alt: 'Portail aluminium Caluire', cat: 'Portail' },
  { src: '/images/portails/portail-autoportant.jpg', alt: 'Portail autoportant aluminium', cat: 'Portail' },
  { src: '/images/realisations/portail-cloture-amberieux.jpg', alt: 'Portail et clôture Ambérieux', cat: 'Portail' },
  { src: '/images/portails/20240920_102940.jpg', alt: 'Portail aluminium réalisation 2024', cat: 'Portail' },
  { src: '/images/realisations/brise-vue.jpg', alt: 'Brise-vue aluminium', cat: 'Clôture' },
]

const zones = [
  'Villefranche-sur-Saône', 'Arnas', 'Chasselay', 'Limonest',
  'Lozanne', 'Trévoux', 'Belleville-en-Beaujolais', 'Reyrieux',
  'Caluire-et-Cuire', 'Dommartin', 'Jassans-Riottier', 'Ambérieux',
]

const avantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Qualité supérieure',
    desc: 'Aluminium première qualité, non recyclé. Chaque installation bénéficie de notre garantie décennale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
    ),
    title: 'Fabrication Française',
    desc: 'Nos produits sont fabriqués en France par des partenaires certifiés. Qualité et traçabilité assurées.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Local',
    desc: 'Basés à Chasselay, nous intervenons dans tout le Beaujolais et le Rhône. Un seul interlocuteur de A à Z.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Sur Mesure Total',
    desc: 'Chaque projet est unique. Dimensions, couleurs, finitions : tout est personnalisé selon vos goûts et contraintes.',
  },
]

const processSteps = [
  { num: '01', title: 'Visite', desc: 'Nous venons chez vous, prenons les mesures et analysons votre projet sur place.' },
  { num: '02', title: 'Étude', desc: 'Analyse technique complète, choix des matériaux et conception de votre projet.' },
  { num: '03', title: 'Devis', desc: 'Devis détaillé et personnalisé transmis rapidement, sans engagement de votre part.' },
  { num: '04', title: 'Installation', desc: 'Une équipe installe le matériel et effectue la mise en service.' },
  { num: '05', title: 'Maintenance', desc: 'Service après vente et maintenance périodique.' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://thera-fermetures.fr/#business',
  name: 'THERA Fermetures',
  url: 'https://thera-fermetures.fr',
  image: 'https://thera-fermetures.fr/images/portails/portail-arnas.jpg',
  description: 'Experts en portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure depuis 2015.',
  telephone: '+33474649165',
  email: 'therafermetures@gmail.com',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '134, za du Crouloup',
    addressLocality: 'Chasselay',
    postalCode: '69380',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.8823, longitude: 4.7537 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:30', closes: '17:30' },
  ],
  areaServed: zones.map(z => ({ '@type': 'City', name: z })),
}

export default async function Home() {
  const cfg = await getSiteConfig()

  const h1 = cfg.hero_titre_1 || 'Créateurs'
  const h2 = cfg.hero_titre_2 || "d'espaces"
  const h3 = cfg.hero_titre_3 || 'extérieurs'
  const heroTag = cfg.hero_tag || 'Villefranche-sur-Saône — Beaujolais — depuis 2015'
  const heroDesc = cfg.hero_description || 'Portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure. Fabrication française, installation par nos équipes.'
  const btnDevis = cfg.hero_btn_devis || 'Demander un devis'
  const btnReal = cfg.hero_btn_realisations || 'Voir nos réalisations'
  const tel = cfg.contact_tel || '04 74 64 91 65'
  const horaires = cfg.contact_horaires || 'Lun–Ven 8h00–17h30'

  return (
    <div>
      {/* ===== HERO SLIDESHOW ===== */}
      <HeroSlideshow
        tag={heroTag}
        h1={h1}
        h2={h2}
        h3={h3}
        heroDesc={heroDesc}
        btnDevis={btnDevis}
        btnReal={btnReal}
      />

      {/* ===== NOTRE HISTOIRE ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag" />
              <h2 className="mb-6">Une entreprise à votre écoute,<br />proche de chez vous</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed font-light">
                THERA Fermetures est née en 2015 d&apos;une conviction simple : apporter des prestations soignées et personnalisées parce que chaque projet est unique ! Nous vous conseillons sur le meilleur produit adapté techniquement tout en tenant compte de vos goûts et vos besoins.
              </p>
              <p className="text-muted text-lg mb-2 leading-relaxed font-light">
                Basé à Chasselay au nord de Lyon, nous intervenons dans un rayon de plus de 50 km pour accompagner chaque projet, de la première visite à la mise en service.
              </p>
              <p className="text-muted text-lg mb-8 leading-relaxed font-light">
                Notre force : la relation directe, la pose par nos soins et un suivi personnalisé.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src="/images/portails/portail_aluminium_cebel_villefranche_sur_saone.jpg"
                  alt="Portail aluminium Cébel THERA Fermetures Villefranche-sur-Saône"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRODUITS ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Nos solutions</div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 80}>
                <Link href={p.href} className="product-card group block h-full">
                  <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl">
                    <Image src={p.image} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="product-card-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-white text-xl mb-1">{p.title}</h3>
                      <div className="mt-3 flex items-center gap-1.5 text-white/90 text-sm font-medium">
                        Découvrir
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link href="/contact" className="btn-outline-dark">
              Demander mon devis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== POURQUOI THERA ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Pourquoi nous choisir</div>
              <h2 className="mb-6">L&apos;expertise locale<br />au service de votre projet</h2>
              <p className="text-muted text-lg mb-8 font-light leading-relaxed">
                Depuis 2015, THERA Fermetures accompagne les particuliers et professionnels de la région dans les réalisations de leur projet extérieurs. Nous proposons un service clé en main, une prestation complète pour une meilleure continuité et un suivi plus simple.
              </p>

              {/* 4 avantages classiques */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {avantages.map((a, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl hover:bg-light transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-base mb-1">{a.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-[520px] md:h-[580px] overflow-hidden">
                  <Image
                    src="/images/pergolas/pergola_expostion_showroom_chasselay.jpg"
                    alt="Showroom pergola THERA Fermetures Chasselay"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Badge Fabrication Française */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#22c55e' }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">Fabrication Française</p>
                      <p className="text-muted text-xs">Aluminium qualité supérieure</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Le vrai sur mesure — pleine largeur */}
          <ScrollReveal className="mt-12">
            <div className="flex flex-col sm:flex-row overflow-hidden border border-gray-100 shadow-card">
              <div className="relative w-full sm:w-3/5 h-80 sm:h-96 flex-shrink-0">
                <Image
                  src="/images/portails/portail_coulissant_en_pente.png"
                  alt="Portail coulissant en pente THERA Fermetures"
                  fill
                  className="object-contain bg-gray-50"
                  sizes="(max-width: 640px) 100vw, 60vw"
                />
              </div>
              <div className="bg-dark p-10 flex flex-col justify-center sm:w-2/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-0.5 bg-accent" />
                  <span className="text-white/50 text-xs uppercase tracking-widest font-medium">Notre approche</span>
                </div>
                <h3 className="text-white text-2xl mb-4">Le vrai sur mesure</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Chaque projet est unique et part d&apos;une feuille blanche. Dimensions, coloris, matériaux, automatismes — design et technique, rien de standard, chaque projet est réfléchi.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GALERIE TEASER ===== */}
      <section className="section-padding bg-dark">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-white text-5xl md:text-6xl font-normal tracking-tight">INSPIRATIONS</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative h-48 md:h-60 overflow-hidden group">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" loading={i < 3 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3">
                    <span className="badge bg-black/50 text-white backdrop-blur-sm text-xs">{img.cat}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link href="/realisations" className="btn-primary">
              Voir toutes nos réalisations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESSUS ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Comment ça marche</div>
            <h2>Un accompagnement<br className="hidden md:block" /> complet de A à Z</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black mb-4 text-base" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#22c55e' }}>
                  {step.num}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZONE INTERVENTION ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Zone d&apos;intervention</div>
              <h2>Nous intervenons<br />dans tout le Beaujolais</h2>
              <p className="text-muted text-lg mb-8 font-light">
                Basés à Chasselay (69380), nos équipes se déplacent dans tout le département du Rhône et au-delà pour vos projets d&apos;aménagement extérieur.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {zones.map((z) => (
                  <span key={z} className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-dark border border-gray-200 hover:border-dark hover:text-dark transition-colors cursor-default">
                    {z}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-accent/10 text-accent-dark rounded-full text-sm font-medium">+ toute la région</span>
              </div>
              <Link href="/contact" className="btn-primary">
                Vérifier si on intervient chez vous
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                <h3 className="mb-6">Nous contacter</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Visite sur site', detail: 'Gratuite et sans engagement', svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> },
                    { label: 'Devis personnalisé', detail: 'Détaillé et transparent', svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
                    { label: 'Horaires', detail: horaires, svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl hover:bg-light transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-dark/5 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.svg}</svg>
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">{item.label}</p>
                        <p className="text-muted text-xs">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <a href="tel:+33474649165" className="flex items-center justify-center gap-2 bg-light py-3.5 rounded-xl font-semibold text-dark hover:bg-dark/5 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {tel}
                  </a>
                  <Link href="/contact" className="btn-primary justify-center py-3.5">{btnDevis}</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRO & COLLECTIF ===== */}
      <section className="section-padding bg-dark overflow-hidden">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
              <div className="w-4 h-px bg-accent" />
              Professionnel & Collectif
              <div className="w-4 h-px bg-accent" />
            </div>
            <h2 className="text-white">Vous êtes professionnel<br className="hidden md:block" /> ou copropriété ?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4 font-light">
              THERA Fermetures intervient aussi pour les professionnels et collectivités : portails de résidence, portails industriels et barrières levantes automatiques.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Portail pro */}
            <ScrollReveal direction="left">
              <a
                href="https://www.thera-proaccess.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative h-72 md:h-96 overflow-hidden"
              >
                <Image
                  src="/images/pro/portail_copropriété_coulissant_villefranche.jpg"
                  alt="Portail copropriété aluminium THERA Fermetures"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">Copropriétés & Résidences</span>
                  <h3 className="text-white text-xl mb-2">Portails professionnels</h3>
                  <p className="text-white/70 text-sm mb-4">Coulissants grande largeur, motorisation haute fréquence, contrôle d&apos;accès intégré.</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Découvrir
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>

            {/* Barrière */}
            <ScrollReveal direction="right">
              <a
                href="https://www.thera-proaccess.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative h-72 md:h-96 overflow-hidden"
              >
                <Image
                  src="/images/pro/barrière levante parking copropriété.jpg"
                  alt="Barrière levante parking copropriété THERA Fermetures"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">Parkings & Lotissements</span>
                  <h3 className="text-white text-xl mb-2">Barrières levantes</h3>
                  <p className="text-white/70 text-sm mb-4">Automatiques, levée en 3 secondes, badge RFID, télécommande ou smartphone.</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Découvrir
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mt-8">
            <a
              href="https://www.thera-proaccess.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-primary hover:text-primary px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              Voir toutes nos solutions professionnelles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/portails/portail-coulissant-chasselay.jpg" alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        <div className="relative container text-center">
          <ScrollReveal>
            <div className="section-tag justify-center text-white/40 mb-6">Prêt à démarrer?</div>
            <h2 className="text-white text-4xl md:text-5xl mb-6">
              Transformez votre extérieur<br className="hidden md:block" />
              <span className="text-gradient"> dès aujourd&apos;hui</span>
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 font-light">
              Visite offerte à domicile, devis personnalisé sans engagement, fabrication française.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base py-4 px-10">
                Demander mon devis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+33474649165" className="btn-outline text-base py-4 px-10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {tel}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </div>
  )
}
