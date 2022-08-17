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
import EventsPage from "./pages/Events/EventsPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SupportPage from "./pages/Support/SupportPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/loopstudios" element={<Home />} />
          <Route path="/loopstudios/about" element={<About />} />
          <Route path="/loopstudios/careers" element={<CareersPage />} />
          <Route path="/loopstudios/events" element={<EventsPage />} />
          <Route path="/loopstudios/product/:id" element={<ProductPage />} />
          <Route path="/loopstudios/products" element={<AllProductsPage />} />
          <Route path="/loopstudios/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
