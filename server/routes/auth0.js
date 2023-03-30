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
        url: 'https://dev-qw5gqp8rnisenpl3.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"fIr9uZdzmMG127IqqDe76MgAyYSQa2Pt","client_secret":"DfY7O-kAkvP5m1s7Yw-q-IhljIPIH16_KA4RxMg_aX3hTvcjvq28MY60L6Q2XPMN","audience":"https://dev-qw5gqp8rnisenpl3.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
    };

    request(optionsToken, function (error, response, body) {
        if (error) throw new Error(error);

        const token = JSON.parse(body).access_token;

        const urlEmail = req.body.email.replace("@", "%40");

        const optionsRequest = {
            method: "GET",
            url: `https://parabelodev.us.auth0.com/api/v2/users-by-email?email=${urlEmail}`,
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