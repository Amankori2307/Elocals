import React from 'react'
import Seller from './Seller';

function SellerList({sellerList}){
    return (
        <div className="seller-list">
            <div className="titles">
                <div className="seller-list-col-1">Seller Information</div>
                <div className="seller-list-col-2">Price and Offers</div>
            </div>
            <hr/>
            <div className="list">
                {sellerList.map((seller, index) => <Seller key={index}seller={seller}/>)}
            </div>
        </div>
    );
}

export default SellerList