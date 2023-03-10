import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function EmailVerificationComponent() {
    const {user} = useAuth0();

    const resendVerificationEmail = () => {
        fetch('http://localhost:3000/api/v2/jobs/verification-email')
        window.alert("Verification email has been sent.");
    }

    const continueLoginFLow = () => {
        window.alert("Continue clicked");
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
            <Typography variant="h1" sx={{marginBottom: 5}}>
                Parabelo Logo
            </Typography>
            <Paper elevation={3} sx={{
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 3,
                paddingRight: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 400
            }}>
                <Typography variant="h5">
                    Please check your email for a verification link. Once your email has been verified, please go back to this tab and click continue.
                </Typography>
                <br />
                <Button variant="outlined" sx={{ width: 350, height: 50 }} onClick={resendVerificationEmail} >
                    Resend Verification Link
                </Button>
                <br />
                <Button variant="contained" sx={{ width: 350, height: 50 }} onClick={continueLoginFLow} >
                    Continue
                </Button>
            </Paper>
        </Box>

    )
}