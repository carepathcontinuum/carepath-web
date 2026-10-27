import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { statement } from '@/content/home'

export function StatementSection() {
  return (
    <Section tone="dark" className="relative isolate overflow-hidden">
      <Glow className="top-1/2 left-1/2 -translate-1/2" />
      <Reveal className="container text-center">
        <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {statement.before}{' '}
          <span className="text-highlight">{statement.highlight}</span>
        </h2>
      </Reveal>
    </Section>
  )
}
