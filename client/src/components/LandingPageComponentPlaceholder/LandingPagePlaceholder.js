import * as React from 'react';
import {Button} from "@mui/material";

export default function LandingPagePlaceholder() {
    /**
     * Handles the go-to web app click from the button.
     */
    const handleGoToWebAppClick = () => {
        // Try using window.open() first. Maybe switch to Link later on?
        window.open("/app", "_self");
    }

    return (
        <div>
            <h1>Landing Page Placeholder</h1>
            <Button variant="outlined" size="large" onClick={handleGoToWebAppClick}>
                Large
            </Button>
        </div>
    );
}