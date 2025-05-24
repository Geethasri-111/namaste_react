import { useEffect, useState } from "react";
import RestroCards,{ withOpen } from "../RestroCards/RestroCards";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router";
import useStatus from "../Utils/useStatus";

const Main =() =>{
    const [restaurantList,setRestaurantList] = useState([]);
    const [filteredRestro,setfilteredRestro] = useState([]);
    const [searchText,setSearchText] = useState('');
    const RestaurentOpen =  withOpen(RestroCards);
    useEffect(()=>{
        fetchRestaurantData();
    },[])
//https://corsproxy.io/
    const fetchRestaurantData = async()=>{
        const data =await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
            const fetchedData = await data.json();
            setRestaurantList(fetchedData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
            setfilteredRestro(fetchedData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
    }

    console.log(restaurantList);
    //conditional renderingwith ternary
        const  onlineStatusVal = useStatus();
return onlineStatusVal === false ? 'plz check internet connection' :
restaurantList.length === 0 ? <Shimmer/> :(
    
    <div className='restaurantCard container'>
        <div className="filter flex items-center">
            <div className='searchBar m-2 p-2'>
                <input type="text" className="searchInput border border-solid border-black" 
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className=" border-solid px-4 py-1 bg-gray-100 m-4" onClick={()=>{
                    const searchfilter = restaurantList.filter(restro => restro.info.name.toLowerCase().includes(searchText));
                    setfilteredRestro(searchfilter);
                }}>Search</button>
            </div>
            <div className="filterSection">
                <button className="filter-btn border-solid px-4 py-1 bg-gray-100 m-4"
                onClick={() => {
                    const filteredrestaurantList = restaurantList.filter(item => item.info.avgRating>4.5);
                    setRestaurantList(filteredrestaurantList)

                }
            }>TopRated</button>
            </div>
        </div>
        <div className='restroCards flex flex-wrap'>
            {filteredRestro.map(resItem =>(
            <Link  key={resItem.info.id} to={'/city/'+resItem.info.areaName+'/'+resItem.info.id}>
               {/**if restrocard labelisopen then show HOC*/
               resItem.info.isOpen ? <RestaurentOpen resData={resItem}/>:
                <RestroCards resData={resItem}/>
            }
            </Link>)
            )
        }
        </div>
    </div>
   
)
}

export default Main;