import { Paper, CardMedia } from '@mui/material';
import * as React from 'react';

export default function DemoCard(props) {
    return (
        <Paper elevation={3} sx={{
            height: "100%",
            marginTop: 10,
            padding: 5
        }}>
            <CardMedia
                component="video"
                controls
                autoPlay
                src={props.videoPath}
                sx={{
                    width: 600
                }} />
        </Paper>
    )
}