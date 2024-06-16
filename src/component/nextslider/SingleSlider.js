import React, { useEffect, useState } from "react";
import Card from "../Card";
import Slider from "react-slick";
const SingleSlider = () => {
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
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (

    <div>
      <div className="container">
        <Slider {...settings} style={{ width: "500px", float: "left" }}>
          {reviews.map(review => (
            <Card key={review._id} reviews={[review]} />
          ))}
        </Slider>
      </div>
      <div>
        <div class="rightContainer">
          <div class="tutorial">Free tutorial</div>
          <div class="thousand">
            More than thousand
            <br />
            of free tutorial upload
            <br />
            every weeks
          </div>
          <div class="para">
            Get your tests delivered at let home collect sample from the victory of the
            managments that supplies best design system guidelines ever. Get your tests
            delivered at let home collect sample.
          </div>
          <div class="details">Explore details</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlider;


