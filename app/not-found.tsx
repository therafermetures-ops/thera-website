import Link from 'next/link'
import Image from 'next/image'

const btnStyle = `
  .not-found-btn:hover { background: rgba(255,255,255,0.18) !important; }
`

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{btnStyle}</style>
      {/* Background image */}
      <Image
        src="/images/portails/portail-arnas.jpg"
        alt="Portail aluminium THERA Fermetures"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="mb-6" style={{ width: 48, height: 2, background: '#22c55e', margin: '0 auto 24px' }} />
        <p className="uppercase tracking-[0.25em] text-white/60 text-sm font-medium mb-4">
          THERA Fermetures
        </p>
        <h1 className="text-white font-light mb-3" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          Bienvenue sur notre
        </h1>
        <h2 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          nouveau site
        </h2>
        <p className="text-white/70 mb-10 leading-relaxed" style={{ fontSize: 18 }}>
          Portails, pergolas bioclimatiques, portes de garage et clôtures sur mesure.<br className="hidden sm:block" />
          Fabrication française, installation dans tout le Beaujolais et le Rhône.
        </p>
        <Link
          href="/"
          className="not-found-btn"
          style={{
            display: 'inline-block',
            padding: '20px 64px',
            border: '2px solid #fff',
            color: '#fff',
            background: 'rgba(255,255,255,0.08)',
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            backdropFilter: 'blur(4px)',
            transition: 'background 0.2s',
          }}
        >
          Entrer
        </Link>
      </div>
    </div>
  )
}
