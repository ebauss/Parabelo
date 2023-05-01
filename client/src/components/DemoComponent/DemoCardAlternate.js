import { Paper, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

export default function DemoCardAlternate(props) {
    return (
        <Paper elevation={3} sx={{
            height: "100%",
            marginTop: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: 'wrap-reverse',
            paddingTop: 3,
            paddingBottom: 3,
            width: {
                lg: 1000
            }
        }}>
            <Typography sx={{
                width: { sm: 400 },
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 5,
                marginRight: 5
            }} variant="h4" align='left'>
                {props.copyText}
            </Typography>
            <CardMedia
                component="video"
                // controls
                loop
                muted
                autoPlay
                src={props.videoPath}
                sx={{
                    width: 300,
                    marginTop: 2,
                    marginBottom: 2,
                    marginLeft: 5,
                    marginRight: 5
                }} />
        </Paper>
    )
}