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
      <kbd className="rounded border border-primary/25 bg-secondary px-1.5 py-0.5 font-heading text-sm font-bold text-primary">
        {keyword}
      </kbd>
      {after}
    </>
  )
}

/** Numbered document section: a navy rule on top, number and title, then the text. */
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
    <Reveal delay={(number - 1) * 150}>
      <section className="border-t-2 border-primary pt-6">
        <h2 className="text-xl leading-snug font-bold tracking-tight text-primary sm:text-2xl">
          <span className="mr-2 text-primary/40">{number}.</span>
          {title}
        </h2>
        <div className="mt-5 space-y-4 leading-relaxed text-foreground/85">
          {children}
        </div>
      </section>
    </Reveal>
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
        {/* Two short clauses, side by side from 768px */}
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <Clause number={1} title={sms.title}>
              <p>{sms.label}</p>
              <ul className="list-disc space-y-1.5 pl-5 marker:text-primary/50">
                {sms.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p>{sms.note}</p>
            </Clause>

            <Clause number={2} title={consent.title}>
              {consent.lines.map((line) => (
                <p key={line.text}>
                  <Line {...line} />
                </p>
              ))}
            </Clause>
          </div>
        </div>
      </Section>
    </>
  )
}
