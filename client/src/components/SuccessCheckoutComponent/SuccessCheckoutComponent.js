import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

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
                <Typography variant="h3">
                    Thank you for subscribing {user.given_name}!
                </Typography>
                <Typography cariant="h4">
                    Get ready to jumpstart your writing with us.
                </Typography>
                <Button variant="contained" onClick={goToMainPage}>Get Started</Button>
            </Box>
        )
    }
}