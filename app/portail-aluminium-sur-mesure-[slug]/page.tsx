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
    title: `Portails Aluminium sur Mesure ${city.name} | THERA Fermetures`,
    description: `Portails aluminium battants, coulissants et autoportants à ${city.name}. Expert local depuis 2015, fabrication française, garantie 10 ans.`,
    alternates: { canonical: 'https://thera-fermetures.fr/portails' },
  }
}

export default async function PortailGeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  return (
    <ProductTemplate
      title={`Portails Aluminium à ${city.name}`}
      subtitle={`Coulissants, battants ou autoportants spécialisés pour ${city.name} et la région ${city.region}`}
      description={`THERA Fermetures conçoit et installe des portails aluminium sur mesure à ${city.name} depuis 2015. Basés à Chasselay, nous desservons toute la région. Chaque portail est fabriqué en France avec aluminium extrudé premium. Plus de 300 coloris disponibles. Nos clients de ${city.name} nous font confiance.`}
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt={`Portail aluminium à ${city.name}`}
      features={['Aluminium extrudé première qualité', '+300 coloris disponibles', 'Battants 1 ou 2 vantaux', 'Coulissants autoportants ou rail', 'Motorisation Somfy / BFT', 'Serrures haute sécurité', 'Certifications Qualicoat®', 'Garantie 10 ans']}
      galleryImages={[{src: '/images/portails/portail-arnas.jpg', alt: 'Arnas', caption: 'Coulissant'}, {src: '/images/portails/portail-trevoux.jpg', alt: 'Trévoux', caption: 'Battant'}]}
      advantages={[{icon: '', title: 'Robustesse', text: '30+ ans durée de vie'}, {icon: '', title: 'Entretien zéro', text: 'Aucun traitement nécessaire'}, {icon: '', title: 'Sécurité', text: 'Détection obstacles'}, {icon: '', title: 'Smart', text: 'Connectée'}, {icon: '', title: 'Français', text: 'Fabrication certifiée'}, {icon: '', title: 'Coloris', text: '+300 options'}]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      ctaText={`Obtenir mon devis portail à ${city.name}`}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Portails',
        areaServed: { '@type': 'City', name: city.name },
      }}
    />
  )
}
