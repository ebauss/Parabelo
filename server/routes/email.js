/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
var postmark = require('postmark');
const axios = require('axios');
var validator = require('email-validator');
/* ------------------------------------ */

router.post('/sendEmailToSupport', (req, res) => {
    // Send an email:
    var client = new postmark.ServerClient("ab38c227-fd47-41e4-8d6f-887dd88df6a8");

    const subject = `Support message from ${req.body.firstName} ${req.body.lastName} ${req.body.email}`;

    const email = req.body.email;

    console.log(req.body.email !== "");

    if (validator.validate(email) && req.body.emailBody !== "") {
        client.sendEmail({
            "From": email,
            "To": "support@parabelo.com", // Put this in the env.
            "Subject": subject,
            "HtmlBody": req.body.emailBody,
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound"
        });

        console.log("Email has been sent.");
        res.send("true");
    } else if (!validator.validate(email)) {
        const error = "The email is invalid. Please ensure that the email was typed correctly and try again.";
        console.log(error);
        res.send(error);
    } else if (req.body.emailBody === "") {
        const error = "The email did not contain a body. Please ensure that you wrote an email body.";
        console.log(error);
        res.send(error);
    }
})

module.exports = router;