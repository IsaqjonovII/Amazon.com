import React, { useState } from "react";
import "../sidebar/Sidebar.css";
import { VscClose } from "react-icons/vsc";
import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

function Sidebar({ condition, func }) {
  const [music, setMusic] = useState(false);
  const [kindle, setKindle] = useState(false);
  const [android, setAndroid] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [computers, setComputers] = useState(false);
  const [home, setHome] = useState(false);
  const [arts, setArts] = useState(false);
  const [gift, setGift] = useState(false);
  const [live, setLive] = useState(false);
  const [shop, setShop] = useState(false);

  return (
    <>
      <VscClose
        className="closeicon"
        style={
          condition
            ? { display: "block", transition: "all .8s", zIndex: "4" }
            : { display: "none", transition: "all .8s" }

        }
        onClick={func}
      />
      <div className={`sidebar ${condition ? "active" : ""}`}>
        <div className="div_user_sign_in">
          <div className="user">
            <FaUser />
          </div>
          <h1>Hello, Sign in</h1>
        </div>
        <div className="div_sidebar_ora">
          <div
            className="sidebar_contents"
            style={
              music
                ? { position: "absolute", left: "-100%" }
                : kindle
                ? { position: "absolute", left: "-100%" }
                : android
                ? { position: "absolute", left: "-100%" }
                : electronics
                ? { position: "absolute", left: "-100%" }
                : computers
                ? { position: "absolute", left: "-100%" }
                : home
                ? { position: "absolute", left: "-100%" }
                : arts
                ? { position: "absolute", left: "-100%" }
                : gift
                ? { position: "absolute", left: "-100%" }
                : live
                ? { position: "absolute", left: "-100%" }
                : shop
                ? { position: "absolute", left: "-100%" }
                : { position: "absolute", left: "0" }
            }
          >
            <ul className="music_ul">
              <h1 className="sidebar_text_header">Digital Content & Devices</h1>
              <li onClick={() => setMusic(true)}>
                <p>
                  Amazon Music <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setKindle(true)}>
                <p>
                  Kindle E-readers & Books <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setAndroid(true)}>
                <p>
                  Appstore for Andriod <FiChevronRight />
                </p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Shop By Department</h1>
              <li onClick={() => setElectronics(true)}>
                <p>
                  Electronics <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setComputers(true)}>
                <p>
                  Computers <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setHome(true)}>
                <p>
                  Smart Home <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setArts(true)}>
                <p>
                  Arts & Crafts <FiChevronRight />
                </p>
              </li>
              <li className="li_see_all">
                <p>
                  See All <FiChevronDown />
                </p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Programs & Features</h1>
              <li onClick={() => setGift(true)}>
                <p>
                  Gift Cards <FiChevronRight />
                </p>
              </li>
              <li>
                <p>#FoundltOnAmazon</p>
              </li>
              <li onClick={() => setLive(true)}>
                <p>
                  Amazon Live <FiChevronRight />
                </p>
              </li>
              <li onClick={() => setShop(true)}>
                <p>
                  International Shopping <FiChevronRight />
                </p>
              </li>
              <li className="li_see_all">
                <p>
                  See All <FiChevronDown />
                </p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Help & Settings</h1>
              <li>
                <p>Your Account</p>
              </li>
              <li>
                <p>English</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents2"
            style={music ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setMusic(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>

              <h1 className="sidebar_text_header">Stream Music</h1>
              <li>
                <p>Amazon Music Unlimited</p>
              </li>
              <li>
                <p>Free Streaming Music</p>
              </li>
              <li>
                <p>Podcasts</p>
              </li>
              <li>
                <p>Open Web Player</p>
              </li>
              <li>
                <p>Download the app</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents3"
            style={kindle ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setKindle(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Kindle E-Readers</h1>
              <li>
                <p>Kindle Kids</p>
              </li>
              <li>
                <p>Kindle Paperwhite Kids</p>
              </li>
              <li>
                <p>Kindle</p>
              </li>
              <li>
                <p>Kindle Paperwhite</p>
              </li>
              <li>
                <p>Kindle Paperwhite Signature Edition</p>
              </li>
              <li>
                <p>Kindle Oasis</p>
              </li>
              <li>
                <p>Accessories</p>
              </li>
              <li>
                <p>See All Kindle E-Readers</p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Kindle Store</h1>
              <li>
                <p>Kindle Books</p>
              </li>
              <li>
                <p>Kindle Unlimited</p>
              </li>
              <li>
                <p>Prime Reading</p>
              </li>
              <li>
                <p>Kindle Vella</p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">App & Resources</h1>
              <li>
                <p>Free Kindle Reading Apps</p>
              </li>
              <li>
                <p>Kindle Cloud Reader</p>
              </li>
              <li>
                <p>Manage Your Content and Devices</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents4"
            style={android ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setAndroid(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Appstore for Android</h1>
              <li>
                <p>All Apps and Games</p>
              </li>
              <li>
                <p>Games</p>
              </li>
              <li>
                <p>Amazon Coins</p>
              </li>
              <li>
                <p>Download Amazon Appstore</p>
              </li>
              <li>
                <p>Amazon Apps</p>
              </li>
              <li>
                <p>Your Apps and Subscriptions</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents5"
            style={electronics ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button
                className="btn_menu"
                onClick={() => setElectronics(false)}
              >
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Electroincs</h1>
              <li>
                <p>Accessoires & Supplies</p>
              </li>
              <li>
                <p>Camera & Photo</p>
              </li>
              <li>
                <p>Car & Vehicle Electronics</p>
              </li>
              <li>
                <p>Cell Phones & Accessoires</p>
              </li>
              <li>
                <p>GPS & Navigation</p>
              </li>
              <li>
                <p>Headphones</p>
              </li>
              <li>
                <p>Home Audio</p>
              </li>
              <li>
                <p>Office Electronics</p>
              </li>
              <li>
                <p>Portable Audio & Video</p>
              </li>
              <li>
                <p>Security & Surveillance</p>
              </li>
              <li>
                <p>Service Plans</p>
              </li>
              <li>
                <p>Television & Video</p>
              </li>
              <li>
                <p>Video Game Console & Accessoires</p>
              </li>
              <li>
                <p>Video Projects</p>
              </li>
              <li>
                <p>Wearable Technology</p>
              </li>
              <li>
                <p>eBook Readers & Accessories</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents6"
            style={computers ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setComputers(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Computers</h1>
              <li>
                <p>Computer Accessoires & Peripherals</p>
              </li>
              <li>
                <p>Computers Components</p>
              </li>
              <li>
                <p>Computers & Tablets</p>
              </li>
              <li>
                <p>Data Storage</p>
              </li>
              <li>
                <p>External Components</p>
              </li>
              <li>
                <p>Laptop Accessories</p>
              </li>
              <li>
                <p>Monitors</p>
              </li>
              <li>
                <p>Networking Products</p>
              </li>

              <li>
                <p>Power Strips & Surge Protectors</p>
              </li>
              <li>
                <p>Printer</p>
              </li>
              <li>
                <p>Scanners</p>
              </li>
              <li>
                <p>Servers</p>
              </li>
              <li>
                <p>Tablet Accessories</p>
              </li>
              <li>
                <p>Tablet Reblacement Parts</p>
              </li>
              <li>
                <p>Warranties & Services</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents7"
            style={home ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setHome(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Smart Home</h1>
              <li>
                <p>Amazon Smart Home</p>
              </li>
              <li>
                <p>Smart Home Lighting</p>
              </li>
              <li>
                <p>Smart Locks and Entry</p>
              </li>
              <li>
                <p>Security Cameras and System</p>
              </li>
              <li>
                <p>Plugs and Outlest</p>
              </li>
              <li>
                <p>New Smart Devices</p>
              </li>
              <li>
                <p>Heating and Coaling</p>
              </li>
              <li>
                <p>Detectors and Sensors</p>
              </li>
              <li>
                <p>Home Entertainment</p>
              </li>
              <li>
                <p>Pet</p>
              </li>
              <li>
                <p>Voice Assistants and Hubs</p>
              </li>
              <li>
                <p>Kitchen</p>
              </li>
              <li>
                <p>Vacuums and Mops</p>
              </li>
              <li>
                <p>Lawn and Garden</p>
              </li>
              <li>
                <p>WiFi and Networking</p>
              </li>
              <li>
                <p>Other Solutions</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents8"
            style={arts ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setArts(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Arts & Crafts</h1>
              <li>
                <p>Painting, Drawing & Art Supplies</p>
              </li>
              <li>
                <p>Beading & Jewerly Making</p>
              </li>
              <li>
                <p>Crafting</p>
              </li>
              <li>
                <p>Fabric</p>
              </li>
              <li>
                <p>Fabric Decorating</p>
              </li>
              <li>
                <p>Knitting & Crochet</p>
              </li>
              <li>
                <p>Needlework</p>
              </li>
              <li>
                <p>Organization, Storage & Transport</p>
              </li>
              <li>
                <p>Printmaking</p>
              </li>
              <li>
                <p>Scrapbooking & Stamping</p>
              </li>
              <li>
                <p>Sewing</p>
              </li>
              <li>
                <p>Party Decoration & Supplies</p>
              </li>
              <li>
                <p>Gift Wrapping Supplies</p>
              </li>
              <li>
                <p>Kindle Cloud Reader</p>
              </li>
              <li>
                <p>Manage Your Content and Devices</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents9"
            style={gift ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setGift(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Give A GIft Card</h1>
              <li>
                <p>All gift cards</p>
              </li>
              <li>
                <p>eGift cards</p>
              </li>
              <li>
                <p>Gift cards by mail</p>
              </li>
              <li>
                <p>Specialty gift cards</p>
              </li>
              <li>
                <p>Amazon Cash</p>
              </li>
              <li>
                <p>For Businesses</p>
              </li>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Manage Your Gift Card</h1>
              <li>
                <p>Redeem a gift card</p>
              </li>
              <li>
                <p>View Your Balance</p>
              </li>
              <li>
                <p>Reload Your Balance</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents10"
            style={live ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setLive(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">Amazon Live</h1>
              <li>
                <p>Live</p>
              </li>
              <li>
                <p>Recently Live</p>
              </li>
            </ul>
          </div>
          <div
            className="sidebar_contents11"
            style={shop ? { left: "0" } : { left: "100%" }}
          >
            <ul className="music_ul">
              <button className="btn_menu" onClick={() => setShop(false)}>
                {" "}
                <FiChevronLeft className="chevronLeft" /> Main menu
              </button>
              <div className="li_seperator"></div>
              <h1 className="sidebar_text_header">International Shopping</h1>
              <li>
                <p>Where we ship</p>
              </li>
              <li>
                <p>Visit Amazon Global</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
