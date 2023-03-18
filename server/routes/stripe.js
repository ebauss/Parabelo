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
        success_url: "https://parabelo-staging.herokuapp.com/app/checkoutSuccess",
        cancel_url: 'https://parabelo-staging.herokuapp.com/',
        customer: req.body.customerId
    });

    res.json({ url: session.url }) // Need to do it this way instead of what is in Stripe docs because of some CORS policy thing.
});

/**
 * Check if user has a subscription.
 */
router.post('/checkUserActiveSubscription', async (req, res) => {
    const subscriptions = await stripe.subscriptions.list({
        customer: req.body.customerId,
        status: 'active',
        limit: 1
    });

    res.send(subscriptions.data[0] != undefined);
})

module.exports = router;