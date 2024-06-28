import { locationsMock } from "../../mocks/locationMock";
import removeCarLocationChargers from "../removeCarLocationChargers";

describe("Given a removeCarLocationChargers function", () => {
  describe("When it is called with a car location", () => {
    test("Then it should return the car location without chargers", () => {
      const motorbikeLocations = removeCarLocationChargers(locationsMock);

      expect(motorbikeLocations[1].stations[0].ports.length).toBe(0);
    });
  });
});
