import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function AppMainPageComponent() {
    return (
        <div>
            <br />
            <Typography variant="h5" gutterBottom>
                Writing Tools
            </Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Link to='/app/paraphrasing' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large">
                            Paraphrasing Tool
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to='/app/blogpost' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large">Blog Post Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to='/app/copyWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large">Copy Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to='/app/productDescriptionWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large">Product Description Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to='/app/emailMarketingWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large">Email Marketing Writer</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}