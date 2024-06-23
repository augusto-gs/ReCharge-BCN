import { render, screen } from "@testing-library/react";
import LocationCard from "./LocationCard";
import locationMock from "../../mocks/locationMock";

describe("Given a LocationCard component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show an 'Av. Reina Maria Cristina, 16' address", () => {
      const addressText = "Av. Reina Maria Cristina, 16";

      render(<LocationCard location={locationMock} />);

      const address = screen.getByRole("listitem");

      expect(address).toBeInTheDocument();
      expect(address.textContent).toBe(addressText);
    });
  });

  test("Then it should show a button with a 'Detail' text", () => {
    const buttonText = "Details";

    render(<LocationCard location={locationMock} />);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });
});
