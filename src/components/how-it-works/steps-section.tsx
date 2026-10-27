import { Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { steps } from '@/content/how-it-works'
import { cn } from '@/lib/utils'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The 4 steps as a scroll story.
 * Desktop: a sticky photo on the left crossfades to the step in the middle of the screen, which is highlighted
 * on the right while the others fade back. Phone/tablet: each step shows its own photo, nothing is dimmed.
 *
 * Type scale: eyebrow 12px caps → title 30/36px Montserrat → lead 18–20px → label 14px → tags 14px.
 */
export function StepsSection() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const items = listRef.current?.children
    if (!items) return
    // A step becomes active when it crosses the middle band of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    for (const item of items) observer.observe(item)
    return () => observer.disconnect()
  }, [])

  return (
    <Section>
      <div className="container grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* Sticky photo with caption and progress (desktop only) */}
        <div className="hidden lg:block">
          <div className="sticky top-28 aspect-4/5 max-h-[calc(100svh-9rem)] w-full overflow-hidden rounded-2xl bg-dark shadow-xl">
            {steps.map((step, i) => (
              <img
                key={step.id}
                src={step.image.src}
                srcSet={step.image.srcSet}
                sizes="40rem"
                alt=""
                className={cn(
                  'absolute inset-0 size-full object-cover transition-[opacity,scale] duration-1000',
                  i === active
                    ? 'scale-100 opacity-100'
                    : 'scale-105 opacity-0',
                )}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-dark/10" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 p-8 text-dark-foreground"
            >
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-highlight tabular-nums">
                {pad(active + 1)} / {pad(steps.length)}
              </p>
              <div className="mt-4 flex gap-2">
                {steps.map((step, i) => (
                  <span
                    key={step.id}
                    className={cn(
                      'h-1 flex-1 rounded-full transition-colors duration-500',
                      i <= active ? 'bg-white' : 'bg-white/25',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <ol ref={listRef}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li
                key={step.id}
                id={step.id}
                data-index={i}
                className="scroll-mt-24 py-10 first:pt-0 last:pb-0 lg:flex lg:min-h-[70svh] lg:flex-col lg:justify-center lg:py-0"
              >
                <Reveal>
                  <img
                    src={step.image.src}
                    srcSet={step.image.srcSet}
                    sizes="100vw"
                    alt={step.image.alt}
                    loading="lazy"
                    className="mb-8 aspect-video w-full rounded-xl object-cover lg:hidden"
                  />
                  <div
                    className={cn(
                      'border-l-2 border-primary/15 pl-6 transition-[opacity,border-color] duration-500 sm:pl-8',
                      i === active ? 'lg:border-primary' : 'lg:opacity-35',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                        Step {pad(i + 1)}
                      </span>
                    </div>
                    <h2 className="mt-6 text-3xl leading-tight font-bold tracking-tight text-balance text-primary sm:text-4xl">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-prose text-lg leading-relaxed text-pretty text-foreground/75 sm:text-xl">
                      {step.lead}
                    </p>
                    <p className="mt-8 text-sm font-bold text-primary">
                      {step.label}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-sm text-foreground/85 shadow-xs"
                        >
                          <Check
                            className="size-3.5 text-primary"
                            aria-hidden
                          />
                          <span className="first-letter:uppercase">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
