import {
  Building2,
  HeartHandshake,
  Home,
  Hospital,
  Network,
  Repeat,
  ShieldCheck,
  Stethoscope,
  TrendingDown,
  TriangleAlert,
  Users,
  type LucideIcon,
} from 'lucide-react'
import deannaBoate from '@/assets/images/deanna-boate.webp'
import heroLarge from '@/assets/images/hero-1920.webp'
import heroSmall from '@/assets/images/hero-800.webp'
import katherineOwen from '@/assets/images/katherine-owen.webp'

// Copy is from the live site (docs/research/carepath-crawl/home.txt). Only proofreading fixes are allowed:
// consistent em dashes, "real-world" hyphenated, title-case button labels. Don't rewrite sentences.

export const hero = {
  eyebrow:
    'Care plans don’t fail because they’re wrong. They fail because no system ensures they happen after discharge.',
  title: 'Execution is assumed. CarePath makes it reliable.',
  primaryCta: { label: 'See How It Works', to: '/how-it-works' },
  secondaryCta: { label: 'Let’s talk', to: '/contact' },
  image: {
    src: heroLarge,
    srcSet: `${heroSmall} 800w, ${heroLarge} 1920w`,
    alt: 'A physician talking with a patient',
  },
}

export const problem = {
  lines: [
    'Healthcare is optimized for planning. It is not designed for execution after discharge.',
    'Patients leave with the right medications, the right follow-ups, and the right instructions—and we assume everything happens.',
  ],
  punchline: 'It doesn’t.',
}

export const statement = {
  before: 'The system is not built for',
  highlight: 'EXECUTION.',
}

export const positioning = {
  eyebrow: 'CarePath is not monitoring.',
  title: 'It is execution infrastructure.',
  body: [
    'CarePath extends structured, nurse-informed workflows beyond discharge—ensuring care plans translate into real-world action.',
    'We don’t replace existing systems. We make them work.',
  ],
}

export const partnerCta = {
  lines: [
    'We are currently partnering with select health systems to evaluate CarePath in real-world settings.',
    'If you’re rethinking what actually happens after discharge—',
  ],
  cta: { label: 'Let’s talk', to: '/contact' },
}

export type Leader = {
  name: string
  role: string
  photo: string
  bio: string[]
}

export const leadership: { title: string; leaders: Leader[] } = {
  title: 'Leadership',
  leaders: [
    {
      name: 'Katherine Owen, RN, BSN, MHA',
      role: 'Founder & CEO, CarePath Continuum',
      photo: katherineOwen,
      bio: [
        'Katherine Owen is a senior healthcare executive and nurse leader with over 20 years of experience driving clinical operations, patient safety, and care transformation across acute care, ambulatory, and surgical settings.',
        'Throughout her career, Katherine has built a reputation for translating frontline clinical realities into scalable system solutions. She has led large, complex teams, implemented enterprise safety and quality programs, and designed innovative care models that elevate care to the top of license while improving outcomes and operational efficiency. Her work includes establishing centralized triage models, launching system-wide patient safety infrastructure, and implementing clinical best practices that have significantly improved performance across organizations.',
        'Katherine began her career at Parkland Health & Hospital System, where she contributed to major care delivery innovations, including expanding access to specialty services and supporting the operationalization of high-impact programs such as outpatient antimicrobial therapy (OPAT). She has also held leadership roles in inpatient hospital settings and ambulatory surgery centers, where she led high-performing teams and drove measurable improvements in throughput, patient experience, and operational efficiency.',
        'She is the Founder and CEO of CarePath Continuum, a health technology company focused on solving one of healthcare’s most overlooked challenges: execution after discharge. CarePath extends nurse-led governance beyond the hospital setting, ensuring that care plans are not only created—but followed. By introducing structured workflows, real-time patient engagement, and a novel Execution Reliability Score (ERS), CarePath brings visibility and accountability to the critical 30-day post-discharge period.',
        'Katherine’s work is grounded in a simple but powerful belief: care does not end at discharge—and outcomes depend on what happens next.',
      ],
    },
    {
      name: 'DeAnna Boate',
      role: 'Co-Founder, Strategy & Growth',
      photo: deannaBoate,
      bio: [
        'DeAnna Boate is an executive career coach and strategic leader with more than 30 years of experience driving strategy and organizational performance across healthcare, nonprofit, and public sectors. She specializes in developing high-performing leaders, guiding boards and C-suite executives, and designing strategies with measurable impact.',
        'Her career includes serving as Strategy Officer and Chief of Staff to the CEO for a large public health system, where she led initiatives tied to over $1 billion in funding and major system expansion projects. She has also held executive roles guiding strategic transformation efforts that influenced $100+ million in funding to improve health outcomes across a 74-county region.',
        'In her consulting roles, DeAnna has partnered with boards and executive teams of major health systems to navigate complex transformation efforts, aligning strategic and capital planning with organizational and workforce design to achieve high performance.',
        'Most recently, she has focused on executive search and coaching, leading full-cycle C-level recruitment engagements while helping leaders strengthen executive presence, elevate performance, and navigate career transitions.',
        'A Certified Executive Coach and Fellow of the American College of Healthcare Executives, DeAnna is recognized for her ability to translate vision into results, build strong governance structures, and ensure leaders are prepared to meet complex challenges.',
      ],
    },
  ],
}

