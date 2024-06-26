import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testUtils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show an image with an alternative text ReCharge-BCN logo on blue letters 'ReCharge-BCN logo on blue letters'", () => {
      const imageAlternativeText = "ReCharge-BCN logo on blue letters";

      customRender(<Header />, true);

      const logo = screen.getByRole("img", {
        name: imageAlternativeText,
      });

      expect(logo).toBeInTheDocument();
    });
  });
});
