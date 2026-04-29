'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Actualite } from '@/lib/supabase'

interface Props {
  actualite?: Actualite
  isEdit?: boolean
}

export default function ActualiteForm({ actualite, isEdit }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [titre, setTitre] = useState(actualite?.titre || '')
  const [description, setDescription] = useState(actualite?.description || '')
  const [photoUrl, setPhotoUrl] = useState(actualite?.photo_url || '')
  const [statut, setStatut] = useState<'publiee' | 'brouillon' | 'archive'>(actualite?.statut || 'publiee')
  const [date, setDate] = useState(actualite?.date_publiee?.slice(0, 10) || new Date().toISOString().slice(0, 10))

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
    if (res.ok) {
      const { url } = await res.json()
      setPhotoUrl(url)
    } else {
      setError('Erreur upload image')
    }
    setUploading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!titre.trim() || !description.trim()) {
      setError('Le titre et la description sont obligatoires')
      return
    }
    setLoading(true)
    setError('')

    const payload = { titre, description, photo_url: photoUrl || null, statut, date_publiee: date }

    const res = await fetch(
      isEdit ? `/api/admin/actualites/${actualite!.id}` : '/api/admin/actualites',
      {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    if (res.ok) {
      setSuccess(isEdit ? 'Actualité modifiée !' : 'Actualité publiée !')
      setTimeout(() => router.push('/admin/actualites'), 1000)
    } else {
      const data = await res.json()
      setError(data.error || 'Erreur lors de la sauvegarde')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Titre */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Titre <span className="text-red-400">*</span>
          <span className="ml-2 text-gray-400 font-normal">({titre.length}/120 caractères)</span>
        </label>
        <input
          type="text"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          maxLength={120}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
          placeholder="Ex: Nouvelle réalisation : Portail coulissant aluminium gris anthracite"
        />
        <p className="text-gray-400 text-xs mt-1">Incluez des mots-clés locaux pour le SEO (ex: Villefranche, Beaujolais)</p>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Description <span className="text-red-400">*</span>
          <span className="ml-2 text-gray-400 font-normal">({description.length} caractères — min. 200 recommandés)</span>
        </label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={7}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 resize-y"
          placeholder="Décrivez le projet, le lieu, les matériaux... Plus c'est détaillé, meilleur c'est pour Google !"
        />
      </div>

      {/* Photo */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Photo (optionnelle)</label>
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${uploading ? 'border-orange-300 bg-orange-50' : 'border-gray-200 hover:border-orange-400 hover:bg-orange-50'}`}>
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageUpload} className="hidden" />
              {uploading ? (
                <p className="text-orange-500 text-sm font-medium">Upload en cours...</p>
              ) : (
                <>
                  <p className="text-gray-400 text-sm">Cliquer pour choisir une photo</p>
                  <p className="text-gray-300 text-xs mt-1">JPG, PNG, WebP — max 5 MB</p>
                </>
              )}
            </label>
            {photoUrl && (
              <div className="mt-3 flex items-center gap-2">
                <img src={photoUrl} alt="preview" className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-green-600 text-xs font-medium">Photo uploadée</p>
                  <button type="button" onClick={() => setPhotoUrl('')} className="text-red-400 text-xs hover:underline">Supprimer</button>
                </div>
              </div>
            )}
            {!photoUrl && (
              <div className="mt-2">
                <input
                  type="url"
                  value={photoUrl}
                  onChange={e => setPhotoUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 text-sm"
                  placeholder="Ou collez une URL d'image..."
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statut + Date */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Statut</label>
          <select
            value={statut}
            onChange={e => setStatut(e.target.value as 'publiee' | 'brouillon' | 'archive')}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white"
          >
            <option value="publiee">Publiée (visible sur le site)</option>
            <option value="brouillon">Brouillon (non visible)</option>
            <option value="archive">Archive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Date de publication</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
          />
        </div>
      </div>

      {/* Messages */}
      {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>}
      {success && <p className="text-green-600 text-sm bg-green-50 px-4 py-3 rounded-xl font-medium">{success}</p>}

      {/* Boutons */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          {loading ? 'Sauvegarde...' : isEdit ? 'Enregistrer les modifications' : 'Publier l\'actualité'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/actualites')}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  )
}
