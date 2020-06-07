import React from 'react'
function Seller({seller}){
    const {elocalsPrice, sellerPrice} = seller;
    const sellerDetails = seller.sellerDetails
    return(
            <div className="seller">
                <div className="seller-list-col-1">
                    <div className="circle">
                        <div className="inner-circle"></div>
                    </div>
                    <img src={sellerDetails.sellerResources[0].resourceURL} alt="seller"/>
                    <div className="seller-details">
                        <p className="name">{sellerDetails.name}</p>
                        <p className="city">{sellerDetails.city}</p>
                        <p className="distance">1.1km</p>
                    </div>
                    <div className="rating">
                        <div>
                            4.5
                            <i className="fas fa-star"></i>
                            
                        </div>
                    </div>
                </div>
                <div className="seller-list-col-2">
                    <div className="elocals-price">{elocalsPrice}</div>
                    <div className="seller-price">{sellerPrice}</div>
                    <div className="discount">30% off</div>
                </div>
            </div>
    );
}
export default Seller