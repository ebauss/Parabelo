import { Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default function PricingComponent() {
    return (
        <div>
            <br />
            <br />
            <br />
            <Grid container spacing={4} sx={{
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{
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
                        sx={{
                            backgroundColor: '#ec6226'
                        }}
                        >
                            Purchase
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{
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
                        sx={{
                            backgroundColor: '#ec6226'
                        }}
                        >
                            Purchase
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{
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
                        sx={{
                            backgroundColor: '#ec6226'
                        }}
                        >
                            Purchase
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
}