import * as React from 'react';
import PricingCard from './PricingCard';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box, Grid } from "@mui/material";
import PricingCardComingSoon from './PricingCardComingSoon';

export default function PricingComponentPostSignUp(props) {
    const user = props.userDetails;
    const { logout } = useAuth0();

    // TODO: Change the name of this function. There should be three functions.
    const checkoutElite = async () => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("https://www.parabelo.com/checkoutElite", {
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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box sx={{ marginTop: 5 }}>
                <Button variant="outlined" size="large" onClick={logout}>
                    Log Out
                </Button>
            </Box>
            <Grid container spacing={4} sx={{
                marginTop: 7,
                marginBottom: 4,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                width: { xl: 1500 }
            }}>
                <Grid item xs={12} sm={12} md={6}>
                    <PricingCard
                        productName="Elite"
                        productPrice="30"
                        ctaText="Try For Free For 7 Days"
                        features={[
                            'Unlimited word count',
                            'Create content that is relevant & converts',
                            'Optimize your work output',
                            'Better writing',
                            'Scale your business through AI'
                        ]}
                        buttonAction={checkoutElite}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <PricingCardComingSoon
                        productName="Premium"
                    />
                </Grid>
            </Grid>
            {/* <stripe-pricing-table pricing-table-id="prctbl_1MXIgABEpnOVMkQ6PsmYO05R"
                publishable-key="pk_test_51MXHVMBEpnOVMkQ6UrWxPzQR8ZYR6gQI6M8LBYOZwGwcmSrwoKOqnXPJP2s27xHRX4lFbEr3Hpk836nx2l1IL5wA00r5XyEqfj"
                customer-email={user.email}
                >
            </stripe-pricing-table> */}
        </Box>
    )
}