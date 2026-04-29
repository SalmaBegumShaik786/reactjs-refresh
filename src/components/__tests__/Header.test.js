import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing the Header functionality", () => {

    // it("Should have loaded the image", () => {

    // })

    // it("Should have loaded the About Us", () => {

    // })
    // it("Should have loaded the Cart link", () => {

    // })
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    })
    it("Should have loaded the Login button", () => {
        const loginButton = screen.getByRole("button", { name: "Login" });

        expect(loginButton).toBeInTheDocument();
    });

    it("Should render cart items with initial 0", () => {
        const cartItems = screen.getByText("(Cart0 items)");

        expect(cartItems).toBeInTheDocument();
    });

    it("Should change Login Button to Logout on click", () => {
        const loginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        expect(loginButton).toBeInTheDocument();
    })
})