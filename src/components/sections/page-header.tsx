import type { ReactNode } from 'react'
import { Glow } from '@/components/glow'
import { cn } from '@/lib/utils'

const enter =
  'animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-smooth fill-mode-both'

type PageHeaderProps = {
  title: ReactNode
  subtitle?: ReactNode
  /** Right-hand column on desktop (below the text on phones), e.g. a step overview */
  aside?: ReactNode
  /** Photo blended into the navy like the Home hero: right half on desktop, above the text on phones */
  image?: { src: string; srcSet: string; alt: string }
}

/** Navy band at the top of inner pages. Sits under the transparent sticky header, like the Home hero. */
export function PageHeader({ title, subtitle, aside, image }: PageHeaderProps) {
  return (
    // -mt-18 / pt-18 slide the band under the transparent sticky header (h-18).
    // Add the page's route to OVERLAY_ROUTES in site-header.tsx so the header turns white over it.
    // With a photo, phones show it under the header bar (like the Home hero), so the top padding is desktop-only.
    <section
      className={cn(
        'relative isolate -mt-18 overflow-hidden bg-dark text-dark-foreground',
        image
          ? 'flex flex-col lg:min-h-[30rem] lg:justify-center lg:pt-18'
          : 'pt-18',
      )}
    >
      {/* Glows would lighten the navy next to the photo's fade and show its edge */}
      {!image && (
        <>
          <Glow className="-top-32 -right-24" />
          <Glow className="-bottom-48 left-1/3" />
        </>
      )}
      {image && (
        <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[30%] lg:-z-10 lg:h-auto">
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 1024px) 60vw, 100vw"
            alt={image.alt}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[60%_30%]"
          />
          {/* Same eased fades as the Home hero: upward into the text on phones, from the left on desktop */}
          <div className="absolute inset-0 fade-dark-t lg:fade-dark-r" />
          <div className="absolute inset-0 hidden bg-dark/25 lg:block" />
          {/* Darken the top so the white header stays readable */}
          <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-dark/70 to-transparent" />
        </div>
      )}
      <div className="container grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-16">
        <div className="lg:col-span-7">
          <h1
            className={`${enter} text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`${enter} mt-6 max-w-xl text-lg text-pretty text-dark-muted-foreground delay-150 sm:text-xl`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {aside && (
          <div
            className={`${enter} delay-300 lg:col-span-5 lg:justify-self-end`}
          >
            {aside}
          </div>
        )}
      </div>
    </section>
  )
}
