import React from 'react'
import logo from '../../assets/images/E-Commerce-Logo-1.png'
import pin from '../../assets/images/pin.svg'
import profile from '../../assets/images/profile.jpeg'
import shopping_bag from '../../assets/images/shopping_bag.svg'
import { Link } from 'react-router-dom'
function Navbar(props){
    return(
        <div id="product-navbar">
            <img src={logo} className="logo" alt="logo"/>
            <div className="links" >
                <Link to="#" className="link banglore">
                    <img src={pin} className="pin" alt="pin"/>
                    Banglore
                </Link>
                <Link to="#" className="link shopping-bag">
                    <img src={shopping_bag} alt="shopping_bag"/>
                </Link>
                <Link to="#" className="link profile">
                    <img src={profile} alt="profile"/>
                </Link>
            </div>
        </div>
    );
}

export default Navbar