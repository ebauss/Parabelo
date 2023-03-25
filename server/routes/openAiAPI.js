/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
/* ------------------------------------ */

router.post('/requestTextResponse', async (req, res) => {
    const { Configuration, OpenAIApi } = require("openai");

    // const model = "gpt-3.5-turbo";
    const model = "text-davinci-003";
    const prompt = req.body.prompt;
    const temperature = req.body.temperature;
    const max_tokens = req.body.max_tokens;
    const top_p = req.body.top_p;
    const frequency_penalty = req.body.frequency_penalty;
    const presence_penalty = req.body.presence_penalty;

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    console.log(`Prompt: ${prompt}`);

    const moderationResponse = await openai.createModeration({
        input: prompt
    })

    // Check if prompt follows OpenAi usage policies using the OpenAi moderation endpoint.
    const isPromptFlagged = moderationResponse.data.results[0].flagged;

    if (!isPromptFlagged) {
        console.log(`Waiting for OpenAI API response. Model used is ${model}.`);

        const response = await openai.createCompletion({
            model: model,
            // messages: [
            //     {"role": "system", "content": "Please act like a text completion model."},
            //     {"role": "user", "content": `${prompt}`}
            // ],
            prompt: prompt,
            temperature: temperature,
            max_tokens: max_tokens,
            top_p: top_p,
            frequency_penalty: frequency_penalty,
            presence_penalty: presence_penalty,
        });

        console.log("Response was received. Sending data to client now.");

        console.log(response.data.usage);

        // const data = response.data.choices[0].message.content;
        const data = response.data.choices[0].text;
        res.send(data);
    } else {
        console.log("Prompt is flagged");
        res.send("Prompt is flagged");
    }
})


module.exports = router;