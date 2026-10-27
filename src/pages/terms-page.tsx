import {
  CheckList,
  Clause,
  Clauses,
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
          <CheckList items={sms.points} columns />
          <Footnote>{sms.note}</Footnote>
        </Clause>

        <Clause number={2} total={2} title={consent.title}>
          <CheckList
            items={consent.lines.map((line) => (
              <KeywordLine key={line.text} {...line} />
            ))}
          />
        </Clause>
      </Clauses>
    </>
  )
}
