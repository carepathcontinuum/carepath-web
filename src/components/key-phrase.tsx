/** Picks out one phrase inside a body sentence in navy Montserrat, so the eye catches the idea first. */
export function KeyPhrase({ text, phrase }: { text: string; phrase: string }) {
  const [before, after] = text.split(phrase)
  return (
    <>
      {before}
      <strong className="font-heading font-semibold text-primary">
        {phrase}
      </strong>
      {after}
    </>
  )
}
