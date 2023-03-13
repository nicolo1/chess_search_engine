import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
