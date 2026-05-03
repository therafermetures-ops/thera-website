import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Mâcon | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Mâcon. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif.',
  keywords: ['portail professionnel macon', 'barrière levante macon', 'portail copropriété macon', 'accès collectif saône-et-loire'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-macon' },
}

export default function Page() {
  return <ProCollectifTemplate city="Mâcon" citySlug="macon" region="Saône-et-Loire & Rhône" />
}
