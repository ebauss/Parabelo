import * as React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";

const { Configuration, OpenAIApi } = require("openai");

export default function ProductDescriptionComponent() {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    /* Stores the string stored in the things to mention text field. */
    const [thingsToMentionValue, setThingsToMentionValue] = React.useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = React.useState('');

    /* Determines whether the loading animation is activated or not. */
    const [loading, setLoading] = React.useState(false);

    /**
     * Handles the text changes in the prompt text box.
     *
     * @param event contains data of the event
     */
    const handlePromptChange = (event) => {
        setPromptValue(event.target.value);
    }

    /**
     * Handles the text changes in the things to mention text box.
     *
     * @param event
     */
    const handleThingsToMentionChange = (event) => {
        setThingsToMentionValue(event.target.value);
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        const apiKeyResponse = await fetch("http://localhost:8000/getOpenAIApiKey", {
            method: "Get",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const apiKeyData = await apiKeyResponse.text();

        const configuration = new Configuration({
            apiKey: apiKeyData,
        });

        let modifiedPrompt;

        // TODO change this into a switch of some sort. Like and if statement chain with string concatenation.
        if (thingsToMentionValue) {
            modifiedPrompt = 'Write a product description for ' + promptValue + '. ' + 'Things to mention: ' + thingsToMentionValue;
        } else {
            modifiedPrompt = 'Write a product description for ' + promptValue;
        }

        const openai = new OpenAIApi(configuration);

        // Check if prompt follows OpenAi usage policies using the OpenAi moderation endpoint.
        const moderationResponse = await openai.createModeration({
            input: modifiedPrompt
        })

        // Value of either true or false.
        const isPromptNotSafe = await moderationResponse.data.results[0].flagged;

        if (!isPromptNotSafe) {
            setLoading(true); // Starts the loading animation on the button.

            const aiApiResponse = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: 1000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            const aiApiData = await aiApiResponse.data.choices[0].text;

            if (aiApiData) {
                setResultValue(aiApiData.trim());
            }

            setLoading(false); // Ends the loading animation on the button.
        } else {
            window.alert("Your prompt does not follow our usage guidelines.");
        }

    }

    return (
        <div>
            <br />
            <Typography variant="h5" gutterBottom>
                Product Description Writer
            </Typography>
            <br />
            <div>
                <TextField id="outlined-basic"
                    label="What is your product?"
                    variant="outlined"
                    fullWidth
                    onChange={handlePromptChange}
                    sx={{ width: 600 }}
                />
            </div>
            <br />
            <div>
                <TextField id="outlined-basic"
                    label='Things to mention (Separate entries with a ",")'
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleThingsToMentionChange}
                    sx={{ width: 600 }}
                />
            </div>
            <br />
            <div>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Go
                </LoadingButton>
            </div>
            <br />
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={20}
                placeholder="Your blog will appear here."
                value={resultValue}
                sx={{ width: 600 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
