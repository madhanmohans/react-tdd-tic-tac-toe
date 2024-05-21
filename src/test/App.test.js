import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("should display X", () => {
        render(<App />);
        const gameBoard = screen.getByTestId("gameBoard");
        expect(gameBoard).not.toBeNull();
        expect(gameBoard.textContent).toBe("X")
    });
    it("should render a button", () => {
        render(<App />);
        const button = screen.getByRole("button");
        expect(button).not.toBeNull();
    })
});