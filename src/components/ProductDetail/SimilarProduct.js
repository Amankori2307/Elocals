import React from 'react'
import phone1 from '../../assets/images/phone1.png'
import phone2 from '../../assets/images/phone3.png'
import phone3 from '../../assets/images/phone4.png'
import phone4 from '../../assets/images/phone2.png'
import SimilarSingleProduct from './SimilarSingleProduct'
function SimilarProduct(props){
    const productList = [
        {
            imageURL:phone1,
            specs:"OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)",
            price:"23000",
            sellerName:"Aman kori Telecom"
        },
        {
            imageURL:phone2,
            specs:"OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)",
            price:"23500",
            sellerName:"Rajdeep Telecom"
        },
        {
            imageURL:phone3,
            specs:"OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)",
            price:"33000",
            sellerName:"Sanjeev moto"
        },
        {
            imageURL:phone4,
            specs:"OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)",
            price:"21500",
            sellerName:"Lucky Yo"
        }
    ]
    return (
        <div className="similar-products">
            <p className="heading">Similar products</p>
            <div className="products">
                {productList.map((product, index) => <SimilarSingleProduct key={index} product={product} />)}
            </div>
        </div>  
    );
}

export default SimilarProduct;