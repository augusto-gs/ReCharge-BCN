import { screen } from "@testing-library/react";
import Table from "./Table";
import { customRender } from "../../testUtils/testUtils";

describe("Given a Table component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a title 'Charging ports' on a heading", () => {
      const titleText = "Charging points";

      customRender(<Table />, true);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
