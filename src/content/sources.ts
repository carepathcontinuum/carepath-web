// Client checklist #7 (2026-11-10): source links beside factual research claims. One entry per source, reused
// wherever the claim appears. Label = short citation shown on the page; note = what the source supports.

export type Source = { label: string; url: string }

export const sources = {
  // 30-day readmissions cost US hospitals $50.7B in 2013 (Medicare $29.6B). Nationwide Readmissions Database.
  readmissionCost: {
    label: 'Strom et al., PLOS ONE 2017 (2013 data)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5507267/',
  },
  // 19.6% of Medicare patients readmitted within 30 days; for 50.2% of medical readmissions, no physician visit
  // was billed between discharge and readmission.
  jencks: {
    label: 'Jencks et al., NEJM 2009',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19339721/',
  },
  // 19% of patients had an adverse event after discharge; many preventable or ameliorable.
  forster: {
    label: 'Forster et al., Ann Intern Med 2003',
    url: 'https://pubmed.ncbi.nlm.nih.gov/12558354/',
  },
  // The client's own reference for discharge planning and follow-up (checklist footer).
  redToolkit: {
    label: 'AHRQ RED Toolkit',
    url: 'https://www.ahrq.gov/patient-safety/settings/hospital/red/toolkit/index.html',
  },
  // Heart failure: symptoms worsened ~8–12 days before admission; 57% reported missing or skipping medication.
  schiff: {
    label: 'Schiff et al., Am J Med 2003',
    url: 'https://doi.org/10.1016/s0002-9343(03)00132-3',
  },
} satisfies Record<string, Source>
