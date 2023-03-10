import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

export default function EmailVerificationComponent() {
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
                <Button variant="contained" sx={{ width: 350, height: 50 }}>
                    Resend Verification Link
                </Button>
                <br />
                <Button variant="contained" sx={{ width: 350, height: 50 }}>
                    Continue
                </Button>
            </Paper>
        </Box>

    )
}