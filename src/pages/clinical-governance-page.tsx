import { ArrowRight } from 'lucide-react'
import { Fragment } from 'react'
import { PartnerCtaSection } from '@/components/home/partner-cta-section'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { flow, intro, pillars } from '@/content/clinical-governance'

export function ClinicalGovernancePage() {
  return (
    <>
      <PageTitle title="Clinical Governance" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      {/* Tighter padding, as on Home and the legal pages */}
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="container">
          {/* Three pillars split by hairlines; one column on phones */}
          <ol className="grid divide-y lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:divide-x lg:divide-y-0">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                className="py-8 first:pt-0 last:pb-0 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Subgrid: number, title and text share rows across columns, so the text starts level */}
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
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/75">
                    {pillar.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* How the pillars connect, as one path */}
          <Reveal className="mt-12 rounded-2xl bg-secondary p-6 sm:p-8 lg:mt-16">
            <p className="text-center font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
              {flow.label}
            </p>
            <ol className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              {flow.steps.map((step, i) => (
                <Fragment key={step}>
                  {i > 0 && (
                    <li aria-hidden className="text-primary/50">
                      <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
                    </li>
                  )}
                  <li
                    className={
                      i === flow.steps.length - 1
                        ? 'rounded-full bg-primary px-5 py-2.5 font-heading font-semibold text-primary-foreground'
                        : 'rounded-full border bg-card px-5 py-2.5 font-heading font-semibold text-primary'
                    }
                  >
                    {step}
                  </li>
                </Fragment>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <PartnerCtaSection />
    </>
  )
}
