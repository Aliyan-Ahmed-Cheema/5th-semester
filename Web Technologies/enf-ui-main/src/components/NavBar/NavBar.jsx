import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Logo from "../../assets/images/logoGreen.png";
import "./navbar.css";

const NavBar = (props) => {
  const { bgImage, main_head, sub_head } = props;
  const [click, setClick] = useState(false);

  // Handle click for menu and prevent body scrolling when menu is open
  const handleClick = () => {
    const isMobileView = window.innerWidth <= 800; // Check if the screen width is <= 800px
    setClick(!click);
    if (isMobileView) {
      if (!click) {
        document.body.style.overflow = 'hidden'; // Disable scrolling only for mobile view
      } else {
        document.body.style.overflow = 'auto';   // Re-enable scrolling
      }
    }
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Only animate once when scrolled into view
    });
  }, []);

  return (
    <div className="custom-nav" style={{ backgroundImage: `url(${bgImage})` }} data-aos="fade">
      {/* AOS applied to the header */}
      <div className="custom-contact-nav" data-aos="fade-down" data-aos-delay="100">
        <div className="custom-social-icons">
          <FaInstagram size={25} className="custom-insta-logo hover:text-green-500" />
          <FaLinkedinIn size={25} className="custom-linkedin-logo hover:text-green-500" />
          <FaXTwitter size={25} className="custom-twitter-logo hover:text-green-500" />
          <FaFacebookF size={25} className="custom-facebook-logo hover:text-green-500" />
        </div>
        <div className="custom-contact">
          +1 248 248 2481<FaPhone className="custom-phone-logo hover:text-green-500" />
          info@domain.com<MdEmail className="custom-email-logo hover:text-green-500" />
        </div>
      </div>

      <div className="custom-navbar" data-aos="fade-down" data-aos-delay="200">
        <Link to="/" className="custom-nav-links custom-logo-nav">
          <img src={Logo} alt="Company Logo" className="custom-logo-green" />
          <p className="custom-company-name">ILLUSION</p>
        </Link>
        <ul className={click ? "custom-links custom-active" : "custom-links"}>
          <li>
            <Link to="/" className="custom-nav-links custom-simple-links hover:text-green-500" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/company-directory" className="custom-nav-links custom-simple-links hover:text-green-500" onClick={handleClick}>
              Company Directory
            </Link>
          </li>
          <li>
            <Link to="/product-directory" className="custom-nav-links custom-simple-links hover:text-green-500" onClick={handleClick}>
              Product Directory
            </Link>
          </li>
          <li>
            <Link to="/about" className="custom-nav-links custom-simple-links hover:text-green-500" onClick={handleClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="custom-nav-links custom-cart-nav hover:text-green-500" onClick={handleClick}>
              <MdOutlineShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="custom-nav-links custom-contactus-nav hover:text-green-500" onClick={handleClick}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="custom-hamburger" onClick={handleClick}>
          {click ? <FaTimes style={{ color: "#000000" }} /> : <FaBars style={{ color: "#000000" }} />}
        </div>
      </div>

      <p className="custom-main-heading" data-aos="fade-up" data-aos-delay="300">{main_head}</p>
      <p className="custom-sub-heading" data-aos="fade-up" data-aos-delay="400">{sub_head}</p>
    </div>
  );
};

export default NavBar;
