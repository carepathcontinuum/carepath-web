import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router'
import { Glow } from '@/components/glow'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { Button } from '@/components/ui/button'
import { site } from '@/config/site'
import { partnerCta } from '@/content/home'

/** Closing call to action at the end of the page: headline and context on the left, actions on the right. */
export function PartnerCtaSection() {
  return (
    <Section tone="dark" className="relative isolate overflow-hidden">
      {/* One glow only, top-left: a bottom glow is cut off at the band edge and shows a seam above the footer */}
      <Glow className="-top-24 -left-24" />
      <div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <Reveal>
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-highlight uppercase">
            {partnerCta.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl leading-tight font-bold tracking-tight sm:text-4xl xl:text-5xl">
            {partnerCta.title}
          </h2>
          <p className="mt-5 max-w-xl font-heading text-lg leading-relaxed font-medium text-pretty text-dark-muted-foreground sm:text-xl">
            {partnerCta.body}
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button asChild variant="inverse" size="xl">
            <Link to={partnerCta.cta.to}>
              {partnerCta.cta.label}
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white/40 bg-transparent text-dark-foreground"
          >
            <a href={`mailto:${site.email}`}>
              <Mail />
              {partnerCta.emailLabel}
            </a>
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
