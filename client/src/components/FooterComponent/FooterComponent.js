import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


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
                <Link to="/aboutUs" style={{ textDecoration: 'none', color: "white" }}>
                    About Us
                </Link>
                <Link to="/support" style={{ textDecoration: 'none', color: "white" }}>
                    Support
                </Link>
                <Link to="/faq" style={{ textDecoration: 'none', color: "white" }}>
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
                <Link to="/privacyPolicy" style={{ textDecoration: 'none', color: "white" }}>
                    Privacy Policy
                </Link>
                <Link to="/termsOfService" style={{ textDecoration: 'none', color: "white" }}>
                    Terms Of Service
                </Link>
                <Link to="/usageGuidelines" style={{ textDecoration: 'none', color: "white" }}>
                    Usage Guidelines
                </Link>
            </Box>
        </Box>
    )
}