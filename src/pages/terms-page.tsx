import { Check, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { consent, intro, sms, type ConsentLine } from '@/content/terms'

/** Shows the reply word (STOP / HELP) as a small inline key inside its sentence. */
function Line({ text, keyword }: ConsentLine) {
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

/**
 * One clause: faded number, title, then the body. Columns are split by a hairline, no card.
 * Type scale (same as How It Works): 48px faded number → 30px title → 18px lead sentence → 16px details → 14px footnote.
 */
function Clause({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: ReactNode
}) {
  return (
    <section className="py-10 first:pt-0 last:pb-0 md:py-0 md:first:pr-12 md:last:pl-12 lg:first:pr-16 lg:last:pl-16">
      <Reveal delay={(number - 1) * 150} className="flex h-full flex-col">
        {/* Same number and title style as the How It Works steps */}
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

export function TermsPage() {
  return (
    <>
      <PageTitle title="Terms & Conditions" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      {/* Tighter vertical padding than the shared Section: the page is short */}
      <section className="py-12 sm:py-14 lg:py-16">
        {/* Two short clauses, side by side from 768px, split by a hairline */}
        <div className="container">
          <div className="grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
            <Clause number={1} title={sms.title}>
              <p>{sms.label}</p>
              <ul className="grid gap-x-6 gap-y-3 text-base leading-7 sm:grid-cols-2">
                {sms.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" aria-hidden />
                    </span>
                    <span className="text-foreground/85">{point}</span>
                  </li>
                ))}
              </ul>
              {/* Footnote pinned to the bottom so both panels end level */}
              <p className="mt-auto flex gap-2 border-t pt-5 font-heading text-sm font-medium text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
                {sms.note}
              </p>
            </Clause>

            <Clause number={2} title={consent.title}>
              <p>{consent.lines[0].text}</p>
              {/* Opt-out actions: one step smaller than the consent sentence */}
              <div className="space-y-3 text-base leading-7 text-foreground/85">
                {consent.lines.slice(1).map((line) => (
                  <p key={line.text}>
                    <Line {...line} />
                  </p>
                ))}
              </div>
            </Clause>
          </div>
        </div>
      </section>
    </>
  )
}
