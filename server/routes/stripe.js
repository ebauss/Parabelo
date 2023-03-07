/**
 * Require node dependencies.
 */
const stripe = require('stripe')('sk_test_51MXHVMBEpnOVMkQ6mkaaPMADYBibzwyQfhlalzZc4TDPoIrLlqy4TDyomgP2sNnR2Mf8ZuFB1Kgsmhpa4ppmOLZP00ZFN5vIJg');
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

/**
 * Stripe checkout for the Regular Plan.
 */
router.post('/checkoutRegular', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1MXIeeBEpnOVMkQ6stKZ3GSh',
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: 'http://localhost:3000/app',
        cancel_url: 'http://localhost:3000',
        customer: 'cus_NTpmaEV72lMmCk'
    });

    res.json({url: session.url}) // Need to do it this way instead of what is in Stripe docs because of some CORS policy thing.
});

module.exports = router;