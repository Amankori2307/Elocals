import React from 'react'
import Review from './Review'
import { Link } from 'react-router-dom'

function Reviews(props){
    const total_reviews=24
    const reviews_list =[
        {   
            first_letter:"A",
            name:"Aman kori",
            text:"The product just received today. The item sold by Supercomnet says 10 day replacement. But after delivery the return option is withdrawn from details of order and says if any problem arises contact local Apple service centre. It is a clear fraud for the customers who buy such a high priced handset. Customer be careful about that. My set is running fine but it is not my question.Why an online store like Flipkart close the option of return without informing the customer?",
            rating:5,
            place:'Lal magal pune',
            time:"1 weak ago"
        },

        {   
            first_letter:"R",
            name:"Rohit kumar",
            text:"The product just received today. The item sold by Supercomnet says 10 day replacement. But after delivery the return option is withdrawn from details of order and says if any problem arises contact local Apple service centre. It is a clear fraud for the customers who buy such a high priced handset. Customer be careful about that. My set is running fine but it is not my question.Why an online store like Flipkart close the option of return without informing the customer?",
            rating:4,
            place:'Lal magal pune',
            time:"2 weak ago"
        }
    ]
    return(
        <div className="product-reviews">
            <p className="total-reviews">{total_reviews} Reviews</p>
            <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star white"></i>
            </div>
            {reviews_list.map((review, index) => <Review key={index} review={review}/>)}   
            <div  className="see-more">
                <Link to="#">See more</Link>
            </div>
        </div>
    );
}
export default Reviews