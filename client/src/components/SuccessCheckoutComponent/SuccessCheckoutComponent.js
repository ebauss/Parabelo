import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import heartGraphic from '../../assets/heart-graphic.png';

export default function SuccessCheckoutComponent(props) {
    const [mainPageButtonClicked, setMainPageButtonCicked] = React.useState(false);
    const user = props.userDetails;

    const goToMainPage = () => {
        setMainPageButtonCicked(true);
    }

    if (mainPageButtonClicked) {
        return (
            <Navigate to="/app/" />
        )
    } else {
        return (
            <Box sx={{
                marginTop: 10
            }}>
                <Box
                    component="img"
                    src={heartGraphic}
                    sx={{
                        height: 400
                    }}
                />
                <Typography variant="h3" sx={{ marginTop: 1, marginBottom: 1 }}>
                    Thank you for subscribing {user.given_name}!
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 1, marginBottom: 1 }}>
                    Get ready to jumpstart your writing with us.
                </Typography>
                <Button variant="contained" onClick={goToMainPage} sx={{ marginTop: 3, marginBottom: 3 }}>Get Started</Button>
            </Box>
        )
    }
}