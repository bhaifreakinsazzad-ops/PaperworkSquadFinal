import { CheckCircle2, Clock, ArrowUpCircle } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const outcomes = [
  {
    icon: CheckCircle2,
    title: 'Funding Ready',
    accent: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-400',
    description:
      'You may be in a strong position to explore funding options now. Your business indicators suggest readiness.',
  },
  {
    icon: Clock,
    title: 'Almost Ready',
    accent: 'from-gold-500/20 to-gold-500/5',
    border: 'border-gold-500/20 hover:border-gold-500/40',
    iconColor: 'text-gold-400',
    badge: 'bg-gold-500/10 text-gold-400',
    description:
      'A few areas to strengthen before moving forward. You are close — focused improvements can make the difference.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Building Foundation',
    accent: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    iconColor: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-400',
    description:
      'Clear steps to help you get on the right path. Every strong business started here — the key is knowing what to build.',
  },
]

export default function Outcomes() {
  return (
    <SectionWrapper id="outcomes" dark>
      <AnimateIn>
        <div className="text-center mb-16">
          <GoldDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            Every Business Is Different.{' '}
            <span className="text-gold-400">Your Result Reflects That.</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-2xl mx-auto">
            The checker guides you to the right path based on your unique situation.
          </p>
        </div>
      </AnimateIn>

      <div className="grid md:grid-cols-3 gap-6">
        {outcomes.map((outcome, i) => (
          <AnimateIn key={outcome.title} delay={i * 0.12}>
            <div
              className={`relative bg-navy-800/30 border ${outcome.border} rounded-xl p-6 md:p-8 transition-all duration-500 h-full`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${outcome.accent} rounded-xl opacity-50`}
              />
              <div className="relative">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full mb-5 ${outcome.badge}`}
                >
                  <outcome.icon size={14} />
                  {outcome.title}
                </span>
                <h3 className="text-cream text-xl font-semibold mb-3">
                  {outcome.title}
                </h3>
                <p className="text-cream/45 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.4}>
        <p className="text-center text-cream/40 text-base mt-12">
          No matter where you stand, you'll gain clarity on your best next move.
        </p>
      </AnimateIn>
    </SectionWrapper>
  )
}
