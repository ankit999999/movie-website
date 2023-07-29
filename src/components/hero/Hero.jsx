import React, { useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import classes from "./hero.module.scss";
import apiConfig from "../../api/apiConfig";

const Hero = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={classes.carousel}>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${classes.arrow} ${classes["arrow-left"]}`}
      />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={
              slide === idx
                ? classes["slide-container"]
                : `${classes["slide-container"]} ${classes["slide-hidden"]}`
            }
          >
            <div className={classes["slide-description"]}>
              <h1 className={classes["slide-title"]}>{item.original_title}</h1>
              <p>{item.overview}</p>
            </div>
            <img
              src={apiConfig.originalImage(item.backdrop_path)}
              alt={item.original_title + "background image"}
              className={classes.slide}
            />
            <img
              src={apiConfig.originalImage(item.poster_path)}
              alt={item.original_title + "poster"}
              className={
                slide === idx
                  ? `${classes["slide"]} ${classes["floating-poster"]}`
                  : `${classes["slide"]} ${classes["floating-poster"]} ${classes["slide-hidden"]}`
              }
            />
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${classes.arrow} ${classes["arrow-right"]}`}
      />
      <span className={classes.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? classes["indicator"]
                  : `${classes["indicator"]} ${classes["indicator-inactive"]}`
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Hero;
