import { useState, useEffect } from "react";

const useRestaurantMenu = () => {

    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const resJSON = await data.json();
        console.log('resJson', resJSON);
        const actualData = resJSON.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setResData(actualData);
    };

    return resData;
}

export default useRestaurantMenu;