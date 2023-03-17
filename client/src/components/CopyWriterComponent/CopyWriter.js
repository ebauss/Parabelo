import * as React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";

export default function CopyWriter(props) {
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
     * saves the result to the database.
     */
    const saveToDatabase = async (result) => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("http://localhost:8000/saveCopyWritingToDb", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "Copy Writing",
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

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = async () => {
        setLoading(true); // Start loading animation of button
        let modifiedPrompt;

        if (thingsToMentionValue) {
            modifiedPrompt = 'Write ad copy for ' + promptValue + '. ' + 'Things to mention: ' + thingsToMentionValue;
        } else {
            modifiedPrompt = 'Write ad copy for ' + promptValue;
        }

        const aiApiResponse = await fetch('http://localhost:8000/requestTextResponse', {
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
                presence_penalty: 0
            })
        })

        const aiApiData = await aiApiResponse.text();

        if (aiApiData === "Prompt is flagged") {
            window.alert("Your prompt does not follow our usage guidelines.");
        } else {
            setResultValue(aiApiData.trim());
            saveToDatabase(aiApiData.trim());
        }
        setLoading(false); // Ends the loading animation on the button.
    }

    return (
        <div>
            <br/>
            <Typography variant="h5" gutterBottom>
                Copy Writer
            </Typography>
            <br/>
            <div>
                <TextField id="outlined-basic"
                           label="What do you want your ad to be about?"
                           variant="outlined"
                           fullWidth
                           onChange={handlePromptChange}
                           sx={{width: 600}}
                />
            </div>
            <br/>
            <div>
                <TextField id="outlined-basic"
                           label='Things to mention (Separate entries with a ";")'
                           variant="outlined"
                           multiline
                           rows={4}
                           fullWidth
                           onChange={handleThingsToMentionChange}
                           sx={{width: 600}}
                />
            </div>
            <br/>
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
                placeholder="Your blog will appear here."
                value={resultValue}
                sx={{width: 600, marginBottom: 10}}
                InputLabelProps={{shrink: true}}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
