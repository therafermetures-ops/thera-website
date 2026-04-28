'use client'

import Link from 'next/link'
import { useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  product: string
  message: string
}

const initialForm: FormData = { name: '', email: '', phone: '', product: '', message: '' }

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {}
  if (!data.name.trim() || data.name.trim().length < 2) errors.name = 'Nom requis (min. 2 caractères)'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Email invalide'
  if (!data.product) errors.product = 'Veuillez sélectionner un produit'
  if (data.phone && !/^[\d\s\+\-\(\)\.]{6,20}$/.test(data.phone)) errors.phone = 'Numéro invalide'
  return errors
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [serverError, setServerError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData(initialForm)
        setErrors({})
      } else {
        setStatus('error')
        setServerError(data.error || 'Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setStatus('error')
      setServerError('Erreur de connexion. Veuillez réessayer ou nous appeler directement.')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-gray-300 focus:border-primary'
    }`

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-orange-600 text-white py-20 md:py-28">
        <div className="container max-w-3xl mx-auto text-center">
          <h1>Nous Contacter</h1>
          <p className="text-lg">Demandez votre devis gratuit — Réponse dans les 24h!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="mb-8">Envoyez-nous votre demande</h2>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-400 text-green-800 px-5 py-4 rounded-lg mb-6">
                  <p className="font-bold mb-1">✓ Demande envoyée!</p>
                  <p className="text-sm">Merci {formData.name || ''}! Vous recevrez un email de confirmation. Nous vous recontacterons dans les 24h.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-400 text-red-800 px-5 py-4 rounded-lg mb-6">
                  <p className="font-bold mb-1">Erreur d&apos;envoi</p>
                  <p className="text-sm">{serverError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="name">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="Votre nom et prénom"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="votre@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="phone">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                    placeholder="04 74 XX XX XX"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="product">
                    Produit souhaité <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputClass('product')}
                  >
                    <option value="">-- Sélectionnez un produit --</option>
                    <option value="portail">Portails Aluminium</option>
                    <option value="pergola">Pergolas Bioclimatiques</option>
                    <option value="carport">Carports Aluminium</option>
                    <option value="cloture">Clôtures Aluminium</option>
                    <option value="autre">Autre / Multiple</option>
                  </select>
                  {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="message">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Dimensions souhaitées, couleur, contexte... Tout détail utile pour votre devis!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'DEMANDER UN DEVIS GRATUIT'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Vos données sont utilisées uniquement pour répondre à votre demande. Aucun spam.
                </p>
              </form>
            </div>

            {/* Coordonnées */}
            <div>
              <h2 className="mb-8">Coordonnées</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      134, za du Crouloup<br />
                      69380 Chasselay<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Téléphone</h3>
                    <a href="tel:+33474649165" className="text-gray-700 hover:text-primary text-lg font-semibold">
                      04 74 64 91 65
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:therafermetures@gmail.com" className="text-gray-700 hover:text-primary">
                      therafermetures@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-bold text-primary mb-3">Horaires d&apos;ouverture</h3>
                  <p className="text-gray-700 mb-1">Lundi — Vendredi : 8h30 — 17h30</p>
                  <p className="text-gray-700">Samedi : Sur rendez-vous</p>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-bold text-primary mb-3">Zone d&apos;intervention</h3>
                  <p className="text-gray-600 text-sm">
                    Villefranche-sur-Saône, Arnas, Chasselay, Limonest, Lozanne, Trévoux et toute la région Beaujolais et Rhône.
                  </p>
                </div>

                <div className="bg-light p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Besoin urgent?</h4>
                  <p className="text-gray-700 mb-4 text-sm">
                    Appelez-nous directement — réponse immédiate pendant les horaires d&apos;ouverture.
                  </p>
                  <a href="tel:+33474649165" className="inline-block bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    📞 04 74 64 91 65
                  </a>
                </div>

                <div className="bg-light p-6 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ✓ Visite gratuite de votre site<br />
                    ✓ Devis sans engagement<br />
                    ✓ Réponse garantie en 24h<br />
                    ✓ Fabrication française
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-8">Localisation</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="THERA Fermetures - 134 za du Crouloup, 69380 Chasselay"
              src="https://maps.google.com/maps?q=134+za+du+Crouloup+69380+Chasselay&output=embed&z=14"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Le devis est-il gratuit?',
                a: 'Oui! Tous nos devis sont complètement gratuits et sans engagement. La visite sur site est également offerte.',
              },
              {
                q: 'Combien de temps prend une installation?',
                a: 'Cela dépend du projet, mais généralement 1-3 jours pour la plupart des installations. Pour les pergolas complexes, comptez 2-4 jours.',
              },
              {
                q: 'Quelle est la garantie?',
                a: 'Nous offrons une garantie 10+ ans sur tous nos produits aluminium et sur la pose. Nos fournisseurs sont des partenaires certifiés.',
              },
              {
                q: 'Intervenez-vous partout en Beaujolais?',
                a: 'Oui! Nous intervenons dans toute la région Beaujolais, le Rhône et les départements limitrophes (Ain, Loire).',
              },
              {
                q: 'Faut-il un permis pour installer un portail?',
                a: 'Une déclaration préalable en mairie est généralement nécessaire. Nous vous accompagnons dans toutes les démarches administratives.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-light rounded-lg group">
                <summary className="p-5 font-bold text-primary cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Le devis est-il gratuit?', acceptedAnswer: { '@type': 'Answer', text: 'Oui! Tous nos devis sont complètement gratuits et sans engagement.' } },
              { '@type': 'Question', name: 'Combien de temps prend une installation?', acceptedAnswer: { '@type': 'Answer', text: 'Généralement 1-3 jours pour la plupart des installations.' } },
              { '@type': 'Question', name: 'Quelle est la garantie?', acceptedAnswer: { '@type': 'Answer', text: 'Nous offrons une garantie 10+ ans sur tous nos produits et l\'installation.' } },
            ],
          }),
        }}
      />
    </div>
  )
}
