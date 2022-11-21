const express = require("express");

const app = express(); // Initiate express.

app.listen(3000, () => {
    console.log('Server running on port 3000');
})