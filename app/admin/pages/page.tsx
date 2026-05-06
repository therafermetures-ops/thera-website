'use client'

import { useState, useEffect } from 'react'

type PageTab = 'accueil' | 'portails' | 'pergolas' | 'carports' | 'portes_garage'

interface FieldDef {
  cle: string
  label: string
  type?: 'textarea'
  placeholder?: string
  hint?: string
}

const PAGES: {
  id: PageTab
  label: string
  icon: string
  url: string
  categorie: string
  fields: FieldDef[]
}[] = [
  {
    id: 'accueil',
    label: 'Accueil',
    icon: '🏠',
    url: '/',
    categorie: 'hero',
    fields: [
      { cle: 'hero_tag', label: 'Tag (sous-titre discret)', placeholder: 'Villefranche-sur-Saône — Beaujolais — depuis 2015' },
      { cle: 'hero_titre_1', label: 'Titre — ligne 1', placeholder: 'Créateurs' },
      { cle: 'hero_titre_2', label: 'Titre — ligne 2 (couleur orange)', placeholder: "d'espaces" },
      { cle: 'hero_titre_3', label: 'Titre — ligne 3', placeholder: 'extérieurs' },
      { cle: 'hero_description', label: 'Description sous le titre', type: 'textarea', placeholder: 'Portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure. Fabrication française, installation par nos équipes.' },
      { cle: 'hero_btn_devis', label: 'Bouton devis', placeholder: 'Demander un devis' },
      { cle: 'hero_btn_realisations', label: 'Bouton réalisations', placeholder: 'Voir nos réalisations' },
      { cle: 'accueil_meta_title', label: 'Meta title (Google)', placeholder: 'THERA Fermetures | Portails, Pergolas & Carports Aluminium — Villefranche-sur-Saône', hint: 'Recommandé : 50–70 caractères' },
      { cle: 'accueil_meta_description', label: 'Meta description (Google)', type: 'textarea', placeholder: 'Experts en portails aluminium, pergolas bioclimatiques, carports et clôtures sur mesure depuis 2015. Devis gratuit.', hint: 'Recommandé : 140–160 caractères' },
    ],
  },
  {
    id: 'portails',
    label: 'Portails',
    icon: '🚪',
    url: '/portails',
    categorie: 'pages',
    fields: [
      { cle: 'portails_titre', label: 'Titre H1', placeholder: 'Portails Aluminium sur Mesure' },
      { cle: 'portails_sous_titre', label: 'Sous-titre (hero)', type: 'textarea', placeholder: 'Coulissants, battants ou autoportants — fabriqués en France, installés par nos équipes dans tout le Beaujolais' },
      { cle: 'portails_description', label: 'Description (section présentation)', type: 'textarea', placeholder: 'Les portails aluminium THERA Fermetures combinent design contemporain, robustesse et sécurité maximale.' },
      { cle: 'portails_meta_title', label: 'Meta title (Google)', placeholder: 'Portails Aluminium sur Mesure - Villefranche-sur-Saône | THERA Fermetures', hint: 'Recommandé : 50–70 caractères' },
      { cle: 'portails_meta_description', label: 'Meta description (Google)', type: 'textarea', placeholder: 'Portails aluminium battants, coulissants et autoportants sur mesure. Motorisation Somfy. Fabrication française. Beaujolais & Rhône. Devis gratuit.', hint: 'Recommandé : 140–160 caractères' },
    ],
  },
  {
    id: 'pergolas',
    label: 'Pergolas',
    icon: '🌿',
    url: '/pergolas',
    categorie: 'pages',
    fields: [
      { cle: 'pergolas_titre', label: 'Titre H1', placeholder: 'Pergolas Bioclimatiques' },
      { cle: 'pergolas_sous_titre', label: 'Sous-titre (hero)', type: 'textarea', placeholder: 'Modèles Carat, Elements et VizVersa — transformez votre terrasse en espace de vie à l\'année' },
      { cle: 'pergolas_description', label: 'Description (section présentation)', type: 'textarea', placeholder: 'Les pergolas bioclimatiques THERA Fermetures, fabriquées par Cébel, transforment votre terrasse en véritable pièce de vie extérieure.' },
      { cle: 'pergolas_meta_title', label: 'Meta title (Google)', placeholder: 'Pergolas Bioclimatiques sur Mesure - Villefranche-sur-Saône | THERA Fermetures', hint: 'Recommandé : 50–70 caractères' },
      { cle: 'pergolas_meta_description', label: 'Meta description (Google)', type: 'textarea', placeholder: 'Pergolas bioclimatiques à lames orientables motorisées. Modèles Carat, Elements, VizVersa. Fabrication française. Beaujolais & Rhône. Devis gratuit.', hint: 'Recommandé : 140–160 caractères' },
    ],
  },
  {
    id: 'carports',
    label: 'Carports',
    icon: '🚗',
    url: '/carports',
    categorie: 'pages',
    fields: [
      { cle: 'carports_titre', label: 'Titre H1', placeholder: 'Carports Aluminium' },
      { cle: 'carports_sous_titre', label: 'Sous-titre (hero)', type: 'textarea', placeholder: 'Abris voiture sur mesure — protection élégante et durable pour 1 à 4 véhicules, sans permis sous 20m²' },
      { cle: 'carports_description', label: 'Description (section présentation)', type: 'textarea', placeholder: 'Les carports aluminium THERA Fermetures offrent une protection élégante et pérenne pour vos véhicules.' },
      { cle: 'carports_meta_title', label: 'Meta title (Google)', placeholder: 'Carports Aluminium sur Mesure - Villefranche-sur-Saône | THERA Fermetures', hint: 'Recommandé : 50–70 caractères' },
      { cle: 'carports_meta_description', label: 'Meta description (Google)', type: 'textarea', placeholder: 'Carports aluminium sur mesure pour 1 à 4 voitures. Design épuré, pose rapide, entretien zéro. Fabrication française. Beaujolais & Rhône. Devis gratuit.', hint: 'Recommandé : 140–160 caractères' },
    ],
  },
  {
    id: 'portes_garage',
    label: 'Portes de garage',
    icon: '🏗️',
    url: '/portes-de-garage',
    categorie: 'pages',
    fields: [
      { cle: 'portes_garage_titre', label: 'Titre H1', placeholder: 'Portes de Garage sur Mesure' },
      { cle: 'portes_garage_sous_titre', label: 'Sous-titre (hero)', type: 'textarea', placeholder: 'Sectionnelles, enroulables ou battantes — motorisées, isolées, fabriquées sur mesure dans tout le Beaujolais' },
      { cle: 'portes_garage_description', label: 'Description (section présentation)', type: 'textarea', placeholder: 'Les portes de garage THERA Fermetures allient sécurité, isolation thermique et design contemporain.' },
      { cle: 'portes_garage_meta_title', label: 'Meta title (Google)', placeholder: 'Portes de Garage sur Mesure — Sectionnelle, Enroulable, Battante | THERA Fermetures', hint: 'Recommandé : 50–70 caractères' },
      { cle: 'portes_garage_meta_description', label: 'Meta description (Google)', type: 'textarea', placeholder: 'Portes de garage sectionnelles, enroulables et battantes sur mesure. Motorisation Somfy, isolation renforcée. Beaujolais & Rhône. Devis gratuit 24h.', hint: 'Recommandé : 140–160 caractères' },
    ],
  },
]

