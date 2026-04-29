import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_RESTAURANTS_DATA from "../mocks/allRestaurants.mock.json";
import { act } from "react-dom/test-utils";


describe("Search functionality", () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_RESTAURANTS_DATA);
            }
        });
    });

    beforeEach(async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </BrowserRouter>
            )
        });
    })
    it("Should hve serch button", () => {
        const searchBtn = screen.getByRole("button", { name: "Search" });
        expect(searchBtn).toBeInTheDocument();
    });

    it("Should render by default 8 cards initially", () => {
        const defaultRestaturantList = screen.getAllByTestId("resCard");
        expect(defaultRestaturantList.length).toBe(8);
    });

    it("Should refine the results with the user input", () => {
        //chi should refine the results to 2
        const searchBtn = screen.getByRole("button", { name: "Search" });
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target: { value: "chi" } });
        fireEvent.click(searchBtn);

        const defaultRestaturantList = screen.getAllByTestId("resCard");
        expect(defaultRestaturantList.length).toBe(2);
    });

    
    it("Should Filter Top Rated Restaurants", () => {
        //Rated

        const defaultRestaturantList = screen.getAllByTestId("resCard");
        expect(defaultRestaturantList.length).toBe(8); 

        const searchBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
        const searchInput = screen.getByTestId("topRatedId");
        expect(searchBtn).toBeInTheDocument();

        fireEvent.click(searchBtn);

        const topRatedRe = screen.getAllByTestId("resCard");
        expect(topRatedRe.length).toBe(1);
    });


})