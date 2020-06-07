import React from 'react'

function Review({review}){
    const {name, text, rating, place, time} = review
    return(
        <div className="review">
            <div className="profile">{name[0]}</div>
            <div className="review-body">
                <p className="review-text">
                    {text}
                </p>
                <div className="review-details">
                    <div>
                        <div className="name">{name}</div>
                        <div className="rating">
                            {rating}
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="place">{place}</div>
                    </div>
                    <div className="time">{time}</div>
                </div>
            </div>
        </div>
    );
}
export default Review