import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { Button } from '@/components/ui/button'
import { partnerCta } from '@/content/home'

/** Closing call to action at the end of the page. */
export function PartnerCtaSection() {
  const [intro, question] = partnerCta.lines
  return (
    <Section tone="dark" className="relative isolate overflow-hidden">
      <Glow className="-top-24 -left-24" />
      <Glow className="-right-24 -bottom-24" />
      <Reveal className="container max-w-3xl text-center">
        <p className="text-lg text-pretty text-dark-muted-foreground sm:text-xl">
          {intro}
        </p>
        <p className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {question}
        </p>
        <Button asChild variant="inverse" size="xl" className="mt-10">
          <Link to={partnerCta.cta.to}>
            {partnerCta.cta.label}
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </Section>
  )
}
