import React, { useState } from 'react';
import c from "./Customer.module.css";
import { FiSearch } from 'react-icons/fi';
import CUSTOMER_DATA from "../../static/customer"
const Customer = () => {

  const [rec, setRec] = useState(true)
  const [stuff, setStuff] = useState(false)
  const [ship, setShip] = useState(false)
  const [returns, setReturn] = useState(false)
  const [acc, setAcc] = useState(false)
  const [sec, setSec] = useState(false)
  const [pay, setPay] = useState(false)
  const [device, setDevice] = useState(false)
  const [business, setBusiness] = useState(false)
  const [items, setItems] = useState(false)
  const [others, setOthers] = useState(false)

  return (
    <div className={c.customer}>
      <div className={c.header}>
        <li>Customer Service</li>
        <a href='/'>Home</a>
        <li>Digital Services and Device Support</li>
      </div>
      <div className={c.page_container}>
        <h1>Welcome to Amazon Customer Service</h1>
        <p>What would you like help with today? You can quickly take        care of most things here, or connect with us when needed.
        </p>
        <div className={c.flexbox}>
          <div className={c.box}>
            <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/return.png" alt="" />
            <p>A delivery, order or return</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png" alt="" />
            <p>Prime</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png" alt="" />
            <p>Payment, charges or gift cards</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png" alt="" />
            <p>Login, address, security & privacy</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png" alt="" />
            <p>Memberships, subscriptions or communications</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png" alt="" />
            <p>Kindle, Fire or Alexa device</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png" alt="" />
            <p>eBooks, Prime Videos or Music</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png" alt="" />
            <p>Accessibility</p>
          </div>
          <div className={c.box}>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png" alt="" />
            <p>Something else</p>
          </div>
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
            <li className={c.help_tab} style={rec ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setRec(true)
              setStuff(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Recommended</li>
            <li className={c.help_tab} style={stuff ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(true)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Where's My Stuff</li>
            <li className={c.help_tab} style={ship ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(true)
            }}  >  Shipping  and Delivery</li>
            <li className={c.help_tab} style={returns ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(true)
              setSec(false)
              setShip(false)
            }}  >  Returns and Refunds</li>
            <li className={c.help_tab} style={acc ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(true)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Manage Your Account</li>
            <li className={c.help_tab} style={sec ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(true)
              setShip(false)
            }} >  Security and Privacy</li>
            <li className={c.help_tab} style={pay ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(true)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Payment, Pricing and Promotions</li>
            <li className={c.help_tab} style={device ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(true)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Devices & Digital Solutions</li>
            <li className={c.help_tab} style={business ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(true)
              setDevice(false)
              setItems(false)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }}  >  Amazon Business Accounts</li>
            <li className={c.help_tab} style={items ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(true)
              setOthers(false)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Large Items and Heavy-Bulky Services</li>
            <li className={c.help_tab} style={others ? { backgroundColor: "#008296", borderRadius: "4px", color: "#fff" } : null} onClick={() => {
              setStuff(false)
              setRec(false)
              setAcc(false)
              setBusiness(false)
              setDevice(false)
              setItems(false)
              setOthers(true)
              setPay(false)
              setReturn(false)
              setSec(false)
              setShip(false)
            }} >  Other topics & Help sites</li>
          </div>

          <div className={c.onClick_div}>
            {
              rec ? CUSTOMER_DATA.Recommended.map((li_item, index) => <div className={c.help_topic} key={index}>
                <h3>{li_item.title}</h3>
                <p>{li_item.desc}</p>
              </div>) : null
                || stuff ? CUSTOMER_DATA.Stuff.map((li_item, index) => <div className={c.help_topic} key={index}>
                  <h3>{li_item.title}</h3>
                  <p>{li_item.desc}</p>
                </div>) : null
                  || ship ? CUSTOMER_DATA.Shipping.map((li_item, index) => <div className={c.help_topic} key={index}>
                    <h3>{li_item.title}</h3>
                    <p>{li_item.desc}</p>
                  </div>) : null
                    || returns ? CUSTOMER_DATA.Returns.map((li_item, index) => <div className={c.help_topic} key={index}>
                      <h3>{li_item.title}</h3>
                      <p>{li_item.desc}</p>
                    </div>) : null
                      || acc ? CUSTOMER_DATA.Account.map((li_item, index) => <div className={c.help_topic} key={index}>
                        <h3>{li_item.title}</h3>
                        <p>{li_item.desc}</p>
                      </div>) : null
                        || sec ? CUSTOMER_DATA.Security.map((li_item, index) => <div className={c.help_topic} key={index}>
                          <h3>{li_item.title}</h3>
                          <p>{li_item.desc}</p>
                        </div>) : null
                          || pay ? CUSTOMER_DATA.Payment.map((li_item, index) => <div className={c.help_topic} key={index}>
                            <h3>{li_item.title}</h3>
                            <p>{li_item.desc}</p>
                          </div>) : null
                            || device ? CUSTOMER_DATA.Device.map((li_item, index) => <div className={c.help_topic} key={index}>
                              <h3>{li_item.title}</h3>
                              <p>{li_item.desc}</p>
                            </div>) : null
                              || business ? CUSTOMER_DATA.Business.map((li_item, index) => <div className={c.help_topic} key={index}>
                                <h3>{li_item.title}</h3>
                                <p>{li_item.desc}</p>
                              </div>) : null
                                || items ? CUSTOMER_DATA.Items.map((li_item, index) => <div className={c.help_topic} key={index}>
                                  <h3>{li_item.title}</h3>
                                  <p>{li_item.desc}</p>
                                </div>) : null
                                  || others ? CUSTOMER_DATA.Others.map((li_item, index) => <div className={c.help_topic} key={index}>
                                    <h3>{li_item.title}</h3>
                                    <p>{li_item.desc}</p>
                                  </div>) : null
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Customer