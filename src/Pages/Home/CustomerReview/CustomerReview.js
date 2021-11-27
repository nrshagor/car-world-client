import React, { useEffect, useState } from 'react';
import { Rating, RatingView } from 'react-simple-star-rating';
import './CustomerReview.css'
const CustomerReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://nameless-inlet-63373.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data.slice(0, 6)));

    }, []);
    return (
        <div>
            <section>
                <div className="review">
                    <h1>Review</h1>
                    <div className="review-card-body">

                        {review.map(review =>
                            <div className="review-card">

                                <div className="review-info">
                                    <h1> {review.customerName}</h1>
                                    <p>{review.comment}</p>
                                    <RatingView ratingValue={review.rating} />
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerReview;