import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ToggleButton, ToggleButtonGroup, Select, MenuItem, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

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

    const resultValueRef = React.useRef();

    React.useEffect(() => {
        resultValueRef.current = resultValue;
    }, [resultValue]);

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
        const response = await fetch("https://www.parabelo.com/saveParaphrasingToDb", {
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

    const wordCount = (str) => {
        return str.split(" ").length;
    }

    const calculateMaxTokens = (prompt) => {
        const promptWordCount = wordCount(prompt);

        // based on token to word ratio from Auth0. This is an approximation. OpenAI has a tokenizer program that could've been interfaced 
        // with but was decided against with since an approximation is ideal for this use case.
        return Math.ceil(promptWordCount * 1.5); 
    }

    const fetchDataStream = async () => {
        setResultValue('');
        setLoading(true); // Start loading animation of button
        // const modifiedPrompt = 'Rewrite: ' + promptValue + '. Style: ' + styleValue + '. Tone: ' + toneValue + ". Don't lengthen it. Thank you.";
        const modifiedPrompt = `Please rewrite the following without expanding: ${promptValue}. Write it with the following writing style: ${styleValue}. Write it with the following tone ${toneValue}. `;
        const maxTokens = calculateMaxTokens(modifiedPrompt) + calculateMaxTokens(promptValue);
        console.log(maxTokens);

        fetch('https://www.parabelo.com/loadOptions', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: maxTokens,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
        }).then(() => {
            const url = "https://www.parabelo.com/streamResponse"

            const events = new EventSource(url);

            events.onmessage = event => {
                if (event.data === "[DONE]") {
                    events.close();
                    setLoading(false);
                    saveToDatabase(resultValueRef.current);
                } else {
                    const text = event.data.replace(new RegExp("NEWLINE", 'g'), '\n');
                    resultValueRef.current += text;
                    setResultValue(resultValueRef.current);
                }
            }
        })
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{mt: 4, mb: 4}}>
                Paraphrasing Tool
            </Typography>
            <Box sx={{ mb: 4 }}>
                <TextField id="outlined-basic"
                    multiline
                    rows={10}
                    label="What would you like to have rephrased?"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 2500 }}
                />
            </Box>
            <Box sx={{mb: 4}}>
                <Typography variant="subtitle1" gutterBottom>
                    Style
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={styleValue}
                    exclusive
                    onChange={handleStyleButtonGroupChange}
                    aria-label="Platform"
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        },
                        justifyContent: 'center'
                    }}
                >
                    <ToggleButton value="professional">Professional</ToggleButton>
                    <ToggleButton value="fun">Fun</ToggleButton>
                    <ToggleButton value="technical">Technical</ToggleButton>
                    <ToggleButton value="creative">Creative</ToggleButton>
                    <ToggleButton value="persuasive">Persuasive</ToggleButton>
                    <ToggleButton value="polite">Polite</ToggleButton>
                </ToggleButtonGroup>
                <Select value={styleValue} onChange={handleStyleButtonGroupChange} sx={{
                    display: {
                        xs: 'flex',
                        sm: 'none'
                    },
                    justifyContent: 'center'
                }}>
                    <MenuItem value="professional">Professional</MenuItem>
                    <MenuItem value="fun">Fun</MenuItem>
                    <MenuItem value="technical">Technical</MenuItem>
                    <MenuItem value="creative">Creative</MenuItem>
                    <MenuItem value="persuasive">Persuasive</MenuItem>
                    <MenuItem value="polite">Polite</MenuItem>
                </Select>
            </Box>
            <Box sx={{mb: 4}}>
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
            </Box>
            <Box sx={{mb: 4}}>
                <LoadingButton
                    size="large"
                    onClick={fetchDataStream}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Go
                </LoadingButton>
                <CopyToClipboardButton copyText={resultValue} />
            </Box>
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={10}
                placeholder="Your text will appear here"
                value={resultValue}
                fullWidth
                sx={{ width: { md: 600 }, marginBottom: 10 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
