import { Check } from 'lucide-react'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { Section } from '@/components/sections/section'
import { consent, intro, sms, type ConsentLine } from '@/content/terms'

/** Shows the reply word (STOP / HELP) as a badge inside its sentence. */
function Line({ text, keyword }: ConsentLine) {
  if (!keyword) return text
  const [before, after] = text.split(keyword)
  return (
    <>
      {before}
      <kbd className="rounded-md bg-primary px-2 py-0.5 font-heading text-sm font-bold tracking-wider text-primary-foreground">
        {keyword}
      </kbd>
      {after}
    </>
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
        {/* Same light navy cards and checklist style as the How It Works steps */}
        <div className="container grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="rounded-2xl bg-secondary p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl leading-tight font-bold tracking-tight text-primary sm:text-3xl">
              {sms.title}
            </h2>
            <p className="mt-6 text-sm font-bold text-primary">{sms.label}</p>
            <ul className="mt-3 space-y-2.5">
              {sms.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" aria-hidden />
                  </span>
                  <span className="text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-primary/10 pt-5 text-sm text-muted-foreground">
              {sms.note}
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="rounded-2xl bg-secondary p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl leading-tight font-bold tracking-tight text-primary sm:text-3xl">
              {consent.title}
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
              {consent.lines.map((line) => (
                <li key={line.text}>
                  <Line {...line} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
