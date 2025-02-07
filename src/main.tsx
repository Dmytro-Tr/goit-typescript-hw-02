import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { Toaster } from "react-hot-toast";

// ReactDOM.
createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
  // </React.StrictMode>
);
