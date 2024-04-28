import Cargo1 from "../../assets/images/services/service01.webp";
import Cargo2 from "../../assets/images/services/service03.webp";
import Cargo3 from "../../assets/images/services/vehicle-shipping.jpg";
import Cargo4 from "../../assets/images/services/car-parts.jpg";

const Services = () => {
  return (
    <>
      <section>
        <div className="container wrapper">
          <div className="py-5">
            <div className="pb-5 d-flex justify-content-center">
              <h4 className="h-100 fs-4 fw-bold">Our Services</h4>
            </div>
            <div className="row services">
              <div className="col-xl-6">
                <div className="card mb-3 service">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={Cargo2}
                        className="img-fluid"
                        alt="car"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body h-100">
                        <h5 className="card-title">Global Shipping</h5>
                        <p className="card-text">
                          We offer stress-free international shipping for any
                          cargo size or complexity. Our experienced team manages
                          global deliveries, prioritizing on-time arrival and
                          secure transport through established partnerships.
                          This ensures peace of mind throughout the entire
                          shipping process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 service">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={Cargo3}
                        className="img-fluid"
                        alt="car"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body h-100">
                        <h5 className="card-title ">Vehicle Shipping</h5>
                        <p className="card-text">
                          We take the hassle out of international car shipping.
                          Our experts manage the entire process, from choosing
                          the best shipping method to handling complex
                          documentation and customs clearance. You can relax
                          knowing your car is in good hands and will arrive
                          safely at its new destination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card mb-3 service">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={Cargo4}
                        className="img-fluid"
                        alt="car"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body h-100">
                        <h5 className="card-title">Car Parts Shipping</h5>
                        <p className="card-text">
                          We have specialists who handle the complex paperwork
                          (licenses, invoices) to ensure your parts comply with
                          export rules. Our logistics expertise minimizes delays
                          and guarantees your car parts arrive safely at their
                          destination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3 service">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={Cargo1}
                        className="img-fluid"
                        alt="car"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body h-100">
                        <h5 className="card-title">Merchandise Shipping</h5>
                        <p className="card-text">
                          We handle large shipments for businesses and small
                          ones for individuals, offering flexible solutions at
                          competitive rates. With our focus on efficiency and
                          reliable partners, you can be sure your merchandise
                          gets where it needs to be, on time and on budget.
                        </p>
                      </div>
                    </div>
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

export default Services;
