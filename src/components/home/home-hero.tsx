import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { hero } from '@/content/home'

// Staggered entrance: tagline, then headline, then buttons
const enter =
  'animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-smooth fill-mode-both'

export function HomeHero() {
  return (
    // Fills the first screen. -mt-18 pulls it up under the transparent sticky header (h-18).
    // svh = small viewport height, so mobile browser toolbars don't cut it off or make it jump.
    // Phone/tablet: photo fills the space above the text and fades into navy, so text never sits on the photo.
    // Desktop: navy text column on the left, clear photo on the right half.
    <section className="relative isolate -mt-18 flex min-h-svh flex-col bg-dark text-dark-foreground lg:justify-center lg:pt-18">
      <div className="relative min-h-40 flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[42%] lg:-z-10">
        <img
          src={hero.image.src}
          srcSet={hero.image.srcSet}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={hero.image.alt}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-[35%_25%] lg:object-[40%_center]"
        />
        {/* Fade the photo into navy: upward from the text on phones, from the left edge on desktop */}
        <div className="absolute inset-0 fade-dark-t lg:fade-dark-r" />
        {/* Phone: slight darkening at the top so the white header stays readable */}
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-dark/50 to-transparent lg:hidden" />
        {/* Desktop: darken the top so the white header text stays readable */}
        <div className="absolute inset-x-0 top-0 hidden h-40 bg-linear-to-b from-dark/70 to-transparent lg:block" />
      </div>

      <div className="container -mt-6 pb-16 sm:pb-20 lg:mt-0 lg:py-16">
        <div className="max-w-2xl lg:w-1/2 lg:pr-12">
          <p
            className={`${enter} border-l-2 border-highlight pl-4 text-base text-dark-muted-foreground sm:text-lg`}
          >
            {hero.eyebrow}
          </p>
          <h1
            className={`${enter} mt-6 text-4xl leading-tight font-bold tracking-tight delay-150 sm:text-5xl xl:text-6xl`}
          >
            {hero.title}
          </h1>
          <div
            className={`${enter} mt-10 flex flex-col gap-3 delay-300 sm:flex-row`}
          >
            <Button asChild variant="inverse" size="xl">
              <Link to={hero.primaryCta.to}>
                {hero.primaryCta.label}
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/40 bg-transparent text-dark-foreground hover:bg-white/10 hover:text-dark-foreground"
            >
              <Link to={hero.secondaryCta.to}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>

      <ChevronDown
        aria-hidden
        className="absolute bottom-4 left-1/2 size-7 -translate-x-1/2 text-dark-muted-foreground motion-safe:animate-bounce lg:left-1/4"
      />
    </section>
  )
}
