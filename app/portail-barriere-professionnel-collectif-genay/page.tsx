import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Genay | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Genay. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif.',
  keywords: ['portail professionnel genay', 'barrière levante genay', 'portail copropriété genay', 'accès collectif rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-genay' },
}

export default function Page() {
  return <ProCollectifTemplate city="Genay" citySlug="genay" region="Rhône & Ain" />
}
