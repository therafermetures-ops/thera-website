'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const products = [
  { title: 'Portails Aluminium', desc: 'Battants, coulissants, motorisés sur mesure', href: '/portails', image: '/images/portails/portail-arnas.jpg', icon: '↗' },
  { title: 'Pergolas Bioclimatiques', desc: 'Lames orientables, motorisées, toutes saisons', href: '/pergolas', image: '/images/pergolas/pergola-bioclimatique.jpg', icon: '↗' },
  { title: 'Carports Aluminium', desc: 'Abri voiture sur mesure, design épuré', href: '/carports', image: '/images/carports/carport-claustra.png', icon: '↗' },
  { title: 'Clôtures Aluminium', desc: 'Clôtures et brise-vue, robustes et esthétiques', href: '/clotures', image: '/images/clotures/cloture-alu.jpg', icon: '↗' },
  { title: 'Portes de Garage', desc: 'Sectionnelle, enroulable, battante sur mesure', href: '/portes-de-garage', image: '/images/portes-garage/porte-garage-villefranche.jpg', icon: '↗' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true) }
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 250) }

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.10)' }}>

        {/* ── BANDEAU SUPÉRIEUR BLANC ── */}
        <div className="bg-white border-b border-gray-100">
          <div className="container flex items-center justify-between py-5">

            {/* Logo PNG — agrandi */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
              <Image
                src="/images/logo-thera.png"
                alt="THERA Fermetures"
                width={260}
                height={72}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Téléphone + CTA — desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="tel:+33474649165" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                  <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-muted leading-none mb-0.5 uppercase tracking-wide">Appelez-nous</div>
                  <div className="text-[17px] font-bold text-dark tracking-tight">04 74 64 91 65</div>
                </div>
              </a>

              <Link href="/contact" className="btn-primary text-sm py-3 px-7">
                Devis Gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Hamburger mobile */}
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5">
              <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* ── BARRE DE NAVIGATION SOMBRE ── */}
        <nav className="hidden lg:block bg-dark">
          <div className="container flex items-center">
            <Link href="/" className="nav-dark-link">Accueil</Link>

            {/* Mega Menu */}
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button className="nav-dark-link flex items-center gap-1.5">
                Nos Produits
                <svg className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${megaOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'}`}
                style={{ width: '640px', zIndex: 100 }}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4">
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-light transition-colors group/item"
                      >
                        <div className="relative w-14 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={p.image} alt={p.title} fill className="object-cover" sizes="56px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-dark text-sm group-hover/item:text-primary transition-colors truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>{p.title}</p>
                          <p className="text-muted text-xs mt-0.5 leading-snug">{p.desc}</p>
                        </div>
                        <svg className="w-3.5 h-3.5 text-muted flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      Fabrication française — installation par nos équipes
                    </div>
                    <Link href="/contact" onClick={() => setMegaOpen(false)} className="text-xs font-semibold text-primary hover:text-primary-dark flex items-center gap-1">
                      Devis gratuit →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/realisations" className="nav-dark-link">Réalisations</Link>
            <Link href="/actualites" className="nav-dark-link">Actualités</Link>
            <Link href="/a-propos" className="nav-dark-link">À Propos</Link>
            <Link href="/contact" className="nav-dark-link">Contact</Link>

            {/* Trust pill */}
            <div className="ml-auto py-2.5">
              <span className="flex items-center gap-1.5 text-[11px] text-white/40 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Fabrication française
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MENU MOBILE ── */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-24 pb-8 overflow-y-auto">
          <div className="container flex flex-col gap-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-dark py-3 border-b border-gray-100 hover:text-primary transition-colors">Accueil</Link>

            <div className="border-b border-gray-100">
              <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="w-full flex items-center justify-between text-xl font-bold text-dark py-3 hover:text-primary transition-colors">
                Nos Produits
                <svg className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="pb-3 pl-2 grid grid-cols-1 gap-1.5">
                  {products.map((p) => (
                    <Link key={p.href} href={p.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 bg-light rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="48px" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">{p.title}</p>
                        <p className="text-muted text-xs">{p.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/realisations" onClick={() => setIsOpen(false)} className="text-xl font-bold text-dark py-3 border-b border-gray-100 hover:text-primary transition-colors">Réalisations</Link>
            <Link href="/actualites" onClick={() => setIsOpen(false)} className="text-xl font-bold text-dark py-3 border-b border-gray-100 hover:text-primary transition-colors">Actualités</Link>
            <Link href="/a-propos" onClick={() => setIsOpen(false)} className="text-xl font-bold text-dark py-3 border-b border-gray-100 hover:text-primary transition-colors">À Propos</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold text-dark py-3 border-b border-gray-100 hover:text-primary transition-colors">Contact</Link>

            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+33474649165" className="flex items-center justify-center gap-2 bg-light py-4 rounded-xl font-bold text-dark text-lg">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 64 91 65
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary justify-center py-4 text-base rounded-xl">
                Demander un devis gratuit
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-2 pt-4 border-t border-gray-100">
              {['Fabrication française', 'Visite offerte à domicile', 'Garantie 10 ans', 'Installation par nos équipes'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
