import { Check, Info } from 'lucide-react'
import type { ReactNode } from 'react'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { Section } from '@/components/sections/section'
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

/** One clause: number tile + title, then the body. Columns are split by a hairline, no card. */
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
        <header className="flex items-center gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary font-heading font-bold text-primary-foreground">
            {number}
          </span>
          <h2 className="text-xl leading-snug font-bold tracking-tight text-primary sm:text-2xl">
            {title}
          </h2>
        </header>
        <div className="mt-6 flex flex-1 flex-col gap-5 leading-relaxed text-foreground/85">
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

      <Section>
        {/* Two short clauses, side by side from 768px, split by a hairline */}
        <div className="container">
          <div className="grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
            <Clause number={1} title={sms.title}>
              <p className="text-sm font-bold text-primary">{sms.label}</p>
              <ul className="space-y-3">
                {sms.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              {/* Footnote pinned to the bottom so both panels end level */}
              <p className="mt-auto flex gap-2 border-t pt-5 text-sm text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
                {sms.note}
              </p>
            </Clause>

            <Clause number={2} title={consent.title}>
              <p>{consent.lines[0].text}</p>
              {/* Opt-out actions grouped so the reply words are easy to find */}
              <div className="space-y-3 border-l-2 border-primary/20 pl-5">
                {consent.lines.slice(1).map((line) => (
                  <p key={line.text}>
                    <Line {...line} />
                  </p>
                ))}
              </div>
            </Clause>
          </div>
        </div>
      </Section>
    </>
  )
}
