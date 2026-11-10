import photoLarge from '@/assets/images/nurse-escalation-1600.webp'
import photoSmall from '@/assets/images/nurse-escalation-800.webp'

// Copy is from the live site (docs/research/carepath-crawl/clinical-governance.txt). Don't rewrite sentences.
// Dropped (plan 06): the second intro sentence, which is cut off mid-word on the live site
// ("…helping healthcare organizations intervene earlie"). New: the 4 flow labels.

export const intro = {
  title: 'Clinical Governance',
  // Shortened on request (2026-10-27). Live-site original: "CarePath™ operates within defined clinical governance
  // frameworks, ensuring care plans are executed safely and consistently after patients leave the hospital or clinic."
  subtitle:
    'Defined clinical frameworks that keep care plans safe and consistent after patients leave the hospital.',
  // Same photo as How It Works step 4
  image: {
    src: photoLarge,
    srcSet: `${photoSmall} 800w, ${photoLarge} 1600w`,
    alt: 'Young hands gently holding elderly hands, symbolizing care and compassion.',
  },
}

// Client checklist #6 (2026-11-10): no wording that implies someone watches patients continuously, and nothing
// implying escalation is live (pilot Phase 1 has it off; Phase 2 adds clinician-approved escalation after validation).
export const pillars = [
  {
    // Was "Nurse-Led Oversight": "…nurse-led clinical oversight, ensuring standardized monitoring, timely assessment…"
    title: 'Nurse-Led Governance',
    /** Phrase inside `body` picked out in Montserrat so the eye catches the idea first */
    key: 'who reviews patient activity',
    body: 'CarePath is built around nurse-led clinical governance. Each participating organization defines who reviews patient activity and how follow-up is handled.',
  },
  {
    title: 'Standardized Clinical Pathways',
    key: 'defined care pathways',
    body: 'Each patient is supported through defined care pathways aligned to diagnosis and risk, reducing variation while supporting consistent, evidence-based follow-up.',
  },
  {
    // Was "Clear Escalation & Accountability": "Clinical signals are reviewed and escalated according to protocol…"
    title: 'Clear Follow-Up & Accountability',
    key: 'existing protocols',
    body: 'Patient activity is reviewed on the schedule each organization sets, and follow-up runs through its existing protocols. Clinician-approved escalation workflows are planned after validation.',
  },
]

export const flow = {
  // Was "How a signal moves": Signal → Nurse review → Escalation → Right clinician
  label: 'How follow-up works',
  steps: [
    'Patient activity',
    'Care team review',
    'Follow-up',
    'Right clinician',
  ],
}
