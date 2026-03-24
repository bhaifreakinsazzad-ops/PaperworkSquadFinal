export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-cream/5 py-12 px-5 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg">
            <span className="text-gold-400">CGW</span>{' '}
            <span className="text-cream/60">Systems</span>
          </span>
        </div>
        <p className="text-cream/30 text-sm">
          &copy; {new Date().getFullYear()} CGW Systems. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-cream/30 hover:text-cream/60 text-sm transition-colors">
            Privacy
          </a>
          <a href="#" className="text-cream/30 hover:text-cream/60 text-sm transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
