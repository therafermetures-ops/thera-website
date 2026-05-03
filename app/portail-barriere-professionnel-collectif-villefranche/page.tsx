import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Villefranche-sur-Saône | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Villefranche-sur-Saône. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif depuis 2015.',
  keywords: ['portail professionnel villefranche-sur-saone', 'barrière levante villefranche', 'portail copropriété beaujolais', 'accès collectif rhône', 'portail industriel villefranche'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-villefranche' },
}

export default function Page() {
  return <ProCollectifTemplate city="Villefranche-sur-Saône" citySlug="villefranche" region="Beaujolais & Rhône" />
}
