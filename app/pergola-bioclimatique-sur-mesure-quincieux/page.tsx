import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductTemplate from '../components/ProductTemplate'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pergola Bioclimatique Design Cebel Quincieux — Devis Gratuit, Installateur Sur Mesure | THERA Fermetures',
  description: 'Installateur de pergolas bioclimatiques Cebel sur mesure à Quincieux : design moderne, lames orientables motorisées, LED intégrées. Devis gratuit par THERA Fermetures dans le nord lyonnais (69).',
  alternates: { canonical: 'https://thera-fermetures.fr/pergola-bioclimatique-sur-mesure-quincieux' },
  openGraph: {
    title: 'Pergola Bioclimatique Design Cebel Quincieux | THERA Fermetures',
    description: 'Installateur de pergolas bioclimatiques Cebel sur mesure à Quincieux : design moderne, lames orientables motorisées, LED intégrées. Devis gratuit par THERA Fermetures dans le nord lyonnais (69).',
    images: [{ url: '/images/pergolas/pergola-villefranche.jpg', width: 1200, height: 630, alt: 'Pergola Bioclimatique Quincieux' }],
  },
}

export default function PergolaPage() {
  return (
    <ProductTemplate
      title="Pergolas Bioclimatiques à Quincieux"
      subtitle="Terrasses motorisées — grandes propriétés du Val de Saône, jusqu'à 60m² couverts"
      description="Les propriétés spacieuses de Quincieux, dans le Val de Saône, disposent souvent de grandes terrasses qui accueillent idéalement nos pergolas bioclimatiques de grande dimension. THERA Fermetures propose des structures pouvant couvrir jusqu'à 60m² avec lames motorisées, stores et éclairage LED intégrés. Devis sur site sous 48h depuis Chasselay."
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt="Pergola bioclimatique motorisée a Quincieux par THERA Fermetures"
      features={[
        'Lames orientables de 0° a 145°',
        'Motorisation électrique silencieuse + télécommande',
        'Capteur de pluie automatique disponible',
        'Eclairage LED standard ou RGB dans les lames',
        'Chauffage infrarouge intégré en option',
        'Stores et rideaux motorisés en option',
        'Aluminium certifié — finitions sans vis apparentes',
        'Pose cle en main en 1 a 2 jours',
      ]}
      variants={[
        {
          title: 'Pergola Carat',
          badge: 'Origine France Garantie',
          description: "La Pergola Carat est notre modele premium, labellisee Origine France Garantie et fabriquée par Cebel, entreprise implantee au sud de Lyon. Ses poteaux en forme de diamant lui conferent une finition originale et raffinee. Très appréciée des propriétaires de Quincieux.",
          specs: [
            'Poteaux a section diamant — design unique et contemporain',
            'Label Origine France Garantie — fabrication Cebel (Lyon)',
            'Store Veozip intégré au coffre sans rail visible',
            'Fixations invisibles — aucune vis apparente',
            'Finitions deux tons disponibles',
            'Personnalisation totale : dimensions, couleurs, options',
          ],
          image: '/images/pergolas/pergola_bioclimatique_cebel.png',
          imageAlt: 'Pergola Carat bioclimatique THERA Fermetures',
        },
        {
          title: 'Pergola Elements',
          badge: 'Excellent rapport qualité/prix',
          description: "La Pergola Elements est notre modele accessible et haut de gamme. Poteaux avec chanfreins, quincaillerie entierement intégrée sans vis apparente. Ideale pour les proprietes de Quincieux, elle offre le meilleur rapport entre investissement et performance.",
          specs: [
            'Poteaux a chanfreins — elegance accessible',
            'Quincaillerie entierement intégrée — zero vis visible',
            'Memes options que la Carat (LED, stores, chauffage)',
            'Fabrication aluminium qualité professionnelle',
            'Installation rapide — 1 a 2 jours selon dimensions',
            'Garantie 10 ans structure et finitions',
          ],
          image: '/images/pergolas/pergola-bioclimatique-modele-abordable.avif',
          imageAlt: 'Pergola Elements bioclimatique THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola Carat', caption: 'Pergola Carat' },
        { src: '/images/pergolas/pergola_bioclimatique_bellevile.png', alt: 'Pergola Elements', caption: 'Pergola Elements' },
        { src: '/images/pergolas/pergola-store.jpg', alt: 'VizVersa store', caption: 'VizVersa store retractable' },
      ]}
      afterVariants={
        <section className="section-padding">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <div className="section-tag justify-center">Complémentaires</div>
              <h2>Personnalisable<br className="hidden md:block" /> et évolutive</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
                Les équipements complémentaires pour personnalisér votre pergola.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/pergolas/structure bi-ton.avif", label: "Structure bi-ton" },
                { src: "/images/pergolas/prise-de-courant.avif", label: "Prise de courant" },
                { src: "/images/pergolas/éclairage-blanc.avif", label: "Éclairage blanc" },
                { src: "/images/pergolas/éclairage-couleur.avif", label: "Éclairage couleur" },
                { src: "/images/pergolas/panneau-brise-vue.avif", label: "Panneau brise-vue" },
                { src: "/images/pergolas/liserés.avif", label: "Liserés" },
                { src: "/images/pergolas/enceinte-intégrée.avif", label: "Enceinte intégrée" },
                { src: "/images/pergolas/Pergola connectée.jpg", label: "Pergola connectée" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative h-48 overflow-hidden shadow-card group">
                    <Image src={item.src} alt={item.label} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="text-center mt-12">
              <p className="text-muted text-lg max-w-3xl mx-auto mb-8">
                La pergola Carat propose des stores dissimulés dans la structure — pas de coffre visible, ni de rails apparents — pour une esthétique parfaite.
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
      }
      advantages={[
        { icon: '', title: "Confort toute l'annee", text: 'Regulation naturelle par orientation des lames. Fraicheur l\'ete, protection pluie toute l\'annee.' },
        { icon: '', title: 'Etancheite parfaite', text: 'Lames fermees a 145° : protection totale contre la pluie. Profitez de votre terrasse meme par mauvais temps.' },
        { icon: '', title: 'Pilotage intelligent', text: "Télécommande, app smartphone, capteur de pluie automatique. Votre pergola s'adapté a la meteo." },
        { icon: '', title: 'Plus-value immobiliere', text: 'Une pergola bien intégrée augmente la valeur et l\'attractivité de votre bien immobilier.' },
        { icon: '', title: 'Options premium', text: 'LED RGBW, chauffage infrarouge, stores motorisés — votre terrasse devient un vrai salon extérieur.' },
        { icon: '', title: 'Fabriquee en France', text: 'Cebel, notre fabricant partenaire, est implante au sud de Lyon. Label Origine France Garantie.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Formation']}
      presentationImage="/images/pergolas/Pergola d'exposition à Chasselay.jpg"
      presentationImageAlt="Pergola d'exposition à Chasselay — Showroom THERA Fermetures"
      squareImages={true}
      gallerySectionTag="INSPIRATIONS"
      showAdvantages={false}
      seoText="Entreprise Thera Fermetures : vente et installation de pergola bioclimatique design sur mesure à Quincieux et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
      heroH1="Pergola Bioclimatique Quincieux — Installation Sur Mesure par THERA Fermetures"
      ctaText="Obtenir mon devis pergola a Quincieux"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures',
        description: 'Installateur de pergolas bioclimatiques sur mesure à Quincieux. Lames orientables motorisées, fabrication française. Devis gratuit.',
        url: 'https://thera-fermetures.fr/pergola-bioclimatique-sur-mesure-quincieux',
        telephone: '+33474659165',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '134 ZAC Crouloup',
          addressLocality: 'Chasselay',
          postalCode: '69380',
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'City', name: 'Quincieux' },
        priceRange: '€€€',
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
        ],
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}
