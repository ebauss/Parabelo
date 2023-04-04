import React from 'react';
import { Paper, TextField, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function HistoryCardComponent(props) {
    const user = props.userDetails;

    const confirmDelete = () => {
        if (window.confirm("Press OK if you want to go ahead with the deletion.")) {
            deleteDocument();
        }
    }

    const deleteDocument = () => {
        fetch("http://localhost:8000/deleteDocument", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                documentId: props.documentId,
                owner: user.sub
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Document has been deleted");
            })
    }

    return (
        <Paper elevation={3} sx={{
            height: "100%",
            width: {
                xs: "90%",
                md: 700
            },
            paddingLeft: 3,
            paddingRight: 3
        }}>
            <br />
            <Typography variant="body1">
                Type: {props.type}
            </Typography>
            <br />
            <TextField
                id="outlined-multiline-static"
                label="Prompt"
                value={props.promptValue}
                fullWidth
                multiline
                rows={2}
                sx={{ width: { md: 600 }, marginBottom: 5 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={5}
                value={props.resultValue}
                fullWidth
                sx={{ width: { md: 600 }, marginBottom: 5 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
            <br />
            <Button variant="contained" onClick={confirmDelete} color="error" startIcon={<DeleteIcon />} sx={{
                marginBottom: 5
            }}>
                Delete
            </Button>
        </Paper>
    )
}