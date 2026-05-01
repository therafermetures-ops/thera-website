import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '@/app/components/ProductTemplate'
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities-data'

export const revalidate = 60

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}
  return {
    title: `Carport Aluminium sur Mesure ${city.name} | THERA Fermetures`,
    description: `Carports aluminium sur mesure à ${city.name} pour 1 à 4 voitures. Entretien zéro, fabrication française.`,
    alternates: { canonical: 'https://thera-fermetures.fr/carports' },
  }
}

export default async function CarportsGeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  return (
    <ProductTemplate
      title={`Carports Aluminium à ${city.name}`}
      subtitle={`Abris voiture sur mesure pour 1 à 4 véhicules dans la région ${city.region}`}
      description={`THERA Fermetures conçoit carports aluminium sur mesure à ${city.name} depuis 2015. Basés à Chasselay, nous créons abris voiture parfaitement intégrés. Chaque carport sur mesure selon terrain et maison. Aluminium 30+ ans sans entretien, sans rouille. Nos clients de ${city.name} apprécient qualité et installation express.`}
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt={`Carport aluminium à ${city.name}`}
      features={['Sur mesure 1-4+ voitures', 'Aluminium anti-corrosion', 'Toiture polycarbonate/alu', 'Claustra/bardage/plein', 'LED intégrée possible', 'Déclaration < 20m²', '10 ans garantie', '1-2 jours pose']}
      galleryImages={[{src: '/images/carports/carport-claustra.png', alt: 'Claustra', caption: 'Carport claustra'}]}
      advantages={[{icon: '', title: 'Protection', text: '365 jours par an'}, {icon: '', title: 'Sur mesure', text: 'Aucun compromis'}, {icon: '', title: 'Zéro entretien', text: 'Simple à nettoyer'}, {icon: '', title: 'Design', text: 'Élément architectural'}, {icon: '', title: 'Rapide', text: '1-2 jours'}, {icon: '', title: 'Valeur', text: '+3-7% bien'}]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Livraison']}
      ctaText={`Devis carport à ${city.name}`}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Carports',
        areaServed: { '@type': 'City', name: city.name },
      }}
    />
  )
}
