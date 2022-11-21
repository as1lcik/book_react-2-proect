import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Arrivals from "./pages/Arrivals";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/featured" element={<Featured/>}/>
                <Route path="/arrivals" element={<Arrivals/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;