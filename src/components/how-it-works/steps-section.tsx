import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'
import { cn } from '@/lib/utils'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The 4 steps as a timeline: a numbered rail on the left joins one card per step.
 * Each card: text, with the photo filling the card's top (phones) or right edge (desktop).
 * Type scale: 12px tracked caps eyebrow → 24/30px Montserrat title → 18px lead → 14px label → 16px checklist.
 */
export function StepsSection() {
  return (
    <Section>
      <ol className="container">
        {steps.map((step, i) => {
          const last = i === steps.length - 1
          const Icon = step.icon
          return (
            <li
              key={step.id}
              id={step.id}
              className="grid scroll-mt-24 grid-cols-[2.5rem_1fr] gap-x-5 sm:gap-x-8 lg:grid-cols-[3rem_1fr] lg:gap-x-12"
            >
              {/* Rail: step number, then a line down to the next step */}
              <div aria-hidden className="flex flex-col items-center lg:pt-8">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground ring-8 ring-background lg:size-12 lg:text-base">
                  {pad(i + 1)}
                </span>
                {!last && <span className="mt-3 w-px flex-1 bg-border" />}
              </div>

              <div className={cn(!last && 'pb-6 lg:pb-8')}>
                <Reveal>
                  <div className="grid overflow-hidden rounded-2xl border bg-card shadow-xs transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-lg lg:grid-cols-12">
                    <div className="p-6 sm:p-8 lg:col-span-7">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                          Step {pad(i + 1)}
                        </span>
                      </div>
                      <h2 className="mt-5 text-2xl leading-tight font-bold tracking-tight text-balance text-primary sm:text-3xl">
                        {step.title}
                      </h2>
                      <p className="mt-3 max-w-prose text-lg leading-relaxed text-pretty text-foreground/75">
                        {step.lead}
                      </p>
                      <p className="mt-6 text-sm font-bold text-primary">
                        {step.label}
                      </p>
                      <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                              <Check className="size-3" aria-hidden />
                            </span>
                            <span className="text-foreground/85 first-letter:uppercase">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="group relative order-first overflow-hidden lg:order-last lg:col-span-5 lg:min-h-64">
                      <img
                        src={step.image.src}
                        srcSet={step.image.srcSet}
                        sizes="(min-width: 1024px) 34rem, 100vw"
                        alt={step.image.alt}
                        loading="lazy"
                        className="aspect-video w-full object-cover saturate-[.9] transition-transform duration-1000 group-hover:scale-105 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                      />
                      {/* Light navy tint tones the bright stock photos toward the brand palette */}
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
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
