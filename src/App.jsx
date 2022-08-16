import { useState, useContext } from "react";
import "./App.css";
import Creator from "./components/Creator/Creator";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import ScreenContext, { ScreenProvider } from "./context/ScreenContext";

function App() {
  const screenScrollTop = useContext(ScreenContext);

  // console.log(item);
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
