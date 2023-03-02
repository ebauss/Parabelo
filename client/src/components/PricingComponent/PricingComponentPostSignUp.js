import * as React from 'react';
import Grid from '@mui/material/Grid';
import PricingCard from './PricingCard';

export default function PricingComponentPostSignUp() {
    return (
        <stripe-pricing-table pricing-table-id="prctbl_1MXIgABEpnOVMkQ6PsmYO05R"
            publishable-key="pk_test_51MXHVMBEpnOVMkQ6UrWxPzQR8ZYR6gQI6M8LBYOZwGwcmSrwoKOqnXPJP2s27xHRX4lFbEr3Hpk836nx2l1IL5wA00r5XyEqfj">
        </stripe-pricing-table>
        // <div>
        //     <Grid container spacing={4} sx={{
        //         marginTop: 7,
        //         paddingTop: 5,
        //         paddingBottom: 5,
        //         paddingLeft: 10,
        //         paddingRight: 10
        //     }}>
        //         <Grid item xs={12} sm={12} md={12} lg={4}>
        //             <PricingCard 
        //             productName="Regular"
        //             productPrice="9.99"
        //             ctaText="Get After Trial"
        //             featureOne="First feature"
        //             featureTwo="Some random fun feature"
        //             featureThree="Another feature"
        //             featureFour="The best feature" 
        //             />
        //         </Grid>
        //         <Grid item xs={12} sm={12} md={12} lg={4}>
        //             <PricingCard 
        //             productName="Plus"
        //             productPrice="29.99"
        //             ctaText="Get After Trial"
        //             featureOne="First feature"
        //             featureTwo="Some random fun feature"
        //             featureThree="Another feature"
        //             featureFour="The best feature" 
        //             />
        //         </Grid>
        //         <Grid item xs={12} sm={12} md={12} lg={4}>
        //             <PricingCard 
        //             productName="Premium"
        //             productPrice="49.99"
        //             ctaText="Get After Trial"
        //             featureOne="First feature"
        //             featureTwo="Some random fun feature"
        //             featureThree="Another feature"
        //             featureFour="The best feature" 
        //             />
        //         </Grid>
        //     </Grid>
        // </div>

    )
}