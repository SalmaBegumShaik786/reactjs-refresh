import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import About from './components/About.js';
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.js';
import UserContext from './utils/userContext.js';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
//import Grocery from './components/Grocery.js';o

// Performance Solution
// Parcel : Chunking/Code Splitting / Dynamic Bundling 
//  Lazy loading -- only when Grocery is redirected then only will get the code

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Salma Shaik",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const Grocery = lazy(() => import('./components/Grocery.js'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: '/Grocery',
                element: (
                    <Suspense fallback={<h1>Loading ....</h1>}>
                        <Grocery />
                    </Suspense>)
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/Cart',
                element: <Cart/>
            }

        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);