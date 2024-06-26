import { renderHook } from "@testing-library/react";
import useMapLocations from "./useMapLocations";
import { locationsMock } from "../../mocks/locationMock";
import { Feature } from "ol";

describe("Given a useMapLocations hook when it receives a location with 2 coordinates", () => {
  describe("When it calls its hasMapLocations function", () => {
    test("Then it should return two features", () => {
      const {
        result: {
          current: { hasMapLocations },
        },
      } = renderHook(() => useMapLocations(locationsMock));

      const mapLocations = hasMapLocations();

      mapLocations.forEach((mapLocation) => {
        expect(mapLocation).toBeInstanceOf(Feature);
      });
    });
  });
});
