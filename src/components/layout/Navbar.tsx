import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-cream/5 shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-cream font-heading text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-gold-400">CGW</span>
          <span className="text-cream/80 font-light">Systems</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-cream/60 hover:text-cream transition-colors">
            How It Works
          </a>
          <a href="#what-we-check" className="text-sm text-cream/60 hover:text-cream transition-colors">
            What We Check
          </a>
          <a href="#faq" className="text-sm text-cream/60 hover:text-cream transition-colors">
            FAQ
          </a>
          <Button href="#start" size="md">
            Start Fundability Check
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream/70 hover:text-cream transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-cream/5 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors py-2"
              >
                How It Works
              </a>
              <a
                href="#what-we-check"
                onClick={() => setMobileOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors py-2"
              >
                What We Check
              </a>
              <a
                href="#faq"
                onClick={() => setMobileOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors py-2"
              >
                FAQ
              </a>
              <Button href="#start" className="mt-2 w-full">
                Start Fundability Check
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
