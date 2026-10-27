import { Link } from 'react-router'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <section className="container py-24 text-center">
      <PageTitle title="Page not found" />
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <Button asChild className="mt-6">
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  )
}
