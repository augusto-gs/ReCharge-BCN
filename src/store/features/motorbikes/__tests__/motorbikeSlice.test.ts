import { locationsMock } from "../../../../mocks/locationMock";
import {
  loadMotorbikesActionCreator,
  motorbikesLocationReducer,
  MotorbikeStateStructure,
} from "../motorbikeSlice";

describe("Given a reducer on a motorbikesSlice", () => {
  describe("When it receives a current state and the motorbikes locations", () => {
    test("Then it should return the new motorbikes state with the current motorbike locations", () => {
      const initialState = {} as MotorbikeStateStructure;

      const updatedState = motorbikesLocationReducer(
        initialState,
        loadMotorbikesActionCreator(locationsMock),
      );

      expect(updatedState.locations).toStrictEqual(locationsMock);
    });
  });
});
