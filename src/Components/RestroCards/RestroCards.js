

const RestroCards = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
    console.log(resData);
    return (
        <div className='restroCard'>
            <div className="res-logo">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="food"/>
            </div>
            <div className='card-details'>
            <h2 className="restroTitle">{name}</h2>
            <p>{cuisines.join(',')}</p>
            <h4>{avgRating} stars</h4>
            <p>{costForTwo}</p>
            <p>{resData.info.sla.deliveryTime} mts</p>
            </div>
            
        </div>
    ) 
}

export default RestroCards;