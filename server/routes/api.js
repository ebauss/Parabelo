/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

router.get('/', (req, res) => {
    console.log("test route");
})

module.exports = router;
