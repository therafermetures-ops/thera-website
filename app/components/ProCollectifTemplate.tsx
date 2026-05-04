import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import ProcessSteps from './ProcessSteps'

const PRO_URL = 'https://www.thera-proaccess.fr/'

interface ProCollectifTemplateProps {
  city: string
  citySlug: string
  region?: string
}

export default function ProCollectifTemplate({ city, citySlug, region = 'Beaujolais & Rhône' }: ProCollectifTemplateProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/pro/portail de résidence villefranche sur saone.jpg"
            alt={`Portail de résidence ${city} — THERA Fermetures`}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="hero-gradient absolute inset-0" />
        </div>
        <div className="relative container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <div className="w-4 h-px bg-accent" />
            Professionnel & Collectif
            <div className="w-4 h-px bg-accent" />
          </div>
          <h1 className="text-white mb-5">Portails & Barrières Professionnels — {city}</h1>
          <p className="text-white/80 text-xl mb-10 leading-relaxed">
            Portails de copropriété, portails industriels et barrières levantes sur mesure. Solutions aluminium haute résistance pour professionnels et collectivités à {city} et {region}.
          </p>
          <a
            href={PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-4 px-8 inline-flex items-center gap-2"
          >
            Découvrir THERA Pro Access
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Professionnel & Collectif</div>
              <h2 className="mb-6">Solutions sur mesure pour professionnels et collectivités à {city}</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                THERA Fermetures intervient depuis 2015 auprès des professionnels, copropriétés et collectivités de {city} et {region}. Portails coulissants grande largeur, barrières levantes automatiques, contrôle d&apos;accès intégré — chaque projet est étudié sur mesure par notre équipe technique.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Nos solutions professionnelles sont conçues pour des usages intensifs : résistance renforcée, motorisations haute fréquence, compatibilité avec tous les systèmes de contrôle d&apos;accès du marché.
              </p>
              <a
                href={PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark inline-flex items-center gap-2"
              >
                Voir toutes nos solutions pro
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-light rounded-2xl p-8">
                <h3 className="mb-6 text-lg">Nos interventions à {city}</h3>
                <ul className="space-y-3">
                  {[
                    'Copropriétés et résidences privées',
                    'Zones industrielles et entrepôts',
                    'Parkings et aires de stationnement',
                    'Établissements recevant du public (ERP)',
                    'Collectivités et bâtiments municipaux',
                    'Syndics et gestionnaires de patrimoine',
                    'Promoteurs immobiliers et constructeurs',
                    'Motorisation et contrôle d\'accès intégrés',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-dark text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Variantes */}
      <section className="section-padding bg-light">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Nos solutions</div>
            <h2>Portails et barrières<br className="hidden md:block" /> pour chaque usage professionnel</h2>
          </ScrollReveal>

          <div className="space-y-16 md:space-y-24">
            {/* Portail Copropriété */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="relative h-72 md:h-96 overflow-hidden shadow-card group">
                  <Image
                    src="/images/pro/portail_copropriété_coulissant_villefranche.jpg"
                    alt="Portail coulissant copropriété Villefranche THERA Fermetures"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-4">Portail de Résidence & Copropriété</h3>
                  <p className="text-muted text-base leading-relaxed mb-6">
                    Portail coulissant ou battant grande largeur pour entrées de résidences, copropriétés et lotissements. Aluminium traitement de surface haute durabilité, motorisation Came ou Somfy haute fréquence, interphone et visiophone intégrés. Entretien minimal, résistance maximale aux utilisations intensives.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      'Largeurs jusqu\'à 12 mètres en une seule vantaille',
                      'Motorisation haute fréquence — 500+ cycles/jour',
                      'Interphone, visiophone, badge, télécommande',
                      'Finition laquée garantie 10 ans — +300 coloris',
                      'Portillon assorti et éclairage intégrés',
                      'Conformité normes ERP et accessibilité PMR',
                    ].map((spec, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-dark text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={PRO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark inline-flex items-center gap-2">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Portail Industriel */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center md:[&>*:first-child]:order-2">
                <div className="relative h-72 md:h-96 overflow-hidden shadow-card group">
                  <Image
                    src="/images/pro/portail_coulissant_industriel_lyon.jpg"
                    alt="Portail coulissant industriel Lyon THERA Fermetures"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-4">Portail Industriel & Entreprise</h3>
                  <p className="text-muted text-base leading-relaxed mb-6">
                    Portails autoportants ou sur rail pour zones industrielles, entrepôts et sites d&apos;entreprises. Structure renforcée en aluminium extrudé grande épaisseur, compatible avec tous les systèmes de sécurité périmétrique. Grandes ouvertures jusqu&apos;à 20 mètres sans poteau central.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      'Grandes ouvertures jusqu\'à 20m — sans poteau central',
                      'Structure renforcée usage intensif 24h/24',
                      'Compatibilité systèmes de sécurité périmétrique',
                      'Intégration boucle de détection véhicule',
                      'Caméra et contrôle d\'accès sur mesure',
                      'Devis technique sous 48h pour les professionnels',
                    ].map((spec, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-dark text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={PRO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark inline-flex items-center gap-2">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Barrière Levante */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="relative h-72 md:h-96 overflow-hidden shadow-card group">
                  <Image
                    src="/images/pro/barrière levante parking copropriété.jpg"
                    alt="Barrière levante parking copropriété THERA Fermetures"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-4">Barrière Levante Automatique</h3>
                  <p className="text-muted text-base leading-relaxed mb-6">
                    Barrières levantes motorisées pour parkings, lotissements et accès sécurisés. Levée rapide en moins de 3 secondes, bras en aluminium ou acier galvanisé, compatible avec tous les systèmes de tickets, badges et télécommandes. Installation rapide, maintenance assurée par nos techniciens.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      'Levée en 1,5 à 3 secondes selon modèle',
                      'Bras jusqu\'à 6 mètres de portée',
                      'Compatible ticket, badge RFID, télécommande, app',
                      'Résistance aux tentatives de forçage',
                      'Boucles de détection véhicule incluses',
                      'Contrat de maintenance disponible',
                    ].map((spec, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-dark text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={PRO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark inline-flex items-center gap-2">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="section-tag justify-center">Réalisations pro</div>
            <h2>Quelques références<br />à {city} et en {region}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: '/images/pro/portail de résidence villefranche sur saone.jpg', alt: `Portail résidence ${city}`, caption: `Portail résidence — ${city}` },
              { src: '/images/pro/barrière automatique pour entreprise.jpg', alt: 'Barrière automatique entreprise', caption: 'Barrière automatique — Entreprise' },
              { src: '/images/pro/portail_coulissant_industriel_lyon.jpg', alt: 'Portail industriel Lyon', caption: 'Portail industriel — Lyon' },
              { src: '/images/pro/barrière automatiqur pour lotissement.jpg', alt: 'Barrière lotissement', caption: 'Barrière levante — Lotissement' },
              { src: '/images/pro/portail_copropriété_coulissant_villefranche.jpg', alt: `Portail copropriété ${city}`, caption: `Portail copropriété — ${city}` },
              { src: '/images/pro/barrière levante parking copropriété.jpg', alt: 'Barrière parking copropriété', caption: 'Barrière — Parking copropriété' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <a href={PRO_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-60 overflow-hidden group shadow-card">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold">{img.caption}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-light">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="section-tag justify-center">Pourquoi THERA Pro</div>
            <h2>Un interlocuteur unique<br />pour tous vos accès</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Étude technique gratuite', text: 'Déplacement sur site inclus. Nos techniciens étudient votre projet et vous remettent un chiffrage complet sous 48h.' },
              { title: 'Fabrication française', text: 'Portails et barrières fabriqués par des partenaires certifiés implantés en France. Qualité et traçabilité garanties.' },
              { title: 'Installation par nos équipes', text: 'Pose réalisée par nos propres techniciens, formés aux normes EN 13241 et aux exigences des ERP.' },
              { title: 'Contrat de maintenance', text: 'Contrats de maintenance préventive et corrective disponibles. Intervention sous 24h en cas de panne.' },
              { title: 'Contrôle d\'accès intégré', text: 'Badge, télécommande, visiophone, smartphone — nous intégrons tous les systèmes de contrôle d\'accès du marché.' },
              { title: 'Garantie 10 ans structure', text: 'Garantie décennale sur toutes nos installations. Nos solutions sont conçues pour un usage intensif longue durée.' },
            ].map((adv, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 h-full border border-gray-50">
                  <div className="w-8 h-0.5 bg-accent rounded-full mb-5" />
                  <h3 className="text-dark mb-2 text-base">{adv.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{adv.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="container text-center">
          <ScrollReveal>
            <div className="section-tag justify-center text-white/40 mb-6">Votre projet professionnel</div>
            <h2 className="text-white mb-5 text-4xl">Un projet à {city} ?<br />Parlons-en.</h2>
            <p className="text-white/65 text-lg mb-10 max-w-lg mx-auto font-light">
              Étude technique gratuite, devis sous 48h, installation par nos équipes certifiées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-8 inline-flex items-center gap-2"
              >
                Demander un devis pro
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="tel:+33474649165" className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 65 91 65
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Portails et Barrières Professionnels — ${city}`,
            description: `Installation de portails de copropriété, portails industriels et barrières levantes automatiques à ${city} et ${region}.`,
            provider: { '@type': 'LocalBusiness', name: 'THERA Fermetures', url: 'https://thera-fermetures.fr' },
            areaServed: city,
            serviceType: 'Installation portails et barrières professionnels et collectif',
            url: `https://thera-fermetures.fr/portail-barriere-professionnel-collectif-${citySlug}`,
          }),
        }}
      />
    </div>
  )
}
