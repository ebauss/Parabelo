import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export default function AiTextComponent() {
    const [promptValue, setPromptValue] = React.useState('');

    const handleChange = (event) => {
        setPromptValue(event.target.value);
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
