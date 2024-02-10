import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./Tracker";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tracker" element={<Tracker />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;