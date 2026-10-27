import type { ReactNode } from 'react'
import { Glow } from '@/components/glow'

const enter =
  'animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-smooth fill-mode-both'

type PageHeaderProps = {
  title: ReactNode
  subtitle?: ReactNode
  /** Right-hand column on desktop (below the text on phones), e.g. a step overview or a photo */
  aside?: ReactNode
}

/** Navy band at the top of inner pages. Sits under the transparent sticky header, like the Home hero. */
export function PageHeader({ title, subtitle, aside }: PageHeaderProps) {
  return (
    // -mt-18 / pt-18 slide the band under the transparent sticky header (h-18).
    // Add the page's route to OVERLAY_ROUTES in site-header.tsx so the header turns white over it.
    <section className="relative isolate -mt-18 overflow-hidden bg-dark pt-18 text-dark-foreground">
      <Glow className="-top-32 -right-24" />
      <Glow className="-bottom-48 left-1/3" />
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
