import { List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function PricingCardComingSoon(props) {
    return (
        <Paper elevation={3} sx={{
            paddingTop: 3,
            paddingBottom: 2,
            paddingLeft: 3,
            paddingRight: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 490
        }}>
            <Typography variant="h4"
                sx={{
                    fontWeight: 'bold'
                }}>
                {props.productName}
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h3" sx={{
                    fontWeight: 'bold'
                }}>
                COMING SOON!
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h5">
                Includes expanded features that are still in development.
            </Typography>
        </Paper >
    )
}