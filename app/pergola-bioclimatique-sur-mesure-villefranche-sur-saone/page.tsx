import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductTemplate from '../components/ProductTemplate'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pergola Bioclimatique sur Mesure Villefranche-sur-Saône | THERA Fermetures',
  description: 'Pergolas bioclimatiques motorisees a Villefranche-sur-Saône. Lames orientables, capteur pluie, LED integree. Expert depuis 2015, fabrication francaise. Devis gratuit.',
  keywords: ['pergola bioclimatique Villefranche-sur-Saône', 'pergola motorisee Villefranche-sur-Saône', 'terrasse couverte Rhône (69)'],
  alternates: { canonical: 'https://thera-fermetures.fr/pergolas' },
  openGraph: {
    title: 'Pergola Bioclimatique sur Mesure Villefranche-sur-Saône — THERA Fermetures',
    description: 'Pergola motorisee sur mesure a Villefranche-sur-Saône. Devis gratuit.',
    images: [{ url: '/images/pergolas/pergola-bioclimatique.jpg', width: 1200, height: 630, alt: 'Pergola bioclimatique Villefranche-sur-Saône' }],
  },
}

export default function PergolaPage() {
  return (
    <ProductTemplate
      title="Pergolas Bioclimatiques a Villefranche-sur-Saône"
      subtitle="Terrasses motorisees Carat, Elements et VizVersa — couvrez votre espace exterieur dans la region Rhône (69)"
      description="THERA Fermetures transforme les terrasses de Villefranche-sur-Saône en veritable piece de vie exterieure avec nos pergolas bioclimatiques motorisees. Trois modeles premium disponibles : Pergola Carat (label Origine France Garantie), Pergola Elements (design eleve accessible) et VizVersa (store retractable haute performance). Lames orientables de 0° a 145°, eclairage LED, chauffage infrarouge en option."
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt="Pergola bioclimatique motorisee a Villefranche-sur-Saône par THERA Fermetures"
      features={[
        'Lames orientables de 0° a 145°',
        'Motorisation electrique silencieuse + telecommande',
        'Capteur de pluie automatique disponible',
        'Eclairage LED standard ou RGB dans les lames',
        'Chauffage infrarouge integre en option',
        'Stores et rideaux motorises en option',
        'Aluminium certifie — finitions sans vis apparentes',
        'Pose cle en main en 1 a 2 jours',
      ]}
      variants={[
        {
          title: 'Pergola Carat',
          badge: 'Origine France Garantie',
          description: "La Pergola Carat est notre modele premium, labellisee Origine France Garantie et fabriquee par Cebel, entreprise implantee au sud de Lyon. Ses poteaux en forme de diamant lui conferent une finition originale et raffinee. Tres appreciee des proprietaires de Villefranche-sur-Saône.",
          specs: [
            'Poteaux a section diamant — design unique et contemporain',
            'Label Origine France Garantie — fabrication Cebel (Lyon)',
            'Store Veozip integre au coffre sans rail visible',
            'Fixations invisibles — aucune vis apparente',
            'Finitions deux tons disponibles',
            'Personnalisation totale : dimensions, couleurs, options',
          ],
          image: '/images/pergolas/pergola_bioclimatique_cebel.png',
          imageAlt: 'Pergola Carat bioclimatique THERA Fermetures',
        },
        {
          title: 'Pergola Elements',
          badge: 'Excellent rapport qualite/prix',
          description: "La Pergola Elements est notre modele accessible et haut de gamme. Poteaux avec chanfreins, quincaillerie entierement integree sans vis apparente. Ideale pour les proprietes de Villefranche-sur-Saône, elle offre le meilleur rapport entre investissement et performance.",
          specs: [
            'Poteaux a chanfreins — elegance accessible',
            'Quincaillerie entierement integree — zero vis visible',
            'Memes options que la Carat (LED, stores, chauffage)',
            'Fabrication aluminium qualite professionnelle',
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
        { icon: '', title: 'Pilotage intelligent', text: "Telecommande, app smartphone, capteur de pluie automatique. Votre pergola s'adapte a la meteo." },
        { icon: '', title: 'Plus-value immobiliere', text: 'Une pergola bien integree augmente la valeur et l\'attractivite de votre bien immobilier.' },
        { icon: '', title: 'Options premium', text: 'LED RGBW, chauffage infrarouge, stores motorises — votre terrasse devient un vrai salon exterieur.' },
        { icon: '', title: 'Fabriquee en France', text: 'Cebel, notre fabricant partenaire, est implante au sud de Lyon. Label Origine France Garantie.' },
      ]}
      processSteps={['Visite', 'Etude', 'Devis rapide', 'Installation', 'Formation']}
      presentationImage="/images/pergolas/Pergola d'exposition à Chasselay.jpg"
      presentationImageAlt="Pergola d'exposition à Chasselay — Showroom THERA Fermetures"
      squareImages={true}
      gallerySectionTag="INSPIRATIONS"
      showAdvantages={false}
            seoText="Entreprise Thera Fermetures : vente et installation de pergola bioclimatique design sur mesure à Villefranche-sur-Saône et alentours. Basé à Chasselay entre Villefranche-sur-Saône et Limonest."
            ctaText="Obtenir mon devis pergola a Villefranche-sur-Saône"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Pergolas Bioclimatiques',
        description: 'Specialiste pergolas bioclimatiques a Villefranche-sur-Saône depuis 2015.',
        areaServed: { '@type': 'City', name: 'Villefranche-sur-Saône' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}