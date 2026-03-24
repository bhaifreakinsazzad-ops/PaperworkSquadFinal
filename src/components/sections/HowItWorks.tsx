import { ClipboardList, BarChart3, Compass } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Answer a Few Questions',
    description:
      'Quick, focused questions about your business structure, credit profile, and goals. No lengthy forms.',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Get Your Readiness Result',
    description:
      'Receive a clear assessment of where your business stands and what your current funding position looks like.',
  },
  {
    num: '03',
    icon: Compass,
    title: 'Understand Your Next Step',
    description:
      'Get clear guidance on the smartest path forward — whether you are ready now or need to build up first.',
  },
]

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <AnimateIn>
        <div className="text-center mb-16">
          <GoldDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            How It <span className="text-gold-400">Works</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-2xl mx-auto">
            Three simple steps to understand your business's funding position.
          </p>
        </div>
      </AnimateIn>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-gold-500/30 via-gold-500/50 to-gold-500/30" />

        {steps.map((step, i) => (
          <AnimateIn key={step.num} delay={i * 0.15}>
            <div className="relative text-center">
              {/* Number badge */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy-800 border-2 border-gold-500/30 mb-6 z-10">
                <span className="text-gold-400 font-heading text-lg font-semibold">
                  {step.num}
                </span>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gold-500/8 border border-gold-500/15 flex items-center justify-center mx-auto mb-5">
                <step.icon size={22} className="text-gold-400" />
              </div>
              <h3 className="text-cream text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-cream/45 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
