import React from 'react'
import "./Shopnow.css"
import { Link, useRouteMatch} from 'react-router-dom';
import  { shopnow_data } from "../../static/shopnow_data"
import { FiChevronLeft } from 'react-icons/fi';


const Shopnow = () => {
    const route = useRouteMatch();
    console.log(route);
    return <>
            <div className="shop_sidebar">
                <ul className='shop_ul'>
                    <h4>Departmens</h4>
                    <li>Deals</li>
                    <li>Amazon International Shopping</li>
                    <li>Arts & Crafts</li>
                    <li>Automotive</li>
                    <li>Baby</li>
                    <li>Beauty & Personal Care</li>
                    <li>Books</li>
                    <li>Computers</li>
                    <li>Electronics</li>
                    <li>Women's Fashion</li>
                    <li>Girls' Fashion</li>
                    <li>Boys' Fashion</li>
                    <li>Health & Household</li>
                    <li>Home & Kitchen</li>
                    <li>Industrial & Scientific</li>
                    <li>Luggage</li>
                    <li>Movies & Television</li>
                    <li>Music, CDs & Vinyl</li>
                    <li>Pet Supplies</li>
                    <li>Software</li>
                    <li>Sports & Outdoors</li>
                    <li>Tools & Home Improvement</li>
                    <li>Toys & Games</li>
                    <li>Video Games</li>
                    <h4>Department</h4>
                    <h4>Explore Best Sellers</h4>
                    <h4>Department</h4>
                    <li><FiChevronLeft/> Home & Kitchen</li>
                    <li><FiChevronLeft/>  Electronics</li>
                    <li><FiChevronLeft/>  Health, Household & Baby Care</li>
                    <li><FiChevronLeft/>  Clothing, Shoes & Jewelry</li>
                    <li><FiChevronLeft/>  Industrial & Scientific</li>
                    <li><FiChevronLeft/>  Tools & Home Improvement</li>
                    <li><FiChevronLeft/>  Beauty & Personal Care</li>
                    <li><FiChevronLeft/>  Toys & Games</li>
                    <li><FiChevronLeft/>  Sports & Outdoors</li>
                    <li><FiChevronLeft/>  Cell Phones & Accessories</li>
                    <li><FiChevronLeft/>  Office Products</li>
                    <li><FiChevronLeft/>  Appliances</li>
                    <li><FiChevronLeft/>  Baby</li>
                    <li><FiChevronLeft/>  Video Games</li>
                    <li><FiChevronLeft/>  Pet Supplies</li>
                    <li><FiChevronLeft/>  Automotive Parts & Accessories</li>
                    <li><FiChevronLeft/>  Musical Instruments</li>
                    <li><FiChevronLeft/>  Arts, Crafts & Sewing</li>
                    <li><FiChevronLeft/>  Grocery & Gourmet Food</li>
                    <li><FiChevronLeft/>  Garden & Outdoor</li>
                    <li><FiChevronLeft/>  Home & Business Services</li>
                    <li><FiChevronLeft/>  CDs & Vinyl</li>
                    <li><FiChevronLeft/>  Books</li>
                </ul>
            </div>


        <div className="shopnow_product">
        {
          shopnow_data?.map(product => 
            <Link className='link_from_shopnow' to={`${route.url}${product.link}`} key={product.id}>
                <img className='shopnow__product-image' src={product.imageURL} alt={product.productName} />
                <p className='product_name-shopnow'>{product.productName}</p>
            </Link>  
          )
        }
        </div>
    </>
        
  };

export default Shopnow