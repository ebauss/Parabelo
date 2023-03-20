/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
const documents = require('../models/documents'); // run documents.js which contains the documents database model.
const users = require('../models/users'); // run users.js which contains the users database model.
/* ------------------------------------ */

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

router.post('/saveCopyWritingToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        thingsToMention: req.body.thingsToMention,
        result: req.body.result
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(false);
        }

        res.send(data);
    })
})

router.post('/saveProductDescriptionToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        thingsToMention: req.body.thingsToMention,
        result: req.body.result
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(false);
        }

        res.send(data);
    })
})

router.post('/saveEmailMarketingToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        thingsToMention: req.body.thingsToMention,
        result: req.body.result
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(false);
        }

        res.send(data);
    })
})

router.post('/saveSocialCaptionToDB', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        length: req.body.length,
        imageContents: req.body.imageContents,
        writingStyle: req.body.writingStyle,
        additions: req.body.additions,
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
