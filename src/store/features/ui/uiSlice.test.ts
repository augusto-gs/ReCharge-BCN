import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
  UiStateStructure,
} from "./uiSlice";

describe("Given a uiReducer from a uiSlice", () => {
  describe("When it receives an initial state with a false and a showLoadingActionCreator", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
      };

      const actualUiState = uiReducer(initialState, showLoadingActionCreator());

      expect(actualUiState.isLoading).toBeTruthy();
    });
  });

  describe("When it receives an initial state with true and a hideLoadingActionCreator", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStateStructure = {
        isLoading: true,
      };

      const actualUiState = uiReducer(initialState, hideLoadingActionCreator());

      expect(actualUiState.isLoading).toBeFalsy();
    });
  });
});
