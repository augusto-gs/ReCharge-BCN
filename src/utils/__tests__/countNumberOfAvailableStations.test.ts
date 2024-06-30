import { locationsMock } from "../../mocks/locationMock";
import countNumberOfAvailableStations from "../countNumberOfAvailableStations";

describe("Given a countNumberOfAvailableStations function", () => {
  describe("When it is called with a motorbike location", () => {
    test("Then it should return the number of available stations", () => {
      const motorbikeLocations = locationsMock;

      const numberOfAvailableStations = countNumberOfAvailableStations(
        motorbikeLocations[0].stations,
      );

      expect(numberOfAvailableStations).toHaveProperty("availablePorts", 1);
    });
  });
});
