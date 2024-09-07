import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { wishlistActions } from "../store/wishlistSlice";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { TbShoppingCartCheck } from "react-icons/tb";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);
  const wishListItems = useSelector((store) => store.wishlist);

  const wishElemFound = wishListItems.indexOf(item.id) >= 0;
  const bagElemFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleAddToWishlist = () => {
    dispatch(wishlistActions.addToWishlist(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="home-add-button">
        <button className="btn-add-wish" onClick={() => handleAddToWishlist()}>
          <center>
            {wishElemFound ? <FaRegHeart className="OnAddWishlist"/> : <FaRegHeart />}
          </center>
        </button>
        <button className="btn-add-bag" onClick={() => handleAddToBag()}>
          {bagElemFound ? <TbShoppingCartCheck /> : <TbShoppingCart />}
        </button>
      </div>
    </div>
  );
};

export default HomeItem;
