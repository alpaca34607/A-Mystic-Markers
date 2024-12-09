import React, { useState } from "react";
import "../../css/carousel.css";

const images = [
  "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
];

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - selectedIndex + images.length) % images.length;

    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };

  return (
    <main>
      <div id="carousel">
        {images.map((src, index) => (
          <div className={getClassName(index)} key={index}>
            <img src={src} alt={`Carousel item ${index}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="icon-btn" onClick={() => moveToSelected("prev")}><img src="/images/arrow_L.svg" alt="prev" className='icon-img'/></button>
        <button className="icon-btn"onClick={() => moveToSelected("next")}><img src="/images/arrow_R.svg" alt="next" className='icon-img' /></button>
      </div>
    </main>
  );
};

export default Carousel;
