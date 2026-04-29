'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Tableau de bord', icon: '▦' },
  { href: '/admin/actualites', label: 'Actualités', icon: '📢' },
  { href: '/admin/textes', label: 'Textes', icon: '✏️' },
  { href: '/admin/parametres', label: 'Paramètres', icon: '⚙️' },
  { href: '/admin/couleurs', label: 'Couleurs', icon: '🎨' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  if (pathname === '/admin/login') return <>{children}</>

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-5 border-b border-white/10">
          <Image src="/images/logo-thera.png" alt="THERA" width={140} height={40} className="h-8 w-auto object-contain brightness-0 invert" />
          <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
                {item.href === '/admin/actualites' && (
                  <span className="ml-auto bg-orange-400/30 text-orange-300 text-xs px-2 py-0.5 rounded-full">SEO</span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <span>↗</span> Voir le site
          </Link>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full text-left flex items-center gap-2 text-white/50 hover:text-red-400 text-sm transition-colors"
          >
            <span>→</span> {loggingOut ? 'Déconnexion...' : 'Se déconnecter'}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  )
}
