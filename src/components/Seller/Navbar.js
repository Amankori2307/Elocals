import React from 'react'
import logo from '../../assets/images/E-Commerce-Logo-1.png'
import pin from '../../assets/images/pin.svg'
import { Link } from 'react-router-dom'
function Navbar(props){
    return(
        <div id="seller-navbar">
            <img src={logo} className="logo" alt="logo"/>
            <div className="links" >
                <Link to="#" className="link banglore">
                    <img src={pin} className="pin" alt="pin"/>
                    Banglore
                </Link>
                <Link to="#" className="link become-seller">Become Seller</Link>
                <Link to="#" className="link login">Login</Link>
                <Link to="#" className="link signup">Signup</Link>
            </div>
        </div>
    );
}

export default Navbar