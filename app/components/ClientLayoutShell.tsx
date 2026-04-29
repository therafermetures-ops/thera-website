'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

/**
 * Gère la visibilité du Header et le padding-top du <main>.
 * Sur la homepage (/), le Header est masqué car le Hero embarque sa propre nav transparente.
 */
export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome && <Header />}
      <main className={isHome ? '' : 'pt-[108px]'}>
        {children}
      </main>
    </>
  )
}
