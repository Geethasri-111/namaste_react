import { useState } from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router";

const Header = () => {
    const [btnAuth,setBtnAuth] = useState('Login');
    return (
        <div className='header flex justify-between mb-2 border-b border-gray-950/5 dark:border-white/10'>
            <div className='logo'>
                <img src={logo_url} className="w-48"/>
            </div>
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>

                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={()=>btnAuth === 'Login'?setBtnAuth('Logout'):  setBtnAuth('Login')}>{btnAuth}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;