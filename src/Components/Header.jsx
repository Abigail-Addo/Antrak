import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter-x.svg";
import Location from "../assets/icons/location.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/phone.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo-transparent-svg.svg";

const Header = () => {
  return (
    <>
      <header className="justify-content-between">
        <div className="d-flex shape-wrapper">
          <div className="trapezium">
            <div className="ms-5">
              <Link to="/">
                <img src={Logo} alt="logo" width="80%" height="70%" />
              </Link>
            </div>
          </div>
          <div className="line h-100 w-100"></div>
        </div>

        <div className="details d-flex align-items-center justify-content-evenly">
          <Link
            to="https://maps.app.goo.gl/XBwfnoHwdQVNLHac7"
            target="_blank"
            className="w-25 d-flex justify-content-center align-items-center text-decoration-none"
          >
            <img src={Location} alt="location" className="icons" />
            <p className="my-auto">4018 E 12th Avenue Tampa, FL, 33605</p>
          </Link>
          <Link
            to="mailto:antrakexport@gmail.com"
            className="w-25 d-flex justify-content-center align-items-center text-decoration-none"
          >
            <img src={Email} alt="email" className="icons" />
            <p className="my-auto">antrakexport@gmail.com</p>
          </Link>
          <Link
            to="tel:(941) -276-8532"
            className="w-15 d-flex justify-content-end align-items-center text-decoration-none"
          >
            <img src={Call} alt="call" className="icons" />
            <p className="my-auto">(941) -276-8532</p>
          </Link>
        </div>

        <div className="d-flex shape-wrapper-rotate h-100">
          <div className="trapezium text-white">
            <div className="h-100 w-50 text-break ms-5 d-flex align-items-center">
              <Link to="https://www.instagram.com/" target="_blank">
                <img src={Instagram} alt="instagram" className="icon" />
              </Link>
              <Link to="https://twitter.com/?lang=en" target="_blank">
                <img src={Twitter} alt="twitter" className="icon" />
              </Link>
              <Link to="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                <img src={Facebook} alt="facebook" className="icon" />
              </Link>
            </div>
          </div>
          <div className="line h-100 w-100"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
