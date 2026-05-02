'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

/* ── 5 PRODUITS ── */
const products = [
  {
    title: 'Portails Aluminium',
    desc: 'Battants, coulissants et motorisés, entièrement sur mesure.',
    href: '/portails',
    image: '/images/portails/portail-arnas.jpg',
    tag: 'Le + demandé',
  },
  {
    title: 'Pergolas Bioclimatiques',
    desc: 'Lames orientables motorisées pour profiter de l\'extérieur toute l\'année.',
    href: '/pergolas',
    image: '/images/pergolas/pergola-bioclimatique.jpg',
    tag: 'Tendance 2025',
  },
  {
    title: 'Carports Aluminium',
    desc: 'Abri voiture sur mesure, esthétique et sans entretien.',
    href: '/carports',
    image: '/images/carports/carport-claustra.png',
    tag: null,
  },
  {
    title: 'Clôtures Aluminium',
    desc: 'Clôtures, brise-vue et garde-corps robustes et design.',
    href: '/clotures',
    image: '/images/clotures/cloture-alu.jpg',
    tag: null,
  },
  {
    title: 'Portes de Garage',
    desc: 'Sectionnelle, enroulable ou battante, motorisée sur mesure.',
    href: '/portes-de-garage',
    image: '/images/portes-garage/porte-garage-villefranche.jpg',
    tag: null,
  },
]

