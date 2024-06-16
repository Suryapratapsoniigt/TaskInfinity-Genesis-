
// SliderImg.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";

const SliderImg = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/user/reviews`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('There was an error fetching the reviews!', error);
            }
        };

        fetchReviews();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className="TopCard">
            <div className="content">
                <div className="sc-kOPcWz dedXvX">
                    <div className="sc-cWSHoV dEoCtT">
                        <h6 className="head6">Quality features</h6>
                        <h2 className="head2 title">Tutorials that people love most</h2>
                        <div className="sc-aXZVg kdMXvo"></div>
                    </div>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {reviews.map(review => (
                            <Card key={review._id} reviews={[review]} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SliderImg;
