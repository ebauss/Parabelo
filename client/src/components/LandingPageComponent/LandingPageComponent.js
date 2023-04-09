import * as React from 'react';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import landingPageHero from '../../assets/Parabelo-logo.png';
import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DemoComponent from '../DemoComponent/DemoComponent';

export default function LandingPageComponent() {
    const { loginWithRedirect } = useAuth0();
    const signUp = () => loginWithRedirect({ screen_hint: 'signup' });

    return (
        <div>
            {/* Start of hero banner section. */}
            <Box
                bgcolor="primary.main"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap-reverse',
                    alignItems: 'center',
                    paddingLeft: {
                        xs: 3,
                        sm: 10
                    },
                    paddingRight: {
                        xs: 3,
                        sm: 10
                    },
                    paddingTop: 5,
                    marginTop: 7
                }}>
                <Box
                    component="img"
                    src={landingPageHero}
                    sx={{
                        height: {
                            xs: 300,
                            sm: 700
                        }
                    }}
                />
                <Box sx={{
                    paddingBottom: 5
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            width: {
                                xs: "100%",
                                sm: 500
                            },
                        }} >
                        Unlock the Power of Parabelo
                    </Typography>
                    <br />
                    <Typography
                        variant="h6"
                        align="left"
                        sx={{
                            color: 'white',
                            width: {
                                xs: "100%",
                                sm: 500
                            }
                        }}>
                        Parabelo brings the powerful performance of AI to your business to help create content that is tailored to your brand within minutes. From social media content, to advertising, SEO, and more, Parabelo is here to help you and your team save time and money.
                    </Typography>
                    <br />
                    <Button variant="contained"
                        size="large"
                        onClick={signUp}
                        color="secondary"
                        sx={{
                            width: 250
                        }}
                    >
                        Get started with a 7 day free trial!
                    </Button>
                </Box>
            </Box>
            {/* End of hero banner section. */}
            <br />
            {/* Start of section. */}
            <Box sx={{
                marginTop: 10,
                marginLeft: 3,
                marginRight: 3
            }}>
                <Typography variant="h3" sx={{marginBottom: 5}}>
                    What type of content can you create with Parabelo AI?
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
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
                                Social Media
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Generate all of your social media content for the month in minutes.
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Parabelo will help create your content easily while keeping up with current social media trends in mind.
                            </Typography>
                            <br />
                            <List dense="true">
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Create captions for Instagram and Facebook that are catchy." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Instantly write video scripts to go viral on Shorts, Reels and TikTok." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Make it professional by writing compelling work stories and lessons on LinkedIn." />
                                </ListItem>
                            </List>
                            <br />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                                Advertising
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Use AI to generate fresh ideas and emotional hooks to help generate ad creative that will convert.
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Advertising is taken to the next level with Parabelo by coming up with eye-catching copy and angles that are meant to convert within minutes.
                            </Typography>
                            <br />
                            <List dense="true">
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Gives you different marketing angles no matter what your offer is." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Generate persuasive ad copy that converts." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Grab quick attention for your potential customers." />
                                </ListItem>
                            </List>
                            <br />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                                Articles
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Create SEO-Optimized blogs and articles that get clicks on your page.
                            </Typography>
                            <br />
                            <Typography variant="body1"
                                align="left"
                                sx={{
                                    paddingLeft: 4,
                                    paddingRight: 4
                                }}
                            >
                                Parabelo will help as your professional writer and help avoid any writing block that might come.
                            </Typography>
                            <br />
                            <List dense="true">
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Generate short form or long form content quickly." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Write articles with information that is up to date and is relevant to your readers." />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <ArrowRightIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="All content created is original content that is meant to help rank with SEO so you get visits to your site." />
                                </ListItem>
                            </List>
                            <br />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            {/* End of section. */}
            {/* Start of section */}
            <DemoComponent />
            {/* End of section */}
            {/* Start of section */}
            <Box sx={{
                marginTop: 10,
                marginLeft: 6,
                marginRight: 6,
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center'
            }}>
                <Typography variant="h4">
                    Benefits of Parabelo
                </Typography>
                <br />
                <Grid container spacing={4} sx={{
                    width: { xl: 1500}
                }}>
                    <Grid item sm={12} md={6}>
                        <Typography variant="h5" align="left">
                            Create content that is relevant & converts
                        </Typography>
                        <Typography variant="body2" align="left">
                            Parabelo AI will create content within minutes that will get clicks by using the current trends to help convert.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography variant="h5" align="left">
                            Optimize your work output
                        </Typography>
                        <Typography variant="body2" align="left">
                            No matter your role, Parabelo will help scale your work by creating everything you need within minutes.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align="left">
                            Better writing
                        </Typography>
                        <Typography variant="body2" align="left">
                            From emails, blogs, captions to a personal letter to a family or friend, Parabelo is here to create the perfect written message within seconds for you.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align="left">
                            Scale your business through AI
                        </Typography>
                        <Typography variant="body2" align="left">
                            Elevate all areas of your business and expedite your work allowing you to grow your business faster.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* End of Section */}
            {/* Start of are you ready section. */}
            <Box
                sx={{
                    marginTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 3,
                    paddingRight: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: 500
                        }
                    }}
                >
                    <Typography
                        variant='h5'
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