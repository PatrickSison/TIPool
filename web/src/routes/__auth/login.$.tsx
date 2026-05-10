import { createFileRoute, redirect } from '@tanstack/react-router'
import { SignIn } from '@clerk/tanstack-react-start'

export const Route = createFileRoute('/__auth/login/$')({
  component: RouteComponent,
  /* beforeLoad: () => {
    // Example of a redirect if the user is already logged in
    if (isAuthenticated()) {
      throw redirect({ to: '/' })
    }
  } */
})

function RouteComponent() {
  return(
    <div className="flex justify-center place-items-center">
     <SignIn 
      routing="path"
      path="/login"
      signUpUrl="/signup"
      forceRedirectUrl="/"
      />
    </div>
  )
}
