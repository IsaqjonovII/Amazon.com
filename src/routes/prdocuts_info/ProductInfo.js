import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import { useParams, Link } from "react-router-dom";
import axios from "../../api/products";
import { BiChevronLeft } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ZoomImage from "../../components/zoom-image/ZoomImage";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useStateValue } from '../../context/StateProvider';
const ProductInfo = () => {
  const [cart, dispatch] = useStateValue();

  const [overflow, setOverflow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [zoomImageZoom, setZoomImageZoom] = useState(false);
  const [previewImage, setPreviewImage] = useState(0);
  const [zoom, setZoom] = useState(false);
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

  const addToCart = () => {
    console.log(productInfo)
    dispatch({
      type: "ADD_TO_CART",
      productInfo
    })
  }
  return (
    <div className="product-info">
      <div className="product-info_header"></div>
      <Link to="/seemore/products">
        <p className="back_result">
          <BiChevronLeft />
          Back to result
        </p>
      </Link>

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
                  <div
                    style={
                      previewImage === index
                        ? { boxShadow: "0px 0px 10px orange" }
                        : { boxShadow: "0px 0px 10px transparent" }
                    }
                    className="div_hover_emas_click" key={index}
                  >
                    <img
                      key={index}
                      onMouseOver={() => setPreviewImage(index)}
                      src={img?.url}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div
                className="image__wrapperzoom"
                onClick={() => setZoomImageZoom(true)}
              >
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
                        // transition: "0.1s",
                        display: "none",
                      }
                    : zoomImageZoom
                    ? { transform: "scale(0)" }
                    : {
                        position: "absolute",
                        left: `${x - 260}px`,
                        top: `${y}px`,
                        // transition: "0s",
                        display: "flex",
                        transform: "scale(1)",
                      }
                }
              ></div>
            </div>

            <div className="product_description">
              <h2>{productInfo?.name}</h2>
              <div className="stars">
                {productInfo &&
                  new Array(Math.floor(productInfo?.ratings))
                    .fill()
                    .map((i, index) => (
                      <p key={index}>
                        <FaStar />
                      </p>
                    ))}
                {productInfo?.ratings % 1 !== 0 && (
                  <p>
                    <FaStarHalfAlt />
                  </p>
                )}
              </div>
              <ZoomImage
              cart={cart}
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
              <button className="add_to" onClick={addToCart}>Add to list</button>
            </div>
          </div>
          <div
            className={`fade ${zoomImageZoom ? "appear" : ""}`}
            onClick={() => setZoomImageZoom(false)}
          ></div>
          <div
            className="zoom_image_zoom"
            style={
              zoomImageZoom
                ? { display: "flex", zIndex: "10" }
                : { display: "none" }
            }
          >
            <div
              className="div_image_zoom_2"
              style={
                zoom
                  ? {
                      backgroundImage: `url(${productInfo?.image[previewImage].url})`,
                      backgroundPosition: `${-x}px ${-y + 100}px`,
                      backgroundSize: "220%",
                      backgroundRepeat: "no-repeat",
                      cursor: "zoom-out",
                    }
                  : {
                      backgroundPosition: `${-x}px ${-y + 200}px`,
                      backgroundSize: "220%",
                      backgroundRepeat: "no-repeat",
                    }
              }
            >
              {
                <img
                  onMouseMove={getPositionOfMouse}
                  className="iphone_first_image2"
                  onMouseOver={() => setOverflow(false)}
                  onMouseOut={() => setOverflow(true)}
                  onClick={() => setZoom(!zoom)}
                  style={zoom ? { opacity: "0" } : { opacity: "1" }}
                  src={productInfo?.image[previewImage].url}
                  alt=""
                />
              }
            </div>
            <div className="div_image_info_2">
              <h1>{productInfo?.name}</h1>
              <div className="stars">
                {productInfo &&
                  new Array(Math.floor(productInfo?.ratings))
                    .fill()
                    .map((i, inx) => (
                      <p key={inx}>
                        <FaStar />
                      </p>
                    ))}
                {productInfo?.ratings % 1 !== 0 && (
                  <p>
                    <FaStarHalfAlt />
                  </p>
                )}
              </div>
              <div className="div_flex">
                {productInfo?.image.map((img, index) => (
                  <div
                    style={
                      previewImage === index
                        ? { boxShadow: "0px 0px 10px orange" }
                        : { boxShadow: "0px 0px 10px transparent" }
                    }
                    key={index}
                    className="div_hover_emas_click"
                  >
                    <img
                      onClick={() => setPreviewImage(index)}
                      src={img?.url}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
