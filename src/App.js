import "./styles/App.css";
import { useState } from "react";
import Home from "./routes/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/login/Login";
import Account from "./routes/create-account/Account";
import Seemore from "./routes/seemore/Seemore";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Shopnow from "./routes/shopnow/Shopnow";
import Products from "./routes/products/Products";
import Cart from "./components/cart/Cart";
import ProductInfo from "./routes/prdocuts_info/ProductInfo";
import CreateProducts from "./routes/create-products/CreateProducts";
import BackToTop from "./components/backtotop/BackToTop";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarChange = () => setSidebarActive(true);
  const of = () => setSidebarActive(false);
  document.title = "Amazon.com | Home";
  sidebarActive ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "auto"
  return (
    <Router>
      <>
        <BackToTop/>
        <Header condition={sidebarActive} func={sidebarChange} />
        <Sidebar condition={sidebarActive} func={of} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
          <Route exact path="/seemore" component={Seemore} />
          <Route exact path="/seemore/products" component={Products} />
          <Route path="/shopnow" component={Shopnow} />
          <Route path="/cart" component={Cart} />
          <Route path="/new" component={CreateProducts} />
          <Route path="/seemore/products/:productId" component={ProductInfo}/>
        </Switch>
        <Footer />
        <div
          className={`fade ${sidebarActive ? "appear" : ""}`}
          onClick={() => setSidebarActive(false)}
        ></div>
      </>
      
    </Router>
  );
}

export default App;
