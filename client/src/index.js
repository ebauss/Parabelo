import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

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
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {/* TODO: Add these files to a .env so that they are secret. */}
                <Auth0Provider
                    domain="parabelodev.us.auth0.com"
                    clientId="K4k4iNdge0leB643mx5ZOgxxQxhbAkfV"
                    redirectUri={window.location.origin + "/app/"}
                >
                    <App />
                </Auth0Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
