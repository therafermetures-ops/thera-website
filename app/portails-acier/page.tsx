import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '../components/ScrollReveal'
import ProductTemplate from '../components/ProductTemplate'

export const metadata: Metadata = {
  title: 'Portails Acier sur Mesure — Design & Robustesse | THERA Fermetures',
  description: 'Portails acier sur mesure à Villefranche-sur-Saône. Fabrication unique, design créatif, motorisation Somfy. Chaque portail est une création originale. Devis gratuit sous 24h.',
  keywords: ['portail acier villefranche-sur-saône', 'portail acier sur mesure beaujolais', 'portail acier design', 'portail acier motorisé rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portails-acier' },
  openGraph: {
    title: 'Portails Acier sur Mesure — THERA Fermetures',
    description: 'Portails acier sur mesure, design créatif et fabrication unique. Devis gratuit 24h.',
    images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: 'Portail acier sur mesure THERA Fermetures' }],
  },
}

export default function PortailsAcierPage() {
  return (
    <ProductTemplate
      heroH1="Vente et installation de portails acier moderne et sur mesure à Villefranche-sur-Saône"
      heroTitleBold="Le portail acier"
      heroTitleLight="sur mesure"
      title="Conception sur Mesure"
      subtitle="Chaque portail est une création unique — matière noble, design libre, fabrication artisanale dans tout le Beaujolais"
      description="Chaque portail est fabriqué sur mesure — aucun catalogue standard. L'acier ouvre un champ de créativité que l'aluminium ne peut pas atteindre. Chaque portail acier est une pièce unique, conçue sur mesure à partir d'une feuille blanche. Découpe laser, formes libres, motifs personnalisés, finitions brutes ou laquées — l'acier se plie à toutes vos envies pour un résultat qui ne ressemble à aucun autre."
      heroTagText="Sur mesure · Acier"
      heroImage="/images/portails/Coulissant acier RAL 7035.jpg"
      heroImageAlt="Portail acier coulissant RAL 7035 sur mesure installé par THERA Fermetures"
      presentationImage="/images/portails/Portillon en acier sur pente.jpg"
      presentationImageAlt="Portillon en acier sur pente — réalisation THERA Fermetures"
      presentationImageHeight="580px"
      features={[]}
      variantMinimalText={true}
      variantSectionTitle="Les types de portails"
      gallerySectionLarge={true}
      variantLargeMinHeight={750}
      variantSmallMinHeight={375}
      variants={[
        {
          title: 'Portail Acier Battant',
          badge: 'Design libre',
          description: "Idéal pour les entrées avec suffisamment de dégagement, il s'ouvre en 1 ou 2 vantaux, motorisé ou manuel.",
          specs: [],
          image: '/images/Portail acier/Portail battant acier moderne.avif',
          imageAlt: 'Portail battant acier moderne sur mesure THERA Fermetures',
        },
        {
          title: 'Portail Acier Coulissant',
          badge: 'Robustesse maximale',
          description: "L'acier coulissant conjugue robustesse extrême et liberté de design. Sa structure plus massive que l'aluminium offre une présence visuelle forte et une résistance sans compromis aux effractions. Idéal pour les grandes ouvertures et les entrées à fort trafic.",
          specs: [],
          image: '/images/Portail acier/Portail coulissant acier sur mesure Lozanne.avif',
          imageAlt: 'Portail coulissant acier sur mesure Lozanne THERA Fermetures',
        },
        {
          title: 'Portail Acier Découpe Laser',
          badge: 'Création unique',
          description: "La découpe laser acier permet de réaliser n'importe quel motif avec une précision millimétrique. Silhouettes, initiales, motifs naturels, arabesques — votre portail devient la signature visuelle de votre propriété. Chaque projet est unique, conçu en collaboration avec nos équipes.",
          specs: [],
          image: '/images/Portail acier/Portail acier jouré et motif laser.avif',
          imageAlt: 'Portail acier ajouré motif laser découpe THERA Fermetures',
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

          <ScrollReveal className="mt-0 px-4 sm:px-8 md:px-[72px] pb-16">
          <div className="flex flex-col sm:flex-row overflow-hidden border border-gray-100 shadow-card">
            <div className="relative w-full sm:w-3/5 h-80 sm:h-96 flex-shrink-0">
              <Image
                src="/images/portails/portail_coulissant_en_pente.png"
                alt="Portail acier sur mesure THERA Fermetures"
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
        </>
      }
      seoLinksSection={
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">Zones d&apos;intervention — Portails Acier</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { href: '/portail-acier-sur-mesure-villefranche-sur-saone', label: 'Villefranche-sur-Saône' },
              { href: '/portail-acier-sur-mesure-belleville-en-beaujolais', label: 'Belleville-en-Beaujolais' },
              { href: '/portail-acier-sur-mesure-limonest', label: 'Limonest' },
              { href: '/portail-acier-sur-mesure-trevoux', label: 'Trévoux' },
              { href: '/portail-acier-sur-mesure-lozanne', label: 'Lozanne' },
              { href: '/portail-acier-sur-mesure-caluire-et-cuire', label: 'Caluire-et-Cuire' },
              { href: '/portail-acier-sur-mesure-anse', label: 'Anse' },
              { href: '/portail-acier-sur-mesure-arnas', label: 'Arnas' },
              { href: '/portail-acier-sur-mesure-quincieux', label: 'Quincieux' },
              { href: '/portail-acier-sur-mesure-neuville-sur-saone', label: 'Neuville-sur-Saône' },
              { href: '/portail-acier-sur-mesure-chasselay', label: 'Chasselay' },
              { href: '/portail-acier-sur-mesure-jassans-riottier', label: 'Jassans-Riottier' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-xs text-gray-400 hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      }
      galleryImages={[
        { src: '/images/Portail acier/Portail battant acier moderne.avif', alt: 'Portail battant acier moderne', caption: 'Portail battant acier moderne' },
        { src: '/images/Portail acier/Portail coulissant acier sur mesure Lozanne.avif', alt: 'Portail coulissant acier Lozanne', caption: 'Portail coulissant acier — Lozanne' },
        { src: '/images/Portail acier/Portail acier jouré et motif laser.avif', alt: 'Portail acier motif laser', caption: 'Portail acier ajouré laser' },
        { src: '/images/Portail acier/portail_coulissant_en_pente.avif', alt: 'Portail coulissant acier en pente', caption: 'Portail coulissant acier en pente' },
        { src: '/images/Portail acier/Portillon en acier sur pente.avif', alt: 'Portillon acier sur pente', caption: 'Portillon acier sur pente', objectPosition: 'center bottom' },
        { src: '/images/portails/Coulissant acier RAL 7035.jpg', alt: 'Portail coulissant acier RAL 7035', caption: 'Coulissant acier RAL 7035' },
      ]}
      showGalleryLink={false}
      galleryObjectFit="cover"
      advantages={[
        { icon: '', title: 'Création unique', text: "Chaque portail acier est une pièce originale. Aucun modèle catalogue — tout part de votre projet et de vos envies." },
        { icon: '', title: 'Découpe laser', text: "Motifs personnalisés avec une précision au millimètre. Votre portail devient la signature visuelle de votre propriété." },
        { icon: '', title: 'Robustesse extrême', text: "L'acier offre une résistance aux chocs et aux tentatives d'effraction supérieure à tout autre matériau." },
        { icon: '', title: 'Finitions au choix', text: "Laqué RAL, galvanisé, brut patiné, aspect corten — l'acier se décline dans toutes les esthétiques." },
        { icon: '', title: 'Motorisation intégrée', text: "Compatible toutes motorisations Somfy et BFT. Télécommande, badge, smartphone — confort et sécurité maximaux." },
        { icon: '', title: 'Fabrication locale', text: "Fabriqué par nos partenaires artisans locaux. Qualité de fabrication contrôlée, traçabilité garantie." },
      ]}
      processSteps={['Visite', 'Conception', 'Fabrication', 'Installation', 'Mise en service']}
      ctaText=""
      seoText="Entreprise Thera Fermetures : vente et installation de portail acier sur mesure, découpe laser, design personnalisé. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Portails Acier sur Mesure',
        description: 'Portails acier sur mesure avec découpe laser, design personnalisé, motorisation Somfy.',
        provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures', telephone: '+33474659165' },
        areaServed: 'Beaujolais, Villefranche-sur-Saône, Rhône',
        serviceType: 'Installation de portails acier sur mesure',
      }}
    />
  )
}
