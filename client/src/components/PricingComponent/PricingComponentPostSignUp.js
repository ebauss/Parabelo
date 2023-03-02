import * as React from 'react';
import Grid from '@mui/material/Grid';
import PricingCard from './PricingCard';

export default function PricingComponentPostSignUp() {
    return (
        <div>
            <br />
            <br />
            <stripe-pricing-table pricing-table-id="prctbl_1MXIgABEpnOVMkQ6PsmYO05R"
                publishable-key="pk_test_51MXHVMBEpnOVMkQ6UrWxPzQR8ZYR6gQI6M8LBYOZwGwcmSrwoKOqnXPJP2s27xHRX4lFbEr3Hpk836nx2l1IL5wA00r5XyEqfj">
            </stripe-pricing-table>
        </div>
    )
}