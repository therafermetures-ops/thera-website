import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Trévoux | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Trévoux. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif.',
  keywords: ['portail professionnel trevoux', 'barrière levante trevoux', 'portail copropriété trevoux', 'accès collectif ain rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-trevoux' },
}

export default function Page() {
  return <ProCollectifTemplate city="Trévoux" citySlug="trevoux" region="Ain & Rhône" />
}
