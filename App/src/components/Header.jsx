import { FaRegHeart, FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_logo"
              src="/images/myntra_logo.webp"
              alt="Myntra Logo"
            />
          </Link>
        </div>
        <nav className="navbar">
          <Link to="/men" id="men">
            Men
          </Link>
          <Link to="/women" id="women">
            Women
          </Link>
          <Link to="/kids" id="kid">
            Kids
          </Link>
          <Link to="/home-living" id="home&living">
            Home & Living
          </Link>
          <Link to="/beauty" id="beauty">
            Beauty
          </Link>
          <Link to="/studio" id="studio">
            Studio<sup>NEW</sup>
          </Link>
        </nav>
        <div className="searchbar">
          <span className="material-symbols-outlined search_icon">
            <FaSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for Products, brands, and more"
            type="text"
          />
        </div>
        <div className="actionbar">
          <div className="action_box">
            <span className="material-symbols-outlined">
              <BsPerson />
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_box">
            <span className="">
              <FaRegHeart />
            </span>
            <span className="action_name">Wishlist</span>
            <span className="bag-item-count">{wishlist.length}</span>
          </div>

          <div className="action_box">
            <Link to="/bag">
              <span className="material-symbols-outlined">
                <LiaShoppingBagSolid />
              </span>
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
