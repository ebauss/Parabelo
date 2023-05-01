import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import HistoryCardComponent from './HistoryCardComponent';

export default function HistoryComponent(props) {
    const [documentsValue, setDocumentsValue] = React.useState([]);
    const user = props.userDetails;

    const loadDocuments = () => {
        fetch("https://www.parabelo.com/loadDocuments", {
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
            else if (document.type === "Product Description" && document.featureList) {
                documentCards.push(<HistoryCardComponent userDetails={user} key={document._id} documentId={document._id} promptValue={`Product: ${document.prompt}\nFeature list: ${document.featureList}`} resultValue={document.result} type={document.type} />)
                documentCards.push(<br />)
            }
            else {
                documentCards.push(<HistoryCardComponent userDetails={user} key={document._id} documentId={document._id} promptValue={document.prompt} resultValue={document.result} type={document.type} />)
                documentCards.push(<br />)
            }

        })

        return documentCards;
    }

    const confirmDelete = () => {
        if (window.confirm("Press OK if you want to go ahead with the deletion.")) {
            deleteHistory();
        }
    }

    // Delete all entries for that specific user.
    const deleteHistory = () => {
        fetch("https://www.parabelo.com/deleteHistory", {
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
                console.log("History has been deleted");
            })
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, mt: 4 }}>
                History
            </Typography>
            <Button variant="contained" color="error" size="large" sx={{ mb: 4 }} onClick={confirmDelete} >
                Clear History
            </Button>
            {renderDocumentCards()}
        </Box>
    )
}