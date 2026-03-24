export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </div>
  )
}
