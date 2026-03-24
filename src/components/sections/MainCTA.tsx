import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'

export default function MainCTA() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/8 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-5">
            Stop Guessing.{' '}
            <span className="text-gold-400">Start with Clarity.</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-cream/50 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            See where your business stands in under 3 minutes. No credit pull. No
            commitment. Just clarity.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <Button href="#start" variant="primary" size="lg">
            Start Fundability Check
            <ArrowRight size={18} />
          </Button>
        </AnimateIn>
      </div>
    </section>
  )
}
