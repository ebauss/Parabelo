import { Button, Typography } from "@mui/material";
import React from "react";

export default function SettingsComponent(props) {
    const sendToStripCustomerPortal = () => {
        window.open('https://billing.stripe.com/p/login/test_aEUbJafn2diR6ZO5kk', '_blank');
    }

    return (
        <div>
            <br />
            <Typography variant="h5">
                Settings
            </Typography>
            <br />
            <Button variant="outlined" onClick={sendToStripCustomerPortal}>Manage Subscription</Button>
            <br />
        </div>
    )
}