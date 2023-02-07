import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function PricingComponent() {
    return (
        <div>
            <Grid container spacing={4} sx={{
                marginTop: 7,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{
                        paddingTop: 2,
                        paddingBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h4"
                            sx={{
                                fontWeight: 'bold'
                            }}>
                            Basic
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                CA $9.99
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    marginLeft: 1
                                }}>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Per
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Month
                                </Typography>
                            </Box>
                        </Box>
                        <br />
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Subscribe
                        </Button>
                        <br />
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: 200
                            }}
                        >
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <Typography variant="h6">
                                Feature 1
                            </Typography>
                            <Typography variant="h6">
                                Test feature
                            </Typography>
                            <Typography variant="h6">
                                Some other feature
                            </Typography>
                            <Typography variant="h6">
                                A random feature
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{
                        paddingTop: 2,
                        paddingBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h4"
                            sx={{
                                fontWeight: 'bold'
                            }}>
                            Plus
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                CA $29.99
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    marginLeft: 1
                                }}>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Per
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Month
                                </Typography>
                            </Box>
                        </Box>
                        <br />
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Subscribe
                        </Button>
                        <br />
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: 200
                            }}
                        >
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <Typography variant="h6">
                                Feature 1
                            </Typography>
                            <Typography variant="h6">
                                Test feature
                            </Typography>
                            <Typography variant="h6">
                                Some other feature
                            </Typography>
                            <Typography variant="h6">
                                A random feature
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{
                        paddingTop: 2,
                        paddingBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant="h4"
                            sx={{
                                fontWeight: 'bold'
                            }}>
                            Premium
                        </Typography>
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                CA $49.99
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    marginLeft: 1
                                }}>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Per
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>
                                    Month
                                </Typography>
                            </Box>
                        </Box>
                        <br />
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Subscribe
                        </Button>
                        <br />
                        <br />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: 200
                            }}
                        >
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <Typography variant="h6">
                                Feature 1
                            </Typography>
                            <Typography variant="h6">
                                Test feature
                            </Typography>
                            <Typography variant="h6">
                                Some other feature
                            </Typography>
                            <Typography variant="h6">
                                A random feature
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}