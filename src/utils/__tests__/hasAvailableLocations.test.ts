import { locationsMock } from "../../mocks/locationMock";
import hasAvailableLocations from "../hasAvailableLocations";

describe("Given a showAvailableLocations function", () => {
  describe("When it is called with a an array of locations with one location in use", () => {
    test("Then it should retrun the locations with available status only", () => {
      const expectedLocation = locationsMock[0];

      const availableLocations = hasAvailableLocations(locationsMock);

      expect(availableLocations[0]).toStrictEqual(expectedLocation);
    });
  });
});
