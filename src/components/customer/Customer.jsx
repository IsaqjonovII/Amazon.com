import React, { useState } from 'react';
import c from "./Customer.module.css";
import { FiSearch } from 'react-icons/fi';
import CUSTOMER_DATA, { delivery } from "../../static/customer";
import { tabs } from "../../static/tabs"
const Customer = () => {

  const [selectedTabId, setSelectedTabId] = useState(0)

  console.log(selectedTabId);
  return (
    <div className={c.customer}>
      <div className={c.header}>
        <li>Customer Service</li>
        <a href='/'>Home</a>
        <li>Digital Services and Device Support</li>
      </div>
      <div className={c.page_container}>
        <h1>Welcome to Amazon Customer Service</h1>
        <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
        </p>
        <div className={c.flexbox}>
          {
            delivery?.map(({ id, title, img }) => (
              <div className={c.box} key={id}>
                <img src={img} alt="" />
                <p>{title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={c.questions}>
        <div className={c.input}>
          <h1>Search our help library</h1>
          <form>
            <FiSearch />
            <input type="search" placeholder='Type something like, "question about a charge" ' />
          </form>
        </div>

        <div className={c.container}>
          <div className={c.tabs}>
            {
              tabs?.map(({ id, title, }) => (
                <li className={selectedTabId === id ? `${c.help__topic__active} ${c.help_tab}` : c.help_tab} key={id} onClick={() => setSelectedTabId(id)}>{title}</li>
              ))
            }
          </div>

          <div className={c.onClick_div}>
            {
              CUSTOMER_DATA[selectedTabId]?.children?.map(({ title, desc }) => (
                <div className={c.help_topic}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Customer