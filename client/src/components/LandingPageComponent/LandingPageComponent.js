import * as React from 'react';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import landingPageHero from '../../assets/happy-landing-page-hero-no-background.png';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function LandingPageComponent() {
    const { loginWithRedirect } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: 'signup' });

    return (
        <div>
            <br />
            <br />
            <br />
            {/* Start of hero banner section. */}
            <Box 
            bgcolor="primary.main"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap-reverse',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5
            }}>
                <Box
                    component="img"
                    src={landingPageHero}
                    sx={{
                        height: 700
                    }}
                />
                <Box sx={{
                    paddingBottom: 5
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            width: 500,
                        }} >
                        Unlock the Power of Parabelo
                    </Typography>
                    <br />
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            width: 500
                        }}>
                        Create unique content quickly and easily! Generate high-quality text tailored to your needs with our powerful AI technology. Save time and money with automated generation of content for marketing, SEO, and more. Get started now!
                    </Typography>
                    <br />
                    <Button variant="contained"
                        size="large"
                        onClick={signUp}
                        color="secondary"
                    >
                        Try Now!
                    </Button>
                </Box>
            </Box>
            {/* End of hero banner section. */}
            <br />
            {/* Start of section. */}
            <Box sx={{
                marginLeft: 5,
                marginRight: 5
            }}>
                <Typography variant="h4">
                    Parabelo helps you with...
                </Typography>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{boxShadow: 2}}>
                            <br />
                            <Typography variant="h5"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor
                            </Typography>
                            <br />
                            <Typography variant="h6"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <br />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            {/* End of section. */}

            {/* Start of are you ready section. */}
            <Box
                sx={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 500
                    }}
                >
                    <Typography
                        variant='h4'
                    >
                        Are you ready to level up your writing?
                    </Typography>
                    <br />
                    <Typography
                        variant="h6"
                    >
                        Never struggle with your writing using Parabelo.
                    </Typography>
                    <br />
                    <Button variant="contained"
                        size="large"
                        onClick={signUp}
                        color="secondary"
                    >
                        Get Started Now!
                    </Button>
                </Box>
            </Box>
            {/* End of are you ready section. */}

        </div>
    );
}