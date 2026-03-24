import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'

function FundabilityScoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-b from-gold-500/20 via-gold-500/5 to-transparent rounded-3xl blur-xl" />

      <div className="relative bg-navy-800/60 backdrop-blur-xl border border-cream/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-navy-950/80">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs text-cream/50 uppercase tracking-widest font-medium">
              Fundability Assessment
            </span>
          </div>
          <span className="text-xs text-cream/30 bg-cream/5 px-3 py-1 rounded-full">
            Live Preview
          </span>
        </div>

        {/* Score circle */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-36 h-36">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-cream/5"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={326.7}
                initial={{ strokeDashoffset: 326.7 }}
                animate={{ strokeDashoffset: 326.7 * 0.22 }}
                transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c9952e" />
                  <stop offset="100%" stopColor="#e8c674" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-3xl font-bold text-cream font-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                78
              </motion.span>
              <span className="text-xs text-cream/40 mt-1">/ 100</span>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
          >
            Business Structure ✓
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="text-xs px-3 py-1.5 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/20"
          >
            Credit Profile — Review
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
          >
            Entity Status ✓
          </motion.span>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-cream/5 flex items-center justify-between">
          <span className="text-xs text-cream/30">Result: Almost Ready</span>
          <span className="text-xs text-gold-400 font-medium">View Full Report →</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-5 md:px-8 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <AnimateIn>
              <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wide mb-6">
                <span className="w-8 h-px bg-gold-500" />
                FUNDABILITY CHECKER
              </span>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
                Discover If Your Business Is{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                  Funding-Ready
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-cream/60 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Answer a few quick questions to understand your position — before
                you apply anywhere. Know where you stand, then move with clarity.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button href="#start" variant="primary" size="lg">
                  Start Fundability Check
                  <ArrowRight size={18} />
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See How It Works
                  <ChevronDown size={18} />
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <p className="text-cream/30 text-sm">
                Takes less than 3 minutes · No credit pull · Completely free
              </p>
            </AnimateIn>
          </div>

          {/* Right: Score Card */}
          <div className="flex justify-center lg:justify-end">
            <FundabilityScoreCard />
          </div>
        </div>
      </div>
    </section>
  )
}
