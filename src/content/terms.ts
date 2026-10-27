// Copy is from the live site (docs/research/carepath-crawl/terms-and-conditions.txt). The live page prints the
// text twice; we keep the fuller second copy once. Don't rewrite sentences.

export const intro = {
  title: 'Terms & Conditions',
  subtitle:
    'By enrolling in CarePath Continuum (“CarePath”), you agree to receive SMS messages related to your care.',
}

export const sms = {
  title: 'SMS Communications',
  label: 'CarePath sends messages including:',
  points: ['Care reminders', 'Daily check-ins', 'Follow-up support'],
  note: 'Message frequency may vary. Message and data rates may apply.',
}

/** `keyword` is the reply word inside `text`, shown as a badge. */
export type ConsentLine = { text: string; keyword?: string }

export const consent: { title: string; lines: ConsentLine[] } = {
  title: 'User Consent',
  lines: [
    {
      text: 'By providing your phone number, you consent to receive SMS messages from CarePath related to your care plan.',
    },
    {
      text: 'You may opt out at any time by replying STOP.',
      keyword: 'STOP',
    },
    { text: 'Reply HELP for assistance.', keyword: 'HELP' },
    { text: 'After opting out, you will no longer receive messages.' },
  ],
}
