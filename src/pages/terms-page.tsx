import { Check } from 'lucide-react'
import {
  Clause,
  Clauses,
  Details,
  Footnote,
  KeywordLine,
} from '@/components/legal'
import { PageTitle } from '@/components/page-title'
import { PageHeader } from '@/components/sections/page-header'
import { consent, intro, sms } from '@/content/terms'

export function TermsPage() {
  return (
    <>
      <PageTitle title="Terms & Conditions" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      <Clauses>
        <Clause number={1} total={2} title={sms.title}>
          <p>{sms.label}</p>
          <ul className="grid gap-x-6 gap-y-3 text-base leading-7 sm:grid-cols-2">
            {sms.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden />
                </span>
                <span className="text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>
          <Footnote>{sms.note}</Footnote>
        </Clause>

        <Clause number={2} total={2} title={consent.title}>
          <p>{consent.lines[0].text}</p>
          <Details>
            {consent.lines.slice(1).map((line) => (
              <p key={line.text}>
                <KeywordLine {...line} />
              </p>
            ))}
          </Details>
        </Clause>
      </Clauses>
    </>
  )
}
