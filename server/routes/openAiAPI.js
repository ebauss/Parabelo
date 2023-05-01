/**
 * Require node dependencies.
 */
const express = require('express');
const router = express.Router();
const eventParser = require('eventsource-parser');
const retry = require('retry');
const { Configuration, OpenAIApi } = require("openai");
/* ------------------------------------ */

router.get('/getOpenAIApiKey', (req, res) => {
    console.log("Api Key requested");
    res.send(process.env.OPENAI_API_KEY);
})

var prompt;
var temperature;
var max_tokens;
var top_p;
var frequency_penalty;
var presence_penalty;

// /**
//  * Load the global variables to be used by OpenAI.
//  */
router.post('/loadOptions', (req, res) => {
    prompt = req.body.prompt;
    temperature = req.body.temperature;
    max_tokens = req.body.max_tokens;
    top_p = req.body.top_p;
    frequency_penalty = req.body.frequency_penalty;
    presence_penalty = req.body.presence_penalty;

    console.log('attempting to load options.');

    res.send("true");
})

/**
 * Checks if the prompt meets the user guidelines.
 * 
 * Sends either a true or false boolean.
 */
router.post('/moderation', async (req, res) => {
    console.log('Moderation requested for prompt');
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const moderationResponse = await openai.createModeration({
        input: req.body.prompt
    })

    // Check if prompt follows OpenAi usage policies using the OpenAi moderation endpoint.
    const isPromptFlagged = moderationResponse.data.results[0].flagged;

    res.send(isPromptFlagged);
})

router.get('/streamResponse', (req, res) => {
    const model = "gpt-3.5-turbo";
    console.log(`Model: ${model}`);

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    });

    console.log(`Request is sent to OpenAI. Prompt: ${prompt}`);

    // Used to handle 429 error (Rate limit reached for requests) from OpenAI.
    const operation = retry.operation({
        retries: 3, // Number of times to retry the request
        factor: 2,  // Exponential backoff factor
        minTimeout: 1000,   // Minimum wait time in milliseconds
        maxTimeout: 5000,   // Maximum wait time in milliseconds
        randomize: true // Randomize the wait time to avoid synchronized retries
    })

    operation.attempt(async () => {
        try {
            let response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        model: model,
                        messages: generatePrompt(prompt),
                        temperature: temperature,
                        top_p: top_p,
                        frequency_penalty: frequency_penalty,
                        presence_penalty: presence_penalty,
                        max_tokens: max_tokens,
                        stream: true
                    }),
                }
            );

            const parser = eventParser.createParser(onParse);

            for await (const value of response.body?.pipeThrough(new TextDecoderStream())) {
                parser.feed(value);
            }

            // Generate a chat completion prompt.
            function generatePrompt(prompt) {
                return [
                    { "role": "system", "content": "Please act like a text completion model." },
                    { "role": "user", "content": `${prompt}` }
                ]
            }

            function onParse(event) {
                if (event.type === 'event') {
                    if (event.data !== "[DONE]") {
                        const content = JSON.parse(event.data).choices[0].delta?.content || "";
                        const escapedText = content.replace(/\n/g, "NEWLINE");

                        // It's interesting, the data has to be sent in this format for the client-side onmessage event to work.
                        res.write('event: message\n');  // message event
                        res.write(`data: ${escapedText}`);
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

                // Detect if the client closes the connection.
                req.on('close', () => {
                    console.log("Client closed connection.");
                    // Close the SSE stream.
                    res.end();
                })
            }
        } catch (error) {
            if (error.response && error.response.status === 429) {
                if (operation.retry(error)) {
                    return;
                }
                res.write('event: message\n');  // message event
                res.write(`data: The server is at capacity at the moment. Please try again later.`);
                res.write('\n\n');

                res.write('event: message\n');  // message event
                res.write('data: [DONE]');
                res.write('\n\n');
                res.end();
            }
        }
    })
})

module.exports = router;