import ScrollReveal from './ScrollReveal'

const steps = [
  { num: '01', title: 'Visite',       desc: 'Nous venons chez vous, prenons les mesures et analysons votre projet sur place.' },
  { num: '02', title: 'Étude',        desc: 'Analyse technique complète, choix des matériaux et conception de votre projet.' },
  { num: '03', title: 'Devis',        desc: 'Devis détaillé et personnalisé transmis rapidement, sans engagement de votre part.' },
  { num: '04', title: 'Installation', desc: 'Une équipe installe le matériel et effectue la mise en service.' },
  { num: '05', title: 'Maintenance',  desc: 'Service après vente et maintenance périodique.' },
]

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <ScrollReveal className="text-center mb-14">
          <div className="section-tag justify-center">Comment ça marche</div>
          <h2>Un accompagnement<br className="hidden md:block" /> complet de A à Z</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 80} className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black mb-4 text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#22c55e' }}
              >
                {step.num}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
