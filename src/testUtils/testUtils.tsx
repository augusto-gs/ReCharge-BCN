import { render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { motorbikesLocationReducer } from "../store/features/motorbikes/motorbikeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { locationsMock } from "../mocks/locationMock";
import { Provider } from "react-redux";
import { uiReducer } from "../store/features/ui/uiSlice";
import { PropsWithChildren } from "react";
import { store } from "../store";
import ChargingLocationStructure from "../types";

const mockStore = configureStore({
  reducer: {
    motorbikesLocationState: motorbikesLocationReducer,
    uiState: uiReducer,
  },
  preloadedState: {
    motorbikesLocationState: {
      locations: locationsMock,
      location: {} as ChargingLocationStructure,
    },
    uiState: {
      isLoading: false,
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
      <Provider store={mockStore}>{children}</Provider>
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

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};
