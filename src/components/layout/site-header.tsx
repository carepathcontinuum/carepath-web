import { ArrowRight, Menu, Route, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { headerNav, legalNav, site } from '@/config/site'
import { cn } from '@/lib/utils'

/** Pages whose hero is dark and sits under a transparent header. */
const OVERLAY_ROUTES = [
  '/',
  '/how-it-works',
  '/terms-and-conditions',
  '/privacy-policy',
  '/contact',
  '/clinical-governance',
  '/outcomes',
  '/why-carepath-isnt-rpm',
]

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={cn(
          'grid size-9 place-items-center rounded-lg transition-colors',
          inverted
            ? 'bg-primary-foreground text-primary'
            : 'bg-primary text-primary-foreground',
        )}
      >
        <Route className="size-5" aria-hidden />
      </span>
      <span className="font-heading text-lg leading-none tracking-tight whitespace-nowrap">
        <span className="font-bold">CarePath</span>{' '}
        <span className="font-medium opacity-75">Continuum</span>
      </span>
    </span>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  const overlay = OVERLAY_ROUTES.includes(pathname) && !scrolled

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,box-shadow,color]',
        overlay
          ? 'bg-transparent text-dark-foreground'
          : 'bg-background/95 text-primary shadow-sm backdrop-blur',
      )}
    >
      <div className="container flex h-18 items-center justify-between gap-6">
        <Link to="/" aria-label="CarePath Continuum home">
          <Logo inverted={overlay} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-2 xl:flex">
          {headerNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative px-3 py-2 font-heading text-[0.9375rem] font-medium tracking-wide whitespace-nowrap opacity-85 transition-opacity hover:opacity-100',
                  // underline that slides in from the left
                  'after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100',
                  isActive && 'opacity-100 after:scale-x-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={overlay ? 'inverse' : 'default'}
            size="lg"
            className="hidden px-4 sm:inline-flex"
          >
            <Link to="/contact">
              Let’s talk
              <ArrowRight />
            </Link>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className={cn(
                  'xl:hidden',
                  overlay &&
                    'hover:bg-white/10 hover:text-dark-foreground aria-expanded:bg-white/10 aria-expanded:text-dark-foreground',
                )}
              >
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            {/* Mobile menu: white panel (Montserrat links, hairlines). 85% wide on phones so the page shows behind it, 384px max. */}
            <SheetContent
              side="right"
              showCloseButton={false}
              className="gap-0 overflow-hidden p-0 data-[side=right]:w-[85%] data-[side=right]:max-w-sm"
            >
              <div className="flex h-18 items-center justify-between px-6">
                <SheetTitle className="text-primary">
                  <Link to="/" onClick={closeMenu}>
                    <Logo />
                  </Link>
                </SheetTitle>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon-lg"
                    className="text-primary hover:bg-secondary"
                  >
                    <X className="size-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>

              <nav aria-label="Main" className="mt-4 px-6">
                <ul className="border-b">
                  {headerNav.map((item) => (
                    <li key={item.to} className="border-t">
                      <NavLink
                        to={item.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          cn(
                            'block py-4 font-heading text-lg font-semibold tracking-tight transition-colors hover:text-primary',
                            isActive ? 'text-primary' : 'text-primary/70',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-6 px-6 pb-8">
                <Button asChild size="xl" className="w-full">
                  <Link to="/contact" onClick={closeMenu}>
                    Let’s talk
                    <ArrowRight />
                  </Link>
                </Button>
                <div className="space-y-3 font-heading text-sm font-medium text-muted-foreground">
                  <a href={`mailto:${site.email}`} className="block w-fit">
                    {site.email}
                  </a>
                  <p className="flex flex-wrap gap-x-6 gap-y-2">
                    {legalNav.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeMenu}
                        className="transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
