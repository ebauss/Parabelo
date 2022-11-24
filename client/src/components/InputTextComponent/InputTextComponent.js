import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextComponent() {
    const [promptValue, setPromptValue] = React.useState('');

    const handleChange = (event) => {
        setPromptValue(event.target.value);
    }

    return (
        <TextField id="outlined-basic" label="Enter Prompt Here" variant="outlined" onChange={handleChange} />
    )
}
