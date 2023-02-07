import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

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
                <Grid item xs={12} sm={12} md={12} lg={4}>
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
                                $9.99
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
                        <Box>
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <List dense={true} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Feature 1" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Test feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Some other feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="A random feature" />
                                </ListItem>
                            </List>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
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
                                $29.99
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
                        <Box>
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <List dense={true} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Feature 1" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Test feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Some other feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="A random feature" />
                                </ListItem>
                            </List>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
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
                                $49.99
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
                        <Box>
                            <Typography variant="h6">
                                This Includes:
                            </Typography>
                            <List dense={true} >
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Feature 1" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Test feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Some other feature" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CheckIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="A random feature" />
                                </ListItem>
                            </List>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}