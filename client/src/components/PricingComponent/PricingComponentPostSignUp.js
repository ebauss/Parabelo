import * as React from 'react';
import Grid from '@mui/material/Grid';
import PricingCard from './PricingCard';

export default function PricingComponentPostSignUp() {
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
                    />
                </Grid>
            </Grid>
        </div>

    )
}