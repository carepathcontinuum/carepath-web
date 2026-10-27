import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { problem } from '@/content/home'

/**
 * Reads top to bottom: headline → what patients leave with (3 ticks in a row) → the conclusion.
 * Every block shares the container's left edge. The ticks stack on phones.
 */
export function ProblemSection() {
  return (
    // Tighter than the shared Section padding (64–96px), on request
    <section className="bg-background py-12 text-foreground sm:py-14 lg:py-16">
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="block">{problem.title[0]}</span>
            <span className="block text-primary/35">{problem.title[1]}</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-8 border-t pt-6 lg:mt-10">
          <p className="font-heading text-sm font-semibold text-muted-foreground">
            {problem.leavesWith}
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {problem.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-lg leading-snug text-foreground/85"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          {/* The conclusion, on its own line under the ticks */}
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-dashed border-primary/25 pt-6">
            <span className="text-lg text-foreground/75 sm:text-xl">
              {problem.assumption}
            </span>
            <span className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {problem.punchline}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
