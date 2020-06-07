import React from 'react'

function SimilarSingleProduct({product}){
    const {imageURL,specs, price, sellerName} = product
    return (
        <div  className="product">
            <div>
                <img src={imageURL} alt="phone"></img>
            </div>
            <p className="specs">{specs}</p>
            <p className="price">&#8377; {price}</p>
            <p className="seller">Seller</p>
            <p className="name">{sellerName}</p>
        </div>  
    );
}

export default SimilarSingleProduct;