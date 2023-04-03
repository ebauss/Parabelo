import React from 'react';
import { Box, Typography, Paper } from "@mui/material";

export default function HistoryComponent() {
    return (
        <Box>
            <br />
            <Typography variant="h5" gutterBottom>
                History
            </Typography>
            <br />
            <Paper elevation={3} sx={{
                "&:hover": {
                    transform: "scale3d(1.05, 1.05, 1.05)",
                },
                height: "100%"
            }}>
                <br />
                <Typography variant="h5"
                    sx={{
                        paddingLeft: 4,
                        paddingRight: 4
                    }}
                >
                    
                </Typography>
                <br />
            </Paper>
        </Box>
    )
}