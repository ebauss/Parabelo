import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}