import React from "react";
import ReactDOM from "react-dom/client";
import mainTheme from "../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MapProviderWrapper from "./store/features/map/MapProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <MapProviderWrapper>
          <Provider store={store}>
            <GlobalStyle />
            <App />
          </Provider>
        </MapProviderWrapper>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
