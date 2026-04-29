import { fireEvent, render, screen } from "@testing-library/react"
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/restaurantMockData.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

describe("Unit testing for Restaurant component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Restaurant data={MOCK_DATA} />
                </Provider>
            </BrowserRouter>
        );
    })
    it("Should Render Restaurant component with props", () => {
        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });
    it("Should Filter Top Rated Restaurants", () => {
        //Rated 

        const defaultRestaturantList = screen.getAllByTestId("resCard");
        expect(defaultRestaturantList.length).toBe(1); 

        const searchBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
        const searchInput = screen.getByTestId("topRatedId");
        expect(searchBtn).toBeInTheDocument();

        fireEvent.click(searchBtn);

        const topRatedRe = screen.queryByTestId("resCard");
        expect(topRatedRe).not.toBeInTheDocument(); 
    });
});