/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

router.get('/getOpenAIApiKey', (req, res) => {
    res.send(process.env.OPENAI_API_KEY);
})

module.exports = router;
