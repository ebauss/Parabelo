import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SettingsComponent(props) {
    return (
        <div>
            <br />
            <Typography variant="h5">
                Settings
            </Typography>
            <br />
            <Button variant="outlined">Manage Subscription</Button>
            <br />
        </div>
    )
}