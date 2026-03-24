interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  dark?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 px-5 md:px-8 ${
        dark ? 'bg-navy-950' : ''
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
