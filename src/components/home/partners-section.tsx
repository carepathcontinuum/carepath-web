import { Check } from 'lucide-react'
import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { partners } from '@/content/home'

/**
 * Two partners side by side, same structure: icon + caps label (who) → short headline (why) → one line → list.
 * Patients card is navy with a checklist and a closing line; organizations card is white with an icon list of org types.
 */
export function PartnersSection() {
  const { patients, organizations } = partners
  return (
    <Section className="pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={partners.eyebrow}
            title={partners.title}
            className="mx-auto"
          />
          <p className="mx-auto mt-4 max-w-2xl font-heading text-lg leading-relaxed font-medium text-pretty text-muted-foreground">
            {partners.lead}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20 sm:p-8">
              <Glow className="-top-32 -right-32" />
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-highlight">
                  <patients.icon className="size-5" aria-hidden />
                </span>
                <p className="font-heading text-xs font-bold tracking-[0.2em] text-highlight uppercase">
                  {patients.label}
                </p>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                {patients.title}
              </h3>
              <p className="mt-3 font-heading text-base leading-relaxed font-medium text-primary-foreground/80">
                {patients.body}
              </p>
              <ul className="mt-6 mb-8 space-y-3">
                {patients.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-heading text-base font-medium"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-highlight text-primary">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-primary-foreground/15 pt-6 font-heading text-sm leading-relaxed font-medium text-highlight">
                {patients.closing}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/10 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <organizations.icon className="size-5" aria-hidden />
                </span>
                <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                  {organizations.label}
                </p>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {organizations.title}
              </h3>
              <p className="mt-3 mb-8 font-heading text-base leading-relaxed font-medium text-muted-foreground">
                {organizations.body}
              </p>
              {/* Pinned to the bottom behind a divider, mirroring the patients card's closing line */}
              <div className="mt-auto border-t pt-6">
                <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                  {organizations.listIntro}
                </p>
                {/* Icon + name + detail: every item is exactly two lines, so the grid rows line up */}
                <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {organizations.list.map(
                    ({ icon: ItemIcon, name, detail }) => (
                      <li key={name} className="flex items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                          <ItemIcon className="size-5" aria-hidden />
                        </span>
                        <span className="font-heading leading-tight">
                          <span className="block text-sm font-semibold text-primary">
                            {name}
                          </span>
                          <span className="block text-xs font-medium text-muted-foreground">
                            {detail}
                          </span>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
