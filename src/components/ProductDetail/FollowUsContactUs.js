import React from 'react'
import pune from '../../assets/images/Group 10181.svg'
import cities from '../../assets/images/3.png'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/Instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import linkedin from '../../assets/images/linkedin.svg'
import tumblr from '../../assets/images/tumblr.svg'
import googleMyBusiness from '../../assets/images/google-my-business.svg'
import westernUnion from '../../assets/images/Western-union.svg'
import group19 from '../../assets/images/Group 19.svg'
import paypal from '../../assets/images/Paypal.svg'
import visa from '../../assets/images/Group 12475.svg'



function FollowUsContactUs(props){
    return (
        <div className="follow-us-contact-us-container">
            <div className="col-1">
                <img className="cities-img"src={cities} alt="" />
                <p className="cities-we-are-in">Cities we are in</p>
                <img src={pune} className="pune" alt="pune" />
            </div>
            <div className="col-2">
                <div className="row-1">
                    <div className="follow-us">
                        <p className="heading">Follow Us</p>
                        <p className="text">We are driven by the excitement of building technologies, inventing products, and providing services that change our local shopping experience.</p>
                        <div className="social-media">
                            <img src={facebook} className="social-media-icon" alt="facebook" />
                            <img src={twitter} className="social-media-icon" alt="twitter" />
                            <img src={instagram} className="social-media-icon" alt="instagram" />
                            <img src={youtube} className="social-media-icon" alt="youtube" />
                            <img src={linkedin} className="social-media-icon" alt="linkedin" />
                            <img src={tumblr} className="social-media-icon" alt="tumblr" />
                            <img src={googleMyBusiness} className="social-media-icon" alt="googleMyBusiness" />
                        </div>
                    </div>
                    <div className="contact-us">
                        <p className="heading">Contact Us</p>
                        <p className="text">
                            Location: Pune, Maharashtra <br />
                            Phone: +91 7004831994 <br/>
                            Email: digitalservices@elocals.in
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row-2">
                    <div className="useful-links link-list">
                        <p className="heading">Useful Links</p>
                        <p className="link">About us</p>
                        <p className="link">Contact us</p>
                        <p className="link">Sitemap</p>
                    </div>
                    <div className="services link-list">
                        <p className="heading">Services</p>
                        <p className="link">Payment</p>
                        <p className="link">Shipping</p>
                        <p className="link">Cancellation</p>
                    </div>
                    <div className="information link-list">
                        <p className="heading">Information</p>
                        <p className="link">FAQ</p>
                        <p className="link">Privacy Policiy</p>
                        <p className="link">Terms &amp; Conditions</p>
                    </div>
                </div>
                <div className="row-3">
                    <p>© Locals Digital Services Pvt. Ltd. | ALL RIGHTS RESERVED</p>
                    <div>
                        <img src={westernUnion} className="" alt="westernUnion" />
                        <img src={group19} className="" alt="group19" />
                        <img src={paypal} className="" alt="paypal" />
                        <img src={visa} className="" alt="visa" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowUsContactUs