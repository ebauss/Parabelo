import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

export default function AiTextComponent() {
    const [promptValue, setPromptValue] = React.useState('');
    const [resultValue, setResultValue] = React.useState('');

    const handleChange = (event) => {
        setPromptValue(event.target.value);
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        const configuration = new Configuration({
            // TODO Need to setup this properly.
            // TODO Use this link https://www.linkedin.com/pulse/how-use-environment-files-env-react-app-muhammad-sameem/
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const modifiedPrompt = 'Write a long blog post about ' + promptValue;

        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: modifiedPrompt,
            temperature: 0.9,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        const data = await response.data.choices[0].text;

        if (data) {
            setResultValue(data);
        }
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
                           sx={{ width: 600 }}
                />
            </div>
            <br/>
            <div>
                <Button variant="contained" color="success" onClick={handleClick}>
                    Generate
                </Button>
            </div>
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={20}
                placeholder="Your blog will appear here."
                value={resultValue}
                sx={{ width: 600 }}
                InputLabelProps={{ shrink: true }}
            />
        </div>

    )
}
