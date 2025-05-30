import { useState ,useContext} from "react";
import { logo_url } from "../Utils/constants";
import { Link } from "react-router";
import UserContext from "../Utils/UserContext";
import useStatus from "../Utils/useStatus";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnAuth,setBtnAuth] = useState('Login');
    const {loggedUser}= useContext(UserContext);
    const online = useStatus();
//subscribing to storeusingselector
    const countOfItems = useSelector();


    return (
        <div className='header flex justify-between mb-2 border-b border-gray-950/5 dark:border-white/10'>
            <div className='logo'>
                <img src={logo_url} className="w-48"/>
            </div>
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4">{online ? 'Online' : 'offLine'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>

                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart(0 items)</li>
                    <li className="font-bold px-4">{loggedUser}</li>
                    <button className="login-btn" onClick={()=>btnAuth === 'Login'?setBtnAuth('Logout'):  setBtnAuth('Login')}>{btnAuth}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;