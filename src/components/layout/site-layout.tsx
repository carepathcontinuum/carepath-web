import { Outlet, ScrollRestoration } from 'react-router'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}
