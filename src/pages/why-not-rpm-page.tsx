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
          <Reveal className="max-w-3xl">
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
              {difference.title}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
              <KeyPhrase text={lead.text} phrase={lead.key} />
            </p>
          </Reveal>

          {/* RPM faded, CarePath solid. Subgrid keeps each RPM point beside its CarePath answer. */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:grid-rows-[auto_repeat(3,auto)] md:gap-y-0 lg:mt-10 lg:gap-x-8">
            {columns.map((col, c) => (
              <Reveal
                key={col.name}
                delay={c * 150}
                className={cn(
                  'rounded-2xl p-6 sm:p-8 md:row-span-4 md:grid md:grid-rows-subgrid',
                  col.ours
                    ? 'bg-primary text-primary-foreground shadow-xl'
                    : 'border bg-card',
                )}
              >
                <h2
                  className={cn(
                    'font-heading text-2xl leading-tight font-bold tracking-tight sm:text-3xl',
                    col.ours ? 'text-primary-foreground' : 'text-primary/40',
                  )}
                >
                  {col.name}
                </h2>
                {col.points.map((point) => (
                  <p
                    key={point}
                    className={cn(
                      'mt-4 flex items-start gap-3 border-t pt-4 font-heading text-lg font-semibold',
                      col.ours
                        ? 'border-white/15 text-primary-foreground'
                        : 'text-foreground/50',
                    )}
                  >
                    <span
                      className={cn(
                        'mt-0.5 grid size-6 shrink-0 place-items-center rounded-full',
                        col.ours
                          ? 'bg-highlight text-primary'
                          : 'bg-muted text-foreground/40',
                      )}
                    >
                      {col.ours ? (
                        <Check className="size-3.5" aria-hidden />
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

      {/* Why This Matters: contrast headline, as on Home */}
      <section className="bg-secondary py-12 sm:py-14 lg:py-16">
        <Reveal className="container">
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {matters.label}
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="block">{matters.title[0]}</span>
            <span className="block text-primary/35">{matters.title[1]}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            {matters.body}
          </p>
        </Reveal>
      </section>

      <PartnerCtaSection />
    </>
  )
}
