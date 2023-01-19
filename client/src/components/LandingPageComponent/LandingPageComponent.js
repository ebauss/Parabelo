import * as React from 'react';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import landingPageHero from '../../assets/landing-page-hero.png';
import { Typography } from '@mui/material';

export default function LandingPageComponent() {
    const { loginWithRedirect } = useAuth0(); // Need this for Call to Actions.

    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#07767f'
            }}>
                <Box
                    component="img"
                    src={landingPageHero}
                    sx={{
                        height: 600
                    }}
                />
                <Typography variant="h2">
                    Placeholder text here
                </Typography>
            </Box>

        </div>
    );
}