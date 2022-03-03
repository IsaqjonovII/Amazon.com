import React from 'react';
import './ProductContainer.css'
import Product from '../product/Product';
import { products_data } from '../../static/products_data';

const ProductContainer = () => {
  return <div className='product__container'>
      {
          products_data?.map(product => 
            <Product data={product}/>
        )
      }
     </div>
};

export default ProductContainer;
