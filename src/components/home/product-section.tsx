import { Reveal } from '@/components/reveal'
import { Section } from '@/components/sections/section'
import { product } from '@/content/home'

type Screen = (typeof product.screens)[number]

/**
 * Client checklist #1 and #2: the four coordinated views, labelled "Illustrative product prototype".
 * Row 1: nurse dashboard (browser frame) beside the patient's phone. Row 2: executive dashboard and 30-day
 * provider summary. Each screen opens full size in a new tab, so it stays readable on phones (checklist #8).
 */
export function ProductSection() {
  const [nurse, executive, summary] = product.screens
  const { patient } = product
  return (
    <Section className="py-12 sm:py-14 lg:py-16">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {product.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            <span className="block">{product.title[0]}</span>
            <span className="block text-primary/50">{product.title[1]}</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {product.note}{' '}
            <span className="lg:hidden">
              Tap a screen to view it full size.
            </span>
          </p>
        </Reveal>

        {/* @container: the phone sizes itself from this grid's width so it matches the dashboard frame's height */}
        <div className="@container mt-10 grid items-start gap-x-8 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <BrowserShot screen={nurse} />
          </Reveal>

          {/* Patient: phone frame */}
          <Reveal delay={150} className="lg:col-span-4">
            <figure className="mx-auto max-w-64 lg:w-fit lg:max-w-none lg:[&>figcaption]:w-0 lg:[&>figcaption]:min-w-full">
              <a
                href={patient.image}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-[2.25rem] bg-primary p-2 shadow-xl"
              >
                <img
                  src={patient.image}
                  alt={patient.alt}
                  loading="lazy"
                  width={600}
                  height={1298}
                  // lg: same height as the nurse frame: 8-of-12 column width × image ratio (862/1600) + its 31px title
                  // bar, minus this frame's 16px padding
                  className="w-full rounded-[1.75rem] lg:h-[calc(((100cqw-22rem)*8/12+14rem)*0.53875+16px)] lg:w-auto"
                />
              </a>
              <Caption title={patient.title} body={patient.body} />
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-6">
            <BrowserShot screen={executive} />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6">
            <BrowserShot screen={summary} />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function BrowserShot({ screen }: { screen: Screen }) {
  return (
    <figure>
      <a
        href={screen.image}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-xl bg-card shadow-xl ring-1 ring-primary/10"
      >
        <div
          aria-hidden
          className="flex gap-1.5 border-b bg-secondary px-4 py-2.5"
        >
          <span className="size-2.5 rounded-full bg-primary/20" />
          <span className="size-2.5 rounded-full bg-primary/20" />
          <span className="size-2.5 rounded-full bg-primary/20" />
        </div>
        <img
          src={screen.image}
          alt={screen.alt}
          loading="lazy"
          width={1600}
          height={862}
          className="w-full"
        />
      </a>
      <Caption title={screen.title} body={screen.body} />
    </figure>
  )
}

function Caption({ title, body }: { title: string; body: string }) {
  return (
    <figcaption className="mt-4">
      <h3 className="font-heading text-lg font-bold tracking-tight text-primary">
        {title}
      </h3>
      <p className="mt-1 font-heading text-[0.9375rem] leading-relaxed font-medium text-muted-foreground">
        {body}
      </p>
    </figcaption>
  )
}
