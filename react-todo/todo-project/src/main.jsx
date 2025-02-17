import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
