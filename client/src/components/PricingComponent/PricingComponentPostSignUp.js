import * as React from 'react';

export default function PricingComponentPostSignUp() {
    return (
        <div>
            <br />
            <br />
            {/* The pricing table here can be updated on Stripe. */}
            <stripe-pricing-table pricing-table-id="prctbl_1MXIgABEpnOVMkQ6PsmYO05R"
                publishable-key="pk_test_51MXHVMBEpnOVMkQ6UrWxPzQR8ZYR6gQI6M8LBYOZwGwcmSrwoKOqnXPJP2s27xHRX4lFbEr3Hpk836nx2l1IL5wA00r5XyEqfj">
            </stripe-pricing-table>
        </div>
    )
}