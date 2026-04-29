'use client'
import { useState, useEffect } from 'react'

type Config = { cle: string; valeur: string; categorie: string }

const LABELS: Record<string, string> = {
  hero_titre: 'Titre principal (page accueil)',
  hero_sous_titre: 'Sous-titre (page accueil)',
  meta_description: 'Description SEO (Google)',
}

export default function AdminTextes() {
  const [configs, setConfigs] = useState<Config[]>([])
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/config?categorie=textes')
      .then(r => r.json())
      .then(data => { setConfigs(data); setLoading(false) })
  }, [])

  const handleChange = (cle: string, valeur: string) => {
    setConfigs(prev => prev.map(c => c.cle === cle ? { ...c, valeur } : c))
  }

  const handleSave = async () => {
    setSaving(true)
    await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configs.map(c => ({ cle: c.cle, valeur: c.valeur }))),
    })
    setSaving(false)
    setSuccess('Modifications sauvegardées !')
    setTimeout(() => setSuccess(''), 3000)
  }

  if (loading) return <div className="p-8 text-gray-400">Chargement...</div>

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Textes</h1>
        <p className="text-gray-500 text-sm mt-1">Modifiez les textes principaux du site</p>
      </div>

      <div className="space-y-6">
        {configs.map(c => (
          <div key={c.cle} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {LABELS[c.cle] || c.cle}
            </label>
            <textarea
              value={c.valeur || ''}
              onChange={e => handleChange(c.cle, e.target.value)}
              rows={c.cle === 'meta_description' || c.cle === 'hero_sous_titre' ? 3 : 2}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 resize-y text-sm"
            />
          </div>
        ))}

        {success && <p className="text-green-600 text-sm bg-green-50 px-4 py-3 rounded-xl font-medium">{success}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          {saving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <p className="text-blue-700 text-sm"><strong>Note :</strong> Ces textes ne modifient pas le site en temps réel. Un redéploiement est nécessaire pour voir les changements en ligne.</p>
      </div>
    </div>
  )
}
