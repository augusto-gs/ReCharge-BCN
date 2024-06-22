import { render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

export const customRender = (
  children: React.ReactElement,
  hasRouter = false,
) => {
  const elements = (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  render(hasRouter ? <BrowserRouter>{elements}</BrowserRouter> : elements);
};
