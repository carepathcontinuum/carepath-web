export const site = {
  name: 'CarePath Continuum',
  legalName: 'CarePath Continuum LLC',
  email: 'info@carepathcontinuum.com',
}

export type NavItem = { label: string; to: string }

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Clinical Governance', to: '/clinical-governance' },
  { label: 'Outcomes', to: '/outcomes' },
  { label: 'Why CarePath Isn’t RPM', to: '/why-carepath-isnt-rpm' },
  { label: 'Contact', to: '/contact' },
]

/** Header shows fewer items: the logo links home and the "Let's talk" button links to Contact. */
export const headerNav: NavItem[] = mainNav.filter(
  (item) => item.to !== '/' && item.to !== '/contact',
)

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
]
