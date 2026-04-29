import { useEffect, useState, useContext } from "react";
import mockMenu from "../data/mockMenuData.json";
import mockMenu1 from "../data/mockMenu1.json";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UserContext from '../utils/userContext';
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
      const [showIndex, setShowIndex] = useState(null);

    const { loggedInUser } = useContext(UserContext);


    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
        if (resInfo) {
            console.log("updated resinfo", resInfo);
        }
    }, [resInfo]);

    const fetchMenu = async () => {
        //const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=523159&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        //const dataJSON = await data.json();
        setTimeout(() => {
            if (resId === '518778') {
                setResInfo(mockMenu);
            } else {
                setResInfo(mockMenu1);
            }
        }, 1000);
    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter((c) => {
        return c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    console.log(categories);

    return (
        <div className="menu">
            <h1 className="text-red-500">Test Tailwind</h1>
            <h1>{name}</h1>
            <h2>{cuisines.join(' ')}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            {
                categories.map((category, index)=> (
                    <RestaurantCategory
                    key={category?.card?.card.title+'index'}
                    data ={category.card.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}>

                    </RestaurantCategory>
                ))
            }
            <h3>{loggedInUser}</h3>
        </div>
    )
}

export const withPromotedLabel = (RestaurantMenu) => {

    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantMenu />
            </div>
        );
    };
};

export default RestaurantMenu;