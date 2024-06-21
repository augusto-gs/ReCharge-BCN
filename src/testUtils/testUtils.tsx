import { render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

export const customRender = (children: React.ReactElement) => {
  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>,
  );
};
