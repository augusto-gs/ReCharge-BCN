import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/app";
import mainTheme from "../styles/mainTheme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
