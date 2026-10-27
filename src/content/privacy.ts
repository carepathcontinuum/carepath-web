import photoLarge from '@/assets/images/privacy-exam-room-1600.webp'
import photoSmall from '@/assets/images/privacy-exam-room-800.webp'

// Copy is from the live site (re-fetched 2026-10-27; the crawl missed this embed). Sentences are word for word.
// The live page has no section titles: the 4 clause titles are new labels (approved, plan 04 option b).
// Dropped: a stray ".", a body copyright line (the footer has it), empty Instagram/Reviews widgets.

export const intro = {
  title: 'Privacy Policy',
  // Shortened on request (2026-10-27), like the other page headers. Live-site original: "At CarePath Continuum LLC,
  // operating as CarePath Continuum, we take your privacy seriously and are committed to protecting your personal
  // information."
  subtitle:
    'We take your privacy seriously and protect your personal information.',
  image: {
    src: photoLarge,
    srcSet: `${photoSmall} 800w, ${photoLarge} 1600w`,
    alt: 'An empty exam room with a blood pressure cuff and otoscopes on the wall.',
  },
}

export const collect = {
  title: 'Information We Collect',
  key: 'limited health-related and contact information',
  lead: 'As part of our mission to support patients after discharge, we may collect and store limited health-related and contact information to provide reminders, educational content, and support through our platform.',
}

export const use = {
  title: 'How We Use It',
  lead: 'We only use your information to help coordinate and improve your care experience.',
  details: [
    'We do not sell or share your data with third parties for marketing purposes.',
    'All information is handled securely and in accordance with applicable privacy standards.',
  ],
}

export const rights = {
  title: 'Your Data Rights',
  /** The email address follows this sentence as a link. */
  lead: 'If you have any questions about how your information is used, or if you would like to request deletion of your data, please contact us at',
}

export const sms = {
  title: 'SMS Messages',
  lines: [
    {
      text: 'Patients may opt out of receiving SMS messages at any time by replying STOP.',
      keyword: 'STOP',
    },
    { text: 'For assistance, reply HELP.', keyword: 'HELP' },
  ],
  note: 'Message and data rates may apply. Message frequency varies.',
}
