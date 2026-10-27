import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { problem } from '@/content/home'

/**
 * One reading path: label → headline (left), then what patients leave with → punchline (right).
 * Full container width, left-aligned with the hero; a hairline splits the columns. Stacks on phones.
 */
export function ProblemSection() {
  return (
    <Section>
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-0">
        <Reveal className="lg:border-r lg:pr-16">
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {problem.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            {problem.title}
          </h2>
        </Reveal>

        <Reveal delay={150} className="lg:pl-16">
          <p className="text-muted-foreground">{problem.leavesWith}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {problem.items.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 font-heading text-sm font-semibold text-primary"
              >
                <Check className="size-4" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-foreground/75 sm:text-xl">
            {problem.assumption}
          </p>
          <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {problem.punchline}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
