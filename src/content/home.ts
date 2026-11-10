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
  Users,
  type LucideIcon,
} from 'lucide-react'
import deannaBoate from '@/assets/images/deanna-boate.webp'
import heroLarge from '@/assets/images/hero-1920.webp'
import heroSmall from '@/assets/images/hero-800.webp'
import katherineOwen from '@/assets/images/katherine-owen.webp'
import productExecutive from '@/assets/images/product-executive-1600.webp'
import productNurse from '@/assets/images/product-nurse-1600.webp'
import productPatient from '@/assets/images/product-patient-600.webp'
import productSummary from '@/assets/images/product-summary-1600.webp'

// Copy is from the live site (docs/research/carepath-crawl/home.txt). Only proofreading fixes are allowed:
// consistent em dashes, "real-world" hyphenated, title-case button labels. Don't rewrite sentences.
// Exception: copy the client wrote in docs/CarePath_Website_Developer_Checklist.docx (plan 09) overrides this.

export const hero = {
  // Client checklist #4 (2026-11-09). Was: "Care plans don’t fail because they’re wrong. They fail because no system
  // ensures they happen after discharge."
  eyebrow:
    'CarePath turns prescribed care into daily actions patients can follow and record, giving care teams visibility into follow-through between visits.',
  title: 'Execution is assumed. CarePath makes it reliable.',
  // Client checklist #8: primary buttons say "Discuss a Pilot" and go to the contact form
  primaryCta: { label: 'Discuss a Pilot', to: '/contact' },
  secondaryCta: { label: 'See How It Works', to: '/how-it-works' },
  image: {
    src: heroLarge,
    srcSet: `${heroSmall} 800w, ${heroLarge} 1920w`,
    alt: 'A physician talking with a patient',
  },
}

// Condensed on request (2026-10-27). Live-site original:
// "Healthcare is optimized for planning. It is not designed for execution after discharge."
// "Patients leave with the right medications, the right follow-ups, and the right instructions—and we assume
// everything happens." / "It doesn't."
export const problem = {
  // Shown as a contrast: the second line is faded, so the gap is visible
  // Subject in the headline itself, so it can't be read as a claim about CarePath
  title: ['Healthcare is built for planning.', 'Not for after discharge.'],
  leavesWith: 'At discharge, patients leave with',
  items: [
    'The right medications',
    'The right follow-ups',
    'The right instructions',
  ],
  assumption: 'We assume the rest happens.',
  punchline: 'It doesn’t.',
}

// Changed on request (2026-10-27) from the live site's "The system is not built for EXECUTION.":
// the problem section above now states the problem, so this band answers it.
export const statement = {
  before: 'CarePath is built for',
  highlight: 'EXECUTION.',
}

// Condensed on request (2026-10-27). Live-site original: "CarePath is not monitoring." / "It is execution
// infrastructure." / "CarePath extends structured, nurse-informed workflows beyond discharge—ensuring care plans
// translate into real-world action." / "We don't replace existing systems. We make them work."
// Mirrors the problem section: a faded/solid contrast headline, then an aligned row of points.
export const positioning = {
  title: ['Not monitoring.', 'Execution.'],
  points: [
    {
      title: 'Beyond discharge',
      body: 'Structured, nurse-informed workflows that turn care plans into real-world action.',
    },
    {
      title: 'Works with what you have',
      body: 'We don’t replace existing systems. We make them work.',
    },
  ],
  // Diagram: CarePath as the layer between existing care and the patient's home (new copy, 2026-10-27)
  layers: [
    {
      title: 'Care teams & existing systems',
      body: 'Care plans, orders, follow-up schedules',
    },
    {
      title: 'CarePath',
      body: 'Nurse-informed execution layer',
      highlight: true,
    },
    {
      title: 'Patients at home',
      body: 'Daily actions, check-ins, early signals',
    },
  ],
}

// Reordered on request (2026-10-27): headline first, as a question (live site ended it with a dash:
// "If you're rethinking what actually happens after discharge—"), then the partnering line.
export const partnerCta = {
  eyebrow: 'For health systems',
  title: 'Rethinking what actually happens after discharge?',
  body: 'We are currently partnering with select health systems to evaluate CarePath in real-world settings.',
  cta: { label: 'Discuss a Pilot', to: '/contact' },
  emailLabel: 'Email us',
}

export type Leader = {
  name: string
  role: string
  photo: string
  /** Card text, condensed from the bio. The full bio opens in a side panel. */
  summary: string
  bio: string[]
}

