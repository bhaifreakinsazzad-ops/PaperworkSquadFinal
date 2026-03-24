import { ShieldAlert, Eye, Target, Zap } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const cards = [
  {
    icon: ShieldAlert,
    title: 'Avoid Costly Missteps',
    description:
      'Applying blindly can lead to unnecessary hard inquiries and setbacks. Know your position first.',
  },
  {
    icon: Eye,
    title: 'Know Where You Stand',
    description:
      'Get clarity on your current business position so you can plan your next move with confidence.',
  },
  {
    icon: Target,
    title: 'Identify What to Strengthen',
    description:
      'See the specific areas that may need attention before pursuing funding opportunities.',
  },
  {
    icon: Zap,
    title: 'Move with Confidence',
    description:
      'Make informed decisions instead of guessing. The right preparation leads to stronger outcomes.',
  },
]

export default function WhyItMatters() {
  return (
    <SectionWrapper id="why-it-matters">
      <AnimateIn>
        <div className="text-center mb-16">
          <GoldDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            Why Checking First Is the{' '}
            <span className="text-gold-400">Smart Move</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-2xl mx-auto">
            Not every business is in the same position. The smart move is understanding
            where you stand before taking action.
          </p>
        </div>
      </AnimateIn>

      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <AnimateIn key={card.title} delay={i * 0.1}>
            <div className="group relative bg-navy-800/40 backdrop-blur-sm border border-cream/5 rounded-xl p-6 md:p-8 hover:border-gold-500/20 transition-all duration-500">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <card.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="text-cream text-lg font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-cream/45 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