const NAV_MAIN = [
  { label: 'Accueil',      href: '/' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Actualités',   href: '/actualites' },
  { label: 'Contact',      href: '/contact' },
]

/* ─────────────────────────────────────── */
export default function Header() {
  const [megaOpen, setMegaOpen]                 = useState(false)
  const [mobileOpen, setMobileOpen]             = useState(false)
  const [mobileProdOpen, setMobileProdOpen]     = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Mega menu hover avec délai de fermeture */
  const openMega  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true) }
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 220) }

  /* Bloquer le scroll en mobile */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  return (
    <>
      {/* ══════════════════════════════════════
          BARRE UNIQUE — fond blanc
      ══════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.09)' }}
      >
        <div className="container flex items-center justify-between py-3">

          {/* ── Logo (+50 % : h-16 → h-24) ── */}
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex-shrink-0">
            <Image
              src="/images/logo-thera.png"
              alt="THERA Fermetures"
              width={390}
              height={108}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Navigation desktop ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className="header-link">Accueil</Link>

            {/* Déclencheur Mega Menu */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button
                className={`header-link flex items-center gap-1.5 ${megaOpen ? 'bg-dark/5 text-dark' : ''}`}
                onClick={() => setMegaOpen(v => !v)}
                aria-expanded={megaOpen}
              >
                Nos Produits
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {NAV_MAIN.slice(1).map(link => (
              <Link key={link.href} href={link.href} className="header-link">{link.label}</Link>
            ))}
          </nav>

          {/* ── Téléphone + CTA ── */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" className="text-green-600">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-muted leading-none mb-0.5 uppercase tracking-wide font-medium">Appelez-nous</div>
                <div className="text-[16px] font-bold text-dark tracking-tight select-all">04 74 64 91 65</div>
              </div>
            </div>
          </div>

          {/* ── Hamburger mobile ── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Ouvrir le menu"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          >
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MEGA MENU — slide depuis sous le header
      ══════════════════════════════════════ */}
      <div
        className={`
          fixed left-0 right-0 z-40 bg-white
          border-t-2 border-primary/20
          transition-all duration-350 ease-out
          ${megaOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'}
        `}
        style={{
          top: 120,            /* hauteur header : py-3×2 (24px) + logo h-24 (96px) */
          boxShadow: '0 20px 60px rgba(0,0,0,0.13)',
        }}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <div className="container py-8 pb-10">

          {/* En-tête mega menu */}
          <div className="flex items-center justify-between mb-7">
            <div>
              <div className="section-tag mb-1">Toutes nos solutions</div>
              <p className="text-dark font-bold text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fabrication française — installation par nos équipes
              </p>
            </div>
            <Link
              href="/contact"
              onClick={() => setMegaOpen(false)}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Devis gratuit
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Grille 5 cartes produits */}
          <div className="grid grid-cols-5 gap-4">
            {products.map(p => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMegaOpen(false)}
                className="group block overflow-hidden border border-gray-100 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-light">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:1280px) 22vw, 220px"
                  />
                  {/* Overlay dégradé au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Badge tag */}
                  {p.tag && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        {p.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Texte */}
                <div className="p-4">
                  <p
                    className="font-bold text-dark text-sm group-hover:text-primary transition-colors duration-200 leading-tight mb-1.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {p.title}
                  </p>
                  <p className="text-muted text-xs leading-snug">{p.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                    Découvrir
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pied du mega menu — badges confiance */}
          <div className="flex flex-wrap items-center gap-6 mt-7 pt-6 border-t border-gray-100">
            {[
              { icon: '🏭', label: 'Fabrication française' },
              { icon: '✅', label: 'Garantie 10 ans' },
              { icon: '🏠', label: 'Visite offerte à domicile' },
              { icon: '🔧', label: 'Installation par nos équipes' },
              { icon: '📐', label: '100 % sur mesure' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2 text-xs text-muted font-medium">
                <span>{b.icon}</span>
                {b.label}
              </div>
            ))}
            <div className="ml-auto">
              <Link
                href="/realisations"
                onClick={() => setMegaOpen(false)}
                className="text-xs font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
              >
                Voir toutes nos réalisations →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Voile sombre derrière le mega menu */}
      <div
        className={`fixed inset-0 z-30 bg-dark/25 backdrop-blur-[2px] transition-all duration-300
          ${megaOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: 120 }}
        onClick={() => setMegaOpen(false)}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════
          MENU MOBILE — slide-in depuis la droite
      ══════════════════════════════════════ */}
      {/* Voile */}
      <div
        className={`fixed inset-0 z-40 bg-dark/40 lg:hidden transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Panneau slide-in */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw]
          bg-white shadow-2xl lg:hidden
          flex flex-col
          transition-transform duration-350 ease-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Entête panneau */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo-thera.png"
              alt="THERA Fermetures"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-light hover:bg-gray-200 transition-colors"
            aria-label="Fermer le menu"
          >
            <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens */}
        <div className="flex-1 overflow-y-auto py-4 px-5">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-3 rounded-xl font-semibold text-dark hover:bg-light hover:text-primary transition-colors"
            >
              Accueil
            </Link>

            {/* Produits accordéon */}
            <div>
              <button
                onClick={() => setMobileProdOpen(v => !v)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl font-semibold text-dark hover:bg-light transition-colors"
              >
                Nos Produits
                <svg
                  className={`w-4 h-4 text-muted transition-transform duration-300 ${mobileProdOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sous-liste produits */}
              <div
                className={`overflow-hidden transition-all duration-300 ${mobileProdOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="mt-1 mb-2 pl-2 flex flex-col gap-1.5">
                  {products.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-light hover:bg-primary/10 transition-colors group"
                    >
                      <div className="relative w-12 h-10 overflow-hidden flex-shrink-0">
                        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="48px" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-dark text-sm group-hover:text-primary transition-colors truncate">
                          {p.title}
                        </p>
                        <p className="text-muted text-xs truncate">{p.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {NAV_MAIN.slice(1).map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-3 py-3 rounded-xl font-semibold text-dark hover:bg-light hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Pied panneau */}
        <div className="border-t border-gray-100 p-5 flex flex-col gap-3">
          <a
            href="tel:+33474649165"
            className="flex items-center justify-center gap-2 bg-light py-3.5 rounded-xl font-bold text-dark"
          >
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            04 74 64 91 65
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary justify-center py-3.5 text-base"
          >
            Demander un devis gratuit
          </Link>
          <div className="flex flex-wrap gap-2 mt-1">
            {['Fabrication française', 'Garantie 10 ans', 'Visite offerte'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
