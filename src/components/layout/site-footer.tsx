import { Link } from 'react-router'
import { Logo } from '@/components/layout/site-header'
import { legalNav, mainNav, site } from '@/config/site'

const year = new Date().getFullYear()

// Same slide-in underline as the header nav (site-header.tsx)
const linkClass =
  'relative inline-block font-medium text-dark-muted-foreground transition-colors hover:text-dark-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100'

export function SiteFooter() {
  return (
    // Montserrat throughout, like the header
    <footer className="bg-dark font-heading text-dark-foreground">
      <div className="container grid gap-8 py-12 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            aria-label="CarePath Continuum home"
            className="block w-fit"
          >
            <Logo inverted />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block w-fit text-sm font-medium text-dark-muted-foreground"
          >
            {site.email}
          </a>
        </div>
        {[mainNav, legalNav].map((items, i) => (
          <nav key={i} aria-label={i === 0 ? 'Footer' : 'Legal'}>
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="container py-6 text-xs font-medium text-dark-muted-foreground">
          Copyright © {year} {site.legalName} - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
