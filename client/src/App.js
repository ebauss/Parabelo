import React from 'react';
import './App.css';
import WebApplication from "./pages/WebApplication/WebApplication";
import {
    Routes,
    Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/app/*" element={<WebApplication/>} />
                <Route path="*" element={<LandingPage/>} />
            </Routes>
        </div>
    );
}

export default App;
