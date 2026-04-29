'use client'
import { useState, useEffect } from 'react'

type Config = { cle: string; valeur: string; categorie: string }

const LABELS: Record<string, { label: string; desc: string }> = {
  couleur_primaire: { label: 'Couleur principale (orange)', desc: 'Boutons CTA, liens actifs' },
  couleur_accent: { label: 'Couleur accent (vert)', desc: 'Points de confiance, soulignements' },
  couleur_dark: { label: 'Couleur sombre', desc: 'Fonds sombres, navigation' },
}

export default function AdminCouleurs() {
  const [configs, setConfigs] = useState<Config[]>([])
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetch('/api/admin/config?categorie=couleurs')
      .then(r => r.json())
      .then(setConfigs)
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
    setSuccess('Couleurs sauvegardées !')
    setTimeout(() => setSuccess(''), 3000)
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Couleurs</h1>
        <p className="text-gray-500 text-sm mt-1">Personnalisez la palette de couleurs du site</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
        {configs.map(c => {
          const info = LABELS[c.cle]
          return (
            <div key={c.cle}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{info?.label || c.cle}</label>
              {info?.desc && <p className="text-gray-400 text-xs mb-3">{info.desc}</p>}
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={c.valeur || '#000000'}
                  onChange={e => handleChange(c.cle, e.target.value)}
                  className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={c.valeur || ''}
                  onChange={e => handleChange(c.cle, e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 font-mono text-sm"
                  placeholder="#000000"
                />
                <div className="w-12 h-12 rounded-xl border border-gray-100" style={{ backgroundColor: c.valeur || '#000' }} />
              </div>
            </div>
          )
        })}

        {success && <p className="text-green-600 text-sm bg-green-50 px-4 py-3 rounded-xl font-medium">{success}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          {saving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
        <p className="text-yellow-700 text-sm"><strong>Note :</strong> Les couleurs sont sauvegardées en base de données. Un redéploiement est nécessaire pour les appliquer sur le site.</p>
      </div>
    </div>
  )
}
