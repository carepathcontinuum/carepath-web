import { Check, Minus } from 'lucide-react'
import { PartnerCtaSection } from '@/components/home/partner-cta-section'
import { KeyPhrase } from '@/components/key-phrase'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { difference, intro, lead, matters } from '@/content/why-not-rpm'
import { cn } from '@/lib/utils'

const columns = [
  { ...difference.rpm, ours: false },
  { ...difference.carepath, ours: true },
]

export function WhyNotRpmPage() {
  return (
    <>
      <PageTitle title="Why CarePath Isn’t RPM" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      {/* Tighter padding, as on the other inner pages */}
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="container">
          <Reveal>
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
              {difference.title}
            </p>
            {/* Contrast headline, as on Home: RPM faded, CarePath solid */}
            <h2 className="mt-4 font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
              <span className="block text-primary/35">{lead.title[0]}</span>
              <span className="block">{lead.title[1]}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
              <KeyPhrase text={lead.text} phrase={lead.key} />
            </p>
          </Reveal>

          {/* RPM faded, CarePath solid. Subgrid keeps each RPM point beside its CarePath answer. */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:grid-rows-[auto_repeat(3,auto)] md:gap-y-0 lg:mt-10 lg:gap-x-8">
            {columns.map((col, c) => (
              <Reveal
                key={col.name}
                delay={c * 150}
                className={cn(
                  'rounded-2xl p-6 sm:p-8 md:row-span-4 md:grid md:grid-rows-subgrid',
                  col.ours
                    ? // Stronger: halo ring; on desktop it extends 16px past the RPM card (negative margin + extra padding
                      // cancel out, so the shared rows stay level)
                      'bg-primary text-primary-foreground shadow-2xl ring-4 ring-primary/15 sm:ring-8 md:-my-4 md:py-12'
                    : 'border bg-card',
                )}
              >
                <div>
                  <p
                    className={cn(
                      'font-heading text-xs font-bold tracking-[0.2em] uppercase',
                      col.ours ? 'text-highlight' : 'text-foreground/45',
                    )}
                  >
                    {col.tag}
                  </p>
                  <h3
                    className={cn(
                      'mt-2 font-heading leading-tight font-bold tracking-tight',
                      col.ours
                        ? 'text-4xl text-primary-foreground xl:text-5xl'
                        : 'text-2xl text-foreground/55 sm:text-3xl',
                    )}
                  >
                    {col.name}
                  </h3>
                </div>
                {col.points.map((point) => (
                  <p
                    key={point}
                    className={cn(
                      'mt-4 flex items-start gap-3 border-t pt-4 font-heading text-lg font-semibold',
                      col.ours
                        ? 'border-white/15 text-primary-foreground'
                        : 'text-foreground/60',
                    )}
                  >
                    <span
                      className={cn(
                        'grid shrink-0 place-items-center rounded-full',
                        col.ours
                          ? 'size-7 bg-highlight text-primary'
                          : 'mt-0.5 size-6 bg-muted text-foreground/40',
                      )}
                    >
                      {col.ours ? (
                        <Check className="size-4" aria-hidden />
                      ) : (
                        <Minus className="size-3.5" aria-hidden />
                      )}
                    </span>
                    {point}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters: the problem as a muted lead, the answer as the headline */}
      <section className="bg-secondary py-12 sm:py-14 lg:py-16">
        <Reveal className="container">
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {matters.label}
          </p>
          {/* Problem: one sentence per line, muted */}
          <p className="mt-4 font-heading text-xl leading-snug font-semibold text-primary/45 sm:text-2xl">
            <span className="block">{matters.title[0]}</span>
            <span className="block">{matters.title[1]}</span>
          </p>
          {/* Answer: the headline, with its second half one step smaller */}
          <h2 className="mt-8 font-heading leading-tight font-bold tracking-tight text-primary">
            <span className="block text-3xl sm:text-4xl xl:text-5xl">
              {matters.body[0]}
            </span>
            <span className="mt-1 block text-2xl text-primary/70 sm:text-3xl">
              {matters.body[1]}
            </span>
          </h2>
        </Reveal>
      </section>

      <PartnerCtaSection />
    </>
  )
}
