import { Metadata } from 'next'
import ProCollectifTemplate from '../components/ProCollectifTemplate'

export const metadata: Metadata = {
  title: 'Portails & Barrières Professionnels Belleville-en-Beaujolais | THERA Fermetures',
  description: 'Installation portails copropriété, portails industriels et barrières levantes à Belleville-en-Beaujolais. Devis gratuit sous 48h. THERA Fermetures — expert accès professionnels et collectif.',
  keywords: ['portail professionnel belleville-en-beaujolais', 'barrière levante belleville', 'portail copropriété belleville', 'accès collectif beaujolais'],
  alternates: { canonical: 'https://thera-fermetures.fr/portail-barriere-professionnel-collectif-belleville' },
}

export default function Page() {
  return <ProCollectifTemplate city="Belleville-en-Beaujolais" citySlug="belleville" region="Beaujolais & Rhône" />
}
