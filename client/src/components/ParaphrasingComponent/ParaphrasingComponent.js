import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

export default function ParaphrasingComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = React.useState('');

    /* Stores the style value for paraphrasing. */
    const [styleValue, setStyleValue] = React.useState('professional');

    /* Stores the tone value for paraphrasing. */
    const [toneValue, setToneValue] = React.useState('positive');

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
        setStyleValue(event.target.value);
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
     * saves the result to the database.
     */
    const saveToDatabase = async (result) => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("http://localhost:8000/saveParaphrasingToDb", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "Paraphrasing",
                owner: props.userDetails.sub,
                prompt: promptValue,
                writingStyle: styleValue,
                tone: toneValue,
                result: result
            })
        })

        const data = await response.text();

        if (data !== "false") {
            console.log("Result was successfully stored in the database.");
        } else {
            console.log("Result failed to store into the database.");
        }
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        setLoading(true); // Start loading animation of button
        const modifiedPrompt = 'Rewrite: ' + promptValue + '. Style: ' + styleValue + '. Tone: ' + toneValue + ". Don't lengthen it. Thank you.";

        const aiApiResponse = await fetch('http://localhost:8000/requestTextResponse', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.76,
                max_tokens: 3500,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
        })

        const aiApiData = await aiApiResponse.text();

        if (aiApiData === "Prompt is flagged") {
            window.alert("Your prompt does not follow our usage guidelines.");
        } else {
            setResultValue(aiApiData.trim());
            // saveToDatabase(aiApiData.trim());
        }
        setLoading(false); // Ends the loading animation on the button.
    }

    return (
        <div>
            <br />
            <Typography variant="h5" gutterBottom>
                Paraphrasing Tool
            </Typography>
            <br />
            <div>
                <TextField id="outlined-basic"
                    multiline
                    rows={10}
                    label="What would you like to have rephrased?"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    sx={{ width: 600 }}
                />
            </div>
            <br />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Style
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={styleValue}
                    exclusive
                    onChange={handleStyleButtonGroupChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="professional">Professional</ToggleButton>
                    <ToggleButton value="fun">Fun</ToggleButton>
                    <ToggleButton value="technical">Technical</ToggleButton>
                    <ToggleButton value="creative">Creative</ToggleButton>
                    <ToggleButton value="persuasive">Persuasive</ToggleButton>
                    <ToggleButton value="polite">Polite</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <br />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Tone
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={toneValue}
                    exclusive
                    onChange={handleToneButtonGroupChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="positive">Positive</ToggleButton>
                    <ToggleButton value="negative">Negative</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <br />
            <div>
                <LoadingButton
                    size="large"
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
                rows={10}
                placeholder="Your text will appear here"
                value={resultValue}
                sx={{ width: 600, marginBottom: 10 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
