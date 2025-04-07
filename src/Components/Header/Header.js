import { logo_url } from "../Utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;