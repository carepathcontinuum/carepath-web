import { ArrowUpRight } from 'lucide-react'
import type { Source } from '@/content/sources'
import { cn } from '@/lib/utils'

/**
 * Client checklist #7: "Sources:" line under a research claim, in the site's heading font and large enough to
 * read. Each link opens in a new tab. `tone="dark"` for use on navy bands.
 */
export function Sources({
  items,
  tone = 'light',
  className,
}: {
  items: Source[]
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <p
      className={cn(
        'font-heading text-sm leading-relaxed font-medium',
        dark ? 'text-primary-foreground/75' : 'text-foreground/70',
        className,
      )}
    >
      {items.length > 1 ? 'Sources: ' : 'Source: '}
      {items.map((s, i) => (
        <span key={s.url}>
          {i > 0 && <span aria-hidden> · </span>}
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex items-center gap-0.5 font-semibold underline underline-offset-4 transition-colors',
              dark
                ? 'text-primary-foreground decoration-primary-foreground/40 hover:decoration-primary-foreground'
                : 'text-primary decoration-primary/30 hover:decoration-primary',
            )}
          >
            {s.label}
            <ArrowUpRight className="size-3.5" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </span>
      ))}
    </p>
  )
}
