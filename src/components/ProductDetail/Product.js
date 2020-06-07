import React from 'react'
import checkbox from '../../assets/images/check_box-24px.svg'
import share from '../../assets/images/share.svg'
import whishlist from '../../assets/images/wishlist.svg'
import phone2 from '../../assets/images/Bitmap-2.png'
import phone3 from '../../assets/images/Bitmap-3.png'
import phone5 from '../../assets/images/Bitmap-5.png'
import phone6 from '../../assets/images/Bitmap-6.png'
import store from '../../assets/images/store.png'
import seller from '../../assets/images/Seller.svg'
import buy_now from '../../assets/images/instant book.svg'
import cart from '../../assets/images/cart.svg'
import pickup from '../../assets/images/pickup.svg'
import calendar from '../../assets/images/Calendar delivery.svg'
import icon1 from '../../assets/images/group-26@3x.png'
import icon2 from '../../assets/images/group-27@3xxx.png'
import icon3 from '../../assets/images/group-21@3x.png'
import icon4 from '../../assets/images/group-28@3x.png'

import color1 from '../../assets/images/Mask Group 9.png'
import color2 from '../../assets/images/Mask Group 10.png'
// import from '../../assets/images/'
// import from '../../assets/images/'

function Product(props){
    return (
        <div className="product-section">
            <div className="navigation">
                <p>Home &gt; Mobiles &gt;</p>
                <div>
                    <img src={checkbox} alt="checkbox"/>
                    Add to compare
                </div>              
            </div>
            <div className="row">
                <div className="col-1">
                    <div className="row-1">
                        <img src={share} className="" alt="share" />
                        <img src={whishlist} className="" alt="whishlist" />
                       
                    </div>
                    <div className="row-2">
                        <div className="more-images">
                            <img src={phone2} className="" alt="phone2" />
                            <img src={phone3} className="" alt="phone3" />
                            <img src={phone2} className="" alt="phone4" />
                            <img src={phone5} className="" alt="phone5" />
                            <p className="p1">5+</p>
                            <p className="p2">more</p>
                        </div>
                        <div className="product-image">
                            <img src={phone6} className="" alt="phone6" />
                        </div>
                    </div>
                    <div className="row-3">
                        <div className="seller-info">
                            <img src={store} alt="store" />
                            <div>
                                <p>Seller</p>
                                <p>Rajdeep Telecom</p>
                            </div>
                        </div>
                        <div className="more-sellers">
                            View more sellers(7) 
                            <img src={seller} alt="seller" />
                            
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="row-1">
                        <p className="">OnePlus 7 Pro (Almond, 8GB RAM, 128 GB)</p>
                        <ul>
                            <li className="">8 GB RAM | 128 GB ROM</li>
                            <li className="">16.64 cm (6.55 inch) Display</li>
                            <li className="">48 MP + 12 MP + 16 MP | 16MP Front Camera</li>
                            <li className="">3800 mAh Battery</li>
                            <li className="">Qualcomm® Snapdragon™ 855 Plus Processor</li>
                        </ul>
                    </div>
                    <div className="row-2">
                        <p>Color</p>
                        <img src={color1} alt="color1" className="" />
                        <img src={color2} alt="color2" className="" />
                        <p>Quantity</p>
                           <input type="number" readOnly value="1" />
                    </div>
                    <div className="row-3">
                        <span>&#8377;7,490</span>
                        <span>&#8377;10,490</span>
                        <span>30% off</span>
                    </div>
                    <div className="row-4">
                        Inclusive of all taxes
                    </div>
                    <div className="row-5">
                        <span>Delivery in 24 hrs</span>
                        <span>EMI options available</span>
                        <span>Pay later</span>
                    </div>
                    <div className="row-6">
                        <button className="btn buy-now">
                            <img src={buy_now} className="" alt=""/>
                            <span>Buy Now</span>
                        </button>
                        <button className="btn">
                            <img src={cart} className="" alt=""/>
                            Add to Cart
                        </button>
                        <button className="btn">
                            <img src={pickup} className="" alt=""/>
                            Pickup from store
                        </button>
                        <button className="btn">
                            <img src={calendar} className="" alt=""/>
                            Calendar delivery
                        </button>
                    </div>
                    <div className="row-7">
                        <div className="item">
                            <img src={icon1} alt="icon1" />
                            <div>
                                <p>Shipping fee</p>
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={icon2} alt="icon2" />
                            <div>
                                <p>Best price</p>
                                <p>Always</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={icon3} alt="icon3" />
                            <div>
                                <p>Pickup Service</p>
                                <p>One Hour</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={icon4} alt="icon4" />
                            <div>
                                <p>Request your product</p>
                                <p>Get Anything</p>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    );
}

export default Product