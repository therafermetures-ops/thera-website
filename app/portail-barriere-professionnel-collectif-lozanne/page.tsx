import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Lozanne | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Lozanne. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif.',
  keywords: ['portail professionnel lozanne', 'barrière levante lozanne', 'portail copropriété lozanne', 'accès collectif rhône'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-lozanne' },
}

export default function Page() {
  return <ProCollectifTemplate city="Lozanne" citySlug="lozanne" region="Beaujolais & Rhône" />
}
