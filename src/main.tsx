import React from "react";
import ReactDOM from "react-dom/client";
import mainTheme from "../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
