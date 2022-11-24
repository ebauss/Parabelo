import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextComponent() {
    const [promptValue, setPromptValue] = React.useState('');

    const handleChange = (event) => {
        setPromptValue(event.target.value);
    }

    return (
        <div>
            <br/>
            <TextField id="outlined-basic"
                       label="What blog would you like me to write for you?"
                       placeholder="Example: How to learn how to code"
                       variant="outlined"
                       fullWidth
                       onChange={handleChange}
                       sx={{ width: 400 }}
            />
        </div>

    )
}
