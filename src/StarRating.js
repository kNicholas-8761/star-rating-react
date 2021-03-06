import React, { useState } from "react";
import * as bsIcons from "react-icons/bs";
import { ImAngry } from "react-icons/im";
import * as faIcons from "react-icons/fa";

import "./App.scss";
import "./StarRating.scss";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [isRated, setIsRated] = useState(false);
  const [feedback, setFeedback] = useState("");

  const messages = {
    1: "I just hate it ",
    2: "I dont like it ",
    3: "It is awesome ",
    4: "I just like it ",
    5: "I just love it ",
  };

  const icons = {
    1: <ImAngry size="30" />,
    2: <faIcons.FaRegAngry size="30" />,
    3: <faIcons.FaRegLaughBeam size="30" />,
    4: <faIcons.FaRegSmileWink size="30" />,
    5: <faIcons.FaGrinHearts size="30" />,
  };

  return (
    <div className="container flex-col">
      {isRated ? (
        <div className="post">
          <div className="edit-btn" onClick={() => setIsRated(false)}>
            EDIT
          </div>
          <header className="text">Thanks for rating!</header>
        </div>
      ) : (
        <form className="flex-col">
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <bsIcons.BsFillStarFill
                      className="star"
                      size="60"
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                </div>
              );
            })}
          </div>
          {rating ? (
            <>
              <div className="flex">
                <header>
                  {messages[rating]}
                  <span className="expression">{icons[rating]}</span>
                </header>
              </div>
              <div className="textarea">
                <textarea
                  type="text"
                  cols="30"
                  placeholder="Describe youe experience..."
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                />
              </div>
              <div className="btn">
                <button onClick={() => setIsRated(true)}>POST</button>
              </div>
            </>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default StarRating;
