import './App.css';
import BlogPost from "./pages/WebApplication/BlogPost/BlogPost";
import LandingPagePlaceholder from "./components/LandingPageComponentPlaceholder/LandingPagePlaceholder";
import {
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/app" element={<BlogPost/>}/>
                <Route path="/" element={<LandingPagePlaceholder/>}/>
            </Routes>
        </div>
    );
}

export default App;
