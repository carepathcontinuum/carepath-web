import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { problem } from '@/content/home'

/** Reads as an argument: the claim (left), the assumption, then the punchline (right). Stacks on phones. */
export function ProblemSection() {
  const [claim, assumption] = problem.lines
  return (
    <Section>
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-balance text-primary sm:text-4xl">
            {claim}
          </h2>
        </Reveal>
        <Reveal delay={150} className="lg:pt-2">
          <p className="text-lg leading-relaxed text-pretty text-foreground/75 sm:text-xl">
            {assumption}
          </p>
          <p className="mt-6 border-l-4 border-primary pl-5 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {problem.punchline}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
