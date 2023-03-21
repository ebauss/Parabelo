import * as React from 'react';
import Grid from '@mui/material/Grid';
import PricingCard from './PricingCard';
import { useAuth0 } from "@auth0/auth0-react";

export default function PricingComponent() {
    const { loginWithRedirect } = useAuth0();

    const goToSignUp = () => {
        loginWithRedirect({ screen_hint: 'signup' });
    }

    return (
        <div>
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
                    buttonAction={goToSignUp} 
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>

                </Grid>
            </Grid>
        </div>
    )
}