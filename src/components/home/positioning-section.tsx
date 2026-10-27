import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { positioning } from '@/content/home'
import { cn } from '@/lib/utils'

/**
 * Left: contrast headline (faded → solid) and two points. Right: a layer diagram that shows what
 * "infrastructure" means: CarePath sits between existing care and the patient's home. Stacks on phones.
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
            <span className="block">{positioning.title[1]}</span>
          </h2>
          <div className="mt-8 space-y-6 border-t border-primary/10 pt-8">
            {positioning.points.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-foreground/75">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Layer diagram: three stacked layers joined by a dashed spine */}
        <Reveal delay={150}>
          <ol className="relative space-y-4">
            <span
              aria-hidden
              className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 border-l-2 border-dashed border-primary/25"
            />
            {positioning.layers.map((layer) => (
              <li
                key={layer.title}
                className={cn(
                  'relative rounded-2xl border px-6 py-5 text-center',
                  layer.highlight
                    ? 'border-transparent bg-primary py-7 text-primary-foreground shadow-xl sm:scale-105'
                    : 'bg-card',
                )}
              >
                <p
                  className={cn(
                    'font-heading font-bold',
                    layer.highlight ? 'text-2xl' : 'text-lg text-primary',
                  )}
                >
                  {layer.title}
                </p>
                <p
                  className={cn(
                    'mt-1',
                    layer.highlight
                      ? 'text-highlight'
                      : 'text-sm text-muted-foreground',
                  )}
                >
                  {layer.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
