import * as React from 'react';
import Grid from '@mui/material/Grid';
import PricingCard from './PricingCard';

export default function PricingComponentPostSignUp(props) {
    const user = props.userDetails;

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
            <Grid container spacing={4} sx={{
                marginTop: 7,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <PricingCard
                        productName="Regular"
                        productPrice="9.99"
                        ctaText="Try For Free"
                        featureOne="First feature"
                        featureTwo="Some random fun feature"
                        featureThree="Another feature"
                        featureFour="The best feature"
                        buttonAction={testFunction}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <PricingCard
                        productName="Plus"
                        productPrice="29.99"
                        ctaText="Try For Free"
                        featureOne="First feature"
                        featureTwo="Some random fun feature"
                        featureThree="Another feature"
                        featureFour="The best feature"
                        buttonAction={testFunction}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <PricingCard
                        productName="Premium"
                        productPrice="49.99"
                        ctaText="Try For Free"
                        featureOne="First feature"
                        featureTwo="Some random fun feature"
                        featureThree="Another feature"
                        featureFour="The best feature"
                        buttonAction={testFunction}
                    />
                </Grid>
            </Grid>
        </div>
    )
}