import React from 'react'
import {Link} from 'react-router-dom'
function Specification({specs}){
    return (
        <div className="specification">
            <div>
                <p>OS</p>
                <p>Android Oreo 8.1</p>
            </div>
            <div>
                <p>Item Weight</p>
                <p>163g</p>
            </div>
            <div>
                <p>Product Dimentions</p>
                <p>16.5 x 0.8 x 7.7cm</p>
            </div>
            <div>
                <p>Batteries</p>
                <p>1 Lithium Polymer batteries required. (included)</p>
            </div>
            <div>
                <p>Wireless communication technologies</p>
                <p>Bluetooth, WiFi Hotspot</p>
            </div>
            <Link className="see-more"to="#">See more</Link>
        </div>
    );
}

export default Specification