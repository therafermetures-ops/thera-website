'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { src: '/images/portails/portail-villefranche.jpg', alt: 'Portail aluminium Villefranche-sur-Saône', label: 'Portails sur mesure' },
  { src: '/images/pergolas/pergola-bioclimatique.jpg', alt: 'Pergola bioclimatique THERA', label: 'Pergolas bioclimatiques' },
  { src: '/images/carports/carport-claustra.png', alt: 'Carport aluminium claustra', label: 'Carports aluminium' },
  { src: '/images/portails/portail-coulissant-chasselay.jpg', alt: 'Portail coulissant Chasselay', label: 'Portails coulissants' },
  { src: '/images/pergolas/pergola-austral.jpg', alt: 'Pergola motorisée THERA', label: 'Pergolas motorisées' },
]

const DURATION = 5000

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
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [titleVisible, setTitleVisible] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setProgress(0)
    setTitleVisible(false)
    setTimeout(() => setTitleVisible(true), 100)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(next, DURATION)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [next])

  // Progress bar
  useEffect(() => {
    setProgress(0)
    setTitleVisible(true)
    const start = Date.now()
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / DURATION) * 100, 100))
    }, 30)
    return () => { if (progressRef.current) clearInterval(progressRef.current) }
  }, [current])

  // Parallax on mouse move
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
      setParallax({ x, y })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', handleMouse)
    return () => el?.removeEventListener('mousemove', handleMouse)
  }, [])

  const handleSlideClick = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    goTo(idx)
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length
        goTo(next)
        return next
      })
    }, DURATION)
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── IMAGES ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ willChange: 'opacity' }}
        >
          <div
            className="absolute inset-[-5%]"
            style={{
              transform: i === current
                ? `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px) scale(1.05)`
                : 'scale(1.05)',
              transition: i === current ? 'transform 0.1s ease-out' : 'none',
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* ── CONTENU ── */}
      <div className="relative z-20 container pt-16 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-2xl">

          {/* Tag animé */}
          <div
            className="section-tag text-white/60 mb-8 transition-all duration-700"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '0ms',
            }}
          >
            {tag}
          </div>

          {/* Titre ligne par ligne */}
          <h1 className="text-white mb-6 leading-none">
            {[h1, h2, h3].map((line, i) => (
              <span
                key={`${current}-${i}`}
                className="block overflow-hidden"
              >
                <span
                  className={`block transition-all duration-700 ${i === 1 ? 'text-gradient' : ''}`}
                  style={{
                    opacity: titleVisible ? 1 : 0,
                    transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
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
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '480ms',
            }}
          >
            {heroDesc}
          </p>

          {/* Boutons */}
          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(15px)',
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
              opacity: titleVisible ? 1 : 0,
              transitionDelay: '700ms',
            }}
          >
            {['Fabrication française', 'Garantie 10 ans', 'Visite offerte', 'Pose en 1–3 jours'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-white/75 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
                <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── INDICATEURS ── */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container">
          <div className="flex items-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => handleSlideClick(i)}
                className="group flex flex-col gap-1.5 cursor-pointer"
                aria-label={`Slide ${i + 1}`}
              >
                {/* Label */}
                <span className={`text-xs font-medium transition-all duration-300 ${i === current ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                  {i === current ? slide.label : ''}
                </span>
                {/* Barre de progression */}
                <div className={`h-0.5 rounded-full transition-all duration-300 ${i === current ? 'w-16 bg-white/30' : 'w-8 bg-white/20 group-hover:bg-white/40'}`}>
                  {i === current && (
                    <div
                      className="h-full bg-accent rounded-full transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Label slide actuel — coin droit */}
      <div className="absolute bottom-8 right-8 z-20 text-right hidden md:block">
        <div className="text-white/40 text-xs uppercase tracking-widest">{current + 1} / {slides.length}</div>
        <div className="text-white/70 text-sm font-medium mt-0.5">{slides[current].label}</div>
      </div>
    </section>
  )
}
