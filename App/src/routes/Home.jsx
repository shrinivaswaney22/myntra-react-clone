import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);
  const arrow = ">";
  return (
    <main>
      <div className="banner_container">
        <img
          className="Offer400"
          src="./images/FLAT-400-Off-on-1st-Purchase-Strip.jpg"
          alt="Offer400"
        />

        <img
          className="banner_img"
          src="./images/banner.jpg"
          alt="Main Banner"
        />

        <img
          className="coupons_heading"
          src="./images/coupons/coupon_corner.jpg"
          alt="coupons_heading"
        />
        <div className="coupons_content">
          <img
            className="coupons_img"
            src="./images/coupons/MYNTRA100.jpg"
            alt="100 off"
          />
          <img
            className="coupons_img"
            src="./images/coupons/MYNTRA200.jpg"
            alt="200 off"
          />
        </div>

        <a href="">
          <img
            className="Brand-Rush"
            src="./images/coupons/Brand-Rush.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="Most_Viewed">
        <h5>Most Viewed Items {arrow}</h5>
        <div className="display_most_viewed">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="category_heading">Medal Worthy Brands to Bag</div>
      <div className="brand_items">
        <a href="">
          <img className="offer_item" src="./images/offers/01.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/02.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/03.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/04.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/05.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/06.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/07.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/08.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/09.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/10.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/11.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/12.png" />
        </a>
        <a href="">
          <img className="offer_item" src="./images/offers/13.jpeg" />
        </a>
      </div>
      <div className="category_heading">Shop By Category</div>
      <div className="category_items">
        <a href="">
          <img className="cat_item" src="./images/categories/01.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/03.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/04.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/05.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/06.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/07.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/08.jpg" />
        </a>
        <a href="">
          <img className="cat_item" src="./images/categories/09.jpg" />
        </a>
        <div className="category_items">
          <a href="">
            <img className="cat_item" src="./images/categories/10.jpg" />
          </a>
          <a href="">
            <img className="cat_item" src="./images/categories/02.jpg" />
          </a>
        </div>
      </div>
      <a href="">
        <img
          className="App-Install-Banner"
          src="./images/App-Install-Banner.jpg"
          alt=""
        />
      </a>
    </main>
  );
};

export default Home;
