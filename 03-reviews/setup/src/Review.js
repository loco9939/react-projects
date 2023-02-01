import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (num) => {
    if (num < 0) return people.length - 1;
    if (num > people.length - 1) return 0;
    return num;
  };

  const prevPerson = () =>
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });

  const nextPerson = () =>
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });

  const randomPerson = () => {
    let randomNum = parseInt(Math.random() * people.length);
    if (randomNum === index) randomNum += 1;
    setIndex(checkIndex(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise Me</button>
    </article>
  );
};

export default Review;
