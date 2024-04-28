import Image from "../../assets/images/others/contact.jpg";
import Location from "../../assets/icons/location-contact.svg";
import Phone from "../../assets/icons/phone-contact.svg";
import Email from "../../assets/icons/message-contact.svg";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <section className="bg-white details">
        <div className="container wrapper w-100 h-100">
          <div className="py-5">
            <div className="row pt-5 p-0 m-0">
              <div className="col-lg-6 col-xs-12">
                <div className="pb-5 d-flex">
                  <h4 className="h-100 fs-4 fw-bold">Get In Touch</h4>
                </div>
                <p className="text-justify pb-4 border-bottom">
                  We are here to assist you with your export needs. Don&#39;t
                  hesitate to get in touch with us for reliable and efficient
                  service tailored to your exporting needs.
                </p>

                <div className="d-flex pt-4">
                  <img
                    src={Location}
                    alt="location"
                    width={40}
                    height={40}
                    className="d-flex my-auto"
                  />
                  <Link
                    to="https://maps.app.goo.gl/XBwfnoHwdQVNLHac7"
                    target="_blank"
                    className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                  >
                    <p className="p-0 m-0">
                      4018 E 12th Avenue Tampa, FL, 33605
                    </p>
                  </Link>
                </div>
                <div className="d-flex pt-4">
                  <img
                    src={Phone}
                    alt="call"
                    width={40}
                    height={40}
                    className="d-flex my-auto"
                  />
                  <Link
                    to="tel:(941) -276-8532"
                    className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                  >
                    <p className="p-0 m-0">(941) -276-8532</p>
                  </Link>
                </div>
                <div className="d-flex py-4">
                  <img
                    src={Email}
                    alt="email"
                    width={40}
                    height={40}
                    className="d-flex my-auto"
                  />
                  <Link
                    to="mailto:antrakexport@gmail.com"
                    className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                  >
                    <p className="p-0 m-0">antrakexport@gmail.com</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="w-100 h-100">
                  <img
                    src={Image}
                    alt="image"
                    className="w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
