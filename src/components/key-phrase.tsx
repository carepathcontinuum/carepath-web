/** Picks out one phrase inside a body sentence in navy Montserrat, so the eye catches the idea first. */
export function KeyPhrase({ text, phrase }: { text: string; phrase: string }) {
  const at = text.indexOf(phrase)
  // Phrase not in the sentence (e.g. after a copy edit): show the plain sentence rather than duplicating text
  if (at === -1) return text
  return (
    <>
      {text.slice(0, at)}
      <strong className="font-heading font-semibold text-primary">
        {phrase}
      </strong>
      {text.slice(at + phrase.length)}
    </>
  )
}
