import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import classes from "./details.module.scss";

const Details = ({ category, Id }) => {
  const [showData, setShowData] = useState({});
  useEffect(() => {
    const getItemData = async () => {
      try {
        const response = await tmdbApi.detail(category, Id, {
          params: {},
        });
        console.log(response);
        setShowData(response);
      } catch (err) {
        console.log("error in Details.jsx");
      }
    };
    getItemData();
  });

  return <></>;
};

export default Details;
