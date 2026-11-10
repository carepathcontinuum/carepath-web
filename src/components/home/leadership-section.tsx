import { ArrowRight, XIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { leadership, type Leader } from '@/content/home'

/**
 * Compact version of the How It Works step card, two to a row: tinted, photo flush left (2/5), text right (3/5).
 * Stacks photo-on-top on phones; one per row until lg. Type steps: 12px caps role → 24px name → 15px Montserrat summary. The full bio opens in a side panel.
 */
function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Sheet>
      <div className="grid h-full overflow-hidden rounded-2xl bg-secondary sm:grid-cols-5">
        <div className="group relative overflow-hidden sm:col-span-2">
          <img
            src={leader.photo}
            alt={leader.name}
            loading="lazy"
            className="aspect-4/3 w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 sm:absolute sm:inset-0 sm:aspect-auto sm:h-full"
          />
        </div>
        <div className="group/text relative isolate flex flex-col justify-center p-6 sm:col-span-3 sm:min-h-80 lg:p-8">
          {/* Hover tint: a circle that grows evenly from the centre */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-primary/8 transition-[clip-path] duration-1200 ease-smooth [clip-path:circle(0_at_50%_50%)] group-hover/text:[clip-path:circle(75%_at_50%_50%)]"
          />
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
            {leader.role}
          </p>
          <h3 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-balance text-primary">
            {leader.name}
          </h3>
          <p className="mt-3 font-heading text-[0.9375rem] leading-relaxed font-medium text-pretty text-foreground/75">
            {leader.summary}
          </p>
          {/* Stretched link: the whole text side opens the bio. */}
          <SheetTrigger className="mt-6 inline-flex items-center gap-2 self-start font-heading text-base font-semibold text-primary group-hover/text:underline after:absolute after:inset-0">
            Read full bio
            <ArrowRight className="size-4 transition-transform group-hover/text:translate-x-1" />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="gap-0 overflow-hidden p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-xl"
      >
        <div className="h-full overflow-y-auto">
          <img
            src={leader.photo}
            alt=""
            className="aspect-16/10 w-full object-cover object-top"
          />
          <div className="p-6 sm:p-8">
            <SheetTitle className="text-2xl font-bold text-primary">
              {leader.name}
            </SheetTitle>
            <SheetDescription className="mt-1 font-heading font-semibold text-primary/70">
              {leader.role}
            </SheetDescription>
            <div className="mt-6 space-y-4 font-heading text-[0.9375rem] leading-relaxed font-medium text-muted-foreground">
              {leader.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon-lg"
            className="absolute top-4 right-6 rounded-full bg-card text-primary shadow-md ring-1 ring-primary/10 hover:bg-secondary"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export function LeadershipSection() {
  return (
    <Section className="pt-12 sm:pt-14 lg:pt-16">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={leadership.eyebrow}
            title={leadership.title}
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {leadership.leaders.map((leader, i) => (
            <li key={leader.name}>
              <Reveal delay={i * 150} className="h-full">
                <LeaderCard leader={leader} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
