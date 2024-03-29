import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function EmailVerificationComponent() {
    const { user, logout } = useAuth0();

    // const resendVerificationEmail = async () => {
    //     const response = await fetch("https://www.parabelo.com/api/v2/jobs/verification-email", {
    //         method: "Post",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             user_id: user.sub
    //         })
    //     })

    //     const data = await response.text();

    //     window.alert(data);
    // }

    const continueLoginFLow = () => {
        window.location.reload();
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
            <Button variant="outlined" size="large" onClick={logout} sx={{mb:  3}}>
                Log Out
            </Button>
            <Typography variant="h1" sx={{ marginBottom: 5 }}>
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
                width: {
                    sm: 350,
                    md: 450
                }
            }}>
                <Typography variant="h6" sx={{mb: 3}}>
                    Your email needs to be verified.
                </Typography>
                <Typography variant="h6" sx={{ mb: 3}}>
                    Please check your email for a verification link.
                </Typography>
                <Typography variant="h6" sx={{ mb: 3}}>
                    Once your email has been verified, please go back to this tab and click continue.
                </Typography>
                {/* <br />
                <Button variant="outlined" sx={{ width: 350, height: 50 }} onClick={resendVerificationEmail} >
                    Resend Verification Link
                </Button> */}
                <Button variant="contained" sx={{ width: 350, height: 50 }} onClick={continueLoginFLow} >
                    Continue
                </Button>
            </Paper>
        </Box>

    )
}