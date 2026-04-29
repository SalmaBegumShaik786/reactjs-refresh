import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Should load Contact Us Component", () => {
    beforeAll(() => {
        console.log('before every test cases');
    })
    //Different Methods: beforeEach, afterAll, afterEach

    it('should  check whether component is loaded or not', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        const button = screen.getByRole("button");

        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    it('Should have form input with Name', () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    })

    it('form inputs should be 2', () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    })
    it('form should have submit button', () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
})