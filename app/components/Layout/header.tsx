import React from "react";
import { styled } from '@mui/material/styles';
import { auth, signIn, signOut } from "../../../auth";
import { AppBar, Button, Grid, Box } from "@mui/material";
import Image from "next/image";
import Paper from '@mui/material/Paper';
import Link from "next/link";

type Props = {}

function SignOut() {
    return (
        <form action={async () => {
            'use server';
            await signOut()
        }}>
            <Button variant="outlined" color="error" type="submit">Sign Out</Button>
        </form>
    )
}

const Header = async (props: Props) => {
    const session = await auth();
    console.log(session);

    return (
        <AppBar>
            <nav>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <div><h1>My app</h1></div>
                        </Grid>
                        <Grid container direction="row" justifyContent="flex-end" item xs={4}>
                            <div><div>
                                {
                                    session?.user ? (
                                        <div>{session.user.image && session.user.name &&
                                        <Image 
                                            src={session.user.image} 
                                            alt={session.user.name} 
                                            width={32} 
                                            height={32}/>
                                        }<SignOut/></div>
                                    ) : (
                                        <Link href={"/Login"}><Button variant="outlined" color="success">Sign In</Button></Link>
                                    )
                                }</div></div>
                        </Grid>
                    </Grid>
                </Box>
            </nav>
        </AppBar>
        
    )
}

export default Header;