import { ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { positioning } from '@/content/home'
import { cn } from '@/lib/utils'

/**
 * Left: contrast headline (faded → solid) and two points. Right: a layer diagram that shows
 * where CarePath sits: between existing care and the patient's home. Stacks on phones.
 */
export function PositioningSection() {
  return (
    <Section tone="tint">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl xl:text-5xl">
            <span className="block text-primary/35">
              {positioning.title[0]}
            </span>
            {/* One word now ("infrastructure" dropped on request, 2026-11-09), so it gets a size step to carry the weight */}
            <span className="mt-1 block text-5xl sm:text-6xl xl:text-7xl">
              {positioning.title[1]}
            </span>
          </h2>
          <div className="mt-8 space-y-6 border-t border-primary/10 pt-8">
            {positioning.points.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-lg font-bold text-primary">{title}</h3>
                <p className="mt-1 max-w-md text-lg leading-relaxed text-foreground/75">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Layer diagram: narrow, right-aligned; arrow badges show the flow down to the patient */}
        <Reveal delay={150} className="mx-auto w-full max-w-md lg:mr-0">
          <ol>
            {positioning.layers.map((layer, i) => (
              <li key={layer.title}>
                {i > 0 && (
                  <div aria-hidden className="flex justify-center py-2">
                    <span className="grid size-8 place-items-center rounded-full border bg-card text-primary shadow-xs">
                      <ArrowDown className="size-4" />
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    'rounded-2xl px-6 py-5 text-center',
                    layer.highlight
                      ? 'bg-primary py-6 text-primary-foreground shadow-xl ring-4 ring-primary/10 sm:ring-8'
                      : 'border bg-card',
                  )}
                >
                  <p
                    className={cn(
                      'font-heading font-bold tracking-tight',
                      layer.highlight ? 'text-2xl' : 'text-lg text-primary',
                    )}
                  >
                    {layer.title}
                  </p>
                  <p
                    className={cn(
                      'mt-1 font-heading text-sm font-medium',
                      layer.highlight
                        ? 'text-highlight'
                        : 'text-muted-foreground',
                    )}
                  >
                    {layer.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
