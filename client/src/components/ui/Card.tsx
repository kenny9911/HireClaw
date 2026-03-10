import { HTMLAttributes } from 'react'

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-dark-500 border border-dark-200 rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
