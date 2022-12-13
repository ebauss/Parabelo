import './App.css';
import BlogPost from "./pages/WebApplication/BlogPost/BlogPost";
import LandingPagePlaceholder from "./components/LandingPageComponentPlaceholder/LandingPagePlaceholder";
import Paraphrasing from "./pages/WebApplication/Paraphrasing/Paraphrasing";
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
                {/*<Route path="/blogpost" element={<BlogPost/>}/>*/}
                {/*<Route path="/paraphrasing" element={<Paraphrasing/>}/>*/}
                <Route path="/" element={<LandingPagePlaceholder/>}/>
            </Routes>
        </div>
    );
}

export default App;
