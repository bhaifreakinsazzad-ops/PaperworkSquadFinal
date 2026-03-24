import { ArrowRight, Calendar } from 'lucide-react'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

      {/* Gold accent border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-5 leading-tight">
            The Smartest Move Starts with Understanding{' '}
            <span className="text-gold-400">Where You Stand</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-cream/50 text-lg mb-10 max-w-xl mx-auto">
            Your next step should make sense. Start by checking your position — it
            takes less than 3 minutes.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#start" variant="primary" size="lg">
              Start Fundability Check
              <ArrowRight size={18} />
            </Button>
            <Button href="#" variant="outline" size="lg">
              Book a Consultation
              <Calendar size={18} />
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
