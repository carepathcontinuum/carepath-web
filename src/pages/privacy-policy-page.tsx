import {
  CheckList,
  Clause,
  Clauses,
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
          <CheckList items={[use.lead, ...use.details]} />
        </Clause>

        <Clause number={3} total={4} title={rights.title}>
          <p>
            {rights.lead}{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              {site.email}
            </a>
          </p>
        </Clause>

        <Clause number={4} total={4} title={sms.title}>
          <CheckList
            items={sms.lines.map((line) => (
              <KeywordLine key={line.text} {...line} />
            ))}
          />
          <Footnote>{sms.note}</Footnote>
        </Clause>
      </Clauses>
    </>
  )
}
