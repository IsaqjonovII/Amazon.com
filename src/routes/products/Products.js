import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useRouteMatch } from "react-router-dom";
import instance from "../../api/products";
import Item from "../../components/item/Item";
import ReactPaginate from "react-paginate";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Products = () => {
  const { url } = useRouteMatch();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    setIsLoading(true);
    try {
      await instance
        .get("allproducts")
        .then((products) => {
          setProducts(products.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  const productAmazon = products.slice(0, 32);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 16;
  const pagesVisited = pageNumber * usersPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  const pageCount = Math.ceil(productAmazon.length / usersPerPage);

  const displayUsers = productAmazon
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user._id}>
          <Link className="link" key={user._id} to={`${url}/${user._id}`}>
            <Item data={user} />
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className="product_header_sort">
        <p>1-16 of over 10,000 results for "nintendo"</p>
        <select className="product_select">
          <option value="">Sort by: Featured</option>
          <option value="">Price: Low to High</option>
          <option value="">Price: High to low</option>
          <option value="">Avg: Customer Review</option>
          <option value="">Release Data</option>
        </select>
      </div>
      <div className="products">
        {!isLoading && (
          <div className="product_sidebar">
            <ul className="product_sidebar_ul">
              <h4 style={{ fontWeight: "550" }}>Climate Pledge Friendly</h4>
              <label htmlFor="check" style={{ fontWeight: "400" }}>
                <input type="checkbox" id="check" /> Climate Pledge Friendly
              </label>
              <h4 style={{ fontWeight: "630", marginTop: "15px" }}>
                Department
              </h4>
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
              <h4 style={{ fontWeight: "630", marginTop: "20px" }}>
                Avg. Customer Review
              </h4>
              <h4>Featured Brands</h4>
              <li>
                <label htmlFor="nin">
                  <input type="checkbox" id="nin" /> Nintendo
                </label>
              </li>
              <li>
                <label htmlFor="activision">
                  <input type="checkbox" id="activision" /> ACTIVISION
                </label>
              </li>
              <li>
                <label htmlFor="ubisoft">
                  <input type="checkbox" id="ubisoft" /> Ubisoft
                </label>
              </li>
              <li>
                <label htmlFor="rate">
                  <input type="checkbox" id="rate" /> eXtremeRate
                </label>
              </li>
              <li>
                <label htmlFor="arts">
                  <input type="checkbox" id="arts" /> Electronic Arts</label> 
              </li>
              <li>
                <label htmlFor="design">
                  <input type="checkbox" id="design" /> TACKY DESIGN</label> 
              </li>
              <li>
                <label htmlFor="thq">
                  <input type="checkbox" id="thq" /> THQ
                </label>
              </li>
              <h4>Price</h4>
              <li>Under $10</li>
              <li>$10 to $15</li>
              <li>$15 to $25</li>
              <li>$25 to $35</li>
              <li>$35 & Above</li>
              <li className="price_btn">
                <input className="price_min" type="number" placeholder="$ Min" />
                <input className="price_max" type="number" placeholder="$ Max" />
                <button className="price_go">Go</button>
              </li>
            </ul>
          </div>
        )}
        <div className="products_container">
          {isLoading ? (
            <div className="loader">
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <>
              {displayUsers}{" "}
              <div className="div_next_product">
                <ReactPaginate
                  previousLabel={<FiChevronsLeft />}
                  nextLabel={<FiChevronsRight />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"pagination_bttns"}
                  previousLinkClassName={"previous_bttns"}
                  nextLinkClassName={"next_bttns"}
                  disabledClassName={"pagination_disabled"}
                  activeClassName={"pagination_active"}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
