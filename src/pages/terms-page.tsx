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

/** Numbered document section: number and title on the left on desktop, text on the right. */
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
    <section className="border-t py-10 first:border-t-0 first:pt-0 last:pb-0">
      <Reveal className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
        <h2 className="text-xl leading-snug font-bold tracking-tight text-primary">
          <span className="mr-2 text-primary/40">{number}.</span>
          {title}
        </h2>
        <div className="space-y-4 leading-relaxed text-foreground/85">
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
      <PageHeader title={intro.title} subtitle={intro.subtitle} />

      <Section>
        <div className="container">
          <div className="max-w-4xl">
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
