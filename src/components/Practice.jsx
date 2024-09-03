import React, { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Practice = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [ratingCard, setRatingCard] = useState(true);
  const [hover, setHover] = useState(null);
  const handleRating = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("You have'nt given any rating yet.");
      setRatingCard(true);
    } else {
      setRatingCard(false);
    }
  };

  const handleMouseHover = (starIndex) => {
    setHover(starIndex);
  };
  return (
    <>
      {ratingCard ? (
        <div className="rating__container">
          <span>
            <FaStar className="star__icon" />
          </span>
          <h1 className="heading">How did we do?</h1>
          <p className="msg">
            Please let us know how we did with your <br /> support request. All
            feedback is appreciated <br /> to help us improve our offering!
          </p>
          <div className="star__container">
            {[...Array(numberOfStars)].map((_, index) => (
              <FaStar
                className={`stars ${index < (rating || hover) ? "active" : ""}`}
                key={index}
                onClick={() => handleRating(index)}
                onMouseEnter={() => handleMouseHover(index)}
                onMouseLeave={() => setHover(null)}
              />
            ))}
          </div>
          <button className="submit__btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="result__container">
          <p className="result">
            you selected {rating} out of {numberOfStars} stars.
          </p>
          <h1 className="heading">Thank You!</h1>
          <p className="result__msg">
            We appriciate you taking the time to give a rating. If you ever need
            more support. don't hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
};

export default Practice;
