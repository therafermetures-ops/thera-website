import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import ScrollReveal from './components/ScrollReveal'

export const metadata: Metadata = {
  title: 'THERA Fermetures | Portails, Pergolas & Carports Aluminium - Villefranche-sur-Saône',
  description: 'Experts en portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure depuis 2015. Plus de 500 réalisations dans le Beaujolais. Devis gratuit sous 24h.',
  keywords: ['portails aluminium villefranche-sur-saône', 'pergolas bioclimatiques beaujolais', 'carports sur mesure rhône', 'clôtures aluminium'],
  alternates: { canonical: 'https://thera-fermetures.fr' },
}

const products = [
  {
    title: 'Portails Aluminium',
    desc: 'Battants, coulissants ou motorisés. Design sur mesure et sécurité maximale pour votre propriété.',
    href: '/portails',
    image: '/images/portails/portail-arnas.jpg',
    alt: 'Portail aluminium sur mesure THERA Fermetures',
    tag: 'Le + demandé',
  },
  {
    title: 'Pergolas Bioclimatiques',
    desc: 'Lames orientables motorisées. Profitez de votre terrasse 365 jours par an, pluie ou soleil.',
    href: '/pergolas',
    image: '/images/pergolas/pergola-bioclimatique.jpg',
    alt: 'Pergola bioclimatique motorisée THERA Fermetures',
    tag: 'Tendance 2025',
  },
  {
    title: 'Carports Aluminium',
    desc: 'Protection élégante pour vos véhicules. Structures sur mesure, pose rapide et sans entretien.',
    href: '/carports',
    image: '/images/carports/carport-claustra.png',
    alt: 'Carport aluminium claustra THERA Fermetures',
    tag: null,
  },
  {
    title: 'Clôtures Aluminium',
    desc: 'Délimitez et sécurisez votre propriété. Modèles pleins, ajourés ou mixtes en toutes couleurs.',
    href: '/clotures',
    image: '/images/clotures/cloture-alu.jpg',
    alt: 'Clôture aluminium THERA Fermetures',
    tag: null,
  },
]

const testimonials = [
  {
    text: 'Équipe très professionnelle, à l\'écoute et réactive. Notre portail aluminium est magnifique et parfaitement intégré. Je recommande vivement THERA Fermetures!',
    author: 'M. Bertrand',
    ville: 'Villefranche-sur-Saône',
    produit: 'Portail battant',
    note: 5,
  },
  {
    text: 'Notre pergola bioclimatique a transformé notre terrasse. Travail soigné, délais respectés. On profite maintenant de notre extérieur toute l\'année.',
    author: 'Mme & M. Perrin',
    ville: 'Arnas',
    produit: 'Pergola bioclimatique',
    note: 5,
  },
  {
    text: 'Devis rapide, installation propre en une journée. Le carport s\'intègre parfaitement à la maison. Excellent rapport qualité-prix, merci THERA!',
    author: 'M. Fabre',
    ville: 'Chasselay',
    produit: 'Carport 2 voitures',
    note: 5,
  },
]

const gallery = [
  { src: '/images/realisations/portail-arnas.jpg', alt: 'Portail aluminium Arnas', cat: 'Portail' },
  { src: '/images/realisations/pergola-limonest.jpg', alt: 'Pergola bioclimatique Limonest', cat: 'Pergola' },
  { src: '/images/realisations/portail-caluire.jpg', alt: 'Portail aluminium Caluire', cat: 'Portail' },
  { src: '/images/realisations/cloture-alu.jpg', alt: 'Clôture aluminium', cat: 'Clôture' },
  { src: '/images/realisations/pergola-austral.jpg', alt: 'Pergola motorisée', cat: 'Pergola' },
  { src: '/images/realisations/portail-cloture-amberieux.jpg', alt: 'Portail et clôture Ambérieux', cat: 'Portail' },
]

const zones = [
  'Villefranche-sur-Saône', 'Arnas', 'Chasselay', 'Limonest',
  'Lozanne', 'Trévoux', 'Belleville-en-Beaujolais', 'Reyrieux',
  'Caluire-et-Cuire', 'Dommartin', 'Jassans-Riottier', 'Ambérieux',
]

const avantages = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Qualité Garantie 10 ans',
    desc: 'Aluminium première qualité, non recyclé. Chaque installation bénéficie de notre garantie décennale.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
    ),
    title: 'Fabrication Française',
    desc: 'Nos produits sont fabriqués en France par des partenaires certifiés. Qualité et traçabilité assurées.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Local',
    desc: 'Basés à Chasselay, nous intervenons dans tout le Beaujolais et le Rhône. Un seul interlocuteur de A à Z.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Sur Mesure Total',
    desc: 'Chaque projet est unique. Dimensions, couleurs, finitions : tout est personnalisé selon vos goûts et contraintes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Devis en 24h',
    desc: 'Réponse rapide garantie. Visite gratuite de votre site, devis détaillé sans engagement sous 24 heures.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '98% de Satisfaction',
    desc: 'Plus de 500 clients satisfaits depuis 2015. Nos références parlent d\'elles-mêmes dans toute la région.',
  },
]

