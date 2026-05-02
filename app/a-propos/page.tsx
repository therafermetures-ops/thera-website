import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'
import ProcessSteps from '../components/ProcessSteps'

export const metadata: Metadata = {
  title: 'À Propos — Qui sommes-nous | THERA Fermetures',
  description: 'THERA Fermetures : experts en portails aluminium, pergolas et carports depuis 2015. Fabrication française, équipe locale dans le Beaujolais.',
  keywords: ['thera fermetures', 'spécialiste portails beaujolais', 'entreprise aménagement extérieur villefranche'],
  alternates: { canonical: 'https://thera-fermetures.fr/a-propos' },
}

const valeurs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Excellence',
    desc: 'Chaque projet est réalisé avec le même niveau d\'exigence et de soin, qu\'il soit simple ou complexe.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Proximité',
    desc: 'Basés à Chasselay, nous connaissons la région et ses contraintes. Un seul interlocuteur du début à la fin.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Réactivité',
    desc: 'Devis établi rapidement, installation planifiée sans délai excessif. Nous respectons votre temps.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Passion',
    desc: 'Nous aimons notre métier. Chaque installation est une fierté et une nouvelle référence dans notre région.',
  },
]

const milestones = [
  { year: '2015', title: 'Création de THERA Fermetures', desc: 'Lancement de l\'activité à Chasselay (69), avec une première spécialisation dans les portails aluminium.' },
  { year: '2017', title: 'Expansion pergolas & carports', desc: 'Face à la demande croissante, nous élargissons notre gamme aux pergolas bioclimatiques et carports.' },
  { year: '2019', title: 'Croissance régionale', desc: 'Notre réputation s\'étend dans tout le Beaujolais, portée par la qualité de nos réalisations.' },
  { year: '2022', title: 'Partenariats premium', desc: 'Référencement auprès de fabricants français haut de gamme pour garantir la meilleure qualité produit.' },
  { year: '2025', title: 'Référence locale', desc: 'THERA Fermetures s\'est imposé comme la référence locale pour l\'aménagement extérieur aluminium sur mesure.' },
]

export default function AProposPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/portails/portail-villefranche.jpg" alt="Réalisation THERA Fermetures" fill className="object-cover" priority />
        </div>
        <div className="relative container text-center">
          <div className="section-tag justify-center text-white/50 mb-6">Qui sommes-nous</div>
          <h1 className="text-white mb-6">
            Votre expert local<br />
            <span className="text-gradient">depuis 2015</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto font-light">
            THERA Fermetures, c&apos;est une équipe passionnée, basée à Chasselay, qui transforme les extérieurs du Beaujolais depuis plus de 10 ans.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="section-tag">Notre histoire</div>
              <h2 className="mb-6">Une entreprise familiale<br />ancrée dans son territoire</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed font-light">
                THERA Fermetures est née en 2015 d&apos;une conviction simple : les particuliers méritent des produits d&apos;aménagement extérieur de qualité professionnelle, installés par des artisans locaux qui connaissent leur région et leurs clients.
              </p>
              <p className="text-muted text-lg mb-8 leading-relaxed font-light">
                Basés à Chasselay, au cœur du Beaujolais, nous intervenons dans un rayon de plus de 50 km pour accompagner chaque projet, de la première visite à la mise en service. Notre force : la relation directe, sans intermédiaire, et un suivi personnalisé.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Fabrication française', 'Pose professionnelle', 'Garantie 10 ans', 'Devis gratuit'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-dark/5 text-dark text-sm font-medium px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden">
                  <Image src="/images/portails/portail-arnas.jpg" alt="Portail aluminium réalisation THERA" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 overflow-hidden mt-8">
                  <Image src="/images/pergolas/pergola-bioclimatique.jpg" alt="Pergola bioclimatique réalisation THERA" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/images/clotures/cloture-alu.jpg" alt="Clôture aluminium réalisation THERA" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 overflow-hidden mt-8">
                  <Image src="/images/carports/carport-claustra.png" alt="Carport aluminium réalisation THERA" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-light">
        <div className="container max-w-4xl">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Notre parcours</div>
            <h2>10 ans de croissance<br />et de confiance</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dark via-dark/30 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`flex gap-6 md:gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-14 md:pl-0`}>
                      <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 inline-block w-full md:max-w-xs">
                        <span className="text-accent-dark font-bold text-sm">{m.year}</span>
                        <h4 className="font-bold mt-1 mb-2">{m.title}</h4>
                        <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:relative md:left-auto flex items-start md:items-center justify-center w-12 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center font-black text-xs">
                        {m.year.slice(2)}
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <div className="section-tag justify-center">Ce qui nous anime</div>
            <h2>Nos valeurs,<br />au cœur de chaque projet</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-light rounded-2xl p-8 text-center card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-dark/5 text-dark flex items-center justify-center mx-auto mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-dark mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding bg-dark">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <div className="section-tag justify-center text-white/50">Nos engagements</div>
            <h2 className="text-white">Ce que vous pouvez<br />attendre de nous</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Transparence totale', desc: 'Devis détaillé sans frais cachés. Vous savez exactement ce que vous payez et pourquoi. Aucune mauvaise surprise.' },
              { title: 'Délais respectés', desc: 'Nous planifions soigneusement chaque installation et respectons les dates convenues. Votre temps est précieux.' },
              { title: 'Satisfaction garantie', desc: 'Si quelque chose ne vous convient pas, nous revenons. Notre réputation se construit sur la satisfaction de chaque client.' },
            ].map((e, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/25 transition-colors">
                  <div className="w-8 h-0.5 bg-accent rounded-full mb-5" />
                  <h3 className="text-white mb-3">{e.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* CTA */}
      <section className="bg-dark border-t border-white/5 py-20">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-white mb-6 text-4xl">Prêts à démarrer<br />votre projet ensemble?</h2>
            <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto font-light">
              Contactez-nous pour une visite gratuite. Nous étudions votre projet et vous proposons la meilleure solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Demander un devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/realisations" className="btn-outline text-base px-8 py-4">
                Voir nos réalisations
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
