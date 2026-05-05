import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '@/app/components/ProductTemplate'
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities-data'

// Use ISR: cache for 60 seconds, then revalidate on next request
export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}
  return {
    title: `Pergola Bioclimatique sur Mesure ${city.name} | THERA Fermetures`,
    description: `Pergolas bioclimatiques motorisées Carat, Elements et VizVersa à ${city.name}. Expert depuis 2015, fabrication française.`,
    alternates: { canonical: 'https://thera-fermetures.fr/pergolas' },
  }
}

export default async function PergolasGeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  return (
    <ProductTemplate
      title={`Pergolas Bioclimatiques à ${city.name}`}
      subtitle={`Terrasses motorisées Carat, Elements et VizVersa dans la région ${city.region}`}
      description={`THERA Fermetures transforme les terrasses de ${city.name} en pièces de vie extérieures. Pergolas bioclimatiques motorisées Carat (France Garantie), Elements et VizVersa. Lames orientables 0°-145°, LED RGBW, chauffage infrarouge. Nos clients de ${city.name} apprécient le confort 365 jours par an.`}
      heroImage="/images/pergolas/pergola-bioclimatique.jpg"
      heroImageAlt={`Pergola bioclimatique à ${city.name}`}
      features={['Lames orientables 0°-145°', 'Motorisation silencieuse', 'Capteur pluie automatique', 'LED RGB intégrée', 'Chauffage infrarouge', 'Stores motorisés', 'Aluminium certifié', 'Pose 1-2 jours']}
      variants={[{title: 'Pergola Carat', badge: 'Origine France Garantie', description: `Premium à poteaux diamant. Très appréciée à ${city.name}.`, specs: ['Poteaux diamant', 'Fabrication Cébel', 'Options ajoutables', 'Zéro vis visible', 'Deux tons', 'Personnalisable'], image: '/images/pergolas/pergola-bioclimatique.jpg', imageAlt: 'Carat'}, {title: 'Pergola Elements', badge: 'Qualité/prix optimal', description: `Design élégant. Idéale pour ${city.name}.`, specs: ['Poteaux chanfreins', 'Zéro vis visible', 'Options LED/stores', 'Qualité pro', '1-2 jours', '10 ans garantie'], image: '/images/pergolas/pergola-austral.jpg', imageAlt: 'Elements'}]}
      galleryImages={[{src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Carat', caption: 'Carat'}, {src: '/images/pergolas/pergola-austral.jpg', alt: 'Elements', caption: 'Elements'}]}
      advantages={[{icon: '', title: 'Toute l\'année', text: 'Fraîcheur été, protection pluie'}, {icon: '', title: 'Intelligent', text: 'Télécommande, smartphone'}, {icon: '', title: 'Premium', text: 'LED, infrarouge'}, {icon: '', title: 'Français', text: 'Cébel Lyon'}, {icon: '', title: 'Valeur', text: 'Immobilière +3-7%'}, {icon: '', title: 'Installation', text: '1-2 jours'}]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Formation']}
      ctaText={`Devis pergola à ${city.name}`}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Pergolas',
        areaServed: { '@type': 'City', name: city.name },
      }}
    />
  )
}
