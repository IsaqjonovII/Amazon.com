import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker, HiMenu } from "react-icons/hi";
import { FiSearch, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Header({ func, condition }) {
  const [location2, setLocation2] = useState(false);
  let location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    setTimeout(() => {
      setSigInPopUp(false);
    }, 7000);
  }, []);
  const [sign, setSign] = useState(false);
  const [signInPopUp, setSigInPopUp] = useState(true);
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [languageActive, setLanguageActive] = useState(false);
  const [selectValue, setSelectValue] = useState("all departments");
  return location.pathname === "/login" || location.pathname === "/account" ? (
    <></>
  ) : (
    <>
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              className="logo__image"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt=""
            />
          </div>
        </Link>
        <div className="header__delivery" onClick={() => setLocation2(true)}>
          <p>Delivery</p>
          <h3>
            {" "}
            <HiOutlineLocationMarker /> Uzbekistan
          </h3>
        </div>
        <div
          className="header__searchbar"
          style={
            searchbarActive
              ? { zIndex: "5", boxShadow: "0px 0px 0px 3px #FF9900" }
              : null
          }
        >
          <select
            className="searchbar__select"
            style={{ width: selectValue.length * 10 + "px" }}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="all departments">All departments</option>
            <option value="art & carfts">Arts & Crafts</option>
            <option value="automotive">Automotive</option>
            <option value="baby">Baby</option>
          </select>
          <input
            type="text"
            className="searchbar__input"
            onClick={() => setSearchbarActive(true)}
          />
          <button className="searchbar__button">
            {" "}
            <FiSearch />{" "}
          </button>
        </div>
        <div
          className={`fade ${
            searchbarActive || languageActive || sign || location2
              ? "appear"
              : ""
          }`}
          onClick={() => {
            setSearchbarActive(false);
            setLocation2(false);
          }}
          onMouseOver={() => setLanguageActive(false)}
        ></div>
        <div
          className="header__language"
          onMouseOver={() => setLanguageActive(true)}
          onMouseOut={() => setLanguageActive()}
          style={languageActive ? { zIndex: "5" } : { zIndex: "0" }}
        >
          <img
            className="language__image"
            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            alt=""
          />
          <FiChevronDown />
          <div className="language__select">
            <p>
              Change language{" "}
              <a className="learn__more" href="https://www.google.com">
                Learn more
              </a>{" "}
            </p>
            <ul className="select__collection">
              <li className="collection__item">
                <label htmlFor="en">
                  <input type="radio" name="lang" id="en" /> English - EN{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="es">
                  <input type="radio" name="lang" id="es" /> Español - ES{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="zn">
                  <input type="radio" name="lang" id="zn" /> 简体中文 - ZH{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="de">
                  <input type="radio" name="lang" id="de" /> Deutsch - DE{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="pt">
                  <input type="radio" name="lang" id="pt" /> Português - PT{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="zh">
                  <input type="radio" name="lang" id="zh" /> 繁體中文 - ZH{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="ko">
                  <input type="radio" name="lang" id="ko" /> 한국어 - KO{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="he">
                  <input type="radio" name="lang" id="he" /> עברית - HE{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="ar">
                  <input type="radio" name="lang" id="ar" /> العربية - AR{" "}
                </label>
              </li>
            </ul>
          </div>
        </div>
        <Link className="account_list" to="/login">
          <div
            className="header_accountLists"
            style={sign ? { zIndex: "5" } : { zIndex: "0" }}
            onMouseOver={() => {
              setSign(true);
            }}
            onMouseOut={() => setSign()}
          >
            <p>Hello, Sign in</p>
            <h3>
              Account & Lists
              <FiChevronDown />
            </h3>
          </div>
          <div
            className="signIn_hover"
            onMouseOver={() => setSign(true)}
            onMouseOut={() => setSign()}
          >
            <Link to="/login">
              <button>Sign in</button>
            </Link>
            <p style={{ fontSize: "12px", marginTop: "10px" }}>
              New customer?{" "}
              <a style={{ textDecoration: "none" }} href="##">
                {" "}
                Start here
              </a>
            </p>
            <div className="signIn_line"></div>
            <div className="signIn_ul_wrap">
              <ul className="signIn_ul_list">
                <h4>Your Lists</h4>
                <li>Create a List</li>
                <li>Find a List or Registry</li>
                <li>AmazonSmile Charity Lists</li>
              </ul>
              <div className="signIn_ul_seperator"></div>
              <ul className="signIn_ul_acc">
                <h4>Your Account</h4>
                <li>Account</li>
                <li>Orders</li>
                <li>Recommendations</li>
                <li>Browsing History</li>
                <li>Watchlist</li>
                <li>Video Purchases & Rentals</li>
                <li>Kindle Unlimited</li>
                <li>Content & Devices</li>
                <li>Subscribe & Save Items</li>
                <li>Memberships & Subscriptions</li>
                <li>Music Library</li>
              </ul>
            </div>
          </div>
        </Link>
        {signInPopUp && (
          <div className="signin_popup" onClick={() => setSigInPopUp(false)}>
            <Link to="/login">
              <button className="popup_btn">Sign in</button>
            </Link>
            <p>
              New customer? <a href="##"> Start here</a>
            </p>
          </div>
        )}

        <div className="header_orders">
          <p>Returns</p>
          <h3>& Orders</h3>
        </div>
        <Link to="/cart">
          <div className="header_cart">
            <h4>
              <FiShoppingCart />
              Cart
            </h4>
          </div>
        </Link>
      </div>
      <div className="navbar">
        <ul className="nav_ul">
          <li onClick={func}>
            <HiMenu />
            All
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
      <div
        className="location_city_box"
        style={location2 ? { display: "block" } : { display: "none" }}
      >
        <div className="div_choose">
          <h2>Choose your location</h2>
        </div>
        <div className="div_location_inp">
          <p>
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <Link to="/login" className="btn_sd">
            <span>Sign in to see your addresses</span>
          </Link>
          <div className="line_location">
            <div className="line2"></div>
            <p className="p">or enter a US zip code</p>
            <div className="line2"></div>
          </div>
          <div className="div_inp_btn">
            <input type="text" />
            <button>Apply</button>
          </div>
          <div className="line_location">
            <div className="line3"></div>
            <p className="p">or</p>
            <div className="line3"></div>
          </div>
          <select className="select_city" id="">
            <option value="">Uzbekistan</option>
            <option value="">England</option>
            <option value="">America</option>
            <option value="">Russia</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Header;
