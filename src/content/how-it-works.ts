import betweenVisitLarge from '@/assets/images/between-visit-care-1600.webp'
import betweenVisitSmall from '@/assets/images/between-visit-care-800.webp'
import activationLarge from '@/assets/images/care-plan-activation-1600.webp'
import activationSmall from '@/assets/images/care-plan-activation-800.webp'
import riskLarge from '@/assets/images/early-risk-detection-1080.webp'
import riskSmall from '@/assets/images/early-risk-detection-800.webp'
import escalationLarge from '@/assets/images/nurse-escalation-1600.webp'
import escalationSmall from '@/assets/images/nurse-escalation-800.webp'

// Copy is from the live site (docs/research/carepath-crawl/how-it-works.txt). Only fixes: the missing full stop
// after "clinical crisis", and the "•" bullets turned into lists. Don't rewrite sentences.

export const intro = {
  eyebrow: 'How It Works',
  title: 'How CarePath™ Works',
  // Not on the live How It Works page: reused word for word from the live Home page (positioning section).
  subtitle:
    'CarePath extends structured, nurse-informed workflows beyond discharge—ensuring care plans translate into real-world action.',
}

export type Step = {
  /** Anchor for the overview links in the page header */
  id: string
  title: string
  lead: string
  label: string
  points: string[]
  image: { src: string; srcSet: string; alt: string }
}

export const steps: Step[] = [
  {
    id: 'activation',
    title: 'Care Plan Activation',
    lead: 'Physician orders are translated into a structured daily care pathway patients can understand and follow.',
    label: 'Patients receive:',
    points: [
      'guided daily actions',
      'medication reminders',
      'micro-learning',
      'self-monitoring prompts',
    ],
    image: {
      src: activationLarge,
      srcSet: `${activationSmall} 800w, ${activationLarge} 1600w`,
      alt: 'Woman attentively listening during a conversation.',
    },
  },
  {
    id: 'between-visit',
    title: 'Between-Visit Care Execution',
    lead: 'CarePath™ supports patients in executing the care plan in their real-life environment.',
    label: 'This includes:',
    points: [
      'daily check-ins',
      'behavioral reinforcement',
      'symptom awareness',
      'adherence support',
    ],
    image: {
      src: betweenVisitLarge,
      srcSet: `${betweenVisitSmall} 800w, ${betweenVisitLarge} 1600w`,
      alt: 'Medical professionals in a hospital hallway reviewing patient information.',
    },
  },
  {
    id: 'risk-detection',
    title: 'Early Risk Detection',
    lead: 'Subtle signs of deterioration often appear days before a clinical crisis.',
    label: 'CarePath identifies early warning signals such as:',
    points: [
      'symptom changes',
      'medication gaps',
      'diet or behavioral deviation',
    ],
    image: {
      src: riskLarge,
      srcSet: `${riskSmall} 800w, ${riskLarge} 1080w`,
      alt: 'Two people sharing tea and a salad at a café table.',
    },
  },
  {
    id: 'escalation',
    title: 'Nurse-Governed Escalation',
    lead: 'When risks appear, CarePath enables structured clinical escalation to care teams before deterioration progresses.',
    label: 'This ensures:',
    points: [
      'earlier intervention',
      'reduced avoidable utilization',
      'safer patient recovery',
    ],
    image: {
      src: escalationLarge,
      srcSet: `${escalationSmall} 800w, ${escalationLarge} 1600w`,
      alt: 'Young hands gently holding elderly hands, symbolizing care and compassion.',
    },
  },
]
