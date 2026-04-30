'use client'

import Header from './Header'

/**
 * Shell client simple : Header présent sur toutes les pages.
 * Le padding-top est ajouté ici pour compenser le header fixe.
 */
export default function ClientLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[120px]">
        {children}
      </main>
    </>
  )
}
