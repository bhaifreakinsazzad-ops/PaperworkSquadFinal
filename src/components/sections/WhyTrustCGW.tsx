import { Lightbulb, Briefcase, Crosshair } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Strategic Guidance',
    description:
      'We help business owners see the full picture — not just the next application, but the right path forward.',
  },
  {
    icon: Briefcase,
    title: 'Business-First Approach',
    description:
      'Every recommendation is rooted in your business reality. We focus on what actually moves the needle.',
  },
  {
    icon: Crosshair,
    title: 'Clarity Before Action',
    description:
      'We believe preparation leads to stronger outcomes. That is why the checker exists — to help you start right.',
  },
]

export default function WhyTrustCGW() {
  return (
    <SectionWrapper id="why-cgw">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: brand statement */}
        <div>
          <AnimateIn>
            <GoldDivider className="mb-6 justify-start" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-6">
              Built by{' '}
              <span className="text-gold-400">CGW Systems</span>.{' '}
              <br className="hidden lg:block" />
              Built for Serious Business Owners.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-cream/50 text-lg leading-relaxed mb-8">
              CGW Systems was built around one idea: business owners deserve smarter
              direction — not louder sales pitches. We combine business funding strategy,
              credit guidance, and intelligent tools to help you move forward with
              purpose. The Fundability Checker is where it starts.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex items-center gap-4 p-4 bg-navy-800/40 border border-cream/5 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                <span className="text-gold-400 font-heading text-lg font-bold">C</span>
              </div>
              <div>
                <p className="text-cream text-sm font-semibold">CGW Systems</p>
                <p className="text-cream/40 text-sm">
                  Smarter direction for business growth
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Right: pillars */}
        <div className="flex flex-col gap-5">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.title} delay={i * 0.12} direction="right">
              <div className="group flex items-start gap-5 p-5 bg-navy-800/30 border border-cream/5 rounded-xl hover:border-gold-500/20 transition-all duration-400">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <pillar.icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-cream/40 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
