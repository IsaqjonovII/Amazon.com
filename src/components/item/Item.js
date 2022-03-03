import React from "react";
import "./Item.css";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';

const Item = ({ data }) => {
  console.log(data);
  return (
    <div className="item">
      <img className="item_image" src={data.image[0].url} alt="" />

      <div className="item_info">
        <h1 className="info_title">{data.name}</h1>
        <p>{data.description}</p>
        <div className="info_ratings">
        <div className="stars">
        {
          new Array(Math.floor(data.ratings)).fill().map(i => 
            <p><FaStar/></p>  
          )
        }
        {
          data.ratings % 1 !== 0 && <p><FaStarHalfAlt/></p>
        }
        </div>
          <div className="ratings_anime">
          <div className="stars">
        {
          new Array(Math.floor(data.ratings)).fill().map(i => 
            <p><FaStar/></p>
          )
        }
        {
          data.ratings % 1 !== 0 && <p><FaStarHalfAlt/></p>
        }
        </div>
          <p>12094 global ratings</p>
          <ul className="anime_collection">
            <li><p>5 stars </p><div className="ul_percent"></div> <p>85%</p></li>
            <li><p>4 stars</p> <div className="ul_percent"></div><p>85%</p></li>
            <li><p>3 stars</p> <div className="ul_percent"></div> <p>85%</p></li>
            <li><p>2 stars</p> <div className="ul_percent"></div> <p>85%</p></li>
            <li> <p>1 star </p><div className="ul_percent"></div> <p>45%</p></li>
          </ul>

          <a href="#customerReviews">See all customer reviews <HiChevronRight /> </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Item;