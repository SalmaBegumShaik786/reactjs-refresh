import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ data }) => {
    let [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        setRestaurants(data);
        console.log('data', data);
    }, [data]);

    return (
        <div className="items-center">
            <div className="search m-2 p-4 flex items-center">
                <button type="button" data-testid="topRatedId" className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredRestaurants = restaurants.filter((res) => {
                            return res.info.avgRatingString > 4.5;
                        });
                        setRestaurants(filteredRestaurants);
                    }}
                    >Top Rated Restaurants</button>

                <button type="button" className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                    onClick={() => {
                        setRestaurants(data);
                    }}
                   >Reset</button>
            </div>
            <div className='flex flex-wrap p-1 mr-2'>
                {restaurants.map((element, index) => (
                    <div key={"restaurant"+element.info.id} className=" mr-2 mb-5 p-5 bg-blue-50" data-testid="resCard">
                        <Link key={"KeyLink"+element.info.id}
                             to={"/restaurants/"+ element.info.id}>
                            <div className='flex-col w-40' key={element.info.id}>
                                <h3> {element.info.name}</h3 >
                                <img alt="biryani" src={element.info.cloudinaryImageId} />
                                <h4 className="text-wrap"> {element.info.cuisines.join(" , ")}</h4>
                                <h4> {element.info.avgRatingString} stars</h4>
                                <h4> {element.info.costForTwo} </h4>
                                <h4> {element.info.sla.deliveryTime} minutes</h4>
                            </div >
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurant;