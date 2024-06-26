import { render, screen } from "@testing-library/react";
import LocationCard from "./LocationCard";
import { locationMock } from "../../mocks/locationMock";

describe("Given a LocationCard component", () => {
  describe("When it is rendered on screen", () => {});

  test("Then it should show a button with a 'Detail' text", () => {
    const buttonText = "Details";

    render(<LocationCard location={locationMock} />);

    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });
});
