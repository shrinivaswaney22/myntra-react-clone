import "../index.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_column_left">
            <h5>Online Shopping</h5>
            <a href="" id="men">
              Men
            </a>
            <a href="" id="women">
              Women
            </a>
            <a href="" id="kid">
              Kids
            </a>
            <a href="" id="home&living">
              Home & Living
            </a>
            <a href="" id="beauty">
              Beauty
            </a>
            <a href="" id="studio">
              Gift Cards
            </a>
            <a href="" id="insider">
              Myntra Insider
            </a>
            <br />
            <h5>Useful Links</h5>
            <a href="" id="men">
              Blog
            </a>
            <a href="" id="women">
              Careers
            </a>
            <a href="" id="kid">
              Site Map
            </a>
            <a href="" id="beauty">
              Corporate Information
            </a>
            <a href="" id="studio">
              WhiteHat{" "}
            </a>
            <a href="" id="insider">
              Cleartrip
            </a>
          </div>

          <div className="footer_column_center-left">
            <h5>Customer Policies</h5>
            <a href="" id="men">
              Contact Us
            </a>
            <a href="" id="women">
              FAQ
            </a>
            <a href="" id="kid">
              T&C
            </a>
            <a href="" id="home&living">
              Terms of Use
            </a>
            <a href="" id="beauty">
              Track your Orders
            </a>
            <a href="" id="studio">
              Shipping
            </a>
            <a href="" id="insider">
              Cancellation
            </a>
            <a href="">Returns</a>
            <a href="">Privacy Policy</a>
            <a href="">Grievance Officer</a>
          </div>

          <div className="footer_column_center-right">
            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
            <div className="App-Install-Links">
              <a href="">
                <img
                  className="store-link"
                  src="./images/google_play.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="store-link"
                  src="./images/apple_store.png"
                  alt=""
                />
              </a>
            </div>
            <h5>KEEP IN TOUCH</h5>
            <div className="connect-box">
              <span>
                <img className="connect" src="./images/connect/fb.png" alt="" />
              </span>
              <span>
                <img
                  className="connect"
                  src="./images/connect/twitter.png"
                  alt=""
                />
              </span>
              <span>
                <img className="connect" src="./images/connect/yt.png" alt="" />
              </span>
              <span>
                <img
                  className="connect"
                  src="./images/connect/insta.png"
                  alt=""
                />
              </span>
            </div>
          </div>

          <div className="footer_column_right">
            <div className="authenticity">
              <span>
                <img
                  className="authenticity_logo"
                  src="./images/authenticity/original.png"
                  alt=""
                />
              </span>
              <p>
                <b>100% ORIGINAL</b> guarantee for all products at myntra.com
              </p>
            </div>
            <div className="authenticity">
              <span>
                <img
                  className="authenticity_logo"
                  src="./images/authenticity/Return-Window-image.png"
                  alt=""
                />
              </span>
              <p>
                <b>Return within 14 days</b> of receiving your order
              </p>
            </div>
          </div>
        </div>
        <div className="bottom_footer_container">
          <div className="footer_row_top">
            <div className="align">
              <span>
                <h5>Popular Searches</h5>
              </span>
              <hr />
            </div>
            <div className="more_links">
              <a href="">Makeup |</a>
              <a href="">Dresses for Girls |</a>
              <a href="">T-Shirts |</a>
              <a href="">Sandals |</a>
              <a href="">Headphones |</a>
              <a href="">Babydolls |</a>
              <a href="">Blazers For Men |</a>
              <a href="">Handbags |</a>
              <a href="">Ladies Watches |</a>
              <a href="">Bags |</a>
              <a href="">Sport Shoes |</a>
              <a href="">Reebok Shoes |</a>
              <a href="">Puma Shoes |</a>
              <a href="">Boxers |</a>
              <a href="">Wallets |</a>
              <a href="">Tops |</a>
              <a href="">Earrings |</a>
              <a href="">Fastrack |</a>
              <a href="">Watches |</a>
              <a href="">Kurtis |</a>
              <a href="">Nike |</a>
              <a href="">Smart Watches |</a>
              <a href="">Titan Watches |</a>
              <a href="">Designer Blouse |</a>
              <a href="">Gowns |</a>
              <a href="">Rings |</a>
              <a href="">Cricket Shoes |</a>
              <a href="">Forever 21 |</a>
              <a href="">Eye Makeup |</a>
              <a href="">Photo Frames |</a>
              <a href="">Punjabi Suits |</a>
              <a href="">Bikini |</a>
              <a href="">Myntra Fashion Show |</a>
              <a href="">Lipstick |</a>
              <a href="">Saree |</a>
              <a href="">Watches |</a>
              <a href="">Dresses |</a>
              <a href="">Lehenga |</a>
              <a href="">Nike Shoes |</a>
              <a href="">Goggles |</a>
              <a href="">Bras |</a>
              <a href="">Suit |</a>
              <a href="">Chinos |</a>
              <a href="">Shoes |</a>
              <a href="">Adidas Shoes |</a>
              <a href="">Woodland Shoes |</a>
              <a href="">Jewellery |</a>
              <a href="">Designers Sarees</a>
            </div>
          </div>
          <div className="footer_row_bottom">
            <div className="conclusion">
              <h5>
                In case of any concern,{" "}
                <a className="Contact" href="">
                  Contact Us
                </a>
              </h5>
              <h5>© 2024 www.myntra.com. All rights reserved.</h5>
              <a href="">A Flipkart company</a>
            </div>
          </div>
          <hr />
        </div>
      </footer>
    </>
  );
};

export default Footer;
