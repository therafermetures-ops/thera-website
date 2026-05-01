import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '@/app/components/ProductTemplate'
import { getCityBySlug } from '@/lib/cities-data'

export const dynamic = 'force-dynamic'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const city = getCityBySlug(slug)

  if (!city) {
    return {}
  }

  const title = `Carport Aluminium sur Mesure ${city.name} | THERA Fermetures`
  const description = `Carports aluminium sur mesure à ${city.name} pour 1 à 4 voitures. Design épuré, pose rapide, entretien zéro. Expert depuis 2015, fabrication française, installation clé en main.`

  return {
    title,
    description,
    keywords: [
      `carport aluminium ${city.name}`,
      `abri voiture ${city.nameWithoutAccents}`,
      `carport sur mesure ${city.region}`,
      `protection voiture ${city.name}`,
      'abri voiture design beaujolais',
    ],
    alternates: {
      canonical: 'https://thera-fermetures.fr/carports',
    },
    openGraph: {
      title,
      description,
      images: [{ url: '/images/carports/carport-claustra.png', width: 1200, height: 630, alt: `Carport aluminium ${city.name}` }],
    },
  }
}

export default async function CarportsGeoPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  return (
    <ProductTemplate
      title={`Carports Aluminium à ${city.name}`}
      subtitle={`Abris voiture sur mesure pour 1 à 4 véhicules — protection élégante et durable dans la région ${city.region}`}
      description={`THERA Fermetures conçoit et installe des carports aluminium sur mesure à ${city.name} depuis 2015. Basés à Chasselay, nous créons des abris voiture parfaitement intégrés à l'architecture de votre maison. Chaque carport est dimensionné selon votre terrain, votre maison et vos véhicules — aucun compromis. L'aluminium traité résiste à toutes les conditions climatiques (pluie, grêle, neige, soleil) sans rouille ni déformation, pour des dizaines d'années sans entretien. Options de toiture disponibles : polycarbonate, aluminium ou panneaux sandwich. Claustra, bardage ou façade pleine pour un rendu harmonieux avec votre habitat. Nos clients de ${city.name} et ${city.nearbyCity} apprécient la qualité, l'installation express (1-2 jours) et l'entretien zéro.`}
      heroImage="/images/carports/carport-claustra.png"
      heroImageAlt={`Carport aluminium sur mesure à ${city.name} par THERA Fermetures`}
      features={[
        'Dimensions sur mesure (1 à 4+ voitures)',
        'Structure aluminium anti-corrosion',
        'Toiture polycarbonate, aluminium ou panneaux sandwich',
        'Options claustra, bardage ou façade pleine',
        'Éclairage LED intégré possible',
        'Déclaration préalable facilitée (< 20m²)',
        'Garantie 10 ans structure et finitions',
        'Installation en 1-2 jours',
      ]}
      galleryImages={[
        { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', caption: 'Carport claustra aluminium' },
      ]}
      advantages={[
        { icon: '', title: 'Protection totale', text: 'Pluie, grêle, neige, soleil — vos véhicules sont protégés 365 jours par an sans risque de dommages.' },
        { icon: '', title: 'Sur mesure absolu', text: 'Chaque carport est dimensionné selon votre terrain, votre maison et vos véhicules. Aucun compromis.' },
        { icon: '', title: 'Entretien zéro', text: 'L\'aluminium traité ne rouille pas, ne se déforme pas et ne nécessite aucun traitement. Simple à nettoyer.' },
        { icon: '', title: 'Design intégré', text: 'Coloris assortis à votre maison, claustra, bardage — votre carport devient un élément architectural à part entière.' },
        { icon: '', title: 'Installation express', text: 'Grâce à notre fabrication précise, la pose se fait en 1-2 jours avec un minimum de désagrément.' },
        { icon: '', title: 'Valeur immobilière', text: 'Un carport bien intégré peut augmenter la valeur de votre bien de 3 à 7% selon les agences immobilières.' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Livraison']}
      ctaText={`Obtenir mon devis carport à ${city.name}`}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Carports Aluminium',
        description: `Spécialiste carports aluminium à ${city.name} depuis 2015. Protection voitures sur mesure, entretien zéro.`,
        brand: { '@type': 'Brand', name: 'THERA Fermetures' },
        areaServed: {
          '@type': 'City',
          name: city.name,
        },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      }}
    />
  )
}
