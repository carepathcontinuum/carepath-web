import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'
import { cn } from '@/lib/utils'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The 4 steps, one tinted card each: number, title, lead, checklist, and a photo flush to the card edge.
 * Type steps (as on Home): 48px faded number → 30/36px title → 18/20px Lato lead → 12px caps label → 18px Montserrat checklist.
 */
export function StepsSection() {
  return (
    <Section>
      <ol className="container space-y-6 lg:space-y-8">
        {steps.map((step, i) => (
          <li key={step.id} id={step.id} className="scroll-mt-24">
            <Reveal>
              {/* Mild navy-tinted card; photo fills the top (phones) or right edge (desktop) */}
              <div className="grid overflow-hidden rounded-2xl bg-secondary lg:min-h-96 lg:grid-cols-12">
                <div className="group/text relative isolate flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
                  {/* Hover tint: a circle that grows evenly from the centre */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 bg-primary/8 transition-[clip-path] duration-1200 ease-smooth [clip-path:circle(0_at_50%_50%)] group-hover/text:[clip-path:circle(75%_at_50%_50%)]"
                  />
                  <span
                    aria-hidden
                    className="block font-heading text-5xl leading-none font-bold text-primary/20"
                  >
                    {pad(i + 1)}
                  </span>
                  <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-primary xl:text-4xl">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-prose text-lg leading-relaxed text-pretty text-foreground/75 sm:text-xl">
                    {step.lead}
                  </p>
                  <p className="mt-8 font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                    {step.label}
                  </p>
                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 font-heading text-base font-semibold text-primary sm:text-lg"
                      >
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3" aria-hidden />
                        </span>
                        <span className="first-letter:uppercase">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Photo alternates sides on desktop: right, left, right, left */}
                <div
                  className={cn(
                    'group relative order-first overflow-hidden lg:col-span-5 lg:min-h-64',
                    i % 2 === 0 && 'lg:order-last',
                  )}
                >
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
          </li>
        ))}
      </ol>
    </Section>
  )
}
