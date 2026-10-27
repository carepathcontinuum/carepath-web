// Copy is from the live site (docs/research/carepath-crawl/contact.txt). Don't rewrite sentences.
// New (approved, plan 05): the thank-you message, and "Prefer email?" as the label above the address.

export const intro = {
  title: 'Request More Information',
  // The live intro is two sentences: the invitation stays in the header, the partnership line moves beside the form.
  subtitle:
    'If you are exploring clinical governance, continuity of care, or avoidable utilization, we welcome the opportunity to connect.',
}

export const form = {
  name: 'First & Last Name',
  email: 'Email',
  interest: 'What best describes your interest?',
  // Placeholders: the examples are the live site's; the name and email samples are new.
  namePlaceholder: 'Jane Smith',
  emailPlaceholder: 'jane@healthsystem.org',
  interestPlaceholder:
    'e.g., reducing readmissions, improving nurse-led workflows, clinical governance, exploratory conversation',
  submit: 'Explore the CarePath Model',
  thanks: 'Thank you. We’ll be in touch soon.',
}

// Condensed on request (2026-10-27) from the live site's two sentences, which both opened "CarePath … organizations":
// "CarePath partners with health systems and care organizations to support nurse-led care coordination between visits."
// "CarePath engages with organizations through scheduled conversations and pilot discussions. In-person meetings are
// arranged as appropriate."
export const aside = {
  audience: {
    label: 'Who we work with',
    text: 'Health systems and care organizations',
  },
  engage: {
    label: 'How we engage',
    points: [
      'Scheduled conversations',
      'Pilot discussions',
      'In-person meetings, as appropriate',
    ],
  },
  emailLabel: 'Prefer email?',
}
