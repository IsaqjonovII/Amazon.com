import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Product = ({ data, object }) => {
  return (
    <div className="container">
      <div className="product">
        <h1>{data?.title}</h1>
        <img src={data?.imageURL} alt="" />
        <Link className="product_link" to={data?.linkRoute}>
          {data?.linkName}
        </Link>
      </div>
      {data.four?.map((product) => (
        <div className="product2">
          <h1>{product?.title}</h1>
          <div className="four">
            {product.imageObject?.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
          <Link className="product_link" to={product?.linkRoute}>
            {data?.linkName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
