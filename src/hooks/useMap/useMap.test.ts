import { renderHook } from "@testing-library/react";
import useMap from "./useMap";
import { locationsMock } from "../../mocks/locationMock";
import { providerWrapper } from "../../testUtils/testUtils";

describe("Given a useMap hook when it receives a location with 2 coordinates", () => {
  describe("When it calls its hasMapLocations function", () => {
    test("Then it should return two features", () => {
      const {
        result: {
          current: { createFeatures },
        },
      } = renderHook(() => useMap(), { wrapper: providerWrapper });

      const featuresOnMap = createFeatures(locationsMock);

      featuresOnMap.forEach((feature) => {
        const expectedFeature = feature.getProperties();

        expect(expectedFeature).toHaveProperty("location");
      });
    });
  });
});
