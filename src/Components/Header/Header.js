import { useState } from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router";

const Header = () => {
    const [btnAuth,setBtnAuth] = useState('Login');
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo_url}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>

                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>btnAuth === 'Login'?setBtnAuth('Logout'):  setBtnAuth('Login')}>{btnAuth}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;