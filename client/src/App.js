import './App.css';
import LandingPagePlaceholder from "./components/LandingPageComponentPlaceholder/LandingPagePlaceholder";
import WebApplication from "./pages/WebApplication/WebApplication";
import {
    Routes,
    Route
} from "react-router-dom";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/app/*" element={<WebApplication/>}/>
                <Route path="/" element={<LandingPagePlaceholder/>}/>
            </Routes>
        </div>
    );
}

export default App;
