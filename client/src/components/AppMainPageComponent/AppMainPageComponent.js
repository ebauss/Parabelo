import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

export default function AppMainPageComponent() {
    return (
        <div>
            <br/>
            <Typography variant="h5" gutterBottom>
               Writing Tools
            </Typography>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Button variant="outlined" size="large">Paraphrasing Tool</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" size="large">Blog Post Writer</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" size="large">Copy Writer</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" size="large">Product Description Writer</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" size="large">Email Marketing Writer</Button>
                </Grid>
            </Grid>
        </div>
    )
}