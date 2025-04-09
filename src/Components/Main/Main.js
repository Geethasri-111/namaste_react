import { useState } from "react";
import RestroCards from "../RestroCards/RestroCards";
import restaurants from "../Utils/mockdata";

const Main =() =>{
    const [restaurantList,setRestaurantList] = useState(restaurants);
    
return (
    <div className='restaurantCard'>
        <div className='search'>
            <input type="text" />
        </div>
        <div className="filterSection">
            <button className="filter-btn"
            onClick={() => {
                 const filteredrestaurantList = restaurantList.filter(item => item.info.avgRating>4);
                 setRestaurantList(filteredrestaurantList)

            }
        }>TopRated</button>
        </div>
        <div className='restroCards'>{   
            
            restaurantList.map(resItem => <RestroCards key={resItem.info.id} resData={resItem}/> )
        }
        </div>
    </div>
)
}

export default Main;