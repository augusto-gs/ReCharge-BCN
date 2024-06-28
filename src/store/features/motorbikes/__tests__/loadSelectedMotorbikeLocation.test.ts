import { locationsMock } from "../../../../mocks/locationMock";
import { ChargingLocationStructure } from "../../../../types";
import {
  loadSelectedMotorbikeActionCreator,
  motorbikesLocationReducer,
} from "../motorbikeSlice";

describe("Given a motorbikeSlice", () => {
  describe("When it receives a current state and the selected motorbike location", () => {
    test("Then it should return the new motorbikes state with the selected motorbike location", () => {
      const initialState = {
        locations: [],
        location: {} as ChargingLocationStructure,
      };

      const selectedLocation = locationsMock[0];

      const updatedState = motorbikesLocationReducer(
        initialState,
        loadSelectedMotorbikeActionCreator(selectedLocation),
      );

      expect(updatedState.location).toStrictEqual(selectedLocation);
    });
  });
});
