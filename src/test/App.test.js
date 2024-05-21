import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("should display something", () => {
        render(<App />);
        const gameBoard = screen.getByTestId("gameBoard");
        expect(gameBoard).not.toBeNull();
        // expect(gameBoard.textContent).toBe("X")
    });
    it("should render a button", () => {
        render(<App />);
        const button = screen.getAllByRole("button");
        expect(button).not.toBeNull();
    });
    it("should render 9 buttons", () => {
        render(<App />);
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toEqual(9);
    });
});