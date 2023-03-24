/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
const eventParser = require('eventsource-parser');
/* ------------------------------------ */

router.get('/getOpenAIApiKey', (req, res) => {
    console.log("Api Key requested");
    res.send(process.env.OPENAI_API_KEY);
})

router.post('/requestTextResponse', async (req, res) => {
    const { Configuration, OpenAIApi } = require("openai");

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
    const isPromptFlagged = await moderationResponse.data.results[0].flagged;

    if (!isPromptFlagged) {
        console.log("Waiting for OpenAI API response");

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: temperature,
            max_tokens: max_tokens,
            top_p: top_p,
            frequency_penalty: frequency_penalty,
            presence_penalty: presence_penalty,
        });

        console.log("Response was received. Sending data to client now.");

        const data = response.data.choices[0].text;
        res.send(data);
    } else {
        console.log("Prompt is flagged");
        res.send("Prompt is flagged");
    }
})

// This works!
router.get('/streamTest', async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    })

    let response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            method: "POST",
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: generatePrompt("say hello"),
                temperature: 0.75,
                top_p: 0.95,
                frequency_penalty: 0,
                presence_penalty: 0,
                max_tokens: 4000,
                stream: true,
                n: 1,
            }),
        }
    );

    const parser = eventParser.createParser(onParse);

    for await (const value of response.body?.pipeThrough(new TextDecoderStream())) {
        parser.feed(value);
    }

    function generatePrompt(prompt) {
        return [
            { "role": "user", "content": `${prompt}` },
        ]
    }

    function onParse(event) {
        if (event.type === 'event') {
            if (event.data !== "[DONE]") {
                // It's interesting, the data has to be sent in this format for the client-side onmessage event to work.
                res.write('event: message\n');  // message event
                res.write(`data: ${JSON.parse(event.data).choices[0].delta?.content || ""}`);
                res.write('\n\n');
            } else {
                res.write('event: message\n');  // message event
                res.write('data: [DONE]');
                res.write('\n\n');
                res.end();
            }
        } else if (event.type === 'reconnect-interval') {
            console.log('We should set reconnect interval to %d milliseconds', event.value);
        }
    }
})

module.exports = router;