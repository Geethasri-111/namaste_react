import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './Components/Header/Header';
import { BrowserRouter,Outlet,Route,Routes } from 'react-router';
import About from './Components/About/About';
import Main from './Components/Main/Main';
import ContactUs from './Components/ContactUs/ContactUs';
import RestaurentMenu from './Components/RestaurentMenu/RestaurentMenu';



const App = () => {
    return (
        <div className="App">
            <Header/>
           <Outlet/>          
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/city/:cityName/:resId" element={<RestaurentMenu/>}/>
        </Route>
    </Routes>
    </BrowserRouter>);
