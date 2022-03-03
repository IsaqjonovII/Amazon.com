import React from 'react';
import "./Footer.css";
import { useLocation, Link } from 'react-router-dom';
import { footer_data, footer_bottom, footer_copyrights } from '../../static/footer_data';

function Footer() {
    const location = useLocation();
    return location.pathname === "/login" || location.pathname === "/account" ? <></> :
     <div className='footer'>
         <Link  className='back_to' to="/">
             <button>Back to top</button>
         </Link>
        <div className="footer_container">
            {
                footer_data.map(footer_item =>
                    <ul className='footer_collection' key={footer_item.id}>
                        <h4 className='footer_title'>{footer_item.title}</h4>{
                            footer_item.children.map((item, index) =>
                                <li className='footer_item' key={index}>{item}</li>)
                        }
                    </ul>
                )
            }
        </div>
        <div className="footer_bottom">
            <div className="footer_bottom_container">
                {
                    footer_bottom.map(bottom_item =>
                        <ul key={bottom_item.id} className="bottom_collection">
                            {
                                bottom_item.children.map((li_collection, indexx) =>
                                    <li className='collection_item' key={indexx}>
                                        <h4>{li_collection.title}</h4>
                                        <p> {li_collection.child}</p>
                                    </li>
                                )
                            }
                        </ul>
                    )
                }
                <div className="copy">
                    {
                        footer_copyrights.map((c, ix) =>
                            <ul key={c.id} className="copyrights">
                                <li key={ix}>{c.title}</li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    </div>;
}

export default Footer;