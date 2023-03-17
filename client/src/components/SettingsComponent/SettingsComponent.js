import { Button, Typography } from "@mui/material";
import React from "react";

export default function SettingsComponent(props) {
    const sendToStripCustomerPortal = () => {
        // Redirect user to Stripe Customer Portal with prefilled email field.
        window.open(`https://billing.stripe.com/p/login/test_aEUbJafn2diR6ZO5kk?prefilled_email=${props.userDetails.email}`, '_blank');
    }

    return (
        <div>
            <br />
            <Typography variant="h5">
                Settings
            </Typography>
            <br />
            <Typography variant="h6">Your registered email address is {props.userDetails.email}</Typography>
            <br />
            <Button variant="outlined" onClick={sendToStripCustomerPortal}>Manage Subscription</Button>
            <br />
        </div>
    )
}