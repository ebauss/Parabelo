import React from 'react';
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function HistoryComponent() {
    const [promptValue, setPromptValue] = React.useState('');
    const [resultValue, setResultValue] = React.useState('');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <br />
            <Typography variant="h5" gutterBottom>
                History
            </Typography>
            <br />
            <Paper elevation={3} sx={{
                "&:hover": {
                    transform: "scale3d(1.05, 1.05, 1.05)",
                },
                height: "100%",
                width: {
                    xs: "90%",
                    md: 700
                },
                paddingLeft: 3,
                paddingRight: 3
            }}>
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Prompt"
                    value={promptValue}
                    fullWidth
                    sx={{ width: { md: 600 }, marginBottom: 5 }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Result"
                    multiline
                    rows={5}
                    value={resultValue}
                    fullWidth
                    sx={{ width: { md: 600 }, marginBottom: 5 }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <br />
                <Button variant="contained" color="error" startIcon={<DeleteIcon />} sx={{
                    marginBottom: 5
                }}>
                    Delete
                </Button>
            </Paper>
        </Box>
    )
}