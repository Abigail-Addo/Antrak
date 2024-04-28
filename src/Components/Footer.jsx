import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter-x.svg";
import { NavLink } from "react-bootstrap";

import Logo from "../assets/icons/logo-transparent-svg.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container wrapper text-white">
          <div className="pt-5">
            <div className="row h-100 border-bottom">
              <div className="col-xl-6 pb-4">
                <div className="w-50">
                  <img src={Logo} alt="logo" width="100%" height="100%" />
                </div>
                <p>
                  At Antrak Export LLC, we are passionate about connecting you
                  to the world. We are a full-service export company dedicated
                  to simplifying international shipping for businesses and
                  individuals alike.
                </p>
                <div className="h-100 w-100 social-container">
                  <p className="py-0 my-0 font-italic">Follow us on</p>
                  <Link
                    to="https://web.facebook.com/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <img src={Facebook} alt="facebook" className="social" />
                  </Link>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <img src={Instagram} alt="instagram" className="social" />
                  </Link>
                  <Link to="https://twitter.com/?lang=en" target="_blank">
                    <img src={Twitter} alt="twitter" className="social" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 d-flex flex-column pb-4">
                <div>
                  <h5 className="fw-bold text-white p-0 m-0">Quick Links</h5>
                </div>
                <div>
                  <NavLink href="/" className="text-decoration-none text-white">
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    href="/about"
                    className="text-decoration-none text-white"
                  >
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    href="/services"
                    className="text-decoration-none text-white"
                  >
                    Services
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    href="/contact"
                    className="text-decoration-none text-white"
                  >
                    Contact
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    href="/gallery"
                    className="text-decoration-none text-white"
                  >
                    Gallery
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-3 d-flex flex-column">
                <div>
                  <h5 className="fw-bold text-white p-0 m-0">Support</h5>
                </div>
                <div>
                  <NavLink
                    href="/faq"
                    className="text-decoration-none text-white"
                  >
                    Frequently Asked Questions
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    href="/privacy-policy"
                    className="text-decoration-none text-white"
                  >
                    Privacy Policy
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center py-4">
                <p>Copyright © 2024 Antrak Export LLC. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
