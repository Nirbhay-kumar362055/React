import React, { useState } from 'react';
import Cards from "./Cards.js";
import { getImageUrl } from "../utils/mockData.js";
import restaurantList from "../utils/mockData.js";



const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState(restaurantList
    );
    return (
    <div className="body">
        <div className="body-content">
            <p className="body-text">Order food & grocries. Discover best restaurants.Enjoy it!</p>
        </div>
        <div className="res-btn">
            <button onClick={() => {
                const filteredList = listofRestaurants.filter((res) => res.avgRating > 4);
                setlistofRestaurants(filteredList);
            }}>Best Restaurent</button>
        </div>
        <div className="cards">
            {listofRestaurants.map((restaurantdata , index) => (
                <Cards key = {index} resData = {restaurantdata}/>
            ))};
        </div>
    </div>
);
};
// import { getImageUrl } from "../utils/constant.js";

export default Body;