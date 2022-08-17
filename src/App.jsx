import { useState, useContext } from "react";
import "./App.css";
import Creator from "./components/Creator/Creator";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CareersPage from "./pages/Careers/CareersPage";

import ScreenContext, { ScreenProvider } from "./context/ScreenContext";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/loopstudios" element={<Home />} />
          <Route path="/loopstudios/about" element={<About />} />
          <Route path="/loopstudios/careers" element={<CareersPage />} />
          <Route path="/loopstudios/about" element={<About />} />
          <Route path="/loopstudios/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
      <Creator />
    </div>
  );
}

export default App;
