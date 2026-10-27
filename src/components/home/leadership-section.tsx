import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section, SectionHeading } from '@/components/sections/section'
import { Card } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { leadership, type Leader } from '@/content/home'

function LeaderCard({ leader }: { leader: Leader }) {
  const [intro, ...rest] = leader.bio
  return (
    <Card className="h-full gap-0 overflow-hidden p-0">
      <img
        src={leader.photo}
        alt={leader.name}
        loading="lazy"
        className="aspect-square w-full object-cover object-top sm:aspect-4/3"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
        <p className="mt-1 text-sm font-bold text-primary">{leader.role}</p>
        <p className="mt-4 text-muted-foreground">{intro}</p>
        <Collapsible className="mt-auto">
          <CollapsibleContent className="overflow-hidden duration-500 ease-smooth data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="space-y-4 pt-4 text-muted-foreground">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </CollapsibleContent>
          <CollapsibleTrigger className="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
            <span className="group-data-[state=open]:hidden">Show More</span>
            <span className="group-data-[state=closed]:hidden">Show Less</span>
            <ChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </Card>
  )
}

export function LeadershipSection() {
  return (
    <Section tone="tint">
      <div className="container">
        <Reveal>
          <SectionHeading
            title={leadership.title}
            className="mx-auto text-center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {leadership.leaders.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 150}>
              <LeaderCard leader={leader} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
