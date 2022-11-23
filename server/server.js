/**
 * Require node dependencies.
 */
const express = require("express");
/* ------------------------------------ */

require('dotenv').config();

const app = express(); // Initiate express.
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get('/test', async (req, res) => {
    const { Configuration, OpenAIApi } = require("openai");
    const somePrompt = "Write a tagline for an artificial intelligence text generator";

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: somePrompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log(`Prompt = ${somePrompt}`);
    console.log(`Result: ${response.data.choices[0].text}`);
})
