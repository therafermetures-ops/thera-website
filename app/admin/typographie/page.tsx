'use client'

import { useState, useEffect } from 'react'

const FONTS = [
  { value: "'Montserrat', system-ui, sans-serif", label: 'Montserrat (titres)' },
  { value: "'DM Sans', system-ui, sans-serif", label: 'DM Sans (corps)' },
  { value: "'Fraunces', Georgia, serif", label: 'Fraunces (élégant)' },
  { value: "Georgia, 'Times New Roman', serif", label: 'Georgia (classique)' },
  { value: "system-ui, -apple-system, sans-serif", label: 'Système (neutre)' },
]

const WEIGHTS = [
  { value: '300', label: '300 — Léger' },
  { value: '400', label: '400 — Normal' },
  { value: '500', label: '500 — Moyen' },
  { value: '600', label: '600 — Semi-gras' },
  { value: '700', label: '700 — Gras' },
  { value: '800', label: '800 — Extra-gras' },
  { value: '900', label: '900 — Noir' },
]

interface TypoSection {
  id: string
  label: string
  icon: string
  fields: {
    cle: string
    label: string
    type: 'font' | 'size' | 'color' | 'weight'
    default: string
  }[]
}

const SECTIONS: TypoSection[] = [
  {
    id: 'h1',
    label: 'Titre H1',
    icon: '𝗛𝟭',
    fields: [
      { cle: 'typo_h1_font', label: 'Police', type: 'font', default: "'Montserrat', system-ui, sans-serif" },
      { cle: 'typo_h1_size', label: 'Taille', type: 'size', default: 'clamp(38px, 5.5vw, 64px)' },
      { cle: 'typo_h1_weight', label: 'Graisse', type: 'weight', default: '700' },
      { cle: 'typo_h1_color', label: 'Couleur', type: 'color', default: '#111827' },
    ],
  },
  {
    id: 'h2',
    label: 'Titre H2',
    icon: '𝗛𝟮',
    fields: [
      { cle: 'typo_h2_font', label: 'Police', type: 'font', default: "'Montserrat', system-ui, sans-serif" },
      { cle: 'typo_h2_size', label: 'Taille', type: 'size', default: 'clamp(30px, 4vw, 45px)' },
      { cle: 'typo_h2_weight', label: 'Graisse', type: 'weight', default: '700' },
      { cle: 'typo_h2_color', label: 'Couleur', type: 'color', default: '#111827' },
    ],
  },
  {
    id: 'h3',
    label: 'Titre H3',
    icon: '𝗛𝟯',
    fields: [
      { cle: 'typo_h3_font', label: 'Police', type: 'font', default: "'Montserrat', system-ui, sans-serif" },
      { cle: 'typo_h3_size', label: 'Taille (px)', type: 'size', default: '19px' },
      { cle: 'typo_h3_weight', label: 'Graisse', type: 'weight', default: '700' },
      { cle: 'typo_h3_color', label: 'Couleur', type: 'color', default: '#111827' },
    ],
  },
  {
    id: 'body',
    label: 'Texte courant',
    icon: '¶',
    fields: [
      { cle: 'typo_body_font', label: 'Police', type: 'font', default: "'DM Sans', system-ui, sans-serif" },
      { cle: 'typo_body_size', label: 'Taille (px)', type: 'size', default: '18px' },
      { cle: 'typo_body_weight', label: 'Graisse', type: 'weight', default: '400' },
      { cle: 'typo_body_color', label: 'Couleur', type: 'color', default: '#111827' },
    ],
  },
  {
    id: 'muted',
    label: 'Texte discret',
    icon: 'ᴀ',
    fields: [
      { cle: 'typo_muted_color', label: 'Couleur', type: 'color', default: '#4b5563' },
      { cle: 'typo_muted_size', label: 'Taille', type: 'size', default: '1rem' },
    ],
  },
]

// Convertit une valeur CSS de taille en px lisible pour l'input
function sizeToDisplay(val: string): string {
  return val.replace(/clamp\([^,]+,\s*[^,]+,\s*([^)]+)\)/, '$1').trim()
}

