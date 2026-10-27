import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'
import { cn } from '@/lib/utils'

/**
 * The 4 steps as a timeline: a numbered rail on the left joins the steps at every screen size.
 * Each step is a compact card: text, with the photo filling the card's top (phones) or right edge (desktop).
 */
export function StepsSection() {
  return (
    <Section>
      <ol className="container">
        {steps.map((step, i) => {
          const last = i === steps.length - 1
          return (
            <li
              key={step.id}
              id={step.id}
              className="grid scroll-mt-24 grid-cols-[2.5rem_1fr] gap-x-5 sm:gap-x-8 lg:grid-cols-[3rem_1fr] lg:gap-x-12"
            >
              {/* Rail: step number, then a line down to the next step */}
              <div aria-hidden className="flex flex-col items-center lg:pt-8">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground ring-8 ring-background lg:size-12 lg:text-base">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {!last && <span className="mt-3 w-px flex-1 bg-border" />}
              </div>

              <div className={cn(!last && 'pb-6 lg:pb-8')}>
                {/* Each step is one tinted card; the photo fills its edge (top on phones, right on desktop) */}
                <Reveal className="grid overflow-hidden rounded-2xl bg-secondary/50 lg:grid-cols-12">
                  <div className="p-5 sm:p-8 lg:col-span-7">
                    <h2 className="pt-1 text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:pt-1.5">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h2>
                    <p className="mt-4 text-lg text-pretty text-muted-foreground">
                      {step.lead}
                    </p>
                    <div className="mt-6">
                      <p className="text-sm font-bold text-muted-foreground">
                        {step.label}
                      </p>
                      <ul className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                              <Check className="size-3.5" aria-hidden />
                            </span>
                            <span className="first-letter:uppercase">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="group relative order-first overflow-hidden lg:order-last lg:col-span-5 lg:min-h-64">
                    <img
                      src={step.image.src}
                      srcSet={step.image.srcSet}
                      sizes="(min-width: 1024px) 34rem, 100vw"
                      alt={step.image.alt}
                      loading="lazy"
                      className="aspect-video w-full object-cover saturate-[.9] transition-transform group-hover:scale-105 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    />
                    {/* Navy tint tones the bright stock photos down to the brand palette */}
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                  </div>
                </Reveal>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
