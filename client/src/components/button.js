import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={testPrompt}>Test Prompt</Button>
        </Stack>
    );
}

function testPrompt() {
    console.log('fetch is about to be called');
    fetch('http://localhost:8000/test');
    console.log('fetch has been called');
}


