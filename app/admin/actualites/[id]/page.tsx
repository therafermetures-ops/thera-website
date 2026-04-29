import Link from 'next/link'
import { getSupabaseAdmin } from '@/lib/supabase'
import ActualiteForm from '../ActualiteForm'
import { notFound } from 'next/navigation'

export default async function EditerActualite({ params }: { params: { id: string } }) {
  const { data: actualite } = await getSupabaseAdmin()
    .from('actualites')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!actualite) notFound()

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/actualites" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 mb-4">
          ← Retour aux actualités
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Modifier l&apos;actualité</h1>
        <p className="text-gray-500 text-sm mt-1 truncate">{actualite.titre}</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <ActualiteForm actualite={actualite} isEdit />
      </div>
    </div>
  )
}
