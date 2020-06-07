import React from 'react';
import whatsapp from '../../assets/images/whatsapp.svg'
function AnyQuestion(props){
    return(
        <div className="any-question">
            <p className="heading">Any Questions in mind?</p>
            <p className="sub-heading">Click here for quick support</p>
            <img src={whatsapp} alt="whatsapp" className="whatsapp"/>
        </div>
    );
}
export default AnyQuestion