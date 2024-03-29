import * as React from 'react';
import {TextField, Typography, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

export default function EmailMarketingComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    /* Stores the string stored in the things to mention text field. */
    const [thingsToMentionValue, setThingsToMentionValue] = React.useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = React.useState('');

    /* Determines whether the loading animation is activated or not. */
    const [loading, setLoading] = React.useState(false);

    const resultValueRef = React.useRef();

    React.useEffect(() => {
        resultValueRef.current = resultValue;
    }, [resultValue]);

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
     * saves the result to the database.
     */
    const saveToDatabase = async (result) => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("https://www.parabelo.com/saveEmailMarketingToDb", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "Email Marketing",
                owner: props.userDetails.sub,
                prompt: promptValue,
                thingsToMention: thingsToMentionValue,
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

    const fetchDataStream = async () => {
        setResultValue('');
        setLoading(true); // Start loading animation of button
        let modifiedPrompt;

        if (thingsToMentionValue) {
            modifiedPrompt = 'Write a marketing email for ' + promptValue + '. ' + 'Things to mention: ' + thingsToMentionValue + ". Thank you.";
        } else {
            modifiedPrompt = 'Write a marketing email for ' + promptValue + ". Thank you.";
        }

        fetch('https://www.parabelo.com/loadOptions', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: 1000,
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
                Email Marketing Writer
            </Typography>
            <Box sx={{mb: 4}}>
                <TextField id="outlined-basic"
                    label="What do you want your email to be about?"
                    variant="outlined"
                    fullWidth
                    onChange={handlePromptChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 1020 }}
                />
            </Box>
            <br />
            <Box sx={{ mb: 4 }}>
                <TextField id="outlined-basic"
                    label='Things to mention (Separate entries with a ",")'
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleThingsToMentionChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 1020 }}
                />
            </Box>
            <br />
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
                rows={20}
                placeholder="Your email will appear here."
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
