/**
 * Require node dependencies.
 */
const stripe = require('stripe')('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');
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

/**
 * Stripe checkout for the Elite Plan.
 */
router.post('/checkoutElite', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1MqS93BEpnOVMkQ6kQirvzpp',
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: "https://parabelo.herokuapp.com/app/checkoutSuccess",
        cancel_url: 'https://parabelo.herokuapp.com/',
        customer: req.body.customerId,
        subscription_data: {
            trial_period_days: 7
        }
    });

    res.json({ url: session.url }) // Need to do it this way instead of what is in Stripe docs because of some CORS policy thing.
});

/**
 * Check if user has a subscription.
 */
router.post('/checkUserActiveSubscription', async (req, res) => {
    const subscriptionsActive = await stripe.subscriptions.list({
        customer: req.body.customerId,
        status: 'active',
        limit: 1
    });

    const subscriptionsTrial = await stripe.subscriptions.list({
        customer: req.body.customerId,
        status: 'trialing',
        limit: 1
    });

    res.send(subscriptionsActive.data[0] != undefined || subscriptionsTrial.data[0] != undefined);
})

module.exports = router;