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
        const response = await fetch("https://parabelo.herokuapp.com/saveParaphrasingToDb", {
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
    // const handleClick = async () => {
    //     setResultValue('');
    //     setLoading(true); // Start loading animation of button
    //     const modifiedPrompt = 'Rewrite: ' + promptValue + '. Style: ' + styleValue + '. Tone: ' + toneValue + ". Don't lengthen it. Thank you.";

    //     const response = await fetch('https://parabelo.herokuapp.com/api/completion', {
    //         method: "Post",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             prompt: modifiedPrompt,
    //             temperature: 0.76,
    //             max_tokens: 3500,
    //             top_p: 1,
    //             frequency_penalty: 0,
    //             presence_penalty: 0,
    //         })
    //     })

    //     const stream = new EventSource('/api/completion/stream');

    //     stream.onmessage = event => {
    //         const data = JSON.parse(event.data);
    //         setResultValue(output => output + data.choices[0].text);
    //     };

    //     stream.onerror = () => {
    //         console.error('Error occurred in stream');
    //     };

    //     response.on('end', () => {
    //         stream.close();
    //         setLoading(false);
    //     });
    // }

    const fetchDataStream = async () => {
        setResultValue('');
        setLoading(true); // Start loading animation of button
        // const modifiedPrompt = 'Rewrite: ' + promptValue + '. Style: ' + styleValue + '. Tone: ' + toneValue + ". Don't lengthen it. Thank you.";
        const modifiedPrompt = `Please rewrite the following without expanding it: ${promptValue}. Write it with the following writing style: ${styleValue}. Write it with the following tone ${toneValue}. `;

        fetch('https://parabelo.herokuapp.com/loadOptions', {
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
        }).then(() => {
            const url = "https://parabelo.herokuapp.com/streamResponse"

            const events = new EventSource(url);
    
            events.onmessage = event => {
                if (event.data === "[DONE]") {
                    events.close();
                    setLoading(false);
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
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 2500 }}
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
                    onClick={fetchDataStream}
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
