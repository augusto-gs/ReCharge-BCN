import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/testUtils";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

describe("Given an App component", () => {
  describe("When it is rendered on screen on the TablePage", () => {
    test("Then you should see a title 'Find your motorbike' on a heading", () => {
      const titleText = "Find your motorbike";

      customRender(<App />, true);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then you should see a title 'Charging points' on a heading", () => {
      const titleText = "Charging points";

      customRender(<App />, true);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show an 'Av. Reina Maria Cristina, 16' address", () => {
      const addressText = "Av. Reina Maria Cristina, 16";

      customRender(<App />, true);

      const address = screen.getByText(addressText);

      expect(address).toBeInTheDocument();
    });
  });

  describe("When it is rendered on screen on the Map page", () => {
    test("Then it should show a map", () => {
      const expectedTestID = "map";

      customRender(
        <MemoryRouter initialEntries={["/map"]}>
          <App />
        </MemoryRouter>,
      );

      const map = screen.getByTestId(expectedTestID);
      expect(map).toBeInTheDocument();
    });
  });
});
