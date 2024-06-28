import { locationsMock } from "../../mocks/locationMock";
import { customRender } from "../../testUtils/testUtils";
import LocationDetail from "./LocationDetail";
import { screen } from "@testing-library/react";

describe("Given a LocationDetail component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a 'x' button", () => {
      const titleText = "x";

      customRender(<LocationDetail location={locationsMock[0]} />, true);

      const closeButton = screen.getByRole("button", { name: titleText });

      expect(closeButton).toBeInTheDocument();
    });
  });

  test("Then it should show a 'Av. Reina Maria Cristina, 16' address", () => {
    const addressText = "Av. Reina Maria Cristina, 16";

    customRender(<LocationDetail location={locationsMock[0]} />, true);

    const address = screen.getByText(addressText);

    expect(address).toBeInTheDocument();
  });
});
