import {
  Clause,
  Clauses,
  Details,
  Footnote,
  KeywordLine,
} from '@/components/legal'
import { PageTitle } from '@/components/page-title'
import { PageHeader } from '@/components/sections/page-header'
import { site } from '@/config/site'
import { collect, intro, rights, sms, use } from '@/content/privacy'

export function PrivacyPolicyPage() {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <PageHeader
        title={intro.title}
        subtitle={intro.subtitle}
        image={intro.image}
      />

      <Clauses>
        <Clause number={1} total={4} title={collect.title}>
          <p>{collect.lead}</p>
        </Clause>

        <Clause number={2} total={4} title={use.title}>
          <p>{use.lead}</p>
          <Details>
            {use.details.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Details>
        </Clause>

        <Clause number={3} total={4} title={rights.title}>
          <p>
            {rights.lead}{' '}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              {site.email}
            </a>
          </p>
        </Clause>

        <Clause number={4} total={4} title={sms.title}>
          <p>
            <KeywordLine {...sms.lines[0]} />
          </p>
          <Details>
            <p>
              <KeywordLine {...sms.lines[1]} />
            </p>
          </Details>
          <Footnote>{sms.note}</Footnote>
        </Clause>
      </Clauses>
    </>
  )
}
