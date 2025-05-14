import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import { menu_api } from "../Utils/constants";
import useRestaurentMenu from '../Utils/useRestaurentMenu'


const RestaurentMenu = () => {
 const {resId} =useParams();
 const restroData = useRestaurentMenu(resId);
    
    if (!restroData || !restroData.cards) return <Shimmer/>;   
    const {name,cuisines,costForTwoMessage,totalRatingsString} = restroData?.cards[2]?.card.card.info || ''; 
    const {itemCards}= restroData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
    return(
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines}{costForTwoMessage}</h3>
            <h4>{totalRatingsString}</h4>
            <h2>Menu</h2>
            {itemCards && (
                <ul>
                        {itemCards.map(item => (<li key={item.card.info.name}>{item.card.info.name}-Rs.{item.card.info.price/100}</li>))}
                </ul>
            )}
        </div>
    
    )
    
}


export default RestaurentMenu;