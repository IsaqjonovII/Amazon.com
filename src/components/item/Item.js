import React from "react";
import "./Item.css";
import Rating from "./Rating";

const Item = ({ data }) => {
  console.log(data);
  return (
    <div className="item">
      <img className="item_image" src={data.image[0].url} alt="" />

      <div className="item_info">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className="rating">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default Item;
