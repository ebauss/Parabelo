import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#398870"
        },
        secondary: {
            main: "#ec6226"
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            {/* TODO: Add these files to a .env so that they are secret. */}
            <Auth0Provider
                domain="dev-qw5gqp8rnisenpl3.us.auth0.com"
                clientId="bukP5d3CKsrkfxfKlaWYN5AtifcCi522"
                redirectUri="https://www.parabelo.com/app/"

                // Ensures that it works for Safari with their ITP stuff. Before when refreshing on a logged in user, it will redirect back to the landing page.
                cacheLocation="localstorage"
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
