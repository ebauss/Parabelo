import * as React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

const {Configuration, OpenAIApi} = require("openai");

export default function BlogPostComponent() {
    const [promptValue, setPromptValue] = React.useState('');
    const [resultValue, setResultValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    /**
     * Handles the text changes in the text box.
     *
     * @param event contains data of the event
     */
    const handleChange = (event) => {
        setPromptValue(event.target.value);
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        setLoading(true); // Starts the loading animation on the button.

        const apiKeyResponse = await fetch("http://localhost:8000/getOpenAIApiKey",{
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

        const modifiedPrompt = 'Write a super long blog post about ' + promptValue;

        const openai = new OpenAIApi(configuration);

        const aiApiResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: modifiedPrompt,
            temperature: 0.9,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const aiApiData = await aiApiResponse.data.choices[0].text;

        if (aiApiData) {
            setResultValue(aiApiData.trim());
        }

        setLoading(false); // Ends the loading animation on the button.
    }

    return (
        <div>
            <br/>
            <div>
                <TextField id="outlined-basic"
                           label="What blog would you like me to write for you?"
                           placeholder="Example: How to learn how to code"
                           variant="outlined"
                           fullWidth
                           onChange={handleChange}
                           sx={{width: 600}}
                />
            </div>
            <br/>
            <div>
                {/*<Button variant="contained" color="success" onClick={handleClick}>*/}
                {/*    Generate*/}
                {/*</Button>*/}
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Send
                </LoadingButton>
            </div>
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={20}
                placeholder="Your blog will appear here."
                value={resultValue}
                sx={{width: 600}}
                InputLabelProps={{shrink: true}}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
