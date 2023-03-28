import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function SupportComponent(props) {
    const [firstNameValue, setFirstNameValue] = React.useState(props.userDetails ? props.userDetails.given_name : '');
    const [lastNameValue, setLastNameValue] = React.useState(props.userDetails ? props.userDetails.first_name : '');
    const [emailValue, setEmailValue] = React.useState(props.userDetails ? props.userDetails.email : '');
    const [emailBodyValue, setEmailBodyValue] = React.useState('');
    const navigate = useNavigate(); 

    const handleFirstNameChange = (event) => {
        setFirstNameValue(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastNameValue(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    }

    const handleEmailBodyChange = (event) => {
        setEmailBodyValue(event.target.value);
    }

    const sendEmail = async () => {
        const response = await fetch("http://localhost:8000/sendEmailToSupport", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailValue,
                emailBody: emailBodyValue,
                firstName: firstNameValue,
                lastName: lastNameValue
            })
        })

        const data = await response.text();

        if (data == "true") {
            window.alert("Thank you for sending us a message! We will get back to you as soon as we can.");
            navigate('/app/');
        } else {
            window.alert(data);
        }

    }

    return (
        <Box sx={{
            paddingTop: 12,
            paddingBottom: 10
        }}>
            <Typography variant="h4" gutterBottom>
                Support
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                Please send us an email via this form if you have any questions.
            </Typography>
            <br />
            <Button variant="contained" onClick={sendEmail} >
                Send Email
            </Button>
            <br />
            <Box>
                <TextField id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    onChange={handleFirstNameChange}
                    sx={{ width: 300, margin: 2 }}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={handleLastNameChange}
                    sx={{ width: 300, margin: 2 }}
                    inputProps={{ maxLength: 255 }}
                />
            </Box>
            <TextField id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleEmailChange}
                sx={{
                    width: {
                        sm: 632
                    },
                    margin: 2
                }}
                inputProps={{ maxLength: 255 }}
            />
            <br />
            <TextField id="outlined-basic"
                label="If you have any questions or concerns, please type them here."
                variant="outlined"
                onChange={handleEmailBodyChange}
                multiline
                rows={20}
                sx={{ width: 632, margin: 2 }}
                inputProps={{ maxLength: 300000 }}
            />
        </Box>
    )
}