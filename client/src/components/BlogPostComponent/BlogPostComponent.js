import * as React from 'react';
import { TextField, Typography, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

export default function BlogPostComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = React.useState('');

    const [notes, setNotes] = React.useState('');

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

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }

    const handlePromptTypeChange = (event) => {
        if (!loading) {
            setPromptType(event.target.value);
        }
        
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

        if (promptType == "standard") {
            // for the id, use props.userDetails.sub.
            const response = await fetch("https://www.parabelo.com/saveBlogPostToDb", {
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
        } else if (promptType == "notes") {
            const response = await fetch("https://www.parabelo.com/saveBlogPostToDb", {
                method: "Post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "Blog Post",
                    owner: props.userDetails.sub,
                    prompt: notes,
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


    }

    const getPrompt = () => {
        let prompt;

        if (promptType == "standard") {
            if (keywordsValue) {
                prompt = 'Write a super long blog post (750 words) about "' + promptValue + '". ' + 'Things to mention: ' + keywordsValue + '. Thank you.';
            } else {
                prompt = 'Write a super long blog post (750 words) about "' + promptValue + '". Thank you.';
            }
        } else if (promptType == "notes") {
            if (keywordsValue) {
                prompt = 'Please write a super long blog post (750 words) based on the notes "' + notes + '". ' + 'Things to mention: ' + keywordsValue + '. Thank you.';
            } else {
                prompt = 'Please write a super long blog post (750 words) based on the notes "' + notes + '". Thank you.';
            }
        }

        return prompt
    }

    const fetchDataStream = async () => {
        setResultValue('');
        setLoading(true); // Start loading animation of button
        let modifiedPrompt = getPrompt();

        fetch('https://www.parabelo.com/loadOptions', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: 3800,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
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
                    onChange={handleNotesChange}
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
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 4}}>
                Blog Post Writer
            </Typography>
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
                    justifyContent: 'center',
                    mb: 4
                }}
            >
                <ToggleButton value="standard">Standard</ToggleButton>
                <ToggleButton value="notes">Notes</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{mb: 4}}>
                {renderPromptTextBox()}
            </Box>
            <Box sx={{mb: 4}}>
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
            </Box>
            <Box sx={{ mb: 4 }}>
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
