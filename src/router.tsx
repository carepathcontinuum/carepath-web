import { createBrowserRouter, Navigate } from 'react-router'
import { SiteLayout } from '@/components/layout/site-layout'
import { ClinicalGovernancePage } from '@/pages/clinical-governance-page'
import { ContactPage } from '@/pages/contact-page'
import { HomePage } from '@/pages/home-page'
import { HowItWorksPage } from '@/pages/how-it-works-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { OutcomesPage } from '@/pages/outcomes-page'
import { PrivacyPolicyPage } from '@/pages/privacy-policy-page'
import { TermsPage } from '@/pages/terms-page'
import { WhyNotRpmPage } from '@/pages/why-not-rpm-page'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'clinical-governance', element: <ClinicalGovernancePage /> },
      { path: 'outcomes', element: <OutcomesPage /> },
      { path: 'why-carepath-isnt-rpm', element: <WhyNotRpmPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-and-conditions', element: <TermsPage /> },
      // Old GoDaddy URLs, so existing links and search results keep working
      {
        path: 'why-carepath-isn’t-rpm',
        element: <Navigate to="/why-carepath-isnt-rpm" replace />,
      },
      {
        path: 'terms-&-conditions',
        element: <Navigate to="/terms-and-conditions" replace />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
