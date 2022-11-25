import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {daDK} from "@mui/material/locale";

export default function AiTextComponent() {
    const [promptValue, setPromptValue] = React.useState('');

    const handleChange = (event) => {
        setPromptValue(event.target.value);
    }

    /**
     * handles the generate button click.
     *
     * Send the prompt to the server; the server will then send the request to OpenAi.
     */
    const handleClick = () => {
        const url = 'http://localhost:8000/test';

        const modifiedPrompt = 'Write a blog post about ' + promptValue;

        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: modifiedPrompt
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
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
                <Button variant="contained" color="success">
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
                sx={{ width: 600 }}
                InputLabelProps={{ shrink: true }}
            />
        </div>

    )
}
