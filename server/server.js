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

app.post('/test', async (req, res) => {
    console.log('Ai is generating the blog post. Please wait...')

    const { Configuration, OpenAIApi } = require("openai");
    const somePrompt = req.body.prompt;

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: somePrompt,
        temperature: 0.9,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log(`Prompt = ${somePrompt}`);
    console.log(`Result: ${response.data.choices[0].text}`);

    res.send(response.data.choices[0].text);
})
