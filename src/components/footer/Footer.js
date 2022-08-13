import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import {
  footer_data,
  footer_bottom,
  footer_copyrights,
} from "../../static/footer_data";

function Footer() {
  const location = useLocation();
  return location.pathname === "/login" || location.pathname === "/register" ? (
    <></>
  ) : (
    <div className="footer">
      <a href="#top" className="back_to">
        <button>Back to top</button>
      </a>
      <div className="footer_container">
        {footer_data.map((footer_item) => (
          <ul className="footer_collection" key={footer_item.id}>
            <h4 className="footer_title">{footer_item.title}</h4>
            {footer_item.children.map((item, index) => (
              <li className="footer_item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_container">
          {footer_bottom.map((bottom_item) => (
            <ul key={bottom_item.id} className="bottom_collection">
              {bottom_item.children.map((li_collection, index) => (
                <li className="collection_item" key={index}>
                  <h4>{li_collection.title}</h4>
                  <p> {li_collection.child}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="copy">
          {footer_copyrights.map((c, inx) => (
            <ul key={c.id} className="copyrights">
              <li key={inx}>{c.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
