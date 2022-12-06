import './App.css';
import AiTextComponent from "./components/AiTextComponent/AiTextComponent";
import LandingPagePlaceholder from "./components/LandingPageComponentPlaceholder/LandingPagePlaceholder";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/app" element={<AiTextComponent/>}/>
                <Route path="/" element={<LandingPagePlaceholder/>}/>
            </Routes>
        </div>
    );
}

export default App;
