import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
                        paddingBottom: 2
                    }}>
                        <Typography variant="h5">
                            Basic
                        </Typography>
                        <br />
                        <Typography variant="h2">
                            $9.99
                        </Typography>
                        <br />
                        <Typography variant="h6">
                            Billed monthly
                        </Typography>
                        <br />
                        <Button 
                        variant="contained"
                        size="large"
                        color="secondary"
                        >
                            Purchase
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{
                        paddingTop: 2,
                        paddingBottom: 2
                    }}>
                        <Typography variant="h5">
                            Enthusiast
                        </Typography>
                        <br />
                        <Typography variant="h2">
                            $29.99
                        </Typography>
                        <br />
                        <Typography variant="h6">
                            Billed monthly
                        </Typography>
                        <br />
                        <Button 
                        variant="contained"
                        size="large"
                        color="secondary"
                        >
                            Purchase
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{
                        paddingTop: 2,
                        paddingBottom: 2
                    }}>
                        <Typography variant="h5">
                            Professional
                        </Typography>
                        <br />
                        <Typography variant="h2">
                            $49.99
                        </Typography>
                        <br />
                        <Typography variant="h6">
                            Billed monthly
                        </Typography>
                        <br />
                        <Button 
                        variant="contained"
                        size="large"
                        color="secondary"
                        >
                            Purchase
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}