/**
 * Require node dependencies.
 */
const stripe = require('stripe')('rk_test_51MXHVMBEpnOVMkQ6LT9w8zOiIXzixvWO8j0gAOX5cLqmqKGe9uj0U9qm4rPDus8dePluGnKE6z21vA9pCpQwnF9u009ad6LZhk');
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
        success_url: "http://localhost:3000/",
        cancel_url: 'http://localhost:3000/',
        customer: req.body.customerId
    });

    res.json({url: session.url}) // Need to do it this way instead of what is in Stripe docs because of some CORS policy thing.
});

module.exports = router;