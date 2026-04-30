'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  tag: string
  h1: string
  h2: string
  h3: string
  heroDesc: string
  btnDevis: string
  btnReal: string
}

export default function HeroSlideshow({ tag, h1, h2, h3, heroDesc, btnDevis, btnReal }: Props) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [visible, setVisible]   = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Apparition au montage
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Parallaxe souris légère
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setParallax({
        x: ((e.clientX - rect.left) / rect.width  - 0.5) * 18,
        y: ((e.clientY - rect.top)  / rect.height - 0.5) * 12,
      })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', onMove)
    return () => el?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── IMAGE FOND — Pergola ── */}
      <div
        className="absolute inset-[-4%]"
        style={{
          transform: `translate(${parallax.x * 0.45}px, ${parallax.y * 0.45}px) scale(1.05)`,
          transition: 'transform 0.12s ease-out',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/pergolas/pergola-bioclimatique.jpg"
          alt="Pergola bioclimatique sur mesure THERA Fermetures"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── DÉGRADÉS ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* ── CONTENU ── */}
      <div className="relative z-20 container pt-16 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-2xl">

          {/* Tag */}
          <div
            className="section-tag text-white/60 mb-8 transition-all duration-700"
            style={{
              opacity:   visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            {tag}
          </div>

          {/* Titre ligne par ligne */}
          <h1 className="text-white mb-6 leading-none">
            {[h1, h2, h3].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`block transition-all duration-700 ${i === 1 ? 'text-gradient' : ''}`}
                  style={{
                    opacity:   visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${100 + i * 120}ms`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light transition-all duration-700"
            style={{
              opacity:   visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '480ms',
            }}
          >
            {heroDesc}
          </p>

          {/* Boutons */}
          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              opacity:   visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '580ms',
            }}
          >
            <Link href="/contact" className="btn-primary text-base py-4 px-8">
              {btnDevis}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/realisations" className="btn-outline text-base py-4 px-8">
              {btnReal}
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-3 mt-10 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: '700ms',
            }}
          >
            {['Fabrication française', 'Garantie 10 ans', 'Visite offerte', 'Pose en 1–3 jours'].map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 text-white/75 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15"
              >
                <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
