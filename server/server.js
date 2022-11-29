/**
 * Require node dependencies.
 */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
/* ------------------------------------ */

require('dotenv').config();

const app = express(); // Initiate express.
const port = process.env.PORT || 8000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// TODO configure so that routes are in a different folder.