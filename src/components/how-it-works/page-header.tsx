import { ArrowDown } from 'lucide-react'
import { PageHeader } from '@/components/sections/page-header'
import { intro, steps } from '@/content/how-it-works'

export function HowItWorksHeader() {
  const [before, after] = intro.title.split('™')
  return (
    <PageHeader
      title={
        <>
          {before}
          <sup className="text-[0.4em] font-semibold">™</sup>
          {after}
        </>
      }
      subtitle={intro.subtitle}
      aside={
        // Overview of the 4 steps; each jumps to its step below
        <nav aria-label="Steps">
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
      }
    />
  )
}
