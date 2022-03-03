import React from "react";
import Banner from "../../components/banner/Banner";
import './Home.css'
import ProductContainer from "../../components/product-container/ProductContainer";

function Home() {
  
  return (
    <div> 
      <Banner/>
      <ProductContainer/>
    </div>
  );
}

export default Home;