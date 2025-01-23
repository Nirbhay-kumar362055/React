import React, { useState , useEffect } from 'react';
import Cards from "./Cards.js";
import { getImageUrl } from "../utils/mockData.js";
import restaurantList from "../utils/mockData.js";
import Shimmer from './Shimmer.js';




const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState(restaurantList);
    const [searchText , setSearchText] = useState("");

    useEffect(() => {
        

    },[]);
    return (
    <div className="body">
        <div className="body-content">
            <p className="body-text">Order food & grocries. Discover best restaurants.Enjoy it!</p>
        </div>
        <div className="res-btn">
            <div className="search">
                <input type= "text" className="search-box" value={searchText} onChange={(el) => {
                    setSearchText(el.target.value);
                }} />
                <button className= "search-btn" onClick={() => {
                    let filteredList = listofRestaurants.filter((res) => {
                        res.restaurantName.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setlistofRestaurants(filteredList);
                    
                    console.log(searchText);
                }}>search</button>

            </div>
            <button onClick={() => {
                const filteredList = listofRestaurants.filter((res) => res.avgRating > 4);
                setlistofRestaurants(filteredList);
            }}>Best Restaurent</button>
        </div>
        <div className="cards">
            {listofRestaurants.map((restaurantdata) => (
                <Cards resData = {restaurantdata}/>
            ))};
        </div>
    </div>
);
};
// import { getImageUrl } from "../utils/constant.js";

export default Body;