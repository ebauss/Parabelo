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
            height: 470
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
            <Typography variant="h3">
                Coming Soon! Hold tight for more details!
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant="h5">
                Expect more features!
            </Typography>
        </Paper >
    )
}