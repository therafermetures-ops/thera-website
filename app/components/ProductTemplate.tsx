import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import ProcessSteps from './ProcessSteps'

interface Advantage {
  icon: string
  title: string
  text: string
}

export interface ProductVariant {
  title: string
  badge?: string
  description: string
  specs: string[]
  image?: string
  imageAlt?: string
}

interface ProductTemplateProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  variants?: ProductVariant[]
  advantages: Advantage[]
  processSteps: string[]
  heroImage?: string
  heroImageAlt?: string
  galleryImages?: { src: string; alt: string; caption?: string }[]
  ctaText?: string
  structuredData?: object
}

export default function ProductTemplate({
  title,
  subtitle,
  description,
  features,
  variants,
  advantages,
  processSteps,
  heroImage,
  heroImageAlt,
  galleryImages,
  ctaText = 'Demander un Devis Gratuit',
  structuredData,
}: ProductTemplateProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-dark">
        {heroImage && (
          <div className="absolute inset-0">
            <Image src={heroImage} alt={heroImageAlt || title} fill className="object-cover" priority quality={90} />
            <div className="hero-gradient absolute inset-0" />
          </div>
        )}
        {!heroImage && <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-2" />}
        <div className="relative container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
              <div className="w-4 h-px bg-accent" />
              Nos produits
              <div className="w-4 h-px bg-accent" />
            </div>
          <h1 className="text-white mb-5">{title}</h1>
          <p className="text-white/80 text-xl mb-10 leading-relaxed">{subtitle}</p>
          <Link href="/contact" className="btn-primary text-base py-4 px-8">
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Description + features */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Présentation</div>
              <h2 className="mb-6">{title}</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">{description}</p>
              <Link href="/contact" className="btn-outline-dark">
                Obtenir mon devis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>

            {features.length > 0 && (
              <ScrollReveal direction="right">
                <div className="bg-light rounded-2xl p-8">
                  <h3 className="mb-6 text-lg">Caractéristiques incluses</h3>
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
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
            )}
          </div>
        </div>
      </section>

      {/* ===== VARIANTES ===== */}
      {variants && variants.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container">
            <ScrollReveal className="text-center mb-14">
              <div className="section-tag justify-center">Nos modèles</div>
              <h2>Choisissez le modèle<br className="hidden md:block" /> adapté à votre projet</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
                Chaque modèle est entièrement personnalisable en dimensions, couleurs et options. Nos conseillers vous guident vers le choix idéal.
              </p>
            </ScrollReveal>

            <div className="space-y-16 md:space-y-24">
              {variants.map((variant, i) => {
                const isEven = i % 2 === 0
                return (
                  <ScrollReveal key={i}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>
                      {/* Image */}
                      {variant.image ? (
                        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-card group">
                          <Image
                            src={variant.image}
                            alt={variant.imageAlt || variant.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading={i < 2 ? 'eager' : 'lazy'}
                          />
                          {variant.badge && (
                            <div className="absolute top-4 left-4">
                              <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                                {variant.badge}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-center text-muted">
                            <div className="text-6xl mb-4">📸</div>
                            <p className="font-semibold">Photo disponible sur demande</p>
                          </div>
                          {variant.badge && (
                            <div className="absolute top-4 left-4">
                              <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                                {variant.badge}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Texte */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-black">{variant.title}</h3>
                        </div>
                        <p className="text-muted text-base leading-relaxed mb-6">{variant.description}</p>
                        <ul className="space-y-2.5 mb-8">
                          {variant.specs.map((spec, j) => (
                            <li key={j} className="flex items-start gap-2.5">
                              <svg className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-dark text-sm">{spec}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="btn-outline-dark">
                          Devis pour ce modèle
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Galerie */}
      {galleryImages && galleryImages.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <div className="section-tag justify-center">Nos réalisations</div>
              <h2>Quelques exemples<br />de nos installations</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative h-60 rounded-2xl overflow-hidden group shadow-card">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {img.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-semibold">{img.caption}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="text-center mt-10">
              <Link href="/realisations" className="btn-outline-dark">
                Voir toutes nos réalisations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Avantages */}
      {advantages.length > 0 && (
        <section className={`section-padding ${!(galleryImages && galleryImages.length > 0) && !(variants && variants.length > 0) ? 'bg-light' : variants && variants.length > 0 ? '' : 'bg-light'}`}>
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <div className="section-tag justify-center">Les plus</div>
              <h2>Pourquoi choisir<br />THERA Fermetures?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
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
      )}

      {/* Processus */}
      {processSteps.length > 0 && (
        <section className="section-padding bg-dark">
          <div className="container">
            <ScrollReveal className="text-center mb-14">
              <div className="section-tag justify-center text-white/60">Comment ça marche</div>
              <h2 className="text-white">Notre processus<br />d&apos;installation</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-dark text-white flex items-center justify-center font-black text-lg mx-auto mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-white font-semibold text-sm">{step}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="container text-center">
          <ScrollReveal>
            <div className="section-tag justify-center text-white/40 mb-6">Votre projet</div>
            <h2 className="text-white mb-5 text-4xl">Un projet en {title.split(' ')[0].toLowerCase()}?<br />Parlons-en.</h2>
            <p className="text-white/65 text-lg mb-10 max-w-lg mx-auto font-light">
              Visite offerte à domicile, fabrication française, installation par nos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base py-4 px-8">
                {ctaText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+33474649165" className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 64 91 65
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </div>
  )
}
