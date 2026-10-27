import { ArrowRight, CircleCheck, Mail } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { CheckList } from '@/components/legal'
import { PageTitle } from '@/components/page-title'
import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/sections/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/config/site'
import { aside, form, intro } from '@/content/contact'

// Larger than the shadcn defaults (32px / 14px): 48px touch targets, 16px text so iOS doesn't zoom in on focus.
const label = 'font-heading text-sm font-semibold text-primary'
const field = 'h-12 bg-card px-4 text-base md:text-base'

function Required() {
  return (
    <span aria-hidden className="-ml-1.5 text-primary/60">
      *
    </span>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // ponytail: nothing is sent yet. Post `new FormData(e.currentTarget)` to the chosen backend here.
    setSent(true)
  }

  return (
    <>
      <PageTitle title="Contact" />
      <PageHeader title={intro.title} subtitle={intro.subtitle} />

      <section className="py-12 sm:py-14 lg:py-16">
        {/* Form on the left, note and email on the right, split by a hairline like the legal pages */}
        <div className="container grid gap-10 md:grid-cols-[3fr_2fr] md:gap-0">
          <Reveal className="md:border-r md:pr-12 lg:pr-16">
            {sent ? (
              <div
                role="status"
                className="flex items-start gap-4 rounded-2xl bg-secondary p-6 sm:p-8"
              >
                <CircleCheck
                  className="mt-0.5 size-7 shrink-0 text-primary"
                  aria-hidden
                />
                <p className="font-heading text-2xl leading-tight font-bold tracking-tight text-primary">
                  {form.thanks}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder={form.namePlaceholder}
                    className={field}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {form.email}
                    <Required />
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                    required
                    className={field}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">
                    {form.interest}
                    <Required />
                  </Label>
                  <Textarea
                    id="interest"
                    name="interest"
                    required
                    rows={5}
                    placeholder={form.interestPlaceholder}
                    className="min-h-36 bg-card px-4 py-3 text-base md:text-base"
                  />
                </div>
                <Button type="submit" size="xl" className="w-full sm:w-auto">
                  {form.submit}
                  <ArrowRight />
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal
            delay={150}
            className="border-t pt-10 md:border-t-0 md:pt-0 md:pl-12 lg:pl-16"
          >
            {/* Three short blocks, each with the same small label */}
            <p className={label}>{aside.audience.label}</p>
            <p className="mt-2 text-lg text-foreground/85">
              {aside.audience.text}
            </p>
            <div className="mt-8 border-t pt-8">
              <p className={label}>{aside.engage.label}</p>
              <div className="mt-3 text-lg text-foreground/85">
                <CheckList items={aside.engage.points} />
              </div>
            </div>
            <div className="mt-8 border-t pt-8">
              <p className={label}>{aside.emailLabel}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-flex items-center gap-2 text-lg text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                <Mail className="size-5" aria-hidden />
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
