/**
 * Require node dependencies.
 */
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/databaseApi');
const stripe = require('./routes/stripe');
const auth0 = require('./routes/auth0');
const openAiAPI = require('./routes/openAiAPI');
const email = require('./routes/email');
const mongoose = require('mongoose');
// const mongoDBConnection = require('./database/connection');
/* ------------------------------------ */

require('dotenv').config();

const path = require("path");

const app = express(); // Initiate express.
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "build")));

var corsOptions = {
    origin: ["https://parabelo.netlify.app", "https://checkout.stripe.com"],
    optionsSuccessStatus: 200, // For legacy browser support
    credentials: true
}

app.use(cors(corsOptions));

// Connect to the database
mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` 
// by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare 
// for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
mongoose.set('strictQuery', false);

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// api URL is https://<domain>/<route>. When running locally, it is http://localhost:<port>/<route>
app.use('/', routes);

app.use('/', stripe);

app.use('/', auth0);

app.use('/', openAiAPI);

app.use('/', email);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// This is there to fix the refresh issue. Without this, everytime the page is refreshed, the page will crash.
// Got the solution from this article. https://ui.dev/react-router-cannot-get-url-refresh
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, 'build/index.html'));
// });