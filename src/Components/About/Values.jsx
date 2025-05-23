import Image from "../../assets/images/others/service01.jpg";

const Values = () => {
  return (
    <>
      <section className="values">
        <div className="container wrapper">
          <div className="py-5">
            <div className=" pb-5 d-flex justify-content-center">
              <h4 className="h-100 fs-4 fw-bold">Our Core Values</h4>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 pb-5">
                <div className="image">
                  <img src={Image} alt="image" className="image w-100 h-100" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 values-col">
                <div className="row">
                  <div className="col-6">
                    <h4>Efficiency</h4>
                    <div
                      className="progress w-25"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar"></div>
                    </div>
                    <p className="pt-2">
                      We prioritize streamlined procedures and timely deliveries
                      to get your cargo moving quickly and avoid delays.
                    </p>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                  <div className="col-6">
                    <h4>Competitive Rates</h4>
                    <div
                      className="progress w-25"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar"></div>
                    </div>
                    <p className="pt-2">
                      We offer cost-effective shipping solutions without
                      compromising on the quality of service you deserve.
                    </p>
                  </div>
                  <div className="col-6">
                    <h4>Integrity</h4>
                    <div
                      className="progress w-25"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar"></div>
                    </div>
                    <p className="pt-2">
                      We are committed to ethical business practices and
                      building trust with our clients.
                    </p>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                  <div className="col-6">
                    <h4>Transparency</h4>
                    <div
                      className="progress w-25"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar"></div>
                    </div>
                    <p className="pt-2">
                      We believe in clear communication and keeping you informed
                      throughout the entire shipping process.
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

export default Values;
