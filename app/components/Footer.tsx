import Link from 'next/link'

const zones = [
  'Villefranche-sur-Saône', 'Arnas', 'Chasselay', 'Limonest',
  'Lozanne', 'Trévoux', 'Belleville', 'Caluire-et-Cuire',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-primary font-black text-2xl tracking-tight">THERA</span>
              <span className="text-white font-black text-2xl tracking-tight"> FERMETURES</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experts en aménagements extérieurs aluminium sur mesure depuis 2015. Nombreuses réalisations dans le Beaujolais et le Rhône.
            </p>
            {/* Contact */}
            <div className="space-y-3 text-sm">
              <a href="tel:+33474649165" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 64 91 65
              </a>
              <a href="mailto:therafermetures@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                therafermetures@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                134, za du Crouloup<br />69380 Chasselay
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Nos Produits</h4>
            <ul className="space-y-3">
              {[
                { label: 'Portails Aluminium', href: '/portails', desc: 'Battants & coulissants' },
                { label: 'Pergolas Bioclimatiques', href: '/pergolas', desc: 'Motorisées sur mesure' },
                { label: 'Carports Aluminium', href: '/carports', desc: 'Abri voiture design' },
                { label: 'Clôtures Aluminium', href: '/clotures', desc: 'Pleines & ajourées' },
                { label: 'Portes de Garage', href: '/portes-de-garage', desc: 'Sectionnelle, enroulable' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex flex-col hover:text-primary transition-colors">
                    <span className="text-gray-200 text-sm font-semibold group-hover:text-primary transition-colors">{item.label}</span>
                    <span className="text-gray-500 text-xs">{item.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Informations</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Nos Réalisations', href: '/realisations' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-primary transition-colors flex items-center gap-1.5 group">
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white mb-3 mt-7 text-sm uppercase tracking-widest">Horaires</h4>
            <p className="text-gray-400 text-sm">Lun – Ven : 8h30 – 17h30</p>
            <p className="text-gray-400 text-sm">Samedi : Sur rendez-vous</p>
          </div>

          {/* Zone + CTA */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Zone d&apos;Intervention</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {zones.map((z) => (
                <span key={z} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/10 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                  {z}
                </span>
              ))}
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">+ toute la région</span>
            </div>

            {/* CTA Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white font-bold text-sm mb-1">Devis gratuit</p>
              <p className="text-gray-400 text-xs mb-4">Visite offerte — sans engagement</p>
              <Link
                href="/contact"
                className="block text-center bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} THERA Fermetures — 134 za du Crouloup, 69380 Chasselay
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-gray-500 hover:text-primary text-xs transition-colors">Mentions légales</Link>
            <Link href="#" className="text-gray-500 hover:text-primary text-xs transition-colors">Confidentialité</Link>
            <Link href="/sitemap.xml" className="text-gray-500 hover:text-primary text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'THERA Fermetures',
            url: 'https://thera-fermetures.fr',
            telephone: '+33474649165',
            email: 'therafermetures@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '134, za du Crouloup',
              addressLocality: 'Chasselay',
              postalCode: '69380',
              addressCountry: 'FR',
            },
            areaServed: zones.map(z => ({ '@type': 'City', name: z })),
          }),
        }}
      />
    </footer>
  )
}
