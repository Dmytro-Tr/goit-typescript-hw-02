import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./components/App/App";

// ReactDOM.
createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
  // </React.StrictMode>
);
