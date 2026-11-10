import photoLarge from '@/assets/images/between-visit-care-1600.webp'
import photoSmall from '@/assets/images/between-visit-care-800.webp'

// Based on the live site (docs/research/carepath-crawl/outcomes.txt). Outcome sentences shortened on request
// (2026-10-27): shorter, no em-dashes. Originals are in the crawl file.
// New (plan 07): the header subtitle and the summary card's title. The card's four items are taken word for word
// from outcome 3. The three card photos (repeats of How It Works) are replaced by one header photo.

// Client checklist #6 and #7 (2026-11-10): benefits are intended and to be evaluated, not proven results; no
// wording that implies continuous watching or live escalation. Originals kept in comments.
export const intro = {
  title: 'Designed to Reduce Avoidable Utilization',
  // Was: "Earlier intervention after discharge, with less noise for care teams."
  subtitle: 'What CarePath is designed to improve, and what a pilot evaluates.',
  image: {
    src: photoLarge,
    srcSet: `${photoSmall} 800w, ${photoLarge} 1600w`,
    alt: 'Medical professionals in a hospital hallway reviewing patient information.',
  },
}

export const outcomes = [
  {
    // Was "Reduced Avoidable Readmissions": "Early risk detection and timely nurse escalation catch issues…"
    title: 'Fewer Avoidable Readmissions',
    key: 'see missed tasks early',
    body: 'Designed to help care teams see missed tasks early, before they turn into ED visits or readmissions.',
  },
  {
    title: 'Less Noise for Care Teams',
    // Was: "Only clinically relevant signals reach nurses, so teams can focus on patients who need them."
    key: 'which patients are falling behind',
    body: 'Intended to show care teams which patients are falling behind, without adding to inboxes.',
  },
  {
    title: 'Clear 30-Day Post-Discharge Summary',
    key: 'concise 30-day summary',
    body: 'Every episode ends with a concise 30-day summary that makes the next visit more informed.',
  },
]

export const summary = {
  label: 'Every episode ends with',
  title: 'A 30-day post-discharge summary',
  // Condensed from outcome 3
  // Was: "Engagement, symptoms, interventions and escalations in one place…" (matches the product screenshot now)
  body: 'Task completion, missed tasks and care team notes in one place, ready for the follow-up visit.',
  docTitle: '30-day summary',
  docRange: 'Day 1–30',
  items: [
    'Task completion',
    'Missed tasks',
    'Care team notes',
    'Follow-up visit',
  ],
}

export const disclaimer =
  'Outcomes vary based on implementation, patient population, and existing clinical workflows. CarePath is designed to support, not replace, care teams and established care processes.'
