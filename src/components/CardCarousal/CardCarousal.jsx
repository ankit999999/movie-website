import React from "react";

import Card from "../card/Card";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import classes from "./CardCarousal.module.scss";

const CardCarousal = ({ dataList, heading }) => {
  const box = document.getElementsByClassName(classes["card-carousal"]);
  // console.log(box);
  const backScroll = () => {
    const width = box[0].clientWidth;
    box[0].scrollLeft -= width;
  };
  const forwardScroll = () => {
    const width = box[0].clientWidth;
    box[0].scrollLeft += width;
  };

  return (
    <div className={classes["card-carousal-container"]}>
      <h1 className={classes.heading}>{heading}</h1>

      <BsArrowLeftCircleFill
        onClick={backScroll}
        className={`${classes.arrow} ${classes["arrow-left"]}`}
      />
      <BsArrowRightCircleFill
        onClick={forwardScroll}
        className={`${classes.arrow} ${classes["arrow-right"]}`}
      />

      <div className={classes["card-carousal"]}>
        {dataList.map((data, idx) => {
          return <Card data={data} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default CardCarousal;
