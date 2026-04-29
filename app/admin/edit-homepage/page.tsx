'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Actualite = {
  id: string
  titre: string
  description: string
  photo_url: string | null
  statut: 'publiee' | 'brouillon' | 'archive'
  date_publiee: string
}

type Section = 'hero' | 'services' | 'actualites' | 'contact'

export default function EditHomepage() {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [actualites, setActualites] = useState<Actualite[]>([])
  const [selectedActualite, setSelectedActualite] = useState<Actualite | null>(null)
  const [isNewActualite, setIsNewActualite] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const fileActuRef = useRef<HTMLInputElement>(null)

  // Textes modifiables
  const [hero, setHero] = useState({
    titre: 'Vos fermetures sur mesure',
    sousTitre: 'Portails · Clôtures · Pergolas · Carports · Portes de garage',
    btnTexte: 'Demander un devis gratuit',
    tel: '04 74 64 91 65',
  })

  const [contact, setContact] = useState({
    adresse: '123 Route du Beaujolais, Villefranche-sur-Saône',
    email: 'contact@thera-fermetures.fr',
    horaires: 'Lun–Ven : 8h–18h | Sam : 9h–12h',
  })

  useEffect(() => {
    loadActualites()
  }, [])

  const loadActualites = async () => {
    const res = await fetch('/api/admin/actualites')
    const data = await res.json()
    setActualites(Array.isArray(data) ? data : [])
  }

  const handleSaveActualite = async () => {
    if (!selectedActualite) return
    setSaving(true)
    try {
      const url = isNewActualite
        ? '/api/admin/actualites'
        : `/api/admin/actualites/${selectedActualite.id}`
      const method = isNewActualite ? 'POST' : 'PUT'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedActualite),
      })
      if (res.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
        await loadActualites()
        if (isNewActualite) {
          setSelectedActualite(null)
          setIsNewActualite(false)
        }
      }
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteActualite = async (id: string) => {
    if (!confirm('Supprimer cette actualité ?')) return
    await fetch(`/api/admin/actualites/${id}`, { method: 'DELETE' })
    await loadActualites()
    setSelectedActualite(null)
  }

  const handleUploadActu = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !selectedActualite) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
    const { url } = await res.json()
    if (url) setSelectedActualite({ ...selectedActualite, photo_url: url })
    setUploading(false)
  }

  const newActualite = () => {
    setSelectedActualite({
      id: '',
      titre: '',
      description: '',
      photo_url: null,
      statut: 'publiee',
      date_publiee: new Date().toISOString(),
    })
    setIsNewActualite(true)
  }

  const sections: { id: Section; label: string; icon: string }[] = [
    { id: 'hero', label: 'Accueil Hero', icon: '🏠' },
    { id: 'actualites', label: 'Actualités', icon: '📰' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>

      {/* ===== PANNEAU GAUCHE ===== */}
      <div className="w-[420px] flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-full">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 bg-gray-50">
          <h1 className="text-lg font-black text-dark">✨ Éditeur de contenu</h1>
          <p className="text-xs text-gray-500 mt-0.5">Modifiez le contenu de votre site</p>
        </div>

        {/* Tabs sections */}
        <div className="flex border-b border-gray-100">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => { setActiveSection(s.id); setSelectedActualite(null); setIsNewActualite(false) }}
              className={`flex-1 py-3 text-xs font-bold transition-all ${
                activeSection === s.id
                  ? 'text-orange-500 border-b-2 border-orange-500 bg-orange-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto p-5">

          {/* === SECTION HERO === */}
          {activeSection === 'hero' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Titre principal</label>
                <input
                  value={hero.titre}
                  onChange={e => setHero({ ...hero, titre: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                  placeholder="Titre principal..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Sous-titre / Services</label>
                <input
                  value={hero.sousTitre}
                  onChange={e => setHero({ ...hero, sousTitre: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                  placeholder="Sous-titre..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Texte bouton devis</label>
                <input
                  value={hero.btnTexte}
                  onChange={e => setHero({ ...hero, btnTexte: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Téléphone affiché</label>
                <input
                  value={hero.tel}
                  onChange={e => setHero({ ...hero, tel: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-700">
                ℹ️ Les modifications de texte hero sont enregistrées localement. Pour les appliquer sur le vrai site, contactez votre développeur ou utilisez la section Actualités pour communiquer avec vos clients.
              </div>
            </div>
          )}

          {/* === SECTION ACTUALITÉS === */}
          {activeSection === 'actualites' && !selectedActualite && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-dark">{actualites.length} actualité(s)</p>
                <button
                  onClick={newActualite}
                  className="flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  + Nouvelle actualité
                </button>
              </div>

              {actualites.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  Aucune actualité. Créez-en une !
                </div>
              )}

              {actualites.map(actu => (
                <div
                  key={actu.id}
                  className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-all cursor-pointer"
                  onClick={() => { setSelectedActualite(actu); setIsNewActualite(false) }}
                >
                  <div className="flex gap-3">
                    {actu.photo_url ? (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={actu.photo_url} alt={actu.titre} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-2xl">📰</div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-dark text-sm truncate">{actu.titre || '(Sans titre)'}</p>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">{actu.description}</p>
                      <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${
                        actu.statut === 'publiee' ? 'bg-green-100 text-green-700' :
                        actu.statut === 'brouillon' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {actu.statut === 'publiee' ? '● Publiée' : actu.statut === 'brouillon' ? '○ Brouillon' : '✕ Archivée'}
                      </span>
                    </div>
                    <button
                      onClick={e => { e.stopPropagation(); handleDeleteActualite(actu.id) }}
                      className="text-gray-300 hover:text-red-500 transition-colors text-lg self-start"
                      title="Supprimer"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* === FORMULAIRE ACTUALITÉ === */}
          {activeSection === 'actualites' && selectedActualite && (
            <div className="space-y-4">
              <button
                onClick={() => { setSelectedActualite(null); setIsNewActualite(false) }}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-dark transition-colors"
              >
                ← Retour aux actualités
              </button>

              <h2 className="text-base font-black text-dark">
                {isNewActualite ? '+ Nouvelle actualité' : 'Modifier l\'actualité'}
              </h2>

              {/* Photo */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Photo</label>
                <div
                  className="relative w-full h-40 border-2 border-dashed border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-orange-400 transition-colors"
                  onClick={() => fileActuRef.current?.click()}
                >
                  {selectedActualite.photo_url ? (
                    <Image src={selectedActualite.photo_url} alt="Photo" fill className="object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      <span className="text-3xl mb-2">📸</span>
                      <span className="text-xs">Cliquer pour ajouter une photo</span>
                    </div>
                  )}
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm">
                      Upload en cours...
                    </div>
                  )}
                </div>
                <input ref={fileActuRef} type="file" accept="image/*" className="hidden" onChange={handleUploadActu} />
                {selectedActualite.photo_url && (
                  <button
                    onClick={() => setSelectedActualite({ ...selectedActualite, photo_url: null })}
                    className="mt-1 text-xs text-red-400 hover:text-red-600"
                  >
                    Supprimer la photo
                  </button>
                )}
              </div>

              {/* Titre */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Titre *</label>
                <input
                  value={selectedActualite.titre}
                  onChange={e => setSelectedActualite({ ...selectedActualite, titre: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                  placeholder="Titre de l'actualité..."
                  maxLength={120}
                />
                <p className="text-xs text-gray-400 mt-1">{selectedActualite.titre.length}/120</p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Description *</label>
                <textarea
                  value={selectedActualite.description}
                  onChange={e => setSelectedActualite({ ...selectedActualite, description: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 resize-none"
                  rows={5}
                  placeholder="Décrivez l'actualité..."
                />
              </div>

              {/* Statut */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Statut</label>
                <select
                  value={selectedActualite.statut}
                  onChange={e => setSelectedActualite({ ...selectedActualite, statut: e.target.value as Actualite['statut'] })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 bg-white"
                >
                  <option value="publiee">● Publiée (visible sur le site)</option>
                  <option value="brouillon">○ Brouillon (non visible)</option>
                  <option value="archive">✕ Archivée</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Date de publication</label>
                <input
                  type="date"
                  value={selectedActualite.date_publiee?.split('T')[0] || ''}
                  onChange={e => setSelectedActualite({ ...selectedActualite, date_publiee: new Date(e.target.value).toISOString() })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
            </div>
          )}

          {/* === SECTION CONTACT === */}
          {activeSection === 'contact' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Adresse</label>
                <input
                  value={contact.adresse}
                  onChange={e => setContact({ ...contact, adresse: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Email</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Horaires</label>
                <input
                  value={contact.horaires}
                  onChange={e => setContact({ ...contact, horaires: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-700">
                ℹ️ Pour modifier les informations de contact sur le vrai site, parlez-en à votre développeur.
              </div>
            </div>
          )}
        </div>

        {/* Footer - Bouton sauvegarder */}
        {activeSection === 'actualites' && selectedActualite && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <button
              onClick={handleSaveActualite}
              disabled={saving || !selectedActualite.titre || !selectedActualite.description}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                saved
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed'
              }`}
            >
              {saved ? '✅ Sauvegardé !' : saving ? 'Sauvegarde...' : isNewActualite ? '+ Créer l\'actualité' : '💾 Sauvegarder'}
            </button>
          </div>
        )}
      </div>

      {/* ===== PANNEAU DROIT : APERÇU DU VRAI SITE ===== */}
      <div className="flex-1 bg-gray-200 flex flex-col overflow-hidden">
        {/* Barre aperçu */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 font-mono">
            thera-website-nextjs.vercel.app
          </div>
          <a
            href="https://thera-website-nextjs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            ↗ Ouvrir
          </a>
        </div>

        {/* iFrame du vrai site */}
        <iframe
          src="https://thera-website-nextjs.vercel.app"
          className="flex-1 w-full bg-white"
          title="Aperçu du site"
        />
      </div>
    </div>
  )
}
