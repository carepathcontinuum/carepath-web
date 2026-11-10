import { PowerOff } from 'lucide-react'
import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { pilot } from '@/content/home'
import { cn } from '@/lib/utils'

/**
 * Client checklist #5: the three phases on a timeline. A node per phase, centred over its card on desktop
 * (down the left on phones), with a stem down to the card. Phase 1 is the live pilot: pulsing solid node,
 * a solid track that fades out toward Phase 2, and the navy card with the dark-band glow. Phases 2 and 3
 * are dashed nodes, dashed track and plain cards tagged "Planned expansion", so nothing reads as active.
 * Type: 24px Montserrat phase title + tag pill → 15px Montserrat medium body (as on the Outcomes cards).
 */
export function PilotSection() {
  return (
    <Section className="py-12 sm:py-14 lg:py-16">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {pilot.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            <span className="block">{pilot.title[0]}</span>
            <span className="block text-primary/50">{pilot.title[1]}</span>
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {pilot.phases.map((phase, i) => (
            <li key={phase.label} className="relative pl-11 md:pt-16 md:pl-0">
              {/* Track, edge to edge: this phase's span plus the gap to the next, so the line is unbroken from
                  the first card's edge to the last's. Down the left (phones) or across the top (desktop). */}
              <span
                aria-hidden
                className={cn(
                  'absolute top-0 bottom-0 left-[15px] md:top-[15px] md:right-0 md:bottom-auto md:left-0',
                  i < pilot.phases.length - 1 && '-bottom-10 md:-right-8',
                  phase.planned
                    ? 'border-l-2 border-dashed border-primary/25 md:border-t-2 md:border-l-0'
                    : 'w-0.5 bg-linear-to-b from-primary to-primary/15 md:h-0.5 md:w-auto md:bg-linear-to-r',
                )}
              />
              {/* Stem from the node down to the card (desktop) */}
              <span
                aria-hidden
                className={cn(
                  'absolute top-10 left-1/2 hidden h-6 md:block',
                  phase.planned
                    ? 'border-l-2 border-dashed border-primary/25'
                    : 'w-0.5 -translate-x-1/2 bg-primary',
                )}
              />
              {/* Node: pulsing solid for the live pilot, dashed for planned */}
              <span
                aria-hidden
                className={cn(
                  'absolute top-1/2 left-0 grid size-8 -translate-y-1/2 place-items-center rounded-full md:top-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-0',
                  phase.planned
                    ? 'border-2 border-dashed border-primary/30 bg-background'
                    : 'bg-primary shadow-lg ring-4 ring-primary/15',
                )}
              >
                {!phase.planned && (
                  <span className="absolute inset-0 rounded-full bg-primary/40 motion-safe:animate-ping" />
                )}
                <span
                  className={cn(
                    'relative size-2.5 rounded-full',
                    phase.planned ? 'bg-primary/25' : 'bg-primary-foreground',
                  )}
                />
              </span>

              <Reveal delay={i * 150} className="h-full">
                <div
                  className={cn(
                    'group/card relative isolate h-full overflow-hidden rounded-2xl p-5 sm:p-7',
                    phase.planned
                      ? 'bg-card shadow-sm ring-1 ring-primary/10'
                      : 'bg-primary text-primary-foreground shadow-xl',
                  )}
                >
                  {phase.planned ? (
                    // Hover tint: a circle that grows evenly from the centre (as on the Leadership cards)
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 bg-primary/5 transition-[clip-path] duration-1200 ease-smooth [clip-path:circle(0_at_50%_50%)] group-hover/card:[clip-path:circle(75%_at_50%_50%)]"
                    />
                  ) : (
                    <Glow className="-top-48 -right-48" />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={cn(
                        'font-heading text-2xl font-bold tracking-tight',
                        phase.planned
                          ? 'text-primary'
                          : 'text-primary-foreground',
                      )}
                    >
                      {phase.label}
                    </h3>
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-1 font-heading text-[0.625rem] font-bold tracking-wider whitespace-nowrap uppercase sm:px-3 sm:text-[0.6875rem]',
                        phase.planned
                          ? 'bg-secondary text-primary/70 ring-1 ring-primary/15'
                          : 'bg-highlight text-primary',
                      )}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <p
                    className={cn(
                      'mt-4 font-heading text-[0.9375rem] leading-relaxed font-medium',
                      phase.planned
                        ? 'text-muted-foreground'
                        : 'text-primary-foreground/85',
                    )}
                  >
                    {phase.body}
                  </p>
                  {phase.note && (
                    <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-primary-foreground/10 p-3 font-heading text-sm font-medium text-primary-foreground/80">
                      <PowerOff
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden
                      />
                      {phase.note}
                    </p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
