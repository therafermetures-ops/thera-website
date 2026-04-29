import Link from 'next/link'
import ActualiteForm from '../ActualiteForm'

export default function NouvelleActualite() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/actualites" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 mb-4">
          ← Retour aux actualités
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Nouvelle actualité</h1>
        <p className="text-gray-500 text-sm mt-1">Chaque actualité améliore votre classement Google local</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <ActualiteForm />
      </div>
    </div>
  )
}
