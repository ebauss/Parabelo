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
                <Box>
                    <Typography variant="h3">
                        Unlock the Power of Parabelo
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        Create unique content quickly and easily! Generate high-quality text tailored to your needs with our powerful AI technology. Save time and money with automated generation of content for marketing, SEO, and more. Get started now!
                    </Typography>
                </Box>

            </Box>

        </div>
    );
}