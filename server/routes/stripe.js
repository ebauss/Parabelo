/**
 * Require node dependencies.
 */
require('dotenv').config();

const express = require('express');
const router = express.Router();
const stripe = require('stripe')(`${process.env.STRIPE_CHECKOUT_KEY}`);
/* ------------------------------------ */

/**
 * Stripe checkout for the Elite Plan.
 */
router.post('/checkoutElite', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: process.env.ELITE_PRICE_ID,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.DOMAIN}/app/checkoutSuccess`,
        cancel_url: `${process.env.DOMAIN}/`,
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