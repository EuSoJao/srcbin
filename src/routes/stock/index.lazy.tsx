import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/stock/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/stock/"!</div>
}
