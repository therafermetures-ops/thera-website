import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Lyon | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Lyon. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif depuis 2015.',
  keywords: ['portail professionnel lyon', 'barrière levante lyon', 'portail copropriété lyon', 'portail industriel lyon', 'accès collectif rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-lyon' },
}

export default function Page() {
  return <ProCollectifTemplate city="Lyon" citySlug="lyon" region="Métropole de Lyon & Rhône" />
}
