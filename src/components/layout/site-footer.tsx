import { Link } from 'react-router'
import { legalNav, mainNav, site } from '@/config/site'

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container grid gap-8 py-12 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-bold">
            {site.name}
            <sup>™</sup>
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm text-dark-muted-foreground transition-colors hover:text-highlight"
          >
            {site.email}
          </a>
        </div>
        {[mainNav, legalNav].map((items, i) => (
          <nav key={i} aria-label={i === 0 ? 'Footer' : 'Legal'}>
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-dark-muted-foreground transition-colors hover:text-highlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="container py-6 text-xs text-dark-muted-foreground">
          Copyright © {year} {site.legalName} - All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
