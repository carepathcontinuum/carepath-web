import photoLarge from '@/assets/images/care-plan-activation-1600.webp'
import photoSmall from '@/assets/images/care-plan-activation-800.webp'

// Copy is from the live site (docs/research/carepath-crawl/why-carepath-isnt-rpm.txt). Only change: the subtitle's
// em-dash became a comma ("execution—not monitoring"). Don't rewrite sentences.

export const intro = {
  title: 'Why CarePath Isn’t RPM',
  subtitle: 'CarePath focuses on execution, not monitoring.',
  // Same photo as How It Works step 1: a person being guided, not a device being watched
  image: {
    src: photoLarge,
    srcSet: `${photoSmall} 800w, ${photoLarge} 1600w`,
    alt: 'Woman attentively listening during a conversation.',
  },
}

// The live intro sentence, split into a contrast headline (faded RPM / solid CarePath) and a short lead.
// Original: "Remote patient monitoring collects data. CarePath ensures post-discharge care plans are carried out,
// addressing the execution gap that contributes to avoidable utilization."
export const lead = {
  title: [
    'Remote patient monitoring collects data.',
    'CarePath ensures care plans are carried out.',
  ],
  text: 'It closes the execution gap that contributes to avoidable utilization.',
  key: 'the execution gap',
}

export const difference = {
  title: 'The Difference',
  rpm: {
    tag: 'Monitoring',
    name: 'Remote Patient Monitoring',
    points: [
      'Collects physiologic data',
      'Flags abnormal readings',
      'Focuses on monitoring',
    ],
  },
  carepath: {
    tag: 'Execution',
    name: 'CarePath',
    points: [
      'Operationalizes physician-directed care plans',
      'Guides execution between visits',
      'Escalates when care plans break',
    ],
  },
}

export const matters = {
  label: 'Why This Matters',
  // The two problem sentences are a muted lead; `body` (the answer) is the headline
  title: [
    'Readmissions are rarely driven by missing data.',
    'They occur when care plans fail after discharge.',
  ],
  body: 'CarePath closes the execution gap RPM was never designed to solve.',
}
