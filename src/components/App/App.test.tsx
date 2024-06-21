import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered on screen", () => {
    test("Then you should see a title 'Find your motorbike' on a heading", () => {
      const titleText = "Find your motorbike";

      customRender(<App />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
