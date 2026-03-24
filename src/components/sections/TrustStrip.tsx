import { Shield, TrendingUp, Search, Users } from 'lucide-react'
import AnimateIn from '../ui/AnimateIn'

const items = [
  { icon: TrendingUp, label: 'Business Funding Guidance' },
  { icon: Shield, label: 'Credit Strategy Support' },
  { icon: Search, label: 'Strategic Readiness Evaluation' },
  { icon: Users, label: 'Built for Serious Owners' },
]

export default function TrustStrip() {
  return (
    <section className="relative bg-navy-800/40 border-y border-cream/5 py-8 md:py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-3 text-center">
                <item.icon size={20} className="text-gold-400/70" />
                <span className="text-cream/50 text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
