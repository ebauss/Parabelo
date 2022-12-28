import * as React from 'react';
import TextField from '@mui/material/TextField';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

const {Configuration, OpenAIApi} = require("openai");

export default function ParaphrasingComponent() {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = React.useState('');

    /* Stores the style value for paraphrasing. */
    const [moodValue, setMoodValue] = React.useState('fun');

    /* Stores the tone value for paraphrasing. */
    const [toneValue, setToneValue] = React.useState('happy');

    /* Determines whether the loading animation is activated or not. */
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
     * Handles the change for the button group for the writing style.
     *
     * @param event contains data of the event
     */
    const handleStyleButtonGroupChange = (event) => {
        setMoodValue(event.target.value);
    }

    /**
     * handles the change for the button group for the tone of voice.
     *
     * @param event contains data of the event
     */
    const handleToneButtonGroupChange = (event) => {
        setToneValue(event.target.value);
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        setLoading(true); // Starts the loading animation on the button.

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

        const modifiedPrompt = 'Rewrite the following in a ' + moodValue + ' mood: ' + promptValue + 'and in a '
            + toneValue + ' tone of voice.';

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
            <Typography variant="h5" gutterBottom>
                Paraphrasing Tool
            </Typography>
            <br/>
            <div>
                <TextField id="outlined-basic"
                           multiline
                           rows={20}
                           label="What do you want me to paraphrase?"
                           variant="outlined"
                           fullWidth
                           onChange={handleChange}
                           sx={{width: 600}}
                />
            </div>
            <br/>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={moodValue}
                    exclusive
                    onChange={handleStyleButtonGroupChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="fun">Fun</ToggleButton>
                    <ToggleButton value="professional">Professional</ToggleButton>
                    <ToggleButton value="technical">Technical</ToggleButton>
                    <ToggleButton value="creative">Creative</ToggleButton>
                    <ToggleButton value="persuasive">Persuasive</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={toneValue}
                    exclusive
                    onChange={handleToneButtonGroupChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="humorous">Humorous</ToggleButton>
                    <ToggleButton value="formal">Formal</ToggleButton>
                    <ToggleButton value="informal">Informal</ToggleButton>
                    <ToggleButton value="serious">Serious</ToggleButton>
                    <ToggleButton value="optimistic">Optimistic</ToggleButton>
                    <ToggleButton value="motivating">Motivating</ToggleButton>
                    <ToggleButton value="respectful">Respectful</ToggleButton>
                    <ToggleButton value="assertive">Assertive</ToggleButton>
                    <ToggleButton value="conversational">Conversational</ToggleButton>
                </ToggleButtonGroup>
            </div>
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
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={20}
                placeholder="Your text will appear here"
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
