/**
 * Require node dependencies.
 */
const express = require("express");
/* End of node dependencies. */

require('dotenv').config();

const app = express(); // Initiate express.
const port = process.env.PORT || 8000;

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
})