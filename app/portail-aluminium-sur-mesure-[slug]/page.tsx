import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '@/app/components/ProductTemplate'
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities-data'

export const revalidate = 60 // ISR

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    return {}
  }

  const title = `Portails Aluminium sur Mesure ${city.name} | THERA Fermetures`
  const description = `Portails aluminium battants, coulissants et autoportants à ${city.name}. Expert local depuis 2015, fabrication française, garantie 10 ans. Visite et devis gratuits à domicile.`

  return {
    title,
    description,
    keywords: [
      `portails aluminium ${city.name}`,
      `portail coulissant ${city.name}`,
      `portail battant ${city.nameWithoutAccents}`,
      `aménagement extérieur ${city.region}`,
      'portail motorisé sur mesure',
    ],
    alternates: {
      canonical: 'https://thera-fermetures.fr/portails',
    },
    openGraph: {
      title,
      description,
      images: [{ url: '/images/portails/portail-arnas.jpg', width: 1200, height: 630, alt: `Portail aluminium ${city.name}` }],
    },
  }
}

export default async function PortailGeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  return (
    <ProductTemplate
      title={`Portails Aluminium à ${city.name}`}
      subtitle={`Coulissants, battants ou autoportants spécialisés pour ${city.name} et la région ${city.region}`}
      description={`THERA Fermetures conçoit et installe des portails aluminium sur mesure à ${city.name} depuis 2015. Nous sommes basés à Chasselay, à proximité immédiate, et desservons toute la région Beaujolais et Rhône. Chaque portail est fabriqué en France avec de l'aluminium extrudé premium (non recyclé) et livré clés en main avec motorisation optionnelle Somfy ou BFT. Plus de 300 coloris disponibles pour s'adapter à votre architecture. Nos clients du secteur de ${city.name} nous font confiance pour la qualité, la réactivité et le suivi personnalisé.`}
      heroImage="/images/portails/portail-arnas.jpg"
      heroImageAlt={`Portail aluminium coulissant sur mesure à ${city.name} par THERA Fermetures`}
      features={[
        'Aluminium extrudé première qualité (non recyclé)',
        '+300 coloris disponibles — RAL standards ou sur demande',
        'Portails battants 1 ou 2 vantaux',
        'Portails coulissants autoportants ou sur rail',
        'Motorisation Somfy / BFT (télécommande, badge, GSM)',
        'Serrures et verrous haute sécurité',
        'Certifications Qualicoat® et Qualimarine® pour le laquage',
        'Garantie structure et peinture 10 ans',
      ]}
      variants={[
        {
          title: 'Portail Coulissant',
          badge: 'Le plus populaire',
          description: 'Le portail coulissant s\'ouvre en glissant latéralement le long d\'une clôture ou d\'un mur. Idéal pour les entrées étroites ou les allées en pente, il est disponible sur rail ou autoportant. Son mécanisme robuste garantit des milliers de cycles d\'ouverture sans défaillance. Compatible avec toutes les motorisations du marché. Excellent choix pour les propriétés à ${city.name}.',
          specs: [
            'Glissement latéral sur rail ou autoportant (sans rail au sol)',
            'Idéal pour allées en pente ou terrains étroits',
            'Motorisation intégrée invisible disponible',
            'Larges dimensions possibles jusqu\'à 10m',
            'Entretien minime — roulements en acier inoxydable',
            'Disponible avec ou sans portillon assorti',
          ],
          image: '/images/portails/portail-coulissant-chasselay.jpg',
          imageAlt: 'Portail coulissant aluminium installé à Chasselay par THERA Fermetures',
        },
        {
          title: 'Portail Battant',
          badge: 'Design premium',
          description: 'Le portail battant s\'ouvre comme une porte classique, en 1 ou 2 vantaux. Élégant et intemporel, il s\'adapte parfaitement à tous les styles architecturaux. La motorisation peut être totalement invisible, intégrée dans le vantail lui-même. Certifié Qualicoat® et Qualimarine®, notre laquage résiste aux environnements les plus difficiles. Très apprécié des propriétaires de ${city.name}.',
          specs: [
            'Ouverture en 1 ou 2 vantaux selon la largeur',
            'Motorisation intégrée et invisible dans le vantail',
            'Certifications Qualicoat® et Qualimarine® pour le laquage',
            'Ferrage haute sécurité — vérins ou bras articulés',
            'Personnalisation totale : lames, barreaux, tôle décorative',
            'Portillon assorti disponible en option',
          ],
          image: '/images/portails/portail-battant-somfy.jpg',
          imageAlt: 'Portail battant aluminium motorisation intégrée Somfy THERA Fermetures',
        },
        {
          title: 'Portail Autoportant',
          badge: 'Sans rail au sol',
          description: 'Le portail autoportant est une variante du coulissant qui ne nécessite aucun rail enterré dans le sol. Parfait pour les allées avec caniveaux, pavés ou en pente, il repose sur des roues portantes fixées sur un support en béton de côté. Solution élégante et robuste pour les grandes ouvertures jusqu\'à 15 mètres. Parfaitement adapté aux configurations de ${city.name}.',
          specs: [
            'Aucun rail enterré dans le sol — installation propre',
            'Idéal pour allées en pente, avec caniveaux ou pavées',
            'Grandes ouvertures possibles jusqu\'à 15m',
            'Contrepoids intégré pour équilibre parfait',
            'Compatible motorisation à galets ou chaîne',
            'Structure renforcée pour les portails lourds',
          ],
          image: '/images/portails/portail-autoportant.jpg',
          imageAlt: 'Portail autoportant aluminium industriel THERA Fermetures',
        },
      ]}
      galleryImages={[
        { src: '/images/portails/portail-arnas.jpg', alt: 'Portail aluminium Arnas', caption: 'Portail coulissant — Arnas' },
        { src: '/images/portails/portail-trevoux.jpg', alt: 'Portail aluminium Trévoux', caption: 'Portail battant — Trévoux' },
        { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail aluminium Villefranche', caption: 'Portail sur mesure — Villefranche' },
        { src: '/images/portails/portail-coulissant-chasselay.jpg', alt: 'Portail coulissant Chasselay', caption: 'Portail coulissant — Chasselay' },
        { src: '/images/portails/portail-battant-design.jpg', alt: 'Portail battant design', caption: 'Portail battant design' },
        { src: '/images/portails/portail-coulissant-arnas.jpg', alt: 'Portail coulissant motorisé Arnas', caption: 'Portail coulissant motorisé — Arnas' },
      ]}
      advantages={[
        { icon: '', title: 'Robustesse extrême', text: 'Aluminium extrudé résistant aux chocs, intempéries et corrosion. Durée de vie 30+ ans.' },
        { icon: '', title: 'Zéro entretien', text: 'L\'aluminium ne rouille pas et ne se déforme pas. Un coup d\'eau suffit pour retrouver l\'éclat du neuf.' },
        { icon: '', title: '+300 coloris', text: 'Blanc, gris anthracite, noir mat, couleurs sur demande. Finition laquée Qualicoat® ultra-durable.' },
        { icon: '', title: 'Sécurité maximale', text: 'Serrures certifiées, motorisation avec détection d\'obstacles. Votre propriété est pleinement protégée.' },
        { icon: '', title: 'Motorisation smart', text: 'Télécommande, smartphone, interphone vidéo. Compatibles Somfy, BFT — maison connectée.' },
        { icon: '', title: 'Fabrication française', text: 'Fabriqués en France par des partenaires certifiés Qualicoat®. Qualité et traçabilité garanties.' },
      ]}
      processSteps={['Visite', 'Étude', 'Devis rapide', 'Installation', 'Mise en service']}
      ctaText={`Obtenir mon devis portail à ${city.name}`}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'THERA Fermetures - Portails Aluminium',
        description: `Spécialiste portails aluminium à ${city.name} depuis 2015. Fabrication française, installation professionnelle.`,
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
