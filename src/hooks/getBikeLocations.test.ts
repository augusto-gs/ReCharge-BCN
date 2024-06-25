import { renderHook } from "@testing-library/react";
import useMotorbikeLocationApi from "./useMotorbikeLocationApi";
import { locationsMock } from "../mocks/locationMock";
import { server } from "../mocks/msw/node";
import { errorHandlers } from "../mocks/msw/errorHandlers";
import { toast } from "react-toastify";
import { providerWrapper } from "../testUtils/testUtils";

describe("Given a useMotorbikeLocation custom hook", () => {
  describe("When it calls its getBikeLocations function", () => {
    test("Then it should return the location of the motorbikes", async () => {
      const {
        result: {
          current: { getBikeLocations },
        },
      } = renderHook(() => useMotorbikeLocationApi(), {
        wrapper: providerWrapper,
      });

      const locations = await getBikeLocations();

      expect(locations).toStrictEqual(locationsMock);
    });
  });

  describe("When it calls its getBikeLocations function and it throws an error", () => {
    test("Then it should console log an error", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getBikeLocations },
        },
      } = renderHook(() => useMotorbikeLocationApi(), {
        wrapper: providerWrapper,
      });

      const spy = vi.spyOn(toast, "error");

      await getBikeLocations();

      expect(spy).toHaveBeenCalled();
    });
  });
});
