import { signIn } from "next-auth/react"
import { Button } from "@mui/material"
 
export function SignIn() {
  return <Button onClick={() => signIn()}>Sign In</Button>
}