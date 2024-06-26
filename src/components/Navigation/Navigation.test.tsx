import { customRender } from "../../testUtils/testUtils";
import Navigation from "./Navigation";
import { screen } from "@testing-library/react";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with a 'to home' text", () => {
      const expectedLinkText = "Home";

      customRender(<Navigation />, true);

      const expectedlink = screen.getByRole("link", { name: expectedLinkText });

      expect(expectedlink).toBeInTheDocument();
    });
  });
});
