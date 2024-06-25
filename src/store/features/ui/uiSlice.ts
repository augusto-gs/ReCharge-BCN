import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStructure {
  isLoading: boolean;
}

const initialState: UiStateStructure = { isLoading: false };

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
  },
});

export const {
  actions: {
    showLoading: showLoadingActionCreator,
    hideLoading: hideLoadingActionCreator,
  },
  reducer: uiReducer,
} = uiSlice;
