import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import { useParams } from "react-router-dom";
import axios from "../../api/products";
import { BiLoaderAlt, BiChevronLeft } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ZoomImage from "../../components/zoom-image/ZoomImage";

const ProductInfo = () => {
  const [overflow, setOverflow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [previewImage, setPreviewImage] = useState(0);
  const [productInfo, setProductInfo] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`allproducts/${params.productId}`)
      .then((specificProduct) => {
        setProductInfo(specificProduct.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.productId]);

  const getPositionOfMouse = (e) => {
    setX(e.pageX - e.target.offsetLeft);
    setY(e.pageY - e.target.offsetTop);
  };
  return (
    <div className="product-info">
      <div className="product-info_header"></div>
      <p className="back_result">
        <BiChevronLeft />
        Back to result
      </p>

      {isLoading ? (
        <div className="loader">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="image_wrapper">
            <div className="fetch_image">
              <div className="preview_images">
                {productInfo?.image.map((img, index) => (
                  <img
                    style={
                      previewImage === index
                        ? { boxShadow: "0px 0px 5px orange" }
                        : { boxShadow: "0px 0px 5px transparent" }
                    }
                    onMouseOver={() => setPreviewImage(index)}
                    src={img?.url}
                    alt=""
                  />
                ))}
              </div>
              <div className="image__wrapperzoom">
                <img
                  onMouseMove={getPositionOfMouse}
                  className="iphone_first_image"
                  onMouseOver={() => setOverflow(false)}
                  onMouseOut={() => setOverflow(true)}
                  src={productInfo?.image[previewImage].url}
                  alt=""
                />
              </div>
              <div
                className="prev"
                style={
                  overflow
                    ? {
                        position: "absolute",
                        left: `${x - 180}px`,
                        top: `${y}px`,
                        transition: "0.1s",
                        display: "none",
                      }
                    : {
                        position: "absolute",
                        left: `${x - 260}px`,
                        top: `${y}px`,
                        transition: "0.1s",
                        display: "flex",
                      }
                }
              ></div>
            </div>
            <div className="product_description">
              <h1>{productInfo?.description}</h1>
              <ZoomImage
                left={x}
                overflow={overflow}
                top={y}
                image={productInfo?.image[previewImage].url}
              />
            </div>
            <div className="see_all">
              <button className="see_all_btn">See All Buying Options</button>
              <p>
                {" "}
                <HiOutlineLocationMarker /> Deliver to Uzbekistan
              </p>
              <div className="see_all_seperator"></div>
              <button className="add_to">Add to list</button>
              <button className="add_to">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
