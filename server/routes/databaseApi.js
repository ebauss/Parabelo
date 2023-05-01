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
        result: req.body.result,
        creationTime: Date.now()
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
        result: req.body.result,
        creationTime: Date.now()
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
        result: req.body.result,
        creationTime: Date.now()
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
        featureList: req.body.featureList,
        result: req.body.result,
        creationTime: Date.now()
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
        result: req.body.result,
        creationTime: Date.now()
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
        result: req.body.result,
        creationTime: Date.now()
    }, (err, data) => {
        if (err) {
            console.log(err);

            res.send(false);
        }
        res.send(data);
    })
})

router.post('/saveTikTokToDb', (req, res) => {
    documents.create({
        type: req.body.type,
        owner: req.body.owner,
        prompt: req.body.prompt,
        targetCustomer: req.body.targetCustomer,
        result: req.body.result,
        creationTime: Date.now()
    }, (err, data) => {
        if (err) {
            console.log(err);

            res.send(false);
        }
        res.send(data);
    })
})

router.post('/loadDocuments', (req, res) => {
    documents
        .find({ owner: req.body.owner })
        .sort('-creationTime')
        .exec((err, data) => {
            if (err) {
                console.log(err);

                res.send(false);
            }
            res.send(data);
        })
})

router.post('/deleteDocument', (req, res) => {
    documents.deleteOne({
        _id: req.body.documentId,
        owner: req.body.owner
    }, (err, data) => {
        if (err) {
            console.log(err);

            res.send(false);
        }
        res.send(data);
    })
})

router.post('/deleteHistory', (req, res) => {
    documents.deleteMany({
        owner: req.body.owner
    }, (err, data) => {
        if (err) {
            console.log(err);

            res.send(false);
        }
        res.send(data);
    })
})

module.exports = router;
