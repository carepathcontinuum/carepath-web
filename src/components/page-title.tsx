import { site } from '@/config/site'

/** Sets the browser tab title (React 19 hoists <title> into <head>). */
export function PageTitle({ title }: { title?: string }) {
  return <title>{title ? `${title} | ${site.name}` : site.name}</title>
}
