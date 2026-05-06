'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const zones = [
  { id: 'hero', label: '✏️ Modifier le Hero', selector: 'section-hero' },
  { id: 'actualites', label: '✏️ Modifier les Actualités', selector: 'section-actu' },
  { id: 'contact', label: '✏️ Modifier le Contact', selector: 'section-contact' },
]

function EditableZone({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  const sendMessage = () => {
    window.parent.postMessage({ type: 'EDIT_SECTION', section: id }, '*')
  }

  return (
    <div
      className="relative group cursor-pointer"
      onClick={sendMessage}
    >
      {/* Overlay au hover */}
      <div className="absolute inset-0 z-50 border-2 border-transparent group-hover:border-orange-400 group-hover:bg-orange-400/5 transition-all duration-150 pointer-events-none rounded-sm" />
      {/* Badge "Modifier" */}
      <div className="absolute top-3 right-3 z-50 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none">
        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}

export default function PreviewPage() {
  useEffect(() => {
    // Signaler au parent que la preview est chargée
    window.parent.postMessage({ type: 'PREVIEW_READY' }, '*')
  }, [])

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="min-h-screen">
      {/* Barre "Mode Édition" */}
      <div className="sticky top-0 z-[100] bg-orange-500 text-white text-center py-2 text-xs font-bold tracking-wide shadow-lg">
        🎨 MODE ÉDITION — Cliquez sur une section pour la modifier
      </div>

      {/* ===== HERO ===== */}
      <EditableZone id="hero" label="✏️ Modifier le Hero">
        <section className="relative min-h-[70vh] flex items-center bg-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/portails/portail-arnas.jpg" alt="Hero" fill className="object-cover" />
          </div>
          <div className="relative z-10 container py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-white/70 text-xs mb-8 uppercase tracking-widest">
              Fabrication Française
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-tight">
              Vos fermetures<br />
              <span className="text-accent">sur mesure</span>
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Portails · Clôtures · Pergolas · Carports · Portes de garage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-accent text-white px-8 py-4 rounded-xl font-bold">
                Demander un devis gratuit →
              </span>
              <span className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium">
                📞 04 74 65 91 65
              </span>
            </div>
          </div>
        </section>
      </EditableZone>

      {/* ===== PRODUITS (non éditable pour l'instant) ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Nos solutions</p>
            <h2 className="text-3xl md:text-4xl font-black text-dark">Ce que nous fabriquons</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Portails', img: '/images/portails/portail-arnas.jpg' },
              { label: 'Pergolas', img: '/images/pergolas/pergola-bioclimatique.jpg' },
              { label: 'Carports', img: '/images/carports/carport-claustra.png' },
              { label: 'Clôtures', img: '/images/clotures/cloture-alu.jpg' },
            ].map(p => (
              <div key={p.label} className="relative h-40 rounded-xl overflow-hidden group">
                <Image src={p.img} alt={p.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-dark/40 flex items-end p-3">
                  <span className="text-white font-bold text-sm">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTUALITÉS ===== */}
      <EditableZone id="actualites" label="✏️ Modifier les Actualités">
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Notre actualité</p>
              <h2 className="text-3xl md:text-4xl font-black text-dark">Dernières actualités</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="h-40 bg-gray-100 flex items-center justify-center text-4xl">📰</div>
                  <div className="p-5">
                    <p className="font-bold text-dark">Exemple d&apos;actualité {i}</p>
                    <p className="text-gray-500 text-sm mt-1">Description courte de l&apos;actualité...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </EditableZone>

      {/* ===== CONTACT ===== */}
      <EditableZone id="contact" label="✏️ Modifier le Contact">
        <section className="py-20 bg-dark">
          <div className="container text-center">
            <h2 className="text-white text-3xl font-black mb-6">Votre projet, parlons-en.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white/70">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Villefranche-sur-Saône</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>04 74 65 91 65</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>contact@thera-fermetures.fr</span>
              </div>
            </div>
            <span className="mt-8 inline-block bg-accent text-white px-8 py-4 rounded-xl font-bold">
              Demander un devis gratuit →
            </span>
          </div>
        </section>
      </EditableZone>
    </div>
  )
}
