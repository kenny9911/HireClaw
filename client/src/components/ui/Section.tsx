import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function Section({
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-20 ${dark ? 'bg-dark-600' : ''} ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-3 text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
