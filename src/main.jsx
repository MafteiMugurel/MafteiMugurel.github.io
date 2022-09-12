import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);
