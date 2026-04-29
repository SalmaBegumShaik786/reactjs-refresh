import Search from "./Search";
import Restaurant from "./Restaurant";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {

    //const [resData, setResData] = useState([]);
    const resData = useRestaurantMenu();
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(UserContext);


    useEffect(() => {
        if (resData) {
            setFilteredRestaurants(resData);
        }
    }, [resData]);

    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you are offline !! please check internet connection</h1>
            </div>
        )
    }
    if (resData === null) return <Shimmer />

    if (resData?.length === 0) {
        return <Shimmer />
    }

    return resData?.length === 0 ? (<Shimmer />) : (
        <div className='bg-gray-50 px-16'>
            <div className="filter-container">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black"
                        value={searchText} onChange={
                            (e) => {
                                setSearchText(e.target.value);
                            }
                        }
                    />
                    <button className="ml-5 px-4 rounded-lg bg-gray-200" onClick={() => {
                        const newFiltered = resData.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurants(newFiltered);
                    }}>Search</button>

                    Update User
                    <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

            </div>
            <Restaurant data={filteredRestaurants} />
        </div>
    )
}

export default Body;