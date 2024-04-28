import Typewriter from "typewriter-effect";
import CarouselImage from "../../assets/images/carousel/ezgif.com-animated-gif-maker.gif"

const Carousel = () => {

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <img src={CarouselImage} alt="carousel"/>
        </div>
        <div className="carousel-text">
          <div>
            <Typewriter
              options={{
                strings: [
                  "Your Trusted Partner For Smooth International Shipping",
                ],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                cursor: "",
                delay: 150,
                pauseFor: 2000,
                hideCursorOnComplete: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
