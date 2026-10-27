import { Check, FileText } from 'lucide-react'
import { PartnerCtaSection } from '@/components/home/partner-cta-section'
import { KeyPhrase } from '@/components/key-phrase'
import { Footnote } from '@/components/legal'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { disclaimer, intro, outcomes, summary } from '@/content/outcomes'

export function OutcomesPage() {
  return (
    <>
      <PageTitle title="Outcomes" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      {/* Tighter padding, as on the other inner pages */}
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="container">
          {/* Three outcomes split by hairlines; subgrid keeps number, title and text level across columns */}
          <ol className="grid divide-y lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:divide-x lg:divide-y-0">
            {outcomes.map((outcome, i) => (
              <li
                key={outcome.title}
                className="py-8 first:pt-0 last:pb-0 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
              >
                <Reveal
                  delay={i * 150}
                  className="lg:row-span-3 lg:grid lg:grid-rows-subgrid"
                >
                  <span
                    aria-hidden
                    className="block font-heading text-5xl leading-none font-bold text-primary/20"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-primary sm:text-3xl">
                    {outcome.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80">
                    <KeyPhrase text={outcome.body} phrase={outcome.key} />
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Outcome 3 made tangible: heading on the left, a document preview of the summary on the right */}
          <Reveal className="mt-12 grid gap-8 rounded-2xl bg-secondary p-6 sm:p-10 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                {summary.label}
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-tight font-bold tracking-tight text-primary sm:text-3xl">
                {summary.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground/80">
                {summary.body}
              </p>
            </div>

            {/* Document preview: structure only, no sample data */}
            <div
              aria-hidden
              className="rounded-2xl border bg-card p-5 shadow-lg sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b pb-4">
                <span className="flex items-center gap-3 font-heading font-bold whitespace-nowrap text-primary">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <FileText className="size-4" />
                  </span>
                  {summary.docTitle}
                </span>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-semibold whitespace-nowrap text-primary">
                  {summary.docRange}
                </span>
              </div>
              <ul className="mt-4 divide-y">
                {summary.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 py-3 font-heading font-semibold text-primary"
                  >
                    {item}
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10">
                      <Check className="size-3.5" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mt-10">
            <Footnote>{disclaimer}</Footnote>
          </div>
        </div>
      </section>

      <PartnerCtaSection />
    </>
  )
}
