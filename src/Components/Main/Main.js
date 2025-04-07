import RestroCards from "../RestroCards/RestroCards";
import restaurants from "../Utils/mockdata";

const Main =() =>{
return (
    <div className='restaurantCard'>
        <div className='search'>
            <input type="text" />
        </div>
        <div className='restroCards'>{                
            restaurants.map(resItem => <RestroCards key={resItem.info.id} resData={resItem}/> )
        }
        </div>
    </div>
)
}

export default Main;