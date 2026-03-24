import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:from-gold-400 hover:to-gold-300',
  secondary:
    'border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400',
  outline:
    'border border-cream/20 text-cream hover:bg-cream/5 hover:border-cream/40',
}

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
