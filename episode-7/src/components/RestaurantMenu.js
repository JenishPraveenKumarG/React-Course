import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }


    if (resInfo === null) {
        return <Shimmer />
    }

    const info = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage } = info || {};

    const item_card = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {item_card.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu