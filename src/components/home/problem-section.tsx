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
        <Reveal className="lg:pr-16">
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {problem.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="block">{problem.title[0]}</span>
            <span className="block text-primary/35">{problem.title[1]}</span>
          </h2>
        </Reveal>

        {/* Reads like a discharge checklist: everything ticked, then the gap */}
        <Reveal delay={150} className="lg:pl-16">
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <p className="font-heading text-sm font-semibold text-muted-foreground">
              {problem.leavesWith}
            </p>
            <ul className="mt-4 space-y-3">
              {problem.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg text-foreground/85"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-dashed border-primary/25 pt-6">
              <p className="text-lg text-foreground/75">{problem.assumption}</p>
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
