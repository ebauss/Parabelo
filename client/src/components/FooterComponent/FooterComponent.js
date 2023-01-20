import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function FooterComponent() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#07767f',
                paddingTop: 2,
                paddingBottom: 2
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant="h6">
                    Link Header One
                </Typography>
                <Typography variant="h6">
                    Lorem
                </Typography>
                <Typography variant="h6">
                    Ipsum
                </Typography>
                <Typography variant="h6">
                    Lipsum
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant="h6">
                    Link Header Two
                </Typography>
                <Typography variant="h6">
                    Test Link
                </Typography>
                <Typography variant="h6">
                    Some Link
                </Typography>
                <Typography variant="h6">
                    Linkage
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <Typography variant="h6">
                    Link Header 3
                </Typography>
                <Typography variant="h6">
                    Test Link
                </Typography>
            </Box>
        </Box>
    )
}