import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ResultTextComponent() {
    return (
        <div>
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