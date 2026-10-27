import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Card } from '@/components/ui/card'
import { outcomes } from '@/content/home'
import { cn } from '@/lib/utils'

export function OutcomesSection() {
  return (
    <Section tone="tint">
      <div className="container">
        <Reveal>
          <SectionHeading
            title={outcomes.title}
            className="mx-auto text-center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.items.map(({ icon: Icon, title, body, stat }, i) => (
            <Reveal key={title} delay={i * 150}>
              <Card
                className={cn(
                  'h-full gap-0 p-6 transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-lg',
                  stat &&
                    'border-transparent bg-primary text-primary-foreground',
                )}
              >
                <span
                  className={cn(
                    'grid size-12 place-items-center rounded-lg',
                    stat
                      ? 'bg-white/10 text-highlight'
                      : 'bg-secondary text-primary',
                  )}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3
                  className={cn(
                    'mt-5 text-lg font-bold',
                    stat ? 'text-primary-foreground' : 'text-primary',
                  )}
                >
                  {title}
                </h3>
                {stat ? (
                  <p className="mt-2 text-primary-foreground/80">
                    <span className="block font-heading text-4xl font-bold text-primary-foreground">
                      {stat}
                    </span>{' '}
                    {body}
                  </p>
                ) : (
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
