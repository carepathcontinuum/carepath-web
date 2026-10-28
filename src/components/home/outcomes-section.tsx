import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Button } from '@/components/ui/button'
import { outcomes } from '@/content/home'

/**
 * Three outcome cards in a row, then the cost of inaction as a slim navy strip underneath
 * (it is the problem, not a fourth outcome) with a link to the Outcomes page. Tighter padding than other bands.
 */
export function OutcomesSection() {
  const cost = outcomes.items.find((item) => item.stat)
  const results = outcomes.items.filter((item) => !item.stat)
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
          {results.map(({ icon: Icon, title, body }, i) => (
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

        {cost && (
          <Reveal delay={450} className="mt-6">
            <div className="flex flex-col gap-5 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20 sm:p-8 md:flex-row md:items-center md:gap-10">
              <div className="flex shrink-0 items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-primary-foreground/10 text-highlight">
                  <cost.icon className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-xs font-bold tracking-[0.2em] text-highlight uppercase">
                    {cost.title}
                  </p>
                  <p className="mt-1 font-heading text-4xl leading-none font-bold tracking-tight sm:text-5xl">
                    {cost.stat}
                  </p>
                </div>
              </div>
              <p className="max-w-lg flex-1 font-heading text-base leading-relaxed font-medium text-pretty text-primary-foreground/80 md:border-l md:border-primary-foreground/15 md:pl-10">
                {cost.body}
              </p>
              <Button
                asChild
                variant="inverse"
                size="lg"
                className="self-start md:ml-auto md:self-center"
              >
                <Link to={outcomes.cta.to}>
                  {outcomes.cta.label}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
