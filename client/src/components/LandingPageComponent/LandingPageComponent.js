import * as React from 'react';
import {Button} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

export default function LandingPageComponent() {
    const {loginWithRedirect} = useAuth0();

    return (
        <div>
            <h1>Landing Page Placeholder</h1>
            <Button variant="outlined" size="large" onClick={loginWithRedirect}>
                Log In
            </Button>
        </div>
    );
}