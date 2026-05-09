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
      title="Portails Acier sur Mesure"
      subtitle="Chaque portail est une création unique — matière noble, design libre, fabrication artisanale dans tout le Beaujolais"
      description="L'acier ouvre un champ de créativité que l'aluminium ne peut pas atteindre. Chez THERA Fermetures, chaque portail acier est une pièce unique, conçue sur mesure à partir d'une feuille blanche. Découpe laser, formes libres, motifs personnalisés, finitions brutes ou laquées — l'acier se plie à toutes vos envies pour un résultat qui ne ressemble à aucun autre."
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt="Portail acier sur mesure installé par THERA Fermetures"
      features={[
        'Fabrication 100% sur mesure — dimensions et design libres',
        'Découpe laser pour motifs et formes personnalisés',
        'Finitions : laqué RAL, galvanisé, brut patiné, corten',
        'Portails battants, coulissants ou autoportants',
        'Motorisation Somfy / BFT intégrée',
        'Serrures et verrous haute sécurité',
        'Traitement anticorrosion garanti',
        'Garantie structure 10 ans',
      ]}
      variants={[
        {
          title: 'Portail Acier Battant',
          badge: 'Design libre',
          description: "Le portail acier battant est la toile blanche du créateur. Découpe laser, barreaux espacés, motifs végétaux ou géométriques — chaque vantail devient une œuvre architecturale. Idéal pour les propriétés avec suffisamment de dégagement, il s'ouvre en 1 ou 2 vantaux, motorisé ou manuel.",
          specs: [],
          image: '/images/portails/portail_battant_alu_somfy_ecully.jpg',
          imageAlt: 'Portail acier battant design sur mesure THERA Fermetures',
        },
        {
          title: 'Portail Acier Coulissant',
          badge: 'Robustesse maximale',
          description: "L'acier coulissant conjugue robustesse extrême et liberté de design. Sa structure plus massive que l'aluminium offre une présence visuelle forte et une résistance sans compromis aux effractions. Idéal pour les grandes ouvertures et les entrées à fort trafic.",
          specs: [],
          image: '/images/portails/portail_coulissant_alu_ajouré_villefranche.jpg',
          imageAlt: 'Portail acier coulissant sur mesure THERA Fermetures',
        },
        {
          title: 'Portail Acier Découpe Laser',
          badge: 'Création unique',
          description: "La découpe laser acier permet de réaliser n'importe quel motif avec une précision millimétrique. Silhouettes, initiales, motifs naturels, arabesques — votre portail devient la signature visuelle de votre propriété. Chaque projet est unique, conçu en collaboration avec nos équipes.",
          specs: [],
          image: '/images/portails/portail-battant-design.jpg',
          imageAlt: 'Portail acier découpe laser personnalisé THERA Fermetures',
        },
      ]}
      afterVariants={
        <>
          <ScrollReveal className="mt-0">
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
          <section className="section-padding bg-light">
            <div className="container">
              <div className="section-tag justify-center">Zones d&apos;intervention</div>
              <h2 className="text-center mb-8">Installation de portails acier dans votre commune</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <Link key={href} href={href} className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-card transition-shadow text-center font-medium text-dark hover:text-accent">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      }
      galleryImages={[
        { src: '/images/portails/portail-arnas.jpg', alt: 'Portail acier Arnas', caption: 'Portail acier — Arnas' },
        { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail acier Trévoux', caption: 'Portail acier — Trévoux' },
        { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail acier Villefranche', caption: 'Portail acier — Villefranche' },
        { src: '/images/portails/portail-coulissant-chasselay.jpg', alt: 'Portail acier Chasselay', caption: 'Portail acier — Chasselay' },
        { src: '/images/portails/portail-battant-design.jpg', alt: 'Portail acier design', caption: 'Portail acier design' },
        { src: '/images/portails/portail-coulissant-arnas.jpg', alt: 'Portail acier motorisé', caption: 'Portail acier motorisé' },
      ]}
      showGalleryLink={false}
      advantages={[
        { icon: '', title: 'Création unique', text: "Chaque portail acier est une pièce originale. Aucun modèle catalogue — tout part de votre projet et de vos envies." },
        { icon: '', title: 'Découpe laser', text: "Motifs personnalisés avec une précision au millimètre. Votre portail devient la signature visuelle de votre propriété." },
        { icon: '', title: 'Robustesse extrême', text: "L'acier offre une résistance aux chocs et aux tentatives d'effraction supérieure à tout autre matériau." },
        { icon: '', title: 'Finitions au choix', text: "Laqué RAL, galvanisé, brut patiné, aspect corten — l'acier se décline dans toutes les esthétiques." },
        { icon: '', title: 'Motorisation intégrée', text: "Compatible toutes motorisations Somfy et BFT. Télécommande, badge, smartphone — confort et sécurité maximaux." },
        { icon: '', title: 'Fabrication locale', text: "Fabriqué par nos partenaires artisans locaux. Qualité de fabrication contrôlée, traçabilité garantie." },
      ]}
      processSteps={['Visite', 'Conception', 'Fabrication', 'Installation', 'Mise en service']}
      ctaText="Concevoir mon portail acier"
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
