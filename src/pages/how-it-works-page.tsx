import { PartnerCtaSection } from '@/components/home/partner-cta-section'
import { HowItWorksHeader } from '@/components/how-it-works/page-header'
import { StepsSection } from '@/components/how-it-works/steps-section'
import { PageTitle } from '@/components/page-title'

export function HowItWorksPage() {
  return (
    <>
      <PageTitle title="How It Works" />
      <HowItWorksHeader />
      <StepsSection />
      <PartnerCtaSection />
    </>
  )
}
