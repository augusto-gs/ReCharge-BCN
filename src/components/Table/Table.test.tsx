import { screen } from "@testing-library/react";
import Table from "./Table";
import { customRender } from "../../testUtils/testUtils";
import { locationsMock } from "../../mocks/locationMock";

describe("Given a Table component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a title 'Charging ports' on a heading", () => {
      const titleText = "Charging points";

      customRender(<Table locations={locationsMock} />, true);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
