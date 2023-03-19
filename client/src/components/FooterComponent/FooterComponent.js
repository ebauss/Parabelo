import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Link } from '@mui/material';


export default function FooterComponent() {
    return (
        <Box
            bgcolor="primary.main"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
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
                <Link href="#" color="#ffffff" underline="hover">
                    About Us
                </Link>
                <Link href="#" color="#ffffff" underline="hover">
                    Support
                </Link>
                <Link href="#" color="#ffffff" underline="hover">
                    FAQ
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <Link href="#" color="#ffffff" underline="hover">
                    Privacy Policy
                </Link>
                <Link href="#" color="#ffffff" underline="hover">
                    Terms Of Service
                </Link>
                <Link href="#" color="#ffffff" underline="hover">
                    Usage Guidelines
                </Link>
            </Box>
        </Box>
    )
}