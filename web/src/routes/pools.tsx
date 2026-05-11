import { Show } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pools')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <h1>Pools</h1>
  <Show when="signed-in">
    <div>Only signed in users can see this.</div>
  </Show>
  <Show when="signed-out">
    <div>Only signed out users can see this.</div>
  </Show>
  </div>
  )
}
