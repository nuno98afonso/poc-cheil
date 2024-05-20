import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Office365 from "../../../public/images/Office_365.png";


interface loginType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
  }
  
  const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const handleClick = () => {
      signIn("microsoft-entra-id", { callbackUrl: "/" });
      console.log(signIn)
    };

    return (
        <>
        {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
            <Button
                color="secondary"
                variant="text"
                size="large"
                fullWidth
                onClick={handleClick}
            >
                <Image src={Office365} alt="Office365" width={96} height={17} />
            </Button>
            {subtitle}
    </>
  );
};

export default AuthLogin;