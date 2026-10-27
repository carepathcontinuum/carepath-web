import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The 4 steps, one tinted card each: number, title, lead, checklist, and a photo flush to the card edge.
 * Type scale: 24/30px Montserrat title → 18px lead → 14px label → 16px checklist.
 */
export function StepsSection() {
  return (
    <Section>
      <ol className="container space-y-6 lg:space-y-8">
        {steps.map((step, i) => (
          <li key={step.id} id={step.id} className="scroll-mt-24">
            <Reveal>
              {/* Mild navy-tinted card; photo fills the top (phones) or right edge (desktop) */}
              <div className="grid overflow-hidden rounded-2xl bg-secondary lg:grid-cols-12">
                <div className="p-6 sm:p-8 lg:col-span-7">
                  <span
                    aria-hidden
                    className="block font-heading text-5xl leading-none font-bold text-primary/20"
                  >
                    {pad(i + 1)}
                  </span>
                  <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-balance text-primary sm:text-3xl">
                    <span className="sr-only">Step {i + 1}: </span>
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
          </li>
        ))}
      </ol>
    </Section>
  )
}
