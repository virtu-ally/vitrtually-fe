import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/virtually-fe/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
