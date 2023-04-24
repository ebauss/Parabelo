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
            if (document.type === "Social Media Caption") {
                documentCards.push(<HistoryCardComponent userDetails={user} key={document._id} documentId={document._id} promptValue={document.imageContents} resultValue={document.result} type={document.type} />)
                documentCards.push(<br />)
            } 
            else if (document.type === "Tik Tok Hook") {
                documentCards.push(<HistoryCardComponent userDetails={user} key={document._id} documentId={document._id} promptValue={`Product: ${document.prompt}\nTarget Customer: ${document.targetCustomer}`} resultValue={document.result} type={document.type} />)
                documentCards.push(<br />)
            }
            else {
                documentCards.push(<HistoryCardComponent userDetails={user} key={document._id} documentId={document._id} promptValue={document.prompt} resultValue={document.result} type={document.type} />)
                documentCards.push(<br />)
            }

        })

        return documentCards;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h5" gutterBottom sx={{mb: 4, mt: 4}}>
                History
            </Typography>
            {renderDocumentCards()}
        </Box>
    )
}