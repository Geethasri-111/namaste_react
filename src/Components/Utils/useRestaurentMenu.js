
import  {useEffect, useState} from 'react';
import { menu_api } from './constants';
const useRestaurentMenu = (resId)=> {

    const [resData,setRestroData] = useState(null);
    useEffect (() =>{
           fetchapi();
    },[]);

    const fetchapi = async() => {
        const fetchData = await fetch(menu_api+resId);
        const datajson = await fetchData.json();
        setRestroData(datajson.data);
    }
    return resData;

}

export default useRestaurentMenu;