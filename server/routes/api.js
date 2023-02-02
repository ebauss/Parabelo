/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
const documents = require('../models/documents'); // run documents.js which contains the users database model.
/* ------------------------------------ */

router.get('/getOpenAIApiKey', (req, res) => {
    console.log("Api Key requested");
    res.send(process.env.OPENAI_API_KEY);
})

router.post('/saveParaphrasingToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        writingStyle: req.body.writingStyle,
        tone: req.body.tone,
        result: req.body.result
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(false);
        }

        res.send(data);
    })
})

router.post('/saveBlogPostToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        keywords: req.body.keywords,
        result: req.body.result
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(false);
        }

        res.send(data);
    })
})

module.exports = router;
