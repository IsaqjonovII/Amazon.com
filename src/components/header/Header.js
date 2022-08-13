import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker, HiMenu } from "react-icons/hi";
import { FiSearch, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header({ func, condition }) {
  const { i18n, t } = useTranslation();
  const [location2, setLocation2] = useState(false);
  let location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    setTimeout(() => {
      setSigInPopUp(false);
    }, 7000);
  }, []);
  const selectLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [sign, setSign] = useState(false);
  const [deliverLocationValue, setDeliverLocationValue] = useState("");
  const [hover, setHover] = useState(false);
  const [locationBoshqacha, setLocationBoshqacha] = useState(false);
  const [signInPopUp, setSigInPopUp] = useState(true);
  const [searchbarActive, setSearchbarActive] = useState(false);
  const [languageActive, setLanguageActive] = useState(false);
  const [selectValue, setSelectValue] = useState("all departments");
  return location.pathname === "/login" || location.pathname === "/register" ? (
    <></>
  ) : (
    <>
      <div id="top" className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              className="logo__image"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt=""
            />
          </div>
        </Link>
        <div
          className="header__delivery"
          onClick={() => {
            setLocation2(true);
            setLocationBoshqacha(false);
          }}
        >
          <p>{t("1")}</p>
          <h3>
            {" "}
            <HiOutlineLocationMarker />{" "}
            {locationBoshqacha ? deliverLocationValue : "Uzbekistan"}
          </h3>
        </div>
        <div
          className="header__searchbar"
          style={
            searchbarActive
              ? { boxShadow: "0px 0px 0px 3px #FF9900", zIndex: "5" }
              : null
          }
        >
          <select
            className="searchbar__select"
            style={{ width: selectValue.length * 10 + "px" }}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="alldeartments">{t("all")}</option>
            <option value="art  carfts">Arts & Crafts</option>
            <option value="automotive">Automotive</option>
            <option value="bas dby">Baby</option>
            <option value="beautpersonal care">
              Beauty & Personal Care
            </option>
            <option value="booadks">Books</option>
            <option value="boss fashion">Boy's Fashion</option>
            <option value="compsuters">Computers</option>
            <option value="dealass">Deals</option>
            <option value="digitamusic">Digital Music</option>
            <option value="electroics">Electronics</option>
            <option value="healt  household">Health & Household</option>
            <option value="Home  kitchen">Home & Kitchen</option>
            <option value="Indust isentific">Industrial & Scientific</option>
            <option value="kindlestore">Kindle Store</option>
            <option value="luggasage">Luggage</option>
            <option value="men  fashion">Men's fashion</option>
            <option value="Movies   tv">Movies & TV</option>
            <option value="music,cds&vindyls">Music, CDs & Vinyls</option>
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
              : hover === true
              ? "fade"
              : ""
          }`}
          style={
            hover === true
              ? { display: "none" }
              : locationBoshqacha === true
              ? { display: "none" }
              : {}
          }
          onClick={() => {
            setSearchbarActive(false);
          }}
          onMouseOver={() => setLanguageActive(false)}
        ></div>
        <div
          className="header__language"
          onMouseOver={() => setLanguageActive(true)}
          onMouseOut={() => setLanguageActive()}
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
                  <input
                    type="radio"
                    name="lang"
                    id="en"
                    onChange={() => selectLang("en")}
                  />{" "}
                  English - EN{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="es">
                  <input
                    type="radio"
                    name="lang"
                    id="es"
                    onChange={() => selectLang("es")}
                  />{" "}
                  Español - ES{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="zn">
                  <input
                    type="radio"
                    name="lang"
                    id="zn"
                    onChange={() => selectLang("zh")}
                  />{" "}
                  简体中文 - ZH{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="de">
                  <input
                    type="radio"
                    name="lang"
                    id="de"
                    onChange={() => selectLang("de")}
                  />{" "}
                  Deutsch - DE{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="pt">
                  <input
                    type="radio"
                    name="lang"
                    id="pt"
                    onChange={() => selectLang("pt")}
                  />{" "}
                  Português - PT{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="zh">
                  <input
                    type="radio"
                    name="lang"
                    id="zh"
                    onChange={() => selectLang("zh")}
                  />{" "}
                  繁體中文 - ZH{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="ko">
                  <input type="radio" name="lang" id="ko" /> 한국어 - KO{" "}
                </label>
              </li>
              <li className="collection__item">
                <label htmlFor="uz">
                  <input
                    type="radio"
                    name="lang"
                    id="uz"
                    onChange={() => selectLang("uz")}
                  />{" "}
                  O'zbekcha - Uz
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

        <Link
          onClick={() => setHover(true)}
          className="account_list"
          to="/login"
        >
          <div
            className="header_accountLists"
            onMouseOver={() => {
              setSign(true);
              setHover(false);
            }}
            onMouseOut={() => setSign()}
          >
            <p> {t("hello")} </p>
            <h3>
              {t("list")}
              <FiChevronDown />
            </h3>
          </div>
          <div
            className="signIn_hover"
            onMouseOver={() => {
              setSign(true);
            }}
            onMouseOut={() => {
              setSign();
            }}
          >
            <Link to="/login">
              <button>Sign in</button>
            </Link>
            <p style={{ fontSize: "12px", marginTop: "10px" }}>
              New customer?
              <a style={{ textDecoration: "none" }} href="/login">
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
          <p> {t("return")} </p>
          <h3> {t("order")} </h3>
        </div>
        <Link to="/cart">
          <div className="header_cart">
              <FiShoppingCart />
            <h4>
              {t("cart")}
            </h4>
          </div>
        </Link>
      </div>
      <div className="navbar">
        <ul className="nav_ul">
          <li onClick={func}>
            <HiMenu />
            {t("a")}
          </li>
          <li>{t("offers")}</li>
          <li>
            <Link to={"/customer"}>{t("service")}</Link>
          </li>
          <li>{t("registry")} </li>
          <li>{t("gift")} </li>
          <li> {t("sell")} </li>
        </ul>
      </div>
      <div
        className="location_city_box"
        style={
          locationBoshqacha
            ? { display: "none" }
            : location2
            ? { display: "block" }
            : { display: "none" }
        }
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
          <p className="p">or enter a US zip code</p>
          <div className="div_inp_btn">
            <input type="text" />
            <button>Apply</button>
          </div>
          <p className="p">or</p>
          <select
            onChange={(e) => setDeliverLocationValue(e.target.value)}
            className="select_city"
            value={deliverLocationValue}
            id=""
          >
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="England">England</option>
            <option value="America">America</option>
            <option value="Russia">Russia</option>
          </select>
        </div>
        <button onClick={() => setLocationBoshqacha(true)} className="apply">
          Done
        </button>
      </div>
    </>
  );
}

export default Header;
