import { cn } from '@/lib/utils'

/** Soft decorative light behind content on dark bands. Purely visual. */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -z-10 size-96 rounded-full bg-highlight/15 blur-3xl',
        className,
      )}
    />
  )
}
