import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import ProcessSteps from './ProcessSteps'
import { ReactNode } from 'react'

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
  objectFit?: 'cover' | 'contain'
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
  galleryImages?: { src: string; alt: string; caption?: string; objectPosition?: string }[]
  ctaText?: string
  structuredData?: object
  youtubeId?: string
  youtubeStart?: number
  presentationImage?: string
  presentationImageAlt?: string
  presentationImageHeight?: string
  afterVariants?: ReactNode
  seoLinksSection?: ReactNode
  seoText?: string
  squareImages?: boolean
  gallerySectionTag?: string
  showAdvantages?: boolean
  showGalleryLink?: boolean
  presentationTitle?: string
  heroH1?: string
  heroDisplayTitle?: string
  variantMinimalText?: boolean
  variantLargeMinHeight?: number
  variantSmallMinHeight?: number
  galleryObjectFit?: 'cover' | 'contain'
  variantSectionTitle?: string
  gallerySectionLarge?: boolean
  heroTagText?: string
  heroTitleBold?: string
  heroTitleLight?: string
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
  youtubeId,
  youtubeStart = 0,
  presentationImage,
  presentationImageAlt,
  presentationImageHeight,
  afterVariants,
  seoLinksSection,
  seoText,
  gallerySectionTag = 'INSPIRATIONS',
  showAdvantages = false,
  showGalleryLink = true,
  presentationTitle,
  heroH1,
  heroDisplayTitle,
  variantMinimalText,
  variantLargeMinHeight = 616,
  variantSmallMinHeight = 308,
  galleryObjectFit = 'cover',
  variantSectionTitle,
  gallerySectionLarge,
  heroTagText = 'Sur mesure · Aluminium',
  heroTitleBold,
  heroTitleLight,
}: ProductTemplateProps) {
  const displayTitle = heroDisplayTitle || title
  const titleFirst = heroTitleBold ?? displayTitle.split(' ')[0]
  const titleRest = heroTitleLight ?? displayTitle.split(' ').slice(1).join(' ')

  return (
    <div>

      {/* ===== HERO — split 55% / 45% ===== */}
      <section className="flex flex-col lg:grid" style={{ gridTemplateColumns: '55% 45%', minHeight: undefined }}>

        {/* Image gauche */}
        <div className="relative overflow-hidden min-h-[55vw] sm:min-h-[45vh] lg:min-h-[70vh]" style={{ background: '#1a1b1e' }}>
          {heroImage && (
            <Image
              src={heroImage}
              alt={heroImageAlt || title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          )}
          {/* Made in France badge */}
          <div style={{ position: 'absolute', bottom: 36, right: 28, zIndex: 10 }}>
            <Image
              src="/images/made in france.png"
              alt="Fabrication française"
              width={90}
              height={90}
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>

        {/* Texte droit — fond blanc */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-[60px] lg:py-[80px] bg-white relative">
          <div style={{ position: 'absolute', top: 40, left: 60 }}>
            <span style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa' }}>THERA Fermetures</span>
          </div>

          {heroH1 && <h1 className="sr-only">{heroH1}</h1>}

          <p style={{ fontSize: 12, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#22c55e', fontWeight: 600, margin: '0 0 28px' }}>
            {heroTagText}
          </p>

          {heroH1 ? (
            <>
              <h2 style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 8px', letterSpacing: '-0.03em', textTransform: (heroDisplayTitle || heroTitleBold) ? 'none' : 'uppercase', color: '#1a1a1a' }}>
                {titleFirst}
              </h2>
              <div style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 200, lineHeight: 1.05, margin: '0 0 28px', letterSpacing: '-0.03em', color: '#aaa' }}>
                {titleRest}
              </div>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 8px', letterSpacing: '-0.03em', textTransform: (heroDisplayTitle || heroTitleBold) ? 'none' : 'uppercase', color: '#1a1a1a' }}>
                {titleFirst}
              </h1>
              <div style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 200, lineHeight: 1.05, margin: '0 0 28px', letterSpacing: '-0.03em', color: '#aaa' }}>
                {titleRest}
              </div>
            </>
          )}

          <div style={{ width: 48, height: 2, background: '#22c55e', marginBottom: 28 }} />

          <p style={{ fontSize: 17, lineHeight: 1.85, color: '#555', maxWidth: 380, marginBottom: 40 }}>
            {subtitle}
          </p>

          {ctaText && (
            <Link
              href="/contact"
              style={{
                background: '#1a1b1e', color: '#fff',
                padding: '16px 36px',
                fontWeight: 600, fontSize: 15,
                textDecoration: 'none',
                letterSpacing: '0.05em',
                display: 'inline-flex', alignItems: 'center',
              }}
            >
              {ctaText}
            </Link>
          )}
        </div>
      </section>

      {/* ===== DESCRIPTION + FEATURES ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Présentation</div>
              <h2 className="mb-6">{presentationTitle || title}</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">{description}</p>
              <Link href="/contact" className="btn-outline-dark">
                Obtenir mon devis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>

            {presentationImage ? (
              <ScrollReveal direction="right">
                <div className={`relative overflow-hidden shadow-card${presentationImageHeight ? '' : ' h-80 md:h-96'}`} style={presentationImageHeight ? { height: presentationImageHeight } : undefined}>
                  <Image
                    src={presentationImage}
                    alt={presentationImageAlt || title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </ScrollReveal>
            ) : youtubeId ? (
              <ScrollReveal direction="right">
                <div className="relative w-full overflow-hidden shadow-card" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?start=${youtubeStart}&rel=0&modestbranding=1`}
                    title="Vidéo présentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ) : features.length > 0 ? (
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
            ) : null}
          </div>
        </div>
      </section>

      {/* ===== VARIANTES — dark overlay cards ===== */}
      {variants && variants.length > 0 && (
        <section className="py-12 px-4 sm:px-8 md:px-[72px] md:py-[90px]" style={{ background: '#fafaf9' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 60 }}>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 300, margin: 0, letterSpacing: '-0.02em' }}>
                {variantSectionTitle
                  ? <><span style={{ fontWeight: 700 }}>{variantSectionTitle}</span></>
                  : <>Choisissez votre<br /><span style={{ fontWeight: 700 }}>modèle</span></>
                }
              </h2>
            </div>
          </ScrollReveal>

          {variants.length === 3 ? (
            /* Grille asymétrique : grande + 2 petites */
            <div className="w-full lg:max-w-[80%] lg:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4" style={{ gridTemplateRows: 'auto auto' }}>

              {/* Grande carte — span 2 rows */}
              <div className="lg:row-span-2">
                <ScrollReveal>
                  <div style={{ position: 'relative', overflow: 'hidden', background: '#111', minHeight: variantLargeMinHeight, height: '100%' }}>
                    {variants[0].image ? (
                      <Image
                        src={variants[0].image}
                        alt={variants[0].imageAlt || variants[0].title}
                        fill
                        className="object-cover"
                        style={{ opacity: 1 }}
                        sizes="55vw"
                        loading="eager"
                      />
                    ) : <div style={{ position: 'absolute', inset: 0, background: '#222' }} />}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '52px 32px 32px', background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)' }}>
                      <h3 style={{ color: '#fff', fontSize: 24, fontWeight: 700, margin: variantMinimalText ? 0 : '0 0 10px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>{variants[0].title}</h3>
                      {!variantMinimalText && (
                        <>
                          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.6, margin: '0 0 14px' }}>{variants[0].description}</p>
                          {variants[0].specs.length > 0 && (
                            <ul style={{ margin: '0 0 14px', padding: 0, listStyle: 'none' }}>
                              {variants[0].specs.map((s, j) => (
                                <li key={j} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 4 }}>— {s}</li>
                              ))}
                            </ul>
                          )}
                          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Devis <span style={{ display: 'inline-block', width: 18, height: 1, background: '#22c55e' }} />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Petite carte 2 */}
              <ScrollReveal>
                <div style={{ position: 'relative', overflow: 'hidden', background: '#111', minHeight: variantSmallMinHeight }}>
                  {variants[1].image ? (
                    <Image
                      src={variants[1].image}
                      alt={variants[1].imageAlt || variants[1].title}
                      fill
                      className="object-cover"
                      style={{ opacity: 1 }}
                      sizes="45vw"
                      loading="eager"
                    />
                  ) : <div style={{ position: 'absolute', inset: 0, background: '#222' }} />}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px 22px 22px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                    <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: variantMinimalText ? 0 : '0 0 6px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{variants[1].title}</h3>
                    {!variantMinimalText && (
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                        {variants[1].description.length > 90 ? variants[1].description.substring(0, 90) + '…' : variants[1].description}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Petite carte 3 */}
              <ScrollReveal>
                <div style={{ position: 'relative', overflow: 'hidden', background: '#111', minHeight: variantSmallMinHeight }}>
                  {variants[2].image ? (
                    <Image
                      src={variants[2].image}
                      alt={variants[2].imageAlt || variants[2].title}
                      fill
                      className="object-cover"
                      style={{ opacity: 1 }}
                      sizes="45vw"
                    />
                  ) : <div style={{ position: 'absolute', inset: 0, background: '#222' }} />}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px 22px 22px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                    <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: variantMinimalText ? 0 : '0 0 6px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{variants[2].title}</h3>
                    {!variantMinimalText && (
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                        {variants[2].description.length > 90 ? variants[2].description.substring(0, 90) + '…' : variants[2].description}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            </div>
          ) : (
            /* 1, 2 ou 4+ variantes — grille uniforme */
            <div className="w-full lg:max-w-[80%] lg:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateColumns: variants.length === 1 ? '1fr' : undefined }}>
              {variants.map((variant, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div style={{ position: 'relative', overflow: 'hidden', background: '#111', minHeight: 364 }}>
                    {variant.image ? (
                      <Image
                        src={variant.image}
                        alt={variant.imageAlt || variant.title}
                        fill
                        className={variant.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
                        style={{ opacity: 0.85 }}
                        sizes="50vw"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    ) : <div style={{ position: 'absolute', inset: 0, background: '#222' }} />}
                    <div style={{ position: 'absolute', top: 14, left: 18, fontSize: 64, fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, userSelect: 'none' }}>0{i + 1}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 24px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)' }}>
                      <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{variant.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, margin: '0 0 12px', lineHeight: 1.5 }}>
                        {variant.description.length > 120 ? variant.description.substring(0, 120) + '…' : variant.description}
                      </p>
                      {variant.specs.length > 0 && (
                        <ul style={{ margin: '0 0 10px', padding: 0, listStyle: 'none' }}>
                          {variant.specs.slice(0, 3).map((s, j) => (
                            <li key={j} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 3 }}>— {s}</li>
                          ))}
                        </ul>
                      )}
                      <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Devis <span style={{ display: 'inline-block', width: 18, height: 1, background: '#22c55e' }} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </div>
          )}
        </section>
      )}

      {afterVariants}

      {/* ===== GALERIE ===== */}
      {galleryImages && galleryImages.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <ScrollReveal className={`${gallerySectionLarge ? '' : 'text-center'} mb-12`}>
              <div className={`section-tag ${gallerySectionLarge ? '' : 'justify-center'}`} style={gallerySectionLarge ? { fontSize: 19 } : undefined}>{gallerySectionTag}</div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  {galleryObjectFit === 'contain' ? (
                    <div className="relative overflow-hidden group shadow-card" style={{ paddingBottom: '75%', background: '#f5f5f5' }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading={i < 3 ? 'eager' : 'lazy'}
                      />
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-semibold">{img.caption}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative h-72 overflow-hidden group shadow-card">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
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
                  )}
                </ScrollReveal>
              ))}
            </div>
            {showGalleryLink && (
              <ScrollReveal className="text-center mt-10">
                <Link href="/realisations" className="btn-outline-dark">
                  Voir toutes nos inspirations
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* ===== AVANTAGES ===== */}
      {showAdvantages && advantages.length > 0 && (
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

      <ProcessSteps />

      {/* ===== CTA ===== */}
      <section className="bg-dark py-20">
        <div className="container text-center">
          <ScrollReveal>
            <div className="section-tag justify-center text-white/40 mb-6">Votre projet</div>
            <h2 className="text-white mb-5 text-4xl">Un projet en {title.split(' ')[0].toLowerCase()} ?<br />Parlons-en.</h2>
            <p className="text-white/65 text-lg mb-10 max-w-lg mx-auto font-light">
              Fabrication française, installé par nos soins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaText && (
                <Link href="/contact" className="btn-primary text-base py-4 px-8">
                  {ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              <a href="tel:+33474659165" className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                04 74 65 91 65
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {seoText && (
        <div className="bg-light border-t border-gray-100 py-4">
          <div className="container">
            <h3 className="text-xs text-gray-400 font-light leading-relaxed">{seoText}</h3>
          </div>
        </div>
      )}

      {seoLinksSection && (
        <div className="border-t border-gray-100 py-5 bg-white">
          <div className="container">
            {seoLinksSection}
          </div>
        </div>
      )}

      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </div>
  )
}
