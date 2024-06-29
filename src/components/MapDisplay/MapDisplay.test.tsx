import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/testUtils";
import MapDisplay from "./MapDisplay";
import MapProviderWrapper from "../../store/features/map/MapProviderWrapper";

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

describe("Given a MapDisplay component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a map", () => {
      const expectedTestID = "map";

      customRender(
        <MapProviderWrapper>
          <MapDisplay />
        </MapProviderWrapper>,
        true,
      );

      const map = screen.getByTestId(expectedTestID);
      expect(map).toBeInTheDocument();
    });
  });
});
