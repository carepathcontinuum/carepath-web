import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Button } from '@/components/ui/button'
import { outcomes } from '@/content/home'

/**
 * Three intended-benefit cards in a row, then a link to the Outcomes page. Tighter padding than other bands.
 * (The "$50B+" cost strip was removed per client checklist #7.)
 */
export function OutcomesSection() {
  return (
    <Section className="pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={outcomes.eyebrow}
            title={outcomes.title}
            className="mx-auto text-center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 150}>
              <div className="h-full rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/10 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-lg leading-snug font-bold tracking-tight text-primary">
                    {title}
                  </h3>
                </div>
                <p className="mt-4 font-heading text-[0.9375rem] leading-relaxed font-medium text-muted-foreground">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={450} className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to={outcomes.cta.to}>
              {outcomes.cta.label}
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
