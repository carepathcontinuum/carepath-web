import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'
import { cn } from '@/lib/utils'

/**
 * The 4 steps as a timeline: a numbered rail on the left joins the steps at every screen size.
 * Desktop: text on the left, a smaller tinted photo on the right, so the text leads.
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
              <div
                aria-hidden
                className="flex flex-col items-center pt-5 sm:pt-8 lg:pt-10"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground ring-8 ring-background lg:size-12 lg:text-base">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {!last && <span className="mt-3 w-px flex-1 bg-border" />}
              </div>

              <div className={cn(!last && 'pb-10 lg:pb-14')}>
                {/* Each step on a very light tinted panel so it reads as one block */}
                <Reveal className="grid gap-8 rounded-2xl bg-secondary/50 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
                  <div className="lg:col-span-7">
                    <h2 className="pt-1 text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:pt-1.5">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h2>
                    <p className="mt-4 text-lg text-pretty text-muted-foreground">
                      {step.lead}
                    </p>
                    <div className="mt-8">
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

                  <div className="group relative overflow-hidden rounded-xl lg:col-span-5">
                    <img
                      src={step.image.src}
                      srcSet={step.image.srcSet}
                      sizes="(min-width: 1024px) 30rem, 100vw"
                      alt={step.image.alt}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover saturate-[.85] transition-transform group-hover:scale-105"
                    />
                    {/* Navy tint tones the bright stock photos down to the brand palette */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
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
