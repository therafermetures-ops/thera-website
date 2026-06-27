'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { src: "/images/portails/portail_coulissant_alu_ajouré_villefranche.avif", alt: 'Portail aluminium coulissant THERA Fermetures' },
  { src: '/images/carports/Carport-poteau-deporte.avif', alt: 'Carport aluminium THERA Fermetures' },
  { src: '/images/pergolas/pergola_bioclimatique_cebel.avif', alt: 'Pergola bioclimatique THERA Fermetures' },
  { src: "/images/portails/portail_coulissant_aluminium_chazay_d'azrgues.avif", alt: "Portail coulissant aluminium Chazay d'Azergues" },
  { src: '/images/pro/portail de résidence villefranche sur saone.jpg', alt: 'Portail de résidence Villefranche-sur-Saône THERA Fermetures' },
]

type Props = {
  tag: string
  h1: string
  h2: string
  h3: string
  heroDesc: string
  btnDevis: string
  btnReal: string
}

export default function HeroSlideshow({ tag, h1, h2, heroDesc, btnDevis }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="flex flex-col-reverse lg:grid lg:min-h-screen" style={{ gridTemplateColumns: '1fr 1.2fr' }}>

      {/* Texte gauche — fond blanc */}
      <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-[80px] lg:py-[80px] bg-white relative overflow-hidden">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: '#aaa', marginBottom: 40, fontWeight: 500 }}>
            {tag}
          </p>

          <h1 style={{
            fontSize: 'clamp(44px, 5vw, 68px)',
            fontWeight: 200, lineHeight: 1.05,
            margin: '0 0 8px', letterSpacing: '-0.03em', color: '#1a1a1a',
          }}>
            {h1}
          </h1>
          <h1 style={{
            fontSize: 'clamp(44px, 5vw, 68px)',
            fontWeight: 700, lineHeight: 1.05,
            margin: '0 0 8px', letterSpacing: '-0.03em', color: '#1a1a1a',
          }}>
            {h2}
          </h1>

          <div style={{ width: 48, height: 2, background: '#22c55e', margin: '28px 0' }} />

          <p style={{ fontSize: 17, lineHeight: 1.85, color: '#666', maxWidth: 380, marginBottom: 48 }}>
            {heroDesc}
          </p>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#1a1a1a', color: '#fff',
              padding: '16px 36px',
              fontWeight: 600, fontSize: 15,
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            {btnDevis}
          </Link>
        </div>
      </div>

      {/* Image droite — diaporama */}
      <div className="relative overflow-hidden min-h-[52vw] sm:min-h-[50vh] lg:min-h-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="55vw"
            />
          </div>
        ))}

        {/* Badge Made in France — gauche */}
        <div style={{ position: 'absolute', bottom: 36, left: 28, zIndex: 10 }}>
          <Image
            src="/images/made in france.png"
            alt="Fabrication française"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Points de navigation — droite */}
        <div style={{
          position: 'absolute', bottom: 36, right: 28,
          display: 'flex', gap: 8, zIndex: 10,
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8, height: 8,
                borderRadius: 4,
                background: i === current ? '#22c55e' : 'rgba(255,255,255,0.5)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s', padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
