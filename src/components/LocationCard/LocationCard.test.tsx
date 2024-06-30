import { screen } from "@testing-library/react";
import LocationCard from "./LocationCard";
import { locationMock } from "../../mocks/locationMock";
import { customRender } from "../../testUtils/testUtils";

describe("Given a LocationCard component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show an 'Av. Reina Maria Cristina, 16' address", () => {
      const addressText = "Av. Reina Maria Cristina, 16";

      customRender(<LocationCard location={locationMock} />, true);

      const address = screen.getByText(addressText);

      expect(address).toBeInTheDocument();
    });
  });

  test("Then it should show a button with a 'Detail' text", () => {
    const buttonText = "See on map";

    customRender(<LocationCard location={locationMock} />, true);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });
});
