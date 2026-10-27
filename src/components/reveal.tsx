import { useEffect, useRef, useState, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = ComponentProps<'div'> & {
  /** Stagger siblings, in ms. */
  delay?: number
}

/** Fades and slides its children up the first time they scroll into view. */
export function Reveal({ delay = 0, className, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,translate] duration-1000 ease-smooth',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    />
  )
}
