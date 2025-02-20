import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home.jsx";
import {NavBar} from "./components/NavBar.jsx";

function App() {

    return <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    </>
}

export default App