export const notMonitoring = {
  eyebrow: 'CarePath Continuum LLC is not another monitoring tool',
  lines: [
    'Monitoring and care management provide data and visibility.',
    'But data alone does not ensure care plans are followed.',
    'CarePath translates care plans into simple daily actions—with nurse oversight and early risk detection.',
    'It is the execution layer that makes monitoring effective.',
  ],
}

export type Outcome = {
  icon: LucideIcon
  title: string
  body: string
  stat?: string
}

export const outcomes: { title: string; items: Outcome[] } = {
  title: 'Outcomes That Matter',
  items: [
    {
      icon: Repeat,
      title: 'Improved Continuity of Care',
      body: 'Care doesn’t end at discharge—but execution often does. CarePath helps patients follow structured, daily actions at home, closing the gap between visits.',
    },
    {
      icon: TrendingDown,
      title: 'Reduced Avoidable Utilization',
      body: 'Early visibility into execution allows care teams to intervene before small issues escalate into ED visits or readmissions.',
    },
    {
      icon: HeartHandshake,
      title: 'Provider & Care Team Relief',
      body: 'Nurse-governed workflows support patients without increasing inbox volume, visit burden, or clinician fatigue.',
    },
    {
      icon: TriangleAlert,
      title: 'The Cost of Inaction',
      stat: '$50B+',
      body: 'in annual readmission costs—and still no visibility into whether care plans are being executed at home.',
    },
  ],
}

export const partners = {
  title: 'Who We Partner With',
  lead: 'CarePath Continuum LLC is the only model that partners with both the patient and the system—ensuring plans are not just prescribed, but executed.',
  patients: {
    icon: Home,
    title: 'Patients — because execution starts at home',
    body: [
      'CarePath partners directly with patients to turn care plans into daily, actionable steps—not just instructions.',
      'We provide structure, guidance, and real-time feedback so patients can own their care, not just be told what to do.',
      'Because after discharge, the outcome depends on one thing: whether the plan is actually carried out.',
    ],
  },
  organizations: {
    icon: Building2,
    title: 'Care Teams & Organizations — because outcomes require visibility',
    body: [
      'We work alongside organizations responsible for post-discharge outcomes, providing visibility into execution and enabling early, governed intervention when patients begin to deviate.',
    ],
    listIntro: 'CarePath integrates without disruption across:',
    list: [
      { icon: Hospital, label: 'Health systems & hospitals' },
      { icon: ShieldCheck, label: 'Health plans & payers' },
      { icon: Network, label: 'Accountable Care Organizations (ACOs)' },
      {
        icon: Stethoscope,
        label: 'Medical groups & value-based care organizations',
      },
      { icon: Home, label: 'Post-acute providers (SNF, home health, rehab)' },
      { icon: Users, label: 'Population health & care management teams' },
    ] satisfies { icon: LucideIcon; label: string }[],
  },
}
