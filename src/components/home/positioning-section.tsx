import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { positioning } from '@/content/home'

export function PositioningSection() {
  return (
    <Section>
      <div className="container grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="tracking-tight">
            <span className="block text-2xl font-semibold text-muted-foreground sm:text-3xl">
              {positioning.eyebrow}
            </span>
            <span className="mt-2 block text-4xl font-bold text-primary sm:text-5xl">
              {positioning.title}
            </span>
          </h2>
        </Reveal>
        <Reveal
          delay={150}
          className="space-y-4 border-l-2 border-primary/20 pl-6 text-lg leading-relaxed text-foreground/80"
        >
          {positioning.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
