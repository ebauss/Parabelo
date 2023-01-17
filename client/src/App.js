import './App.css';
import WebApplication from "./pages/WebApplication/WebApplication";
import {
    Routes,
    Route
} from "react-router-dom";
import LandingPageComponent from './components/LandingPageComponent/LandingPageComponent';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/app/*" element={<WebApplication/>}/>
                <Route path="/" element={<LandingPageComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
