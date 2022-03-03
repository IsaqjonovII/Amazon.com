import React, { useEffect, useState } from 'react'
import "./Shopnow.css";
import { db } from '../../firebase/firebase';
import Sidebar from '../../components/sidebar/Sidebar';


const Shopnow = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      const loadDataFromDB = () => {
        db.collection("smartphone").onSnapshot(productData => {
          setProducts(productData.docs.map(uniqueProduct => ({
            uniquieId: uniqueProduct.id,
            product: uniqueProduct.data()
          })))
        })
      }
      return loadDataFromDB()
    }, [])
    console.log(products)
    return <>
           <Sidebar/>
          </>
        
  };

export default Shopnow