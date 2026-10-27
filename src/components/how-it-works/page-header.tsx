import { ArrowDown } from 'lucide-react'
import { Glow } from '@/components/glow'
import { intro, steps } from '@/content/how-it-works'

const enter =
  'animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-smooth fill-mode-both'

export function PageHeader() {
  const [before, after] = intro.title.split('™')
  return (
    // -mt-18 / pt-18 slide the band under the transparent sticky header (h-18), like the Home hero.
    <section className="relative isolate -mt-18 overflow-hidden bg-dark pt-18 text-dark-foreground">
      <Glow className="-top-32 -right-24" />
      <Glow className="-bottom-48 left-1/3" />
      <div className="container grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-16">
        <div className="lg:col-span-7">
          <p
            className={`${enter} text-sm font-bold tracking-widest text-highlight uppercase`}
          >
            {intro.eyebrow}
          </p>
          <h1
            className={`${enter} mt-3 text-4xl font-bold tracking-tight delay-150 sm:text-5xl xl:text-6xl`}
          >
            {before}
            <sup className="text-[0.4em] font-semibold">™</sup>
            {after}
          </h1>
          <p
            className={`${enter} mt-6 max-w-xl text-lg text-pretty text-dark-muted-foreground delay-300 sm:text-xl`}
          >
            {intro.subtitle}
          </p>
        </div>

        {/* Overview of the 4 steps; each jumps to its step below */}
        <nav
          aria-label="Steps"
          className={`${enter} delay-500 lg:col-span-5 lg:justify-self-end`}
        >
          {/* Stepper: numbered circles joined by a line */}
          <ol>
            {steps.map((step, i) => (
              <li key={step.id} className="relative pb-5 last:pb-0">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-11 bottom-1 left-5 w-px bg-white/15"
                  />
                )}
                <a
                  href={`#${step.id}`}
                  className="group flex items-center gap-4 rounded-lg transition-colors hover:text-highlight"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-highlight/40 bg-white/5 font-heading text-sm font-bold text-highlight transition-colors group-hover:border-highlight group-hover:bg-highlight group-hover:text-dark">
                    {i + 1}
                  </span>
                  <span className="flex-1 font-heading font-semibold">
                    {step.title}
                  </span>
                  <ArrowDown
                    aria-hidden
                    className="size-4 opacity-0 transition-[opacity,translate] group-hover:translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
