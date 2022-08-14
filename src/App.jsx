import { useState } from "react";
import "./App.css";
import Creator from "./components/Creator/Creator";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Creator />
    </div>
  );
}

export default App;
