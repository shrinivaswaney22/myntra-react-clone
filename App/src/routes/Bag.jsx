import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import Footer2 from "../components/Footer2";
import SecondaryBagItems from "../components/SecondaryBagItem";

const Bag = () => {
  const BagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const FinalItems = items.filter((item) => {
    const itemIndex = BagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="mainbox1">
          <div className="left-box">
            <div className="address-box">
              <div>
                <p>
                  Deliver to: <b>Shrinivas, 400058</b>
                </p>
                <p>Flat 601 A Wing Balaji Annex Ramdev Park Malad West</p>
              </div>
              <div>
                <button>CHANGE ADDRESS</button>
              </div>
            </div>
            <div className="Offers-box">
              <div className="offers-head">
                <div className="Offers-img">
                  <img src="./images/bag/asset 51.svg" alt="" />
                </div>
                <div className="Offers-text">
                  <p>Available Offers</p>
                </div>
              </div>
              <button className="dropdown-btn">LEARN MORE</button>
            </div>
            <div className="cart-box">
              <div className="card">
                {FinalItems.map((item) => (
                  <BagItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="wishlist">
              <div className="wishlist-left">
                <img src="./images/bag/asset 61.svg" alt="" />
                <p>add more from wishlist</p>
              </div>
              <div className="wishlist-right">
                <img src="./images/bag/asset 62.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="right-box">
            <div className="order-calc">
              <BagSummary />
              <button className="order-place">PLACE ORDER</button>
            </div>
          </div>
        </div>

        <div className="mainbox2">
          <hr />
          <div className="Top-Text">
            <p>You may also like:</p>
          </div>
          <div className="buttons">
            <button>All</button>
            <button>Face Sunscreen</button>
            <button>Mask and Peel</button>
            <button>Sanitary Napkins</button>
            <button>Day Cream</button>
            <button>Eye Liner</button>
            <button>Conditioner</button>
          </div>
          <div className="misc-items">
            <SecondaryBagItems items = {items}/>
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
};

export default Bag;
