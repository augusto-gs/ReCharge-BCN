import { render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { motorbikesLocationReducer } from "../store/features/motorbikes/motorbikeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { locationsMock } from "../mocks/locationMock";
import { Provider } from "react-redux";

const mockStore = configureStore({
  reducer: { motorbikesLocationState: motorbikesLocationReducer },
  preloadedState: {
    motorbikesLocationState: {
      locations: locationsMock,
    },
  },
});

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

  render(
    hasRouter ? (
      <BrowserRouter>
        <Provider store={mockStore}>{elements}</Provider>
      </BrowserRouter>
    ) : (
      elements
    ),
  );
};
