import React ,{useState}from 'react'
import Specification from './Specification';
import Description from './Description';

function SpecificationDescription(props){
    const [specs, setSpecs] = useState(true)
    const style={
        color: "#0F5EEA",
        opacity: 1,
        borderBottom:"3px solid #0F5EEA"
    }

    return(
        <div className="specification-description">
            <div className="menu">
                <p className="specification-op" style={specs?style:null} onClick={() => setSpecs(true)}>Specification</p>
                <p className="description-op" style={!specs?style:null} onClick={() => setSpecs(false)}>Description</p>
            </div>
            {specs?<Specification />:<Description />}
        </div>
    );
}   
export default SpecificationDescription