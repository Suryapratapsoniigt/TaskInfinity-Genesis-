
import React from 'react';

const Card = ({ reviews }) => {
    console.log(reviews, "reviews")
    return (
        <div className="container">
            <div className="cards">
                {reviews?.map(review => (
                    <div className="card" key={review._id}>
                        <div className="card__img">
                            <img src={`/Img/fd4713573eb1f512db73e9a36eb8f117.jpeg`} alt={review.title} width="100" />
                        </div>
                        <div className="cart__content">
                            <div className="div-23">
                                <div className="div-24">
                                    <div className="customer_review">
                                        {[...Array(Math.floor(review.stars))].map((_, i) => (
                                            <i className="fa-solid fa-star" key={i}></i>
                                        ))}
                                    </div>
                                    <div className="customer_review">{review.stars}</div>
                                    <div className="customer_review">({review.review} reviews)</div>
                                </div>
                                <div className="div-27">
                                    {review.title}
                                </div>
                                <div className="div-28">
                                    <img loading="lazy" alt="" src="/Img/29240d1bdc942e50c1daf19a7ae78a78649c2c0919ed18e5a46c7ad0997a69b7.svg" className="img-4" />
                                    <div className="div-29">{review.studentsWatched} students watched</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
