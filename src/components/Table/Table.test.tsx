import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Given a Table component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a title 'Charging ports' on a heading", () => {
      const titleText = "Charging points";

      render(<Table />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
