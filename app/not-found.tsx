import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page introuvable</h2>
        <p className="text-gray-600 mb-8">
          Cette page n&apos;existe pas. Revenez à l&apos;accueil pour découvrir nos portails, pergolas et carports.
        </p>
        <Link href="/" className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
