'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ── SLIDES (4 images) ── */
const slides = [
  {
    src: '/images/portails/20250127_173625.jpg',
    alt: 'Portail aluminium sur mesure THERA Fermetures',
    label: 'Portails sur mesure',
  },
  {
    src: '/images/pergolas/pergola-bioclimatique.jpg',
    alt: 'Pergola bioclimatique motorisée THERA',
    label: 'Pergolas bioclimatiques',
  },
  {
    src: '/images/portails/portail-villefranche.jpg',
    alt: 'Portail aluminium Villefranche-sur-Saône',
    label: 'Portails aluminium',
  },
  {
    src: '/images/carports/carport-claustra.png',
    alt: 'Carport aluminium claustra THERA',
    label: 'Carports aluminium',
  },
]

/* ── NAV LINKS ── */
const NAV_LINKS = [
  { label: 'Portails',     href: '/portails' },
  { label: 'Pergolas',     href: '/pergolas' },
  { label: 'Carports',     href: '/carports' },
  { label: 'Clôtures',     href: '/clotures' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact',      href: '/contact' },
]

const DURATION = 5500   // ms — durée d'une slide

/* ── PROPS ── */
type Props = {
  tag: string
  h1: string
  h2: string
  h3: string
  heroDesc: string
  btnDevis: string
  btnReal: string
}

/* ────────────────────────────────────────────── */
export default function HeroSlideshow({ tag, h1, h2, h3, heroDesc, btnDevis, btnReal }: Props) {
  const [current, setCurrent]     = useState(0)
  const [parallax, setParallax]   = useState({ x: 0, y: 0 })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /* Auto-play */
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, DURATION)
  }, [])

  useEffect(() => {
    startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startInterval])

  /* Parallaxe souris */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setParallax({
        x: (e.clientX / window.innerWidth  - 0.5) * 2,   // -1 → +1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  /* Clic sur un indicateur */
  const handleDotClick = (idx: number) => {
    setCurrent(idx)
    startInterval()
  }

  /* ── RENDER ── */
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#111827',
      }}
    >

      {/* ══════════════════════════════
          BACKGROUND IMAGES
      ══════════════════════════════ */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.6s ease-in-out',
          }}
          aria-hidden={i !== current}
        >
          {/* Inner div for parallax + scale */}
          <div
            style={{
              position: 'absolute',
              inset: '-6%',
              transform: i === current
                ? `translate(${parallax.x * -14}px, ${parallax.y * -10}px) scale(1.06)`
                : 'scale(1.12)',
              transition: i === current
                ? 'transform 0.18s ease-out'
                : 'transform 1.6s ease',
              willChange: 'transform',
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

      {/* ══════════════════════════════
          GRAIN TEXTURE (SVG feTurbulence)
      ══════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          opacity: 0.45,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <filter id="hero-grain-f" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain-f)" />
        </svg>
      </div>

      {/* ══════════════════════════════
          GRADIENTS (vertical + horizontal)
      ══════════════════════════════ */}
      {/* Vertical : sombre haut + sombre bas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, rgba(17,24,39,0.60) 0%, transparent 30%, transparent 58%, rgba(17,24,39,0.72) 100%)',
        }}
      />
      {/* Horizontal : sombre gauche → transparent droite */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
          background:
            'linear-gradient(to right, rgba(17,24,39,0.88) 0%, rgba(17,24,39,0.52) 38%, rgba(17,24,39,0.12) 65%, transparent 100%)',
        }}
      />

      {/* ══════════════════════════════
          NAV TRANSPARENTE
      ══════════════════════════════ */}
      <nav
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: '22px 0',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {/* ── Logo mark ── */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {/* Carré semi-transparent avec 3 barres */}
            <div
              style={{
                width: 38,
                height: 38,
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 9,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                flexShrink: 0,
              }}
            >
              <div style={{ width: 20, height: 2, background: '#fff',    borderRadius: 2 }} />
              <div style={{ width: 20, height: 2, background: '#45b535', borderRadius: 2 }} />
              <div style={{ width: 20, height: 2, background: '#fff',    borderRadius: 2 }} />
            </div>
            {/* Texte logo */}
            <div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: '0.13em',
                  color: '#fff',
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                }}
              >
                THERA
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.50)',
                  lineHeight: 1.2,
                }}
              >
                Fermetures
              </div>
            </div>
          </Link>

          {/* ── Nav pills center (glass effect) ── */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div
              className="hero-nav-pills"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: 999,
                padding: '5px',
                gap: 2,
                alignItems: 'center',
              }}
            >
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hero-nav-link"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.72)',
                    textDecoration: 'none',
                    padding: '6px 13px',
                    borderRadius: 999,
                    transition: 'background 0.18s, color 0.18s',
                    whiteSpace: 'nowrap',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA pill ── */}
          <Link
            href="/contact"
            className="hero-cta-pill"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: '#111827',
              background: '#fff',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: 999,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              flexShrink: 0,
              transition: 'background 0.22s, color 0.22s',
            }}
          >
            Devis gratuit
            <span
              className="hero-cta-arrow"
              style={{ transition: 'transform 0.2s', display: 'inline-block' }}
            >
              →
            </span>
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════
          CONTENU PRINCIPAL
      ══════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          padding: '130px 28px 110px',
        }}
      >
        <div style={{ maxWidth: 740 }}>

          {/* Eyebrow — point pulsant + texte */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 30,
            }}
          >
            <div
              className="hero-pulse-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#45b535',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              {tag}
            </span>
          </div>

          {/* Titre — 3 lignes animées (Fraunces) */}
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              lineHeight: 0.95,
              color: '#fff',
              margin: '0 0 28px',
              fontSize: 'clamp(48px, 9vw, 144px)',
              letterSpacing: '-0.01em',
            }}
          >
            {[h1, h2, h3].map((line, i) => (
              <span
                key={`${current}-line-${i}`}
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  paddingBottom: '0.05em',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontStyle: i === 1 ? 'italic' : 'normal',
                    color: i === 1 ? '#e85d04' : '#fff',
                    opacity: 0,
                    transform: 'translateY(110%)',
                    animation: `heroWordIn 0.85s cubic-bezier(0.22,1,0.36,1) ${i * 150}ms forwards`,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Sous-titre */}
          <p
            key={`${current}-desc`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 19px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 540,
              lineHeight: 1.7,
              margin: '0 0 40px',
              opacity: 0,
              transform: 'translateY(18px)',
              animation: 'heroFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 600ms forwards',
            }}
          >
            {heroDesc}
          </p>

          {/* Boutons */}
          <div
            key={`${current}-btns`}
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              opacity: 0,
              transform: 'translateY(18px)',
              animation: 'heroFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 750ms forwards',
            }}
          >
            {/* Bouton primary : fond sombre → orange */}
            <Link
              href="/contact"
              className="hero-btn-primary"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                color: '#fff',
                background: '#111827',
                textDecoration: 'none',
                padding: '14px 26px',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.25s',
              }}
            >
              {btnDevis}
              <span
                className="hero-btn-arrow"
                style={{ fontSize: 17, transition: 'transform 0.22s', display: 'inline-block' }}
              >
                ↗
              </span>
            </Link>

            {/* Bouton ghost : transparent + icône play */}
            <Link
              href="/realisations"
              className="hero-btn-ghost"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: '#fff',
                textDecoration: 'none',
                padding: '14px 26px',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  flexShrink: 0,
                }}
              >
                ▶
              </span>
              {btnReal}
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          BARRE BAS — caption + progress bars
      ══════════════════════════════ */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 0,
          right: 0,
          zIndex: 30,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            maxWidth: 1280,
            width: '100%',
            padding: '0 28px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
          }}
        >
          {/* Caption gauche : numéro + séparateur + label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: 'italic',
                fontSize: 30,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1,
                minWidth: 32,
              }}
            >
              {String(current + 1).padStart(2, '0')}
            </span>
            <div
              style={{
                width: 1,
                height: 32,
                background: 'rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.06em',
              }}
            >
              {slides[current].label}
            </span>
          </div>

          {/* Progress bars droite */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="hero-progress-btn"
                style={{
                  width: 38,
                  height: 2,
                  display: 'block',
                }}
                aria-label={`Slide ${i + 1} : ${slides[i].label}`}
              >
                {/* Fill animé — clé = current pour reset CSS animation */}
                {i === current && (
                  <div
                    key={`fill-${current}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      background: '#fff',
                      transformOrigin: 'left center',
                      transform: 'scaleX(0)',
                      animation: `heroProgressFill ${DURATION}ms linear forwards`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