export default function AdminTypographie() {
  const [config, setConfig] = useState<Record<string, string>>({})
  const [configLoaded, setConfigLoaded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')

  useEffect(() => { loadConfig() }, [])

  const loadConfig = async () => {
    try {
      const res = await fetch('/api/admin/config?categorie=typographie')
      const data = await res.json()
      const cfg: Record<string, string> = {}
      if (Array.isArray(data)) {
        data.forEach((item: { cle: string; valeur: string }) => {
          if (item.valeur) cfg[item.cle] = item.valeur
        })
      }
      // Pré-remplir avec les valeurs par défaut
      SECTIONS.forEach(section => {
        section.fields.forEach(({ cle, default: def }) => {
          if (!cfg[cle]) cfg[cle] = def
        })
      })
      setConfig(cfg)
    } catch {
      setSaveError('Erreur de chargement')
    } finally {
      setConfigLoaded(true)
    }
  }

  const setField = (cle: string, val: string) =>
    setConfig(prev => ({ ...prev, [cle]: val }))

  const handleSave = async () => {
    setSaving(true)
    setSaveError('')
    try {
      const updates = SECTIONS.flatMap(s =>
        s.fields.map(({ cle }) => ({
          cle,
          valeur: config[cle] || '',
          categorie: 'typographie',
        }))
      )
      const res = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      if (res.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      } else {
        setSaveError('Erreur lors de la sauvegarde')
      }
    } catch {
      setSaveError('Erreur réseau')
    } finally {
      setSaving(false)
    }
  }

  const handleReset = (cle: string, defaultVal: string) => {
    setField(cle, defaultVal)
  }

  return (
    <div className="p-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🔤 Typographie</h1>
          <p className="text-gray-500 text-sm mt-1">
            Police, taille, couleur et graisse de tous les textes du site
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors border border-gray-200 rounded-xl px-4 py-2 bg-white"
        >
          ↗ Voir le site
        </a>
      </div>

      {!configLoaded ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">⏳</div>
          <p>Chargement...</p>
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl">
          {SECTIONS.map(section => (
            <div key={section.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Section header */}
              <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-100">
                <span className="text-xl font-black text-gray-700 w-8 text-center">{section.icon}</span>
                <h2 className="font-bold text-gray-900 text-base">{section.label}</h2>
                {/* Preview */}
                <div
                  className="ml-auto text-sm px-3 py-1 bg-white border border-gray-200 rounded-lg"
                  style={{
                    fontFamily: config[`typo_${section.id}_font`] || undefined,
                    fontSize: section.id === 'h1' ? '18px' : section.id === 'h2' ? '16px' : '14px',
                    fontWeight: config[`typo_${section.id}_weight`] || undefined,
                    color: config[`typo_${section.id}_color`] || config[`typo_muted_color`] || undefined,
                  }}
                >
                  Aperçu texte
                </div>
              </div>

              {/* Fields grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {section.fields.map(({ cle, label, type, default: def }) => (
                  <div key={cle}>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">{label}</label>
                      {config[cle] !== def && (
                        <button
                          onClick={() => handleReset(cle, def)}
                          className="text-xs text-gray-400 hover:text-orange-500 transition-colors"
                          title="Réinitialiser"
                        >
                          ↺ défaut
                        </button>
                      )}
                    </div>

                    {type === 'font' && (
                      <select
                        value={config[cle] || def}
                        onChange={e => setField(cle, e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 bg-white"
                      >
                        {FONTS.map(f => (
                          <option key={f.value} value={f.value}>{f.label}</option>
                        ))}
                      </select>
                    )}

                    {type === 'weight' && (
                      <select
                        value={config[cle] || def}
                        onChange={e => setField(cle, e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 bg-white"
                      >
                        {WEIGHTS.map(w => (
                          <option key={w.value} value={w.value}>{w.label}</option>
                        ))}
                      </select>
                    )}

                    {type === 'color' && (
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={config[cle] || def}
                          onChange={e => setField(cle, e.target.value)}
                          className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                        />
                        <input
                          type="text"
                          value={config[cle] || def}
                          onChange={e => setField(cle, e.target.value)}
                          placeholder="#111827"
                          className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-mono focus:outline-none focus:border-orange-400"
                        />
                      </div>
                    )}

                    {type === 'size' && (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={config[cle] || def}
                          onChange={e => setField(cle, e.target.value)}
                          placeholder={def}
                          className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-mono focus:outline-none focus:border-orange-400"
                        />
                        <span className="text-xs text-gray-400 whitespace-nowrap">ex: 18px</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Error */}
          {saveError && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
              ❌ {saveError}
            </div>
          )}

          {/* Save button */}
          <div className="sticky bottom-6">
            <button
              onClick={handleSave}
              disabled={saving}
              className={`w-full py-4 rounded-2xl font-bold text-base transition-all shadow-lg ${
                saved
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50'
              }`}
            >
              {saved
                ? '✅ Sauvegardé — visible sur le site dans ~1 minute'
                : saving
                ? '⏳ Sauvegarde...'
                : '💾 Appliquer les modifications typographiques'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Ces réglages s&apos;appliquent à toutes les pages du site.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
