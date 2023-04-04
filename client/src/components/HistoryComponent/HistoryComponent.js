import React from 'react';
import { Box, Typography } from "@mui/material";
import HistoryCardComponent from './HistoryCardComponent';

export default function HistoryComponent(props) {
    const [documentsValue, setDocumentsValue] = React.useState([]);
    const user = props.userDetails;

    const loadDocuments = () => {
        fetch("http://localhost:8000/loadDocuments", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                owner: user.sub
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setDocumentsValue(data);
            })
    }

    React.useEffect(() => {
        loadDocuments();
    });

    const renderDocumentCards = () => {
        let documentCards = [];

        documentsValue.forEach((document) => {
            documentCards.push(<HistoryCardComponent userDetails={user} key={document._id}  documentId={document._id} promptValue={document.prompt} resultValue={document.result}  type={document.type} />)
            documentCards.push(<br />)
        }) 
    
        return documentCards;
    }

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
            {renderDocumentCards()}
        </Box>
    )
}