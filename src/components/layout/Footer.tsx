export default function Footer() {
  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'What We Check', href: '#what-we-check' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <footer className="bg-navy-950 border-t border-cream/5 py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-heading text-xl block mb-3">
              <span className="text-gold-400">CGW</span>{' '}
              <span className="text-cream/80">Systems</span>
            </span>
            <p className="text-cream/40 text-sm leading-relaxed">
              Smarter direction for business growth. We help business owners
              understand their funding readiness before they apply anywhere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/40 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream/60 text-xs font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:info@cgwsystems.com"
              className="text-cream/40 hover:text-gold-400 text-sm transition-colors"
            >
              info@cgwsystems.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-sm">
            &copy; {new Date().getFullYear()} CGW Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/25 hover:text-cream/50 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/25 hover:text-cream/50 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
