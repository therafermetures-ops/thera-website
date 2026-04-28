'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Devis button */}
      <Link
        href="/contact"
        className="group flex items-center gap-2 bg-primary text-white font-bold text-sm px-4 py-3 rounded-full shadow-cta hover:bg-primary-dark transition-all duration-300 hover:scale-105"
        aria-label="Demander un devis gratuit"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span className="hidden sm:inline">Devis gratuit</span>
      </Link>

      {/* Phone button */}
      <a
        href="tel:+33474649165"
        className="group flex items-center gap-2 bg-white text-dark font-bold text-sm px-4 py-3 rounded-full shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
        aria-label="Appeler THERA Fermetures"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <span className="hidden sm:inline">04 74 64 91 65</span>
      </a>
    </div>
  )
}
