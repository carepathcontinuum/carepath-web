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

export const pillars = [
  {
    title: 'Nurse-Led Oversight',
    body: 'CarePath operates under nurse-led clinical oversight, ensuring standardized monitoring, timely assessment, and accountable decision-making between visits.',
  },
  {
    title: 'Standardized Clinical Pathways',
    body: 'Each patient is supported through defined care pathways aligned to diagnosis and risk, reducing variation while supporting consistent, evidence-based follow-up.',
  },
  {
    title: 'Clear Escalation & Accountability',
    body: 'Clinical signals are reviewed and escalated according to protocol, ensuring the right issues reach the right clinician at the right time.',
  },
]

export const flow = {
  label: 'How a signal moves',
  steps: ['Signal', 'Nurse review', 'Escalation', 'Right clinician'],
}
