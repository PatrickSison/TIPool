import { Button } from "./button"
import { createLink } from "@tanstack/react-router"

const CustomLink = createLink(Button);

export const Link = (props: React.ComponentProps<typeof CustomLink>) => {
  return <CustomLink {...props} variant="link"/>
}

