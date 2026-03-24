import {
  Building2,
  FileCheck,
  CreditCard,
  PieChart,
  SearchCheck,
  Clock,
  DollarSign,
  Route,
} from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const items = [
  {
    icon: Building2,
    title: 'Business Structure & Setup',
    description: 'How your business is organized and registered',
  },
  {
    icon: FileCheck,
    title: 'LLC / Entity Status',
    description: 'Whether your entity is properly established',
  },
  {
    icon: CreditCard,
    title: 'Business Credit Profile',
    description: 'The strength of your business credit history',
  },
  {
    icon: PieChart,
    title: 'Credit Utilization',
    description: 'How much of your available credit is in use',
  },
  {
    icon: SearchCheck,
    title: 'Recent Inquiry Activity',
    description: 'Recent applications that may impact your profile',
  },
  {
    icon: Clock,
    title: 'Business Age & History',
    description: 'How long your business has been operating',
  },
  {
    icon: DollarSign,
    title: 'Revenue Indicators',
    description: 'Financial signals that demonstrate business health',
  },
  {
    icon: Route,
    title: 'Funding Path Alignment',
    description: 'Which funding options may fit your situation',
  },
]

export default function WhatWeCheck() {
  return (
    <SectionWrapper id="what-we-check" dark>
      <AnimateIn>
        <div className="text-center mb-16">
          <GoldDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            What the Fundability Checker{' '}
            <span className="text-gold-400">Evaluates</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-2xl mx-auto">
            A strategic overview of the key areas that determine your business's
            funding readiness.
          </p>
        </div>
      </AnimateIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.06}>
            <div className="group relative bg-navy-800/30 border border-cream/5 rounded-xl p-5 hover:border-gold-500/20 hover:bg-navy-800/50 transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-500/8 border border-gold-500/15 flex items-center justify-center">
                  <item.icon size={18} className="text-gold-400/80" />
                </div>
                <div>
                  <h3 className="text-cream text-sm font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/35 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.5}>
        <p className="text-center text-cream/25 text-sm mt-10 italic">
          This is a strategic assessment, not a hard credit pull.
        </p>
      </AnimateIn>
    </SectionWrapper>
  )
}
