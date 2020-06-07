import React from 'react'
import mobile from '../../assets/images/icon.svg'
import laptop from '../../assets/images/laptop.svg'
import monitor from '../../assets/images/monitor.svg'
import armchair from '../../assets/images/armchair.svg'
import microvawe from '../../assets/images/microwave.svg'

function RequestProduct(props){
    return(
        <div className="request-product">
            <p className="heading">Couldn't found what you are looking for?</p>
            <div className="icons">
                <img src={mobile} alt="mobile" />
                <img src={monitor} alt="monitor" />
                <img src={laptop} alt="laptop" />
                <img src={armchair} alt="armchair" />
                <img src={microvawe} alt="microwave" />
            </div>
            <button className="request-product-btn">Request product</button>
        </div>
    );
}

export default RequestProduct