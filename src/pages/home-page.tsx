import { HomeHero } from '@/components/home/home-hero'
import { LeadershipSection } from '@/components/home/leadership-section'
import { NotMonitoringSection } from '@/components/home/not-monitoring-section'
import { OutcomesSection } from '@/components/home/outcomes-section'
import { PartnerCtaSection } from '@/components/home/partner-cta-section'
import { PartnersSection } from '@/components/home/partners-section'
import { PilotSection } from '@/components/home/pilot-section'
import { PositioningSection } from '@/components/home/positioning-section'
import { ProblemSection } from '@/components/home/problem-section'
import { StatementSection } from '@/components/home/statement-section'
import { PageTitle } from '@/components/page-title'

export function HomePage() {
  return (
    <>
      <PageTitle />
      <HomeHero />
      <ProblemSection />
      <StatementSection />
      <PositioningSection />
      <PilotSection />
      <LeadershipSection />
      <NotMonitoringSection />
      <OutcomesSection />
      <PartnersSection />
      <PartnerCtaSection />
    </>
  )
}
