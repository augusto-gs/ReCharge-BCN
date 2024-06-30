import { screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../testUtils/testUtils";

describe("Given a Button component", () => {
  const text = "Map";

  describe("When it is rendered on screen and it receives a 'Map' text", () => {
    test("Then it should show a text 'Map' on a button on screen", () => {
      customRender(
        <Button
          actionOnClick={() => {}}
          type={"button"}
          text={text}
          modifier={"button--hero"}
          isDisabled={false}
        />,
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered on screen and it receives an action and a click from the user", () => {
    test("Then it should call the received function one time", async () => {
      const mockAction = vi.fn();

      customRender(
        <Button
          actionOnClick={mockAction}
          type={"button"}
          text={text}
          modifier={"button--hero"}
          isDisabled={false}
        />,
      );

      const button = screen.getByRole("button", { name: text });

      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalledOnce();
    });
  });
});
