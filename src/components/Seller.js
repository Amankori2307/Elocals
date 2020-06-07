import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import Navbar from './Seller/Navbar';
import Buttons from './Seller/Buttons'
import SellerList from './Seller/SellerList';
import phone from '../assets/images/Bitmap.png'
function Seller(props){
    const [sellerList, setSellerList] = useState(null);
    useEffect(() => {
        Axios.get('http://35.225.50.138:9091/otherSellers?productId=9&variantId=6')
        .then(res => {
            setSellerList(res.data.otherSellerList)
        })
        .catch(err => console.log(err))      
    },[])
    return (
        <div>
            <Navbar />
            <div className="return-to-product">
                <div className="text">&lt; Return to product</div>
                <div>
                    <img src={phone}alt="phone"/>
                    <span>OnePlus 7 Pro (Almond, 8GB RAM, 128 GB)</span>
                </div>
            </div>
            {sellerList && <SellerList sellerList={sellerList}/>}
            <Buttons />
        </div>
    );
}

export default Seller