import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-dark antialiased">
        <Header />
        <main className="pt-[108px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
