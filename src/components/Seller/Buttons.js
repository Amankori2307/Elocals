import React from 'react'
import buy_now from '../../assets/images/instant book.svg'
import cart from '../../assets/images/cart.svg'
import pickup from '../../assets/images/pickup.svg'
import calendar from '../../assets/images/Calendar delivery.svg'

function Buttons(props){
    return (
        
        <div className="seller-buttons">
            <button className="button buy-now">
                <img src={buy_now} className="" alt=""/>
                <span>Buy Now</span>
            </button>
            <button className="button">
                <img src={cart} className="" alt=""/>
                Add to Cart
            </button>
            <button className="button">
                <img src={pickup} className="" alt=""/>
                Pickup from store
            </button>
            <button className="button">
                <img src={calendar} className="" alt=""/>
                Calendar delivery
            </button>
        </div>
    );
}
export default Buttons