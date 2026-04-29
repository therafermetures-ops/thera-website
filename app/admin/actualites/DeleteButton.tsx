'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteButton({ id, titre }: { id: string; titre: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Supprimer "${titre}" ?\n\nCette action est irréversible.`)) return
    setLoading(true)
    await fetch(`/api/admin/actualites/${id}`, { method: 'DELETE' })
    router.refresh()
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-gray-400 hover:text-red-500 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
    >
      {loading ? '...' : 'Supprimer'}
    </button>
  )
}