export const leadership: {
  eyebrow: string
  title: string
  leaders: Leader[]
} = {
  eyebrow: 'The team behind CarePath',
  title: 'Leadership',
  leaders: [
    {
      name: 'Katherine Owen, RN, BSN, MHA',
      role: 'Founder & CEO, CarePath Continuum',
      photo: katherineOwen,
      summary:
        'Nurse leader and healthcare executive with 20+ years in clinical operations, patient safety, and care transformation. She founded CarePath to make sure care plans are followed after discharge.',
      bio: [
        'Katherine Owen is a senior healthcare executive and nurse leader with over 20 years of experience driving clinical operations, patient safety, and care transformation across acute care, ambulatory, and surgical settings.',
        'Throughout her career, Katherine has built a reputation for translating frontline clinical realities into scalable system solutions. She has led large, complex teams, implemented enterprise safety and quality programs, and designed innovative care models that elevate care to the top of license while improving outcomes and operational efficiency. Her work includes establishing centralized triage models, launching system-wide patient safety infrastructure, and implementing clinical best practices that have significantly improved performance across organizations.',
        'Katherine began her career at Parkland Health & Hospital System, where she contributed to major care delivery innovations, including expanding access to specialty services and supporting the operationalization of high-impact programs such as outpatient antimicrobial therapy (OPAT). She has also held leadership roles in inpatient hospital settings and ambulatory surgery centers, where she led high-performing teams and drove measurable improvements in throughput, patient experience, and operational efficiency.',
        'She is the Founder and CEO of CarePath Continuum, a health technology company focused on solving one of healthcare’s most overlooked challenges: execution after discharge. CarePath extends nurse-led governance beyond the hospital setting, ensuring that care plans are not only created, but followed. By introducing structured workflows, real-time patient engagement, and a novel Execution Reliability Score (ERS), CarePath brings visibility and accountability to the critical 30-day post-discharge period.',
        'Katherine’s work is grounded in a simple but powerful belief: care does not end at discharge, and outcomes depend on what happens next.',
      ],
    },
    {
      name: 'DeAnna Boate',
      role: 'Co-Founder, Strategy & Growth',
      photo: deannaBoate,
      summary:
        'Executive coach and strategist with 30+ years across healthcare, nonprofit, and public sectors. Former health system Strategy Officer and Chief of Staff, and a Fellow of the American College of Healthcare Executives.',
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
  // Rewritten on request ("looks AI generated"; new copy allowed). Originals:
  // "CarePath Continuum LLC is not another monitoring tool" / "Monitoring and care management provide data and
  // visibility." / "But data alone does not ensure care plans are followed." / "CarePath translates care plans into
  // simple daily actions—with nurse oversight and early risk detection." / "It is the execution layer that makes
  // monitoring effective."
  eyebrow: 'Monitoring vs. execution',
  title: ['Not another', 'monitoring tool.'],
  monitoring: {
    label: 'Monitoring',
    lead: 'Tells you what happened.',
    body: 'Readings, alerts and dashboards. Useful, but none of it makes sure the care plan gets followed.',
  },
  carepath: {
    label: 'CarePath',
    lead: 'Makes sure the plan happens.',
    // Client checklist #6: no wording that implies someone watches patients continuously. Was: "…a few simple steps
    // a day, with a nurse watching for early signs of risk."
    body: 'Each care plan becomes a few simple steps a day. Each participating organization defines who reviews patient activity and how follow-up is handled.',
    conclusion: 'The layer that makes monitoring worth having.',
  },
}

export type Outcome = {
  icon: LucideIcon
  title: string
  body: string
}

export const outcomes: {
  eyebrow: string
  title: string
  cta: { label: string; to: string }
  items: Outcome[]
} = {
  // Copy rewritten on request (plainer, shorter); originals: "Improved Continuity of Care" / "Care doesn’t end at
  // discharge—but execution often does. CarePath helps patients follow structured, daily actions at home, closing the
  // gap between visits." · "Reduced Avoidable Utilization" / "Early visibility into execution allows care teams to
  // intervene before small issues escalate into ED visits or readmissions." · "Provider & Care Team Relief" /
  // "Nurse-governed workflows support patients without increasing inbox volume, visit burden, or clinician fatigue." ·
  // "The Cost of Inaction" / "$50B+ in annual readmission costs—and still no visibility into whether care plans are
  // being executed at home."
  // Client checklist #7: benefits are intended, to be evaluated, not proven results. "$50B+" removed (no exact source).
  eyebrow: 'Intended benefits',
  title: 'What CarePath Aims to Change',
  cta: { label: 'See the outcomes', to: '/outcomes' },
  items: [
    {
      icon: Repeat,
      title: 'Care that continues at home',
      body: 'Patients get a few simple steps each day between visits, so the plan doesn’t stop at the hospital door.',
    },
    {
      icon: TrendingDown,
      title: 'Fewer avoidable readmissions',
      body: 'Designed to help care teams see problems early, before they turn into an ED visit or a readmission.',
    },
    {
      icon: HeartHandshake,
      title: 'Less load on care teams',
      body: 'Intended to support patients without adding to inboxes, visit load or clinician fatigue.',
    },
  ],
}

export const partners = {
  // Copy tightened on request (same meaning). Originals: lead "CarePath Continuum LLC is the only model that partners
  // with both the patient and the system—ensuring plans are not just prescribed, but executed." · "Patients — because
  // execution starts at home": "CarePath partners directly with patients to turn care plans into daily, actionable
  // steps—not just instructions." / "We provide structure, guidance, and real-time feedback so patients can own their
  // care, not just be told what to do." / "Because after discharge, the outcome depends on one thing: whether the plan
  // is actually carried out." · "Care Teams & Organizations — because outcomes require visibility": "We work alongside
  // organizations responsible for post-discharge outcomes, providing visibility into execution and enabling early,
  // governed intervention when patients begin to deviate." · "CarePath integrates without disruption across:"
  eyebrow: 'Two partners, one plan',
  title: 'Who We Partner With',
  lead: 'CarePath is the only model that works with both the patient and the system, so care plans get carried out, not just prescribed.',
  patients: {
    icon: Home,
    label: 'Patients',
    title: 'Execution starts at home.',
    body: 'We work with patients directly and turn their care plan into steps they can follow every day.',
    points: [
      'Daily, actionable steps, not just instructions',
      'Structure, guidance and real-time feedback',
      'Patients own their care, not just follow orders',
    ],
    closing:
      'After discharge, the outcome depends on one thing: whether the plan is actually carried out.',
  },
  organizations: {
    icon: Building2,
    label: 'Care teams & organizations',
    title: 'Outcomes need visibility.',
    body: 'See how every plan is going after discharge, with an early, governed flag when a patient starts to drift.',
    listIntro: 'Works with what you already have, across',
    // Name + detail, so every item is two lines. Originals: "Health systems & hospitals", "Health plans & payers",
    // "Accountable Care Organizations (ACOs)", "Medical groups & value-based care organizations",
    // "Post-acute providers (SNF, home health, rehab)", "Population health & care management teams".
    list: [
      { icon: Hospital, name: 'Health systems', detail: 'and hospitals' },
      { icon: ShieldCheck, name: 'Health plans', detail: 'and payers' },
      { icon: Network, name: 'ACOs', detail: 'Accountable Care Organizations' },
      {
        icon: Stethoscope,
        name: 'Medical groups',
        detail: 'and value-based care',
      },
      {
        icon: Home,
        name: 'Post-acute providers',
        detail: 'SNF, home health, rehab',
      },
      {
        icon: Users,
        name: 'Care management',
        detail: 'and population health teams',
      },
    ] satisfies { icon: LucideIcon; name: string; detail: string }[],
  },
}

// Client checklist #5 (2026-11-10): heading and phase text are the client's own words. Phases 2 and 3 must read as
// planned, never as active in the initial pilot.
export const pilot = {
  eyebrow: 'Pilot phases',
  title: [
    'Start with a focused pilot.',
    'Build toward connected care execution.',
  ],
  phases: [
    {
      label: 'Phase 1',
      status: 'Initial pilot',
      planned: false,
      body: 'Daily task completion using the latest discharge instructions, nurse visibility, and a 30-day summary.',
      note: 'Vitals capture and automated clinical escalation remain off.',
    },
    {
      label: 'Phase 2',
      status: 'Planned expansion',
      planned: true,
      body: 'Add measurements, trends, and clinician-approved escalation workflows after validation.',
    },
    {
      label: 'Phase 3',
      status: 'Planned expansion',
      planned: true,
      body: 'Connect with health system technology and workflows, then expand across patient populations and facilities.',
    },
  ] satisfies {
    label: string
    status: string
    planned: boolean
    body: string
    note?: string
  }[],
}

// Client checklist #1 and #2 (2026-11-10): four coordinated views, labelled as an illustrative prototype.
// Mock screens built in the CarePath style from the app's real pages (patient plan, nurse dashboard, demo-mode
// 30-day summary), with fictional patients. Sources: scratchpad mocks, not the live app.
export const product = {
  eyebrow: 'Illustrative product prototype',
  title: ['One plan, every view.', 'Patient, nurse and leadership.'],
  note: 'Fictional patient data.',
  patient: {
    title: 'Patient: My Care Plan',
    body: 'Today’s tasks from the latest discharge instructions, marked done as they happen.',
    image: productPatient,
    alt: 'CarePath patient view: today’s care plan with three of five tasks marked done',
  },
  screens: [
    {
      title: 'Nurse dashboard',
      body: 'Daily task completion for each patient, so the care team sees who is following the plan.',
      image: productNurse,
      alt: 'CarePath nurse dashboard: six patients with today’s task completion, last 7 days and status',
    },
    {
      title: 'Executive dashboard',
      body: 'Illustrative trends in follow-through across programs and patients.',
      image: productExecutive,
      alt: 'CarePath executive overview: 30-day task completion trend, patients by status and completion by program',
    },
    {
      title: '30-day provider summary',
      body: 'Each patient’s 30 days after discharge, ready to send to their provider.',
      image: productSummary,
      alt: 'CarePath 30-day provider summary for a fictional patient: completion by category, daily chart and care team notes',
    },
  ],
}