export default function AdminPagesEditor() {
  const [activeTab, setActiveTab] = useState<PageTab>('accueil')
  const [config, setConfig] = useState<Record<string, string>>({})
  const [configLoaded, setConfigLoaded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState('')

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const res = await fetch('/api/admin/config')
      const data = await res.json()
      const cfg: Record<string, string> = {}
      if (Array.isArray(data)) {
        data.forEach((item: { cle: string; valeur: string }) => {
          if (item.valeur) cfg[item.cle] = item.valeur
        })
      }
      // Pré-remplir les champs vides avec les valeurs par défaut
      PAGES.forEach(page => {
        page.fields.forEach(({ cle, placeholder }) => {
          if (!cfg[cle] && placeholder) cfg[cle] = placeholder
        })
      })
      setConfig(cfg)
    } catch {
      setSaveError('Erreur de chargement')
    } finally {
      setConfigLoaded(true)
    }
  }

  const setField = (cle: string, valeur: string) =>
    setConfig(prev => ({ ...prev, [cle]: valeur }))

  const handleSave = async () => {
    const currentPage = PAGES.find(p => p.id === activeTab)!
    setSaving(true)
    setSaveError('')
    try {
      const updates = currentPage.fields.map(({ cle }) => ({
        cle,
        valeur: config[cle] || '',
        categorie: currentPage.categorie,
      }))
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

  const currentPage = PAGES.find(p => p.id === activeTab)!

  return (
    <div className="p-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📄 Éditeur de pages</h1>
          <p className="text-gray-500 text-sm mt-1">
            Modifiez les textes et métadonnées SEO de vos pages principales
          </p>
        </div>
        <a
          href={currentPage.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors border border-gray-200 rounded-xl px-4 py-2 bg-white"
        >
          ↗ Voir la page
        </a>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-2xl w-fit flex-wrap">
        {PAGES.map(page => (
          <button
            key={page.id}
            onClick={() => { setActiveTab(page.id); setSaveError(''); setSaved(false) }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === page.id
                ? 'bg-white text-orange-500 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>{page.icon}</span>
            <span className="hidden sm:inline">{page.label}</span>
          </button>
        ))}
      </div>

      {/* Form card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 max-w-2xl">
        {!configLoaded ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">⏳</div>
            <p>Chargement des données...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Page title */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
              <span className="text-2xl">{currentPage.icon}</span>
              <div>
                <h2 className="font-bold text-gray-900">Page {currentPage.label}</h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Les champs vides utilisent les valeurs par défaut du site
                </p>
              </div>
            </div>

            {/* Fields */}
            {currentPage.fields.map(({ cle, label, type, placeholder, hint }) => (
              <div key={cle}>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                  {label}
                </label>
                {type === 'textarea' ? (
                  <textarea
                    value={config[cle] || ''}
                    onChange={e => setField(cle, e.target.value)}
                    placeholder={placeholder}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 resize-none transition-colors placeholder:text-gray-300"
                  />
                ) : (
                  <input
                    value={config[cle] || ''}
                    onChange={e => setField(cle, e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors placeholder:text-gray-300"
                  />
                )}
                {hint && (
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <span>ℹ</span> {hint}
                    {(cle.includes('meta_description') || cle.includes('meta_title')) && config[cle] && (
                      <span className={`ml-auto font-semibold ${
                        cle.includes('meta_description')
                          ? (config[cle].length > 160 ? 'text-red-500' : config[cle].length > 140 ? 'text-green-600' : 'text-gray-400')
                          : (config[cle].length > 70 ? 'text-red-500' : config[cle].length > 50 ? 'text-green-600' : 'text-gray-400')
                      }`}>
                        {config[cle].length} car.
                      </span>
                    )}
                  </p>
                )}
              </div>
            ))}

            {/* Error */}
            {saveError && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                ❌ {saveError}
              </div>
            )}

            {/* Save button */}
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={handleSave}
                disabled={saving}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                  saved
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50'
                }`}
              >
                {saved
                  ? '✅ Sauvegardé — visible sur le site dans ~1 minute'
                  : saving
                  ? '⏳ Sauvegarde en cours...'
                  : '💾 Sauvegarder les modifications'}
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Le cache du site se rafraîchit automatiquement toutes les 60 secondes.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 max-w-2xl">
        <p className="font-bold text-blue-900 text-sm mb-1">ℹ Comment ça marche</p>
        <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside font-light">
          <li>Les champs vides utilisent les textes par défaut du site</li>
          <li>Après sauvegarde, le site se met à jour en moins de 60 secondes</li>
          <li>La Meta description influence l&apos;affichage dans Google (pas le classement)</li>
          <li>Le Meta title est le titre affiché dans les résultats de recherche</li>
        </ul>
      </div>
    </div>
  )
}
