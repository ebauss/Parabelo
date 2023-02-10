import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

// Ensure you have filled out the following props from the parent:
// productName
// productPrice
// ctaText
// ctaAction
// featureOne
// featureTwo
// featureThree
// featureFour
export default function PricingCard(props) {
    return (
            <Paper elevation={3} sx={{
                paddingTop: 3,
                paddingBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h4"
                    sx={{
                        fontWeight: 'bold'
                    }}>
                    {props.productName}
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
                        ${props.productPrice}
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
                    {props.ctaText}
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
                            <ListItemText primary={props.featureOne} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <CheckIcon />
                            </ListItemAvatar>
                            <ListItemText primary={props.featureTwo} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <CheckIcon />
                            </ListItemAvatar>
                            <ListItemText primary={props.featureThree} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <CheckIcon />
                            </ListItemAvatar>
                            <ListItemText primary={props.featureFour} />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
    )
}