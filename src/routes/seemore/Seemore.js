import React from 'react';
import './Seemore.css';
import { Link, useRouteMatch} from 'react-router-dom';
import { seemore_data } from '../../static/seemore_data';

const Seemore = () => {
  const route = useRouteMatch();
  // console.log(route);
  return <div className='seemore'>
      <img className='seemore_banner' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png" alt="" />
      <h1 className='seemore_title'>Featured Categories</h1>
      <div className="seemore_grid">
      {
        seemore_data?.map(product => 
          <Link className='link_from_seemore' to={`${route.url}${product.link}`} key={product.id}>
              <img className='seemore__product-image' src={product.imageURL} alt={product.productName} />
              <p className='product_name'>{product.productName}</p>
          </Link>  
        )
      }
      </div>
      
  </div>;
};

export default Seemore;
