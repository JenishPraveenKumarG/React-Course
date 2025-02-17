import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listOfrestaurants,setListofRestaurants] = useState([])
  const [filteredRestaurant,setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.058726&lng=80.2434483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json()

    setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    


  };

  // conditional rendering
  return listOfrestaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className="filter">

        <div className="search">
          <input 
            type="text" 
            className="search-Box" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" 
            onClick={() => {
            // filter the cards and update the UI
            const filteredRestaurant = listOfrestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.trim().toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfrestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurants(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
