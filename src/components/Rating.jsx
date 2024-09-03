import React, { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Rating = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isRatingPage, setIsRatingPage] = useState(true);
  const handleRating = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleHover = (starIndex) => {
    setHover(starIndex + 1);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("You have'nt give rating yet");
      setIsRatingPage(true);
    } else {
      setIsRatingPage(false);
    }
  };
  return (
    <>
      {isRatingPage ? (
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
                className={`stars ${
                  index < (hover || rating) ? "active" : "inactive"
                }`}
                key={index}
                onClick={() => handleRating(index)}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>
          <button className="submit__btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="result__container">
          <p className="result">you selected {rating} out of 5</p>
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

export default Rating;
