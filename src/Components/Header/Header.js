import { useState } from "react";
import { logo_url } from "../Utils/constants";

const Header = () => {
    const [btnAuth,setBtnAuth] = useState('Login');
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo_url}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Cart</a></li>
                    <button className="login-btn" onClick={()=>btnAuth === 'Login'?setBtnAuth('Logout'):  setBtnAuth('Login')}>{btnAuth}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;