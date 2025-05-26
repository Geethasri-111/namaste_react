import React,{Suspense, lazy, useEffect, useState} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './Components/Header/Header';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router';
import About from './Components/About/About';
import Main from './Components/Main/Main';
import ContactUs from './Components/ContactUs/ContactUs';
import RestaurentMenu from './Components/RestaurentMenu/RestaurentMenu';
import Shimmer from './Components/Shimmer/Shimmer';
import UserContext from './Components/Utils/UserContext';


const Grocery = lazy(() => import('./Components/Grocery/Grocery.js'))
const App = () => {
    const [userName,setUserName] = useState('');
    useEffect(()=>{
        //api call
        const data = {
            name:'geetha'
        }
        setUserName(data.name);
    },[])
    return (
        <UserContext.Provider value={{loggedUser:userName,setUserName}}>
             <div className="App">
                    <Header/>
                    <Outlet/>          
                    
                </div>
        </UserContext.Provider>
       
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/Grocery" element={<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/city/:cityName/:resId" element={<RestaurentMenu/>}/>
        </Route>
    </Routes>
    </BrowserRouter>);
