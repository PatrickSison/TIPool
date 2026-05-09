import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__auth/signup/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className="flex justify-center place-items-center">
     <SignUp />
    </div>
  )
}