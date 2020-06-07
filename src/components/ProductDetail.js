import React from 'react'
import Navbar from './ProductDetail/Navbar'
import Reviews from './ProductDetail/Reviews'
import AnyQuestion from './ProductDetail/AnyQuestion'
import FollowUsContactUs from './ProductDetail/FollowUsContactUs'
import RequestProduct from './ProductDetail/RequestProduct'
import SimilarProduct from './ProductDetail/SimilarProduct'
import SpecificationDescription from './ProductDetail/SpecificationDescription'
import Product from './ProductDetail/Product'

function ProductDetail(props){
    return (
        <div>
            <Navbar />
            <Product />
            <SpecificationDescription />
            <Reviews />
            <SimilarProduct />
            <RequestProduct />
            <AnyQuestion />
            <FollowUsContactUs />
        </div>
    );
}

export default ProductDetail