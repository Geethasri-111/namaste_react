import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import { menu_api } from "../Utils/constants";
import useRestaurentMenu from '../Utils/useRestaurentMenu'
import Category from "../Category/Category";


const RestaurentMenu = () => {
 const {resId} =useParams();
 const restroData = useRestaurentMenu(resId);
 const [showIndex,setShowIndex] = useState(0);
    
    if (!restroData || !restroData.cards) return <Shimmer/>;   
    const {name,cuisines,costForTwoMessage,totalRatingsString} = restroData?.cards[2]?.card.card.info || ''; 
    const {itemCards}= restroData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
    const categoryItem  = restroData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(item => item.card?.card?.['@type'].includes('ItemCategory'));
    return(
        <div className="Menu text-center">
            <h1 className="font-bold p-1">{name}</h1>
            <h3 className="red">{cuisines.join(',')}- {costForTwoMessage}</h3>
            <h4>{totalRatingsString}</h4>
            <div className="accordion">
            {/**accordion*/}
            {categoryItem.map((items,index) =>( 
                <Category menuList={items?.card?.card}
                 key={items.card.card.categoryId}
                 showItems={index === showIndex ?true : false}
                 setShowIndex={() => setShowIndex(index)}/> 
            ))}
            </div>           
        </div>
    
    )
    
}


export default RestaurentMenu;