import { Check, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

/*
 * Shared building blocks for the legal pages (Terms, Privacy).
 * Type scale: 48px faded number → 30px title → 18px body (one style for every sentence) → 14px footnote.
 */

/** Shows a reply word (STOP / HELP) as a small inline key inside its sentence. */
export function KeywordLine({
  text,
  keyword,
}: {
  text: string
  keyword?: string
}) {
  if (!keyword) return text
  const [before, after] = text.split(keyword)
  return (
    <>
      {before}
      <kbd className="rounded border border-primary/25 bg-card px-1.5 py-0.5 font-heading text-sm font-bold text-primary">
        {keyword}
      </kbd>
      {after}
    </>
  )
}

/** Small print, pinned to the bottom of its clause so neighbouring columns end level. */
export function Footnote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-auto flex gap-2 border-t pt-5 font-heading text-sm font-medium text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
      {children}
    </p>
  )
}

/** Page body: clauses in a two-column grid from 768px (one column on phones), split by hairlines. */
export function Clauses({ children }: { children: ReactNode }) {
  return (
    // Tighter vertical padding than the shared Section: legal pages are short
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="container grid md:grid-cols-2">{children}</div>
    </section>
  )
}

/** One clause: faded number, title, then the body. Borders come from its place in the grid, so there are no cards. */
export function Clause({
  number,
  total,
  title,
  children,
}: {
  number: number
  total: number
  title: string
  children: ReactNode
}) {
  const left = number % 2 === 1
  const row = Math.ceil(number / 2)
  const lastRow = Math.ceil(total / 2)
  return (
    <section
      className={cn(
        // Phones: one column, a hairline between clauses
        number > 1 && 'border-t pt-10',
        number < total && 'pb-10',
        // 768px+: two columns. First row has no top rule, last row no bottom gap
        // (each conflicting pair is applied alone, never together).
        row === 1 && number > 1 && 'md:border-t-0 md:pt-0',
        row === lastRow && number < total && 'md:pb-0',
        // Vertical hairline after the left column
        left ? 'md:border-r md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16',
      )}
    >
      <Reveal delay={left ? 0 : 150} className="flex h-full flex-col">
        <header>
          <span
            aria-hidden
            className="block font-heading text-5xl leading-none font-bold text-primary/20"
          >
            {String(number).padStart(2, '0')}
          </span>
          <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-balance text-primary sm:text-3xl">
            <span className="sr-only">{number}. </span>
            {title}
          </h2>
        </header>
        <div className="mt-5 flex flex-1 flex-col gap-5 text-lg leading-relaxed text-foreground/75">
          {children}
        </div>
      </Reveal>
    </section>
  )
}

/** Separate statements as a checklist, in the body style. `columns` puts short items side by side from 640px. */
export function CheckList({
  items,
  columns = false,
}: {
  items: ReactNode[]
  columns?: boolean
}) {
  return (
    <ul className={cn('grid gap-x-6 gap-y-3', columns && 'sm:grid-cols-2')}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3" aria-hidden />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
