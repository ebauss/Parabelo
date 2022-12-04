/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

// TODO Add route to fetch api key.

router.get('/getOpenAIApiKey', (req, res) => {
    console.log("Api Key requested");
    res.send(process.env.OPENAI_API_KEY);
})

module.exports = router;
