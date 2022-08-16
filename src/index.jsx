import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ScreenContext, { ScreenProvider } from "./context/ScreenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </React.StrictMode>
);
