import { ArrowUpRight } from 'lucide-react'
import type { Source } from '@/content/sources'
import { cn } from '@/lib/utils'

/** Client checklist #7: small "Sources:" line under a research claim. Opens each source in a new tab. */
export function Sources({
  items,
  className,
}: {
  items: Source[]
  className?: string
}) {
  return (
    <p className={cn('text-xs text-muted-foreground', className)}>
      {items.length > 1 ? 'Sources: ' : 'Source: '}
      {items.map((s, i) => (
        <span key={s.url}>
          {i > 0 && ' · '}
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 underline decoration-current/30 underline-offset-2 hover:text-primary hover:decoration-current"
          >
            {s.label}
            <ArrowUpRight className="size-3" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </span>
      ))}
    </p>
  )
}
