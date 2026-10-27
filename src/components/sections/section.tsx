import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  default: 'bg-background text-foreground',
  tint: 'bg-secondary text-secondary-foreground',
  dark: 'bg-dark text-dark-foreground',
}

type SectionProps = ComponentProps<'section'> & {
  tone?: keyof typeof tones
}

/** Full-width page band with consistent vertical rhythm. Content goes in a `.container`. */
export function Section({
  tone = 'default',
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}
      {...props}
    />
  )
}

type SectionHeadingProps = {
  eyebrow?: ReactNode
  title: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
