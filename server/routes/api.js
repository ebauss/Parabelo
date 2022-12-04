/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

// TODO Add route to fetch api key.

router.get('/', (req, res) => {
    console.log("test route");
})

module.exports = router;
