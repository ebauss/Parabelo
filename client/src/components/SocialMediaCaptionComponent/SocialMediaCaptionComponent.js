import * as React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function SocialMediaCaptionComponent(props) {
    const [lengthValue, setLengthValue] = React.useState('medium');
    const [imageContentsValue, setImageContentsValue] = React.useState('');
    const [styleValue, setStyleValue] = React.useState('creative');
    const [additionsValue, setAdditionsValue] = React.useState('');
    const [resultValue, setResultValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleContentsChange = (event) => {
        setImageContentsValue(event.target.value);
    }

    const handleLengthChange = (event) => {
        setLengthValue(event.target.value);
    }

    const handleStyleChange = (event) => {
        setStyleValue(event.target.value);
    }

    const handleAdditionsChange = (event) => {
        setAdditionsValue(event.target.value);
    }

    const saveToDatabase = async (result) => {
        // for the id, use props.userDetails.sub.
        const response = await fetch("http://localhost:8000/saveSocialCaptionToDB", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "Social Media Caption",
                owner: props.userDetails.sub,
                length: lengthValue,
                imageContents: imageContentsValue,
                writingStyle: styleValue,
                additions: additionsValue,
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

    const handleClick = async () => {
        setLoading(true); // Start loading animation of button
        const modifiedPrompt = 'Write a social media post. Length: ' + lengthValue + '. Image Contents: ' + imageContentsValue + '. Tone: ' + styleValue + '. ' + additionsValue + '. Thank you.';

        const aiApiResponse = await fetch('http://localhost:8000/requestTextResponse', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.85,
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
                Social Media Captions Writer
            </Typography>
            <br />
            <div>
                <TextField id="outlined-basic"
                    label="What are the contents of the image?"
                    variant="outlined"
                    fullWidth
                    onChange={handleContentsChange}
                    sx={{ width: 600 }}
                />
            </div>
            <br />
            <div>
                <TextField id="outlined-basic"
                    label='Add anything else about the image here.'
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleAdditionsChange}
                    sx={{ width: 600 }}
                />
            </div>
            <br />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Length
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={lengthValue}
                    exclusive
                    onChange={handleLengthChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="short">Short</ToggleButton>
                    <ToggleButton value="medium">Medium</ToggleButton>
                    <ToggleButton value="long">Long</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <br />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Writing Style
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={styleValue}
                    exclusive
                    onChange={handleStyleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="funny">Funny</ToggleButton>
                    <ToggleButton value="creative">Creative</ToggleButton>
                    <ToggleButton value="professional">Professional</ToggleButton>
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
                rows={20}
                placeholder="Your blog will appear here."
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