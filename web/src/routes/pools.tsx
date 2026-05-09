import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pools')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pools"!</div>
}
