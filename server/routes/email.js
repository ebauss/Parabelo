/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
var postmark = require('postmark');
const axios = require('axios');
/* ------------------------------------ */

router.post('/sendEmailToSupport', (req, res) => {
    // Send an email:
    var client = new postmark.ServerClient("ab38c227-fd47-41e4-8d6f-887dd88df6a8");

    const subject = `Support message from ${req.body.firstName} ${req.body.lastName} ${req.body.email}`;

    const email = req.body.email;

    client.sendEmail({
        "From": email,
        "To": "support@parabelo.com", // Put this in the env.
        "Subject": subject,
        "HtmlBody": req.body.emailBody,
        "TextBody": "Hello from Postmark!",
        "MessageStream": "outbound"
    });

    console.log("Email has been sent.");
})

module.exports = router;