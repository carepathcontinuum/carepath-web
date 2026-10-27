import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { problem } from '@/content/home'

/**
 * Headline across the top, then one aligned row: what patients leave with (3 ticks) → the punchline.
 * Every block shares the container's left edge and the row's top line. Stacks on phones.
 */
export function ProblemSection() {
  return (
    <Section>
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="block">{problem.title[0]}</span>
            <span className="block text-primary/35">{problem.title[1]}</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 border-t pt-8 lg:mt-16">
          <p className="font-heading text-sm font-semibold text-muted-foreground">
            {problem.leavesWith}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-4">
            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-3">
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
            {/* The payoff, set off by a rule */}
            <div className="border-t border-dashed border-primary/25 pt-6 lg:-mt-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="text-lg leading-snug text-foreground/75">
                {problem.assumption}
              </p>
              <p className="mt-1 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {problem.punchline}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
