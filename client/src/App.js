import logo from './logo.svg';
import './App.css';
import TextButtons from './components/button';
import MultilineTextFields from "./components/MultilineTextFields";

function App() {
    return (
        <div className="App">
            <TextButtons></TextButtons>
            <MultilineTextFields></MultilineTextFields>
        </div>
    );
}

export default App;
