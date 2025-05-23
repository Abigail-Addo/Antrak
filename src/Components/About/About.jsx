import Underline from "../../assets/images/watermark/vision-title.png";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="container wrapper">
          <div className="pt-5">
            <div className="row">
              <div className="col-lg-4 col-xs-12 pb-5">
                <div className="card w-100 h-100 bg-white border-0">
                  <div className="text-center">
                    <h4 className="h-100 fs-4 fw-bold">Who We Are</h4>
                  </div>
                  <p className="card-text text-justify text-center">
                    We at Antrak Exports LLC are a passionate team of
                    international shipping experts dedicated to streamlining the
                    process and bridging the gap between you and the global
                    marketplace. We understand the complexities and stress that
                    international shipping can bring, which is why we go the
                    extra mile to provide customizable solutions and exceptional
                    service.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 pb-5">
                <div className="card w-100 h-100 border-0">
                  <div className="card-body">
                    <h5 className="card-title text-white">Our Vision</h5>
                    <img src={Underline} alt="image" />
                    <p className="card-text pt-3 text-white">
                      Our goal is to become Ghanas top logistics company, known
                      for outstanding customer service. We strive for consistent
                      high productivity, responsiveness to customer needs, and
                      fostering a culture of teamwork and improvement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 pb-5">
                <div className="card w-100 h-100 border-0">
                  <div className="card-body">
                    <h5 className="card-title text-white">Our Mission</h5>
                    <img src={Underline} alt="image" />
                    <p className="card-text pt-3 text-white">
                      We are dedicated to providing our customers with swift,
                      reliable, and secure logistics services that exceed their
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
