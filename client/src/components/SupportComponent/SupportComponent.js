import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';

export default function SupportComponent() {
    const handleChange = (event) => {

    }

    return (
        <Box sx={{
            paddingTop: 12,
            paddingBottom: 10
        }}>
            
            <Typography variant="h4" gutterBottom>
                Support
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                Please send us an email via this form if you have any questions.
            </Typography>
            <br />
            <Button variant="contained">
                Send Email
            </Button>
            <br />
            <Box>
                <TextField id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{ width: 300, margin: 2 }}
                />
                <TextField id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{ width: 300, margin: 2 }}
                />
            </Box>
            <TextField id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                sx={{ width: 632, margin: 2 }}
            />
            <br />
            <TextField id="outlined-basic"
                label="Email Body"
                variant="outlined"
                onChange={handleChange}
                multiline
                rows={20}
                sx={{ width: 632, margin: 2 }}
            />
        </Box>
    )
}