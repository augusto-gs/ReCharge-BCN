import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStructure {
  isLoading: boolean;
  isPopUp: boolean;
}

const initialState: UiStateStructure = { isLoading: false, isPopUp: false };

const uiSlice = createSlice({
  name: "uiState",
  initialState: initialState,
  reducers: {
    showLoading: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: false,
    }),

    showPopUp: (currentState: UiStateStructure) => ({
      ...currentState,
      isPopUp: true,
    }),

    hidePopUp: (currentState: UiStateStructure) => ({
      ...currentState,
      isPopUp: false,
    }),
  },
});

export const {
  actions: {
    showLoading: showLoadingActionCreator,
    hideLoading: hideLoadingActionCreator,
    showPopUp: showPopupActionCreator,
    hidePopUp: hidePopupActionCreator,
  },
  reducer: uiReducer,
} = uiSlice;
