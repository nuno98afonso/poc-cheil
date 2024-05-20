import { signOut } from "next-auth/react"
import { Button } from "@mui/material"
  
export function SignOut() {
  return <Button onClick={() => signOut()}>Sign Out</Button>
}