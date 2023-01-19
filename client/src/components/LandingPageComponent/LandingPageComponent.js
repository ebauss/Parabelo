import * as React from 'react';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import landingPageHero from '../../assets/landing-page-hero.png';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function LandingPageComponent() {
    const { loginWithRedirect } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: 'signup' });

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
                <Box>
                    <Typography variant="h3" sx={{ color: 'white' }} >
                        Unlock the Power of Parabelo
                    </Typography>
                    <br />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Create unique content quickly and easily! Generate high-quality text tailored to your needs with our powerful AI technology. Save time and money with automated generation of content for marketing, SEO, and more. Get started now!
                    </Typography>
                    <br />
                    <Button variant="contained"
                        size="large"
                        onClick={signUp}
                        sx={{ backgroundColor: '#ff5c4c' }}
                    >
                        Try Now!
                    </Button>
                </Box>

            </Box>

        </div>
    );
}