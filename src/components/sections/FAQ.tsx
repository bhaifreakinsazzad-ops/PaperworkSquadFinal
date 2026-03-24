import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import AnimateIn from '../ui/AnimateIn'
import GoldDivider from '../ui/GoldDivider'

const faqs = [
  {
    question: 'What is fundability?',
    answer:
      'Fundability refers to your business\'s readiness for funding — based on key financial, structural, and credit indicators. It helps determine how likely your business is to be considered for various funding options.',
  },
  {
    question: 'Will this checker tell me if I\'m approved?',
    answer:
      'No. The Fundability Checker evaluates your readiness position — it is not a lending decision or a guarantee of approval. It helps you understand where you stand so you can move forward with more clarity.',
  },
  {
    question: 'What if I\'m not ready yet?',
    answer:
      'That\'s completely okay. The checker will give you clear guidance on what areas to strengthen. Many business owners use this as a starting point to build toward stronger funding positions.',
  },
  {
    question: 'Is this only for established businesses?',
    answer:
      'No. Startups, newer businesses, and established companies can all benefit from understanding their fundability position. The checker adapts to where you are in your business journey.',
  },
  {
    question: 'Do I need an LLC to use the checker?',
    answer:
      'Having an LLC or formal entity structure is recommended but not required. Entity status is one of several factors the checker evaluates. You can still get valuable insights regardless of your current structure.',
  },
  {
    question: 'What happens after I complete the checker?',
    answer:
      'You\'ll receive your fundability result along with a suggested next step. Depending on your result, you may be guided toward strengthening certain areas, exploring specific funding paths, or scheduling a consultation.',
  },
]

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-cream/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
      >
        <span className="text-cream font-medium text-base md:text-lg pr-4 group-hover:text-gold-400 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-cream/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-cream/40 leading-relaxed pb-6 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper id="faq" dark>
      <AnimateIn>
        <div className="text-center mb-12">
          <GoldDivider className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            Common <span className="text-gold-400">Questions</span>
          </h2>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="max-w-3xl mx-auto bg-navy-800/30 border border-cream/5 rounded-xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </AnimateIn>
    </SectionWrapper>
  )
}
