import React from 'react';
import { Box, Typography } from "@mui/material";
import HistoryCardComponent from './HistoryCardComponent';

export default function HistoryComponent(props) {
    const user = props.userDetails;

    const loadDocuments = () => {
        // fetch("http://localhost:8000/loadDocuments", {
        //     method: "Post",
        //     credentials: "include",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         owner: user.sub
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
    }

    React.useEffect(() => {
        loadDocuments();
      });
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <br />
            <Typography variant="h5" gutterBottom>
                History
            </Typography>
            <br />
            <HistoryCardComponent userDetails={user} documentId={1} />
            <br />
            <HistoryCardComponent userDetails={user} documentId={2} />
            <br />
            <HistoryCardComponent userDetails={user} documentId={3} />
            <br />
            <HistoryCardComponent userDetails={user} documentId={4} />
        </Box>
    )
}