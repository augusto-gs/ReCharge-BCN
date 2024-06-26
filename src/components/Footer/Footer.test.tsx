import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/testUtils";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a 'Carrer de Calabria, 66' text", () => {
      const addressText = "Carrer de Calàbria, 66";

      customRender(<Footer />);

      const address = screen.getByText(addressText);

      expect(address).toBeInTheDocument();
    });

    test("Then it should show an image with a 'Light blue location icon' alternative text", () => {
      const alternativeText = "Light blue location icon";

      customRender(<Footer />);

      const icon = screen.getByAltText(alternativeText);

      expect(icon).toBeInTheDocument();
    });

    test("Then it should show a link taking to https://endolla.barcelona/ca/contacte", () => {
      const linkText = "Contact us";
      const linkAddress = "https://endolla.barcelona/ca/contacte";

      customRender(<Footer />);

      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", linkAddress);
    });
  });
});
