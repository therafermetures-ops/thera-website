'use client'

import Image from 'next/image'
import { useState } from 'react'
import ProcessSteps from '../components/ProcessSteps'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'
interface FormData { name: string; email: string; phone: string; product: string; message: string }
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
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    setStatus('loading'); setServerError('')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      const data = await res.json()
      if (data.success) { setStatus('success'); setFormData(initialForm); setErrors({}) }
      else { setStatus('error'); setServerError(data.error || 'Une erreur est survenue. Veuillez réessayer.') }
    } catch {
      setStatus('error'); setServerError('Erreur de connexion. Veuillez nous appeler directement.')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors text-sm ${errors[field] ? 'border-red-400 focus:border-red-500 bg-red-50' : 'border-gray-200 focus:border-dark bg-white'}`

  return (
    <div>
      {/* Hero — image au lieu du bandeau orange */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portails/portail-villefranche.jpg"
            alt="THERA Fermetures contact"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Nous contacter</div>
          <h1 className="text-white mb-4">Votre projet,<br />parlons-en</h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto font-light">
            Visite offerte à domicile — devis personnalisé sans engagement.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Formulaire */}
            <div>
              <h2 className="mb-2">Envoyez-nous votre demande</h2>
              <p className="text-muted mb-8 font-light">Décrivez votre projet, nous vous recontactons rapidement.</p>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-xl mb-6">
                  <p className="font-bold mb-1">Demande envoyée avec succès</p>
                  <p className="text-sm font-light">Merci ! Nous avons bien reçu votre message et nous vous recontacterons prochainement.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-xl mb-6">
                  <p className="font-bold mb-1">Erreur d&apos;envoi</p>
                  <p className="text-sm">{serverError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block font-semibold mb-1.5 text-sm" htmlFor="name">Nom <span className="text-red-500">*</span></label>
                  <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="Votre nom et prénom" autoComplete="name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-sm" htmlFor="email">Email <span className="text-red-500">*</span></label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="votre@email.com" autoComplete="email" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-sm" htmlFor="phone">Téléphone</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="04 74 XX XX XX" autoComplete="tel" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-sm" htmlFor="product">Produit souhaité <span className="text-red-500">*</span></label>
                  <select id="product" name="product" value={formData.product} onChange={handleChange} className={inputClass('product')}>
                    <option value="">-- Sélectionnez un produit --</option>
                    <option value="portail">Portails Aluminium</option>
                    <option value="pergola">Pergolas Bioclimatiques</option>
                    <option value="carport">Carports Aluminium</option>
                    <option value="cloture">Clôtures Aluminium</option>
                    <option value="porte-garage">Portes de Garage</option>
                    <option value="autre">Autre / Multiple</option>
                  </select>
                  {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                </div>
                <div>
                  <label className="block font-semibold mb-1.5 text-sm" htmlFor="message">Décrivez votre projet</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-dark transition-colors resize-none text-sm bg-white" placeholder="Dimensions souhaitées, couleur, contexte... Tout détail utile pour votre devis." />
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60">
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
                <p className="text-xs text-muted text-center font-light">Vos données sont utilisées uniquement pour répondre à votre demande.</p>
              </form>
            </div>

            {/* Coordonnées */}
            <div>
              <h2 className="mb-2">Nos coordonnées</h2>
              <p className="text-muted mb-8 font-light">Vous pouvez aussi nous appeler directement pendant nos horaires d&apos;ouverture.</p>

              <div className="space-y-5">
                {[
                  {
                    label: 'Adresse',
                    content: '134, za du Crouloup\n69380 Chasselay',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
                  },
                  {
                    label: 'Téléphone',
                    content: '04 74 64 91 65',
                    href: 'tel:+33474649165',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  },
                  {
                    label: 'Email',
                    content: 'therafermetures@gmail.com',
                    href: 'mailto:therafermetures@gmail.com',
                    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4.5 h-4.5 w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.svg}</svg>
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted hover:text-dark transition-colors text-sm">{item.content}</a>
                      ) : (
                        <p className="text-muted text-sm whitespace-pre-line font-light">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Carte Google Maps */}
                <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100" style={{ height: '320px' }}>
                  <iframe
                    title="THERA Fermetures — 134 ZA du Crouloup, 69380 Chasselay"
                    src="https://maps.google.com/maps?q=134+ZA+du+Crouloup+69380+Chasselay+France&output=embed&z=15"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-3">
            {[
              { q: 'Le devis est-il gratuit?', a: 'Oui. Tous nos devis sont complètement gratuits et sans engagement. La visite sur site est également offerte.' },
              { q: 'Combien de temps prend une installation?', a: 'Cela dépend du projet : généralement 1 à 3 jours pour la plupart des installations. Pour les pergolas complexes, comptez 2 à 4 jours.' },
              { q: 'Quelle est la garantie?', a: 'Nous offrons une garantie 10 ans sur tous nos produits aluminium et sur la pose. Nos fournisseurs sont des partenaires certifiés français.' },
              { q: 'Intervenez-vous partout en Beaujolais?', a: 'Oui. Nous intervenons dans toute la région Beaujolais, le Rhône et les départements limitrophes (Ain, Loire).' },
              { q: 'Faut-il un permis pour installer un portail?', a: 'Une déclaration préalable en mairie est généralement nécessaire. Nous vous accompagnons dans toutes les démarches administratives.' },
            ].map((faq, i) => (
              <details key={i} className="bg-light rounded-xl group">
                <summary className="p-5 font-semibold text-dark cursor-pointer list-none flex justify-between items-center text-sm">
                  {faq.q}
                  <span className="text-xl text-muted transition-transform group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-muted text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Le devis est-il gratuit?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Tous nos devis sont complètement gratuits et sans engagement.' } },
          { '@type': 'Question', name: 'Combien de temps prend une installation?', acceptedAnswer: { '@type': 'Answer', text: 'Généralement 1 à 3 jours pour la plupart des installations.' } },
          { '@type': 'Question', name: 'Quelle est la garantie?', acceptedAnswer: { '@type': 'Answer', text: 'Nous offrons une garantie 10 ans sur tous nos produits et l\'installation.' } },
        ],
      }) }} />
    </div>
  )
}
