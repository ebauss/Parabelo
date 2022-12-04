/**
 * Require node dependencies.
 */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/api');
/* ------------------------------------ */

require('dotenv').config();

const app = express(); // Initiate express.
const port = process.env.PORT || 8000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(bodyParser.json());

// api URL is https://<domain>/<route>. When running locally, it is http://localhost:<port>/<route>
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})