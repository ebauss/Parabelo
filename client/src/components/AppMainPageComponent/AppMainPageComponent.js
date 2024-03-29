import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function AppMainPageComponent() {
    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 4 }}>
                Writing Tools
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} >
                    <Link to='/app/paraphrasing' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >
                            Paraphrasing Tool
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Link to='/app/blogpost' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >Blog Post Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Link to='/app/copyWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >Copy Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Link to='/app/productDescriptionWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >Product Description Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Link to='/app/emailMarketingWriter' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >Email Marketing Writer</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Link to='/app/socialMediaCaption' style={{ textDecoration: 'none', color: "black" }}>
                        <Button variant="outlined" size="large"
                            sx={{
                                height: 200,
                                width: 300
                            }}
                        >Social Media Caption</Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}