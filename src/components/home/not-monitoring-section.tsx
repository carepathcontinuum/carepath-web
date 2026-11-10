import { Activity, ArrowRight, ListChecks } from 'lucide-react'
import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { notMonitoring } from '@/content/home'

/**
 * Monitoring vs. CarePath as one joined panel: light "monitoring" half → navy "CarePath" half with a glow,
 * arrow badge on the seam (pointing down on phones). Each half: icon + caps label → bold lead → body. Tighter padding than other bands.
 */
export function NotMonitoringSection() {
  const { monitoring, carepath } = notMonitoring
  return (
    <Section className="pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {notMonitoring.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="text-primary/35">{notMonitoring.title[0]} </span>
            {notMonitoring.title[1]}
          </h2>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-1 shadow-primary/15 ring-primary/10 md:grid-cols-2"
        >
          <div className="bg-card p-6 pb-10 sm:p-10 md:pr-14">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary/60">
                <Activity className="size-5" aria-hidden />
              </span>
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                {monitoring.label}
              </p>
            </div>
            <p className="mt-5 font-heading text-xl leading-snug font-bold tracking-tight text-primary/70 sm:text-2xl">
              {monitoring.lead}
            </p>
            <p className="mt-3 font-heading text-base leading-relaxed font-medium text-muted-foreground">
              {monitoring.body}
            </p>
          </div>

          {/* Arrow badge on the join: in the flow between the stacked halves on phones (pointing down), centred on the seam from md */}
          <span
            aria-hidden
            className="relative z-10 mx-auto -my-6 grid size-12 place-items-center rounded-full bg-card text-primary shadow-lg ring-4 ring-primary/10 md:absolute md:top-1/2 md:left-1/2 md:m-0 md:-translate-1/2"
          >
            <ArrowRight className="size-5 rotate-90 md:rotate-0" />
          </span>

          <div className="relative isolate overflow-hidden bg-primary p-6 pt-10 text-primary-foreground sm:p-10 md:pl-14">
            <Glow className="-right-24 -bottom-24" />
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-highlight">
                <ListChecks className="size-5" aria-hidden />
              </span>
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-highlight uppercase">
                {carepath.label}
              </p>
            </div>
            <p className="mt-5 font-heading text-xl leading-snug font-bold tracking-tight sm:text-2xl">
              {carepath.lead}
            </p>
            <p className="mt-3 font-heading text-base leading-relaxed font-medium text-primary-foreground/80">
              {carepath.body}
            </p>
            <p className="mt-5 border-t border-primary-foreground/15 pt-5 font-heading text-sm font-semibold text-highlight">
              {carepath.conclusion}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
