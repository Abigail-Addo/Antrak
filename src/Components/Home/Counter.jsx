import { useState, useEffect, useRef } from "react";
import Ribbon from "../../assets/icons/ribbon.svg";
import Cargo from "../../assets/icons/cargo.svg";
import Rating from "../../assets/icons/rating.svg";

const Counter = () => {
  const [counts, setCounts] = useState([20, 15, 0]);
  const counterRefs = [useRef(null), useRef(null), useRef(null)];
  const [isIntersecting, setIsIntersecting] = useState(false);

  const counter = (index, min, max, interval) => {
    let timeoutId;
    for (let i = min; i <= max; i++) {
      timeoutId = setTimeout(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = i;
          return newCounts;
        });
      }, (i - min) * interval);
    }
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    }, options);

    counterRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      counter(0, 20, 500, 10);
      counter(1, 15, 300, 20);
      counter(2, 0, 10, 300);
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="bg-white counter">
        <div className="container wrapper">
          <div className="py-5">
            <div className="row">
              <div className="col-md-4 col-sm-6" ref={counterRefs[0]}>
                <div className="w-100">
                  <img
                    src={Rating}
                    alt="image"
                    width={100}
                    height={100}
                    className="d-flex mx-auto my-auto"
                  />
                </div>
                <h1 className="text-dark text-center p-2 m-0">{counts[0]}</h1>
                <p className="fs-4 m-0 text-center">Satisfied Clients Served</p>
              </div>
              <div className="col-md-4 col-sm-6" ref={counterRefs[1]}>
                <div className="w-100">
                  <img
                    src={Cargo}
                    alt="image"
                    width={100}
                    height={100}
                    className="d-flex mx-auto my-auto"
                  />
                </div>
                <h1 className="text-dark text-center p-2 m-0">{counts[1]}</h1>
                <p className="fs-4 m-0 text-center">
                  Efficient Shipments Delivered
                </p>
              </div>
              <div className="col-md-4 col-sm-6" ref={counterRefs[2]}>
                <div className="w-100">
                  <img
                    src={Ribbon}
                    alt="image"
                    width={100}
                    height={100}
                    className="d-flex mx-auto my-auto"
                  />
                </div>
                <h1 className="text-dark text-center p-2 m-0">{counts[2]}</h1>
                <p className="fs-4 m-0 text-center">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
