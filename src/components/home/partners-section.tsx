import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Card } from '@/components/ui/card'
import { partners } from '@/content/home'

export function PartnersSection() {
  const { patients, organizations } = partners
  return (
    <Section>
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading title={partners.title} className="mx-auto" />
          <p className="mt-4 text-lg text-secondary-foreground/80">
            {partners.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[patients, organizations].map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 150}>
              <Card className="h-full gap-0 p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-lg bg-primary text-highlight">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  {body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {i === 1 && (
                  <>
                    <p className="mt-6 font-bold text-primary">
                      {organizations.listIntro}
                    </p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {organizations.list.map(({ icon: ItemIcon, label }) => (
                        <li
                          key={label}
                          className="flex items-start gap-3 rounded-lg bg-secondary p-3 text-sm text-secondary-foreground"
                        >
                          <ItemIcon
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
