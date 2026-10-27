import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { notMonitoring } from '@/content/home'

// The four lines are an argument: what monitoring gives (1–2), then what CarePath adds (3–4).
export function NotMonitoringSection() {
  const monitoring = notMonitoring.lines.slice(0, 2)
  const [action, conclusion] = notMonitoring.lines.slice(2)
  return (
    <Section>
      <div className="container">
        <Reveal>
          <h2 className="text-center text-sm font-bold tracking-widest text-muted-foreground uppercase">
            {notMonitoring.eyebrow}
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal className="space-y-3 rounded-2xl border bg-card p-8 text-lg leading-relaxed text-muted-foreground">
            {monitoring.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <span className="grid size-12 place-items-center rounded-full bg-secondary text-primary">
              <ArrowRight
                className="size-5 rotate-90 md:rotate-0"
                aria-hidden
              />
            </span>
          </Reveal>
          <Reveal
            delay={300}
            className="space-y-3 rounded-2xl bg-primary p-8 text-lg leading-relaxed text-primary-foreground shadow-xl shadow-primary/20"
          >
            <p className="text-primary-foreground/85">{action}</p>
            <p className="font-heading text-xl font-bold">{conclusion}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
