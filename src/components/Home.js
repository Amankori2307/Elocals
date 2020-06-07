import React from 'react'
import logo from '../assets/images/E-Commerce-Logo-1.png'
import {Link} from 'react-router-dom'
function Home(props){
    return (
        <div id="home">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Link to="/product" className="product-detail">Product Detail</Link>
            <Link to="/seller" className="seller">Seller</Link>
        </div>
    );  
}
export default Home;