const processSteps = [
  { num: '01', title: 'Visite Gratuite', desc: 'Nous venons chez vous, prenons les mesures et analysons votre projet.' },
  { num: '02', title: 'Devis Sous 24h', desc: 'Devis détaillé et personnalisé, sans engagement de votre part.' },
  { num: '03', title: 'Fabrication FR', desc: 'Vos produits sont fabriqués sur mesure par nos partenaires français.' },
  { num: '04', title: 'Installation Pro', desc: 'Nos équipes installent tout en 1-3 jours selon le projet.' },
  { num: '05', title: 'Suivi & Garantie', desc: 'Service après-vente réactif et garantie 10 ans sur tout.' },
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87' },
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/portails/portail-arnas.jpg"
            alt="Portail aluminium THERA Fermetures"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative container pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="max-w-2xl">
            <div className="section-tag text-white/70 mb-6">
              Villefranche-sur-Saône & Beaujolais depuis 2015
            </div>
            <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl">
              Créateurs<br />
              <span className="text-gradient">d&apos;espaces</span><br />
              extérieurs
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure. Plus de <strong className="text-white">500 réalisations</strong> dans votre région.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base py-4 px-8">
                Devis gratuit sous 24h
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/realisations" className="btn-outline text-base py-4 px-8">
                Voir nos réalisations
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              {['✓ Fabrication française', '✓ Garantie 10 ans', '✓ Visite gratuite', '✓ Pose en 1-3 jours'].map((b) => (
                <span key={b} className="text-white/80 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ===== PRODUITS ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Nos solutions</div>
            <h2>Une gamme complète pour<br className="hidden md:block" /> votre aménagement extérieur</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
              Chaque produit est conçu sur mesure et fabriqué en France. Qualité professionnelle, installation incluse.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 100}>
                <Link href={p.href} className="product-card group block h-full">
                  <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="product-card-overlay group-hover:opacity-100" />
                    {p.tag && (
                      <div className="absolute top-4 left-4">
                        <span className="badge bg-primary/90 text-white backdrop-blur-sm">{p.tag}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-white text-xl mb-1">{p.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-primary-light text-sm font-semibold">
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
              Demander mon devis gratuit
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
              <p className="text-muted text-lg mb-8">
                Depuis 2015, THERA Fermetures accompagne les particuliers et professionnels du Beaujolais dans la création de leurs espaces extérieurs. Notre équipe locale connaît parfaitement les spécificités de la région.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avantages.map((a, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl hover:bg-light transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{a.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative h-96 md:h-[520px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/portails/portail-villefranche.jpg"
                    alt="Installation THERA Fermetures Villefranche-sur-Saône"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-dark">Fabrication Française</p>
                      <p className="text-muted text-xs">Aluminium qualité supérieure</p>
                    </div>
                  </div>
                </div>
                {/* Second floating badge */}
                <div className="absolute -top-5 -right-5 bg-primary rounded-2xl p-5 shadow-cta text-white">
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-sm font-semibold opacity-90">réalisations</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== GALERIE TEASER ===== */}
      <section className="section-padding bg-dark">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="section-tag text-white/60 justify-center">Nos réalisations</div>
            <h2 className="text-white">500+ projets réalisés<br className="hidden md:block" /> dans votre région</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative h-48 md:h-60 rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100} className="process-step">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-black mb-4 relative z-10">
                  {step.num}
                </div>
                <h4 className="font-bold mb-2 text-center">{step.title}</h4>
                <p className="text-muted text-sm text-center leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="section-tag justify-center">Témoignages clients</div>
            <h2>Ce que disent<br className="hidden md:block" /> nos clients</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="stars text-xl">★★★★★</span>
              <span className="font-bold text-dark">4.9/5</span>
              <span className="text-muted">— 87 avis vérifiés</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="stars text-lg mb-3">{'★'.repeat(t.note)}</div>
                  <p className="text-dark text-base leading-relaxed flex-1 italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.author[0]}{t.author.split(' ')[1]?.[0]}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{t.author}</p>
                      <p className="text-muted text-xs">{t.ville} · {t.produit}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZONE INTERVENTION ===== */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Zone d&apos;intervention</div>
              <h2>Nous intervenons<br />dans tout le Beaujolais</h2>
              <p className="text-muted text-lg mb-8">
                Basés à Chasselay (69380), nos équipes se déplacent dans tout le département du Rhône et au-delà pour vos projets d&apos;aménagement extérieur.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {zones.map((z) => (
                  <span key={z} className="px-3 py-1.5 bg-white rounded-full text-sm font-semibold text-dark border border-gray-200 hover:border-primary hover:text-primary transition-colors cursor-default">
                    {z}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">+ toute la région</span>
              </div>
              <Link href="/contact" className="btn-primary">
                Vérifier si on intervient chez vous
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="mb-6">Demande de déplacement gratuit</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Visite sur site', detail: 'Gratuite et sans engagement', icon: '📍' },
                    { label: 'Délai de réponse', detail: 'Sous 24 heures', icon: '⏱️' },
                    { label: 'Devis détaillé', detail: 'Personnalisé et transparent', icon: '📋' },
                    { label: 'Horaires', detail: 'Lun-Ven 8h30-17h30', icon: '🕐' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl hover:bg-light transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-dark text-sm">{item.label}</p>
                        <p className="text-muted text-xs">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <a href="tel:+33474649165" className="flex items-center justify-center gap-2 bg-light py-3.5 rounded-xl font-bold text-dark hover:bg-primary/10 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    04 74 64 91 65
                  </a>
                  <Link href="/contact" className="btn-primary justify-center py-3.5">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portails/portail-coulissant-chasselay.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container text-center">
          <ScrollReveal>
            <div className="section-tag justify-center text-white/50">Prêt à démarrer?</div>
            <h2 className="text-white text-4xl md:text-5xl mb-6">
              Transformez votre extérieur<br className="hidden md:block" />
              <span className="text-gradient">dès aujourd&apos;hui</span>
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
              Obtenez votre devis gratuit sans engagement. Réponse sous 24h garantie, visite offerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base py-4 px-10">
                Demander mon devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+33474649165" className="btn-outline text-base py-4 px-10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 64 91 65
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </div>
  )
}
