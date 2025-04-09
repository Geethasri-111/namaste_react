import { useEffect, useState } from "react";
import RestroCards from "../RestroCards/RestroCards";
import Shimmer from "../Shimmer/Shimmer";

const Main =() =>{
    const [restaurantList,setRestaurantList] = useState([]);
    const [filteredRestro,setfilteredRestro] = useState([]);
    const [searchText,setSearchText] = useState('');
    useEffect(()=>{
        fetchRestaurantData();
    },[])

    const fetchRestaurantData = async()=>{
        const data =await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            const fetchedData = await data.json();
            setRestaurantList(fetchedData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
            setfilteredRestro(fetchedData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
    }
    //conditional renderingwith ternary
        
return restaurantList.length === 0 ? <Shimmer/> :(
    
    <div className='restaurantCard container'>
        <div className="filter">
            <div className='searchBar'>
                <input type="text" className="searchInput" 
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    const searchfilter = restaurantList.filter(restro => restro.info.name.toLowerCase().includes(searchText));
                    setfilteredRestro(searchfilter);
                }}>Search</button>
            </div>
            <div className="filterSection">
                <button className="filter-btn"
                onClick={() => {
                    const filteredrestaurantList = restaurantList.filter(item => item.info.avgRating>4.5);
                    setRestaurantList(filteredrestaurantList)

                }
            }>TopRated</button>
            </div>
        </div>
        <div className='restroCards'>{              
            filteredRestro.map(resItem => <RestroCards key={resItem.info.id} resData={resItem}/> )
        }
        </div>
    </div>
   
)
}

export default Main;