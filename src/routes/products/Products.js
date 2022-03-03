import React, { useEffect, useState } from 'react';
import "./Product.css"
import { Link, useRouteMatch } from 'react-router-dom';
import instance from '../../api/products';
import Item from '../../components/item/Item';

const Products = () => {
    const { url } = useRouteMatch();
    const [isLoading, setIsLoading] = useState(false); 
    const [products, setProducts] = useState([]);
    async function fetchData(){
       setIsLoading(true)
       try{
            await instance.get("allproducts")
                .then(products => {
                    setProducts(products.data)
                    setIsLoading(false)
                })
                .catch(err => { 
                   console.log(err)
                   setIsLoading(false)
                });
       }
       catch(err){
            console.log(err)
       }
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
  <>
  <div className="product_header">
      <p>1-16 of over 10,000 results for "nintendo"</p>
      <select className='product_select'>
          <option value="">Sort by: Featured</option>
          <option value="">Price: Low to High</option>
          <option value="">Price: High to low</option>
          <option value="">Avg: Customer Review</option>
          <option value="">Release Data</option>
      </select>
  </div>
    <div className='products'>
       {
       !isLoading &&  <div className="product_sidebar">
           <ul className='product_sidebar_ul'>
               <h4 style={{fontWeight: "550"}}>Climate Pledge Friendly</h4>
               <h4 style={{fontWeight: "400"}}><input type="checkbox" /> Climate Pledge Friendly</h4>
               <h4 style={{fontWeight: "630", marginTop: "15px"}}>Department</h4>
               <li> Any Department</li>
               <li>Playstation 5</li>
               <li>Playstation 4</li>
               <li>Xbox Series X & S</li>
               <li>Xbox One</li>
               <li>Nintendo Switch</li>
               <li>PC</li>
               <li>Mac</li>
               <li>Legacy Systems</li>
               <li>Microconsoles</li>
               <li>Virtual Reality</li>
               <h4 style={{fontWeight: "630", marginTop: "20px"}}>Avg. Customer Review</h4>
               <h4>Featured Brands</h4>
               <li><input type="checkbox" /> Nintendo</li>
               <li><input type="checkbox" /> ACTIVISION</li>
               <li><input type="checkbox" /> Ubisoft</li>
               <li><input type="checkbox" /> eXtremeRate</li>
               <li><input type="checkbox" /> Electronic Arts</li>
               <li><input type="checkbox" /> TACKY DESIGN</li>
               <li><input type="checkbox" /> THQ</li>
               <h4>Price</h4>
               <li>Under $10</li>
               <li>$10 to $15</li>
               <li>$15 to $25</li>
               <li>$25 to $35</li>
               <li>$35 & Above</li>
               <li className='price_btn'><button className='price_min'>$ Min</button><button className='price_max'>$ Max</button><button className='price_go'>Go</button></li>
           </ul>
       </div>
       }
       <div className="products_container">
       {
           isLoading ? <div className="loader">
           <div className="lds-facebook">
             <div></div>
             <div></div>
             <div></div>
           </div>
         </div> : products?.map(item => 
               <Link className='link' key={item._id} to={`${url}/${item._id}`}>
                    <Item  data={item}/>
               </Link>    
            )
        }
       </div>
    </div>
    </>
  )
}

export default Products