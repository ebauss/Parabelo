import { Paper, CardMedia, Typography } from '@mui/material';
import * as React from 'react';

export default function DemoCard(props) {
    return (
        <Paper elevation={3} sx={{
            height: "100%",
            marginTop: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: 'wrap',
            paddingTop: 3,
            paddingBottom: 3,
            width: {
                lg: 1000
            }
        }}>
            <CardMedia
                component="video"
                // controls
                muted
                autoPlay
                loop
                src={props.videoPath}
                sx={{
                    width: 300,
                    marginTop: 2,
                    marginBottom: 2,
                    marginLeft: 5,
                    marginRight: 5
                }} />
            <Typography sx={{
                width: { sm: 400 },
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 5,
                marginRight: 5
            }} variant="h4" align='left'>
                {props.copyText}
            </Typography>
        </Paper>
    )
}