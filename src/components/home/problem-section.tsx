import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { problem } from '@/content/home'

export function ProblemSection() {
  return (
    <Section>
      <Reveal className="container max-w-3xl text-center">
        {problem.lines.map((line) => (
          <p
            key={line}
            className="mt-6 text-xl leading-relaxed text-balance text-foreground/80 first:mt-0 sm:text-2xl"
          >
            {line}
          </p>
        ))}
        <p className="mt-10 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {problem.punchline}
        </p>
      </Reveal>
    </Section>
  )
}
