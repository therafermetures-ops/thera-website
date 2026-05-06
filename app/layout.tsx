import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientLayoutShell from './components/ClientLayoutShell'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import { getSupabaseAdmin } from '@/lib/supabase'

export const revalidate = 60

const BASE_URL = 'https://thera-fermetures.fr'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'THERA Fermetures - Portails, Pergolas, Carports Aluminium | Villefranche-sur-Saône',
    template: '%s | THERA Fermetures',
  },
  description: 'Spécialiste portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure depuis 2015. 500+ réalisations dans le Beaujolais. Devis gratuit sous 24h.',
  keywords: ['portails aluminium villefranche-sur-saône', 'pergolas bioclimatiques beaujolais', 'carports sur mesure', 'clôtures aluminium rhône', 'aménagement extérieur'],
  authors: [{ name: 'THERA Fermetures' }],
  creator: 'THERA Fermetures',
  openGraph: {
    title: 'THERA Fermetures - Experts Aménagement Extérieur Beaujolais',
    description: '500+ réalisations de portails aluminium, pergolas bioclimatiques, carports et clôtures depuis 2015.',
    url: BASE_URL,
    siteName: 'THERA Fermetures',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/portails/portail-arnas.jpg',
        width: 1200,
        height: 630,
        alt: 'THERA Fermetures - Portails et Pergolas Aluminium Beaujolais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THERA Fermetures - Portails & Pergolas Beaujolais',
    description: 'Portails aluminium, pergolas bioclimatiques, carports sur mesure depuis 2015. 500+ réalisations.',
    images: ['/images/portails/portail-arnas.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: BASE_URL },
}

async function getTypoConfig(): Promise<Record<string, string>> {
  try {
    const { data } = await getSupabaseAdmin()
      .from('site_config')
      .select('cle,valeur')
      .eq('categorie', 'typographie')
    const cfg: Record<string, string> = {}
    data?.forEach(({ cle, valeur }: { cle: string; valeur: string | null }) => {
      if (valeur) cfg[cle] = valeur
    })
    return cfg
  } catch { return {} }
}

function buildTypoCss(cfg: Record<string, string>): string {
  const v = (key: string, fallback: string) => cfg[key] || fallback
  return `
    :root {
      --typo-h1-font: ${v('typo_h1_font', "'Montserrat', system-ui, sans-serif")};
      --typo-h1-size: ${v('typo_h1_size', 'clamp(38px, 5.5vw, 64px)')};
      --typo-h1-weight: ${v('typo_h1_weight', '700')};
      --typo-h1-color: ${v('typo_h1_color', '#111827')};

      --typo-h2-font: ${v('typo_h2_font', "'Montserrat', system-ui, sans-serif")};
      --typo-h2-size: ${v('typo_h2_size', 'clamp(30px, 4vw, 45px)')};
      --typo-h2-weight: ${v('typo_h2_weight', '700')};
      --typo-h2-color: ${v('typo_h2_color', '#111827')};

      --typo-h3-font: ${v('typo_h3_font', "'Montserrat', system-ui, sans-serif")};
      --typo-h3-size: ${v('typo_h3_size', '19px')};
      --typo-h3-weight: ${v('typo_h3_weight', '700')};
      --typo-h3-color: ${v('typo_h3_color', '#111827')};

      --typo-body-font: ${v('typo_body_font', "'DM Sans', system-ui, sans-serif")};
      --typo-body-size: ${v('typo_body_size', '18px')};
      --typo-body-weight: ${v('typo_body_weight', '400')};
      --typo-body-color: ${v('typo_body_color', '#111827')};

      --typo-muted-color: ${v('typo_muted_color', '#4b5563')};
      --typo-muted-size: ${v('typo_muted_size', '1rem')};
    }
  `.trim()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const typoCfg = await getTypoConfig()
  const typoCss = buildTypoCss(typoCfg)

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: typoCss }} />
      </head>
      <body className="bg-white text-dark antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'THERA Fermetures',
              alternateName: 'Thera Fermetures',
              url: 'https://thera-fermetures.fr',
            }),
          }}
        />
        <ClientLayoutShell>
          {children}
        </ClientLayoutShell>
        <Footer />
        <FloatingCTA />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZV13CGBGJ5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZV13CGBGJ5');
          `}
        </Script>
      </body>
    </html>
  )
}
