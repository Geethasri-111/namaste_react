import { useEffect, useState } from "react";
import RestroCards from "../RestroCards/RestroCards";
import Shimmer from "../Shimmer/Shimmer";

const Main =() =>{
    const [restaurantList,setRestaurantList] = useState([]);
    useEffect(()=>{
        fetchRestaurantData();
    },[])

    const fetchRestaurantData = async()=>{
        const data =await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            const fetchedData = await data.json();
            setRestaurantList(fetchedData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
    }
    //conditional renderingwith ternary
        
return restaurantList.length === 0 ? <Shimmer/> :(
    
    <div className='restaurantCard container'>
        <div className='search'>
            <input type="text" />
        </div>
        <div className="filterSection">
            <button className="filter-btn"
            onClick={() => {
                 const filteredrestaurantList = restaurantList.filter(item => item.info.avgRating>4.5);
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