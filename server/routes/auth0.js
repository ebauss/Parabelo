/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
const axios = require('axios');
var request = require('request');
/* ------------------------------------ */

/**
 * Will return either true or false as a bool.
 * 
 * This makes a request to the Auth0 Management API.
 */
router.post('/checkIfEmailVerified', (req, res) => {
    var optionsToken = {
        method: 'POST',
        url: `https://${process.env.AUTH0_MANAGEMENT_DOMAIN}/oauth/token`,
        headers: { 'content-type': 'application/json' },
        body: `{"client_id":"https://${process.env.AUTH0_MANAGEMENT_CLIENT_ID}","client_secret":"${process.env.AUTH0_MANAGEMENT_CLIENT_SECRET}","audience":"https://${process.env.AUTH0_MANAGEMENT_DOMAIN}/api/v2/","grant_type":"client_credentials"}`
    };

    request(optionsToken, function (error, response, body) {
        if (error) throw new Error(error);

        const token = JSON.parse(body).access_token;

        const urlEmail = req.body.email.replace("@", "%40");

        const optionsRequest = {
            method: "GET",
            url: `https://${process.env.AUTH0_MANAGEMENT_DOMAIN}/api/v2/users-by-email?email=${urlEmail}`,
            headers: { authorization: 'Bearer ' + token }
        };

        axios(optionsRequest)
            .then(response => {
                console.log(`User email_verified = ${response.data[0].email_verified}`);
                res.send(response.data[0].email_verified);
            })
            .catch(error => {
                console.log(error);
                res.send(error);
            });
    });




})

module.exports = router;