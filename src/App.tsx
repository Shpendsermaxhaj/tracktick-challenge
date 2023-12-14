import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from "./components/ListView/ListView";
import Details from './components/Details/Details';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListView />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
}

export default App;
