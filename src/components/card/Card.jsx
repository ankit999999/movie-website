import React from "react";

import { genreType } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

import classes from "./card.module.scss";

const Card = ({ data }) => {
  const genre = [];
  data.genre_ids.slice(0, 2).map((item) => {
    if (genreType[item]) genre.push(genreType[item]);
    else genre.push("Unknown");
  });

  return (
    <figure className={classes["card-container"]}>
      <img src={apiConfig.originalImage(data.poster_path)}></img>
      <figcaption direction="left">
        {data.title ? data.title : data.original_name}
      </figcaption>
      <br />
      <figcaption>
        {data.release_date ? data.release_date : data.first_air_date}
      </figcaption>
    </figure>
  );
};

export default Card;
