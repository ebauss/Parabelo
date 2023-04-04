import * as React from 'react';
import { TextField, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

export default function BlogPostComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    /* Stores the string stored in the things to mention text field. */
    const [keywordsValue, setKeywordsValue] = React.useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = React.useState('');

    const [promptType, setPromptType] = React.useState('standard')

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

    const handlePromptTypeChange = (event) => {
        setPromptType(event.target.value);
    }

    /**
     * Handles the text changes in the things to mention text box.
     *
     * @param event
     */
    const handleThingsToMentionChange = (event) => {
        setKeywordsValue(event.target.value);
    }

    /**
     * saves the result to the database.
     */
    const saveToDatabase = async (result) => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("http://localhost:8000/saveBlogPostToDb", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "Blog Post",
                owner: props.userDetails.sub,
                prompt: promptValue,
                keywords: keywordsValue,
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

        if (keywordsValue) {
            modifiedPrompt = 'Write a super long blog post about ' + promptValue + '. ' + 'Things to mention: ' + keywordsValue + '. Thank you.';
        } else {
            modifiedPrompt = 'Write a super long blog post about ' + promptValue + '. Thank you.';
        }

        fetch('http://localhost:8000/loadOptions', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            })
        }).then(() => {
            const url = "http://localhost:8000/streamResponse"

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

    const renderPromptTextBox = () => {
        if (promptType == "standard") {
            return (
                <TextField id="outlined-basic"
                    label="What topic would you like to be written about in a blog?"
                    variant="outlined"
                    fullWidth
                    onChange={handlePromptChange}
                    sx={{
                        width: {
                            md: 600
                        }
                    }}
                    inputProps={{ maxLength: 1020 }}
                />
            )
        } else if (promptType == "notes") {
            return (
                <TextField id="outlined-basic"
                    label="Please copy and paste your notes here."
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={20}
                    onChange={handlePromptChange}
                    sx={{
                        width: {
                            md: 600
                        }
                    }}
                    inputProps={{ maxLength: 1020 }}
                />
            )
        }

    }

    return (
        <div>
            <br />
            <Typography variant="h5" gutterBottom>
                Blog Post Writer
            </Typography>
            <br />
            <Typography variant="subtitle1" gutterBottom>
                Prompt Type
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={promptType}
                exclusive
                onChange={handlePromptTypeChange}
                aria-label="Platform"
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'flex'
                    },
                    justifyContent: 'center'
                }}
            >
                <ToggleButton value="standard">Standard</ToggleButton>
                <ToggleButton value="notes">Notes</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <div>
                {renderPromptTextBox()}
            </div>
            <br />
            <div>
                <TextField id="outlined-basic"
                    label='Keywords to add (Separate entries with a ",")'
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleThingsToMentionChange}
                    sx={{
                        width: {
                            md: 600
                        }
                    }}
                    inputProps={{ maxLength: 1020 }}
                />
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
                rows={20}
                placeholder="Your blog will appear here."
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
