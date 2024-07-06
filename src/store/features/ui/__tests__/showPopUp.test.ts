import {
  showPopupActionCreator,
  uiReducer,
  UiStateStructure,
} from "../uiSlice";

describe("Given a uiReducer from a uiSlice", () => {
  describe("When it receives an initial state with a false and a showPopUp action creatore", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isPopUp: false,
      };

      const actualUiState = uiReducer(initialState, showPopupActionCreator());

      expect(actualUiState.isPopUp).toBeTruthy();
    });
  });

  describe("When it receives an initial state with true and a hidePopUp action creator", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isPopUp: true,
      };

      const actualUiState = uiReducer(initialState, showPopupActionCreator());

      expect(actualUiState.isPopUp).toBeTruthy();
    });
  });
});
