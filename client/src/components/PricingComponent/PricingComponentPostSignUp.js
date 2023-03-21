import * as React from 'react';
import PricingCard from './PricingCard';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box, Grid } from "@mui/material";

export default function PricingComponentPostSignUp(props) {
    const user = props.userDetails;
    const { logout } = useAuth0();

    // TODO: Change the name of this function. There should be three functions.
    const testFunction = async () => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("http://localhost:8000/checkoutRegular", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customerId: user.stripeCustomerId
            })
        })

        const data = await response.json()

        // Redirect to Stripe checkout page.
        window.location.href = data.url
    }

    return (
        <div>
            <Box sx={{ marginTop: 5 }}>
                <Button variant="outlined" size="large" onClick={logout}>
                    Log Out
                </Button>
            </Box>
            <Grid container spacing={4} sx={{
                marginTop: 7,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PricingCard
                        productName="Elite"
                        productPrice="30"
                        ctaText="Sign Up & Try For Free"
                        features={[
                            'Unlimited word count',
                            'Create content that is relevant & converts',
                            'Optimize your work output',
                            'Better writing',
                            'Scale your business through AI'
                        ]}
                        buttonAction={testFunction}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PricingCard
                        productName="Elite"
                        productPrice="30"
                        ctaText="Sign Up & Try For Free"
                        features={[
                            'Unlimited word count',
                            'Create content that is relevant & converts',
                            'Optimize your work output',
                            'Better writing',
                            'Scale your business through AI'
                        ]}
                        buttonAction={testFunction}
                    />
                </Grid>
            </Grid>
        </div>
    )
}