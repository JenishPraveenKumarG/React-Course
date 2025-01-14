import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable - super powerful variable - hook
  // it maintains the state of the variable

  /*
  const [listOfrestaurants,setListofRestaurants] = useState([
    {
      info: {
        id: "24341",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.4,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24343",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24340",
        name: "A2B",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 25,
        },
      },
    },
  ]);
  */

  // using mockData

  const [listOfrestaurants,setListofRestaurants] = useState(resList)

  // Normal JS variable
  // let listOfrestaurants


  // Normal JS variable

  let listOfrestaurantsJS2 = [
    {
      info: {
        id: "24341",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.4,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24343",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24340",
        name: "A2B",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24343",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "24340",
        name: "A2B",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/9c8b324e-0b71-4ff5-94bf-1d0e26bcb6c1_24343.jpg",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 25,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
