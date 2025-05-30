import { cdn_url } from "../Utils/constants";


const RestroCards = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;

    return (
        <div className='restroCard m-2 p-2 w-[250px] gap-3 bg-gray-50'>
            <div className="res-logo rounded-sm">
                <img src={cdn_url+cloudinaryImageId} alt="food"/>
            </div>
            <div className='card-details'>
            <h2 className="restroTitle font-bold">{name}</h2>
            <p>{cuisines.join(', ')}</p>
            <h4>{avgRating} stars</h4>
            <p>{costForTwo}</p>
            <p>{sla.slaString}</p>
            </div>
            
        </div>
    ) 
}
//Higher Order Components
export const withOpen = (RestroCards) => {
    return (props) => {
        return (<div>
            <label className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 absolute">Open</label>
            <RestroCards {...props}/>
        </div>
        )
    }
}

export default RestroCards;