import React from "react";
import "./Cart.css";
import svg from "./kettle-desaturated._CB445243794_.svg";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <div className="div_sign_up_or_create_account">
        <img src={svg} alt="" />
        <div className="div_link_sign_account">
          <div className="link_deals_and_h2">
            <h2>Your Amazon Cart is empty</h2>
            <Link className="link_deals" to="/deals">
              <span>Shop today's deals</span>
            </Link>
          </div>
          <div className="div_btn_cart">
            <Link to="/account">
              <button className="link_cart_login">
                Sign in to your account
              </button>
            </Link>
            <Link to="/login">
              <button className="link_cart_login2">Sign up now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="empty_div"></div>
      <div className="div_span_div">
        <span className="span">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </span>
      </div>
    </div>
  );
}

export default Cart;