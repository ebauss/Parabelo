/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
var postmark = require('postmark');
const axios = require('axios');
/* ------------------------------------ */

router.get('/sendEmailToSupport', (req, res) => {
    // Send an email:
    var client = new postmark.ServerClient("ab38c227-fd47-41e4-8d6f-887dd88df6a8");

    client.sendEmail({
        "From": "evon@parabelo.com",
        "To": "evon@parabelo.com",
        "Subject": "Hello from Postmark",
        "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
        "TextBody": "Hello from Postmark!",
        "MessageStream": "outbound"
    });

    console.log("email sent?")
})

module.exports = router;