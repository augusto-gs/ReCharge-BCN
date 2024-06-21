import { customRender } from "../../testUtils/testUtils";
import Hero from "./Hero";
import { screen } from "@testing-library/react";

describe("Given a Hero component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a 'Find your motorbike' title on a heading", () => {
      const titleText = "Find your motorbike";

      customRender(<Hero />);

      const hero = screen.getByRole("heading", { name: titleText });

      expect(hero).toBeInTheDocument();
    });
  });
});
