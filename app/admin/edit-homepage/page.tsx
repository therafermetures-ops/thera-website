'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type ConfigItem = { id: string; cle: string; valeur: string; categorie: string }

export default function EditHomepage() {
  const [config, setConfig] = useState<ConfigItem[]>([])
  const [textes, setTextes] = useState<ConfigItem[]>([])
  const [couleurs, setCouleurs] = useState<ConfigItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const res = await fetch('/api/admin/config')
      const data = await res.json()
      setConfig(data)
      setTextes(data.filter((item: ConfigItem) => item.categorie === 'textes'))
      setCouleurs(data.filter((item: ConfigItem) => item.categorie === 'couleurs'))
    } catch (err) {
      console.error('Erreur:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (cle: string, newValue: string) => {
    const updated = config.map(item =>
      item.cle === cle ? { ...item, valeur: newValue } : item
    )
    setConfig(updated)
    setTextes(updated.filter(item => item.categorie === 'textes'))
    setCouleurs(updated.filter(item => item.categorie === 'couleurs'))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const updates = config.map(({ cle, valeur }) => ({ cle, valeur }))
      const res = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      if (res.ok) {
        alert('✅ Changements sauvegardés!')
      } else {
        alert('❌ Erreur lors de la sauvegarde')
      }
    } catch (err) {
      console.error('Erreur:', err)
      alert('❌ Erreur')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8">Chargement...</div>

  return (
    <div className="flex gap-6 p-8 h-full overflow-hidden">
      {/* === COLONNE GAUCHE : FORMULAIRES === */}
      <div className="w-1/2 overflow-y-auto pr-4">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-8">Éditeur Accueil</h1>

          {/* TEXTES */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-dark">📝 Textes</h2>
            <div className="space-y-4">
              {textes.map(item => (
                <div key={item.cle}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {item.cle.replace(/_/g, ' ')}
                  </label>
                  <textarea
                    value={item.valeur || ''}
                    onChange={(e) => handleChange(item.cle, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* COULEURS */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-dark">🎨 Couleurs</h2>
            <div className="space-y-4">
              {couleurs.map(item => (
                <div key={item.cle} className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700 flex-1">
                    {item.cle.replace(/_/g, ' ')}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={item.valeur || '#000000'}
                      onChange={(e) => handleChange(item.cle, e.target.value)}
                      className="w-12 h-12 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={item.valeur || ''}
                      onChange={(e) => handleChange(item.cle, e.target.value)}
                      className="w-24 p-2 border border-gray-300 rounded text-sm font-mono"
                      placeholder="#000000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOUTON SAUVEGARDER */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 disabled:opacity-50"
          >
            {saving ? 'Sauvegarde...' : '💾 Sauvegarder les changements'}
          </button>
        </div>
      </div>

      {/* === COLONNE DROITE : APERÇU === */}
      <div className="w-1/2 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-white h-full overflow-y-auto">
          {/* APERÇU DU SITE */}
          <div className="p-8 space-y-8">
            {/* Hero Section Preview */}
            <div className="bg-gradient-to-r from-dark to-blue-900 text-white p-12 rounded-xl text-center">
              <h1 className="text-4xl font-black mb-4" style={{ fontFamily: 'Montserrat' }}>
                {textes.find(t => t.cle === 'hero_titre')?.valeur || 'THERA Fermetures'}
              </h1>
              <p className="text-xl">
                {textes.find(t => t.cle === 'hero_description')?.valeur || 'Vos portes, portails et clôtures sur mesure'}
              </p>
            </div>

            {/* About Section Preview */}
            <div className="border-l-4 pl-6" style={{ borderColor: couleurs.find(c => c.cle === 'primary_color')?.valeur || '#FF6B35' }}>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
                {textes.find(t => t.cle === 'about_titre')?.valeur || 'À Propos'}
              </h2>
              <p className="text-gray-700">
                {textes.find(t => t.cle === 'about_text')?.valeur || 'Description'}
              </p>
            </div>

            {/* Color Palette Preview */}
            <div>
              <h3 className="text-lg font-bold mb-4">Palette de couleurs</h3>
              <div className="grid grid-cols-3 gap-4">
                {couleurs.map(couleur => (
                  <div key={couleur.cle} className="text-center">
                    <div
                      className="w-24 h-24 rounded-lg mx-auto mb-2 border-2 border-gray-200"
                      style={{ backgroundColor: couleur.valeur || '#000000' }}
                    />
                    <p className="text-sm font-mono text-gray-600">{couleur.valeur}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Preview */}
            <div className="text-center">
              <button
                className="px-8 py-3 rounded-lg font-bold text-white"
                style={{ backgroundColor: couleurs.find(c => c.cle === 'accent_color')?.valeur || '#F7931E' }}
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
