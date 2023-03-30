import { Button, Typography } from "@mui/material";
import React from "react";

export default function SettingsComponent(props) {
    const stripeCustomerPortalURL = "https://billing.stripe.com/p/login/aEU2bCfAy1Ea69a8ww"; // change this URL when switching to production.
    const sendToStripCustomerPortal = () => {
        // Redirect user to Stripe Customer Portal with prefilled email field.
        window.open(`${stripeCustomerPortalURL}?prefilled_email=${props.userDetails.email}`, '_blank');
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