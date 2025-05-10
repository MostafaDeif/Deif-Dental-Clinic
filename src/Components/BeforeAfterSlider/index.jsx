import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import af1 from "../../assets/after/af1.jpg";
import f1a from "../../assets/after/f1.jpg";
import f2a from "../../assets/after/f2.jpg";
import wh1a from "../../assets/after/wh1.jpg";
import smo1a from "../../assets/after/smo1.jpg";
import wh1b from "../../assets/before/wh1.jpg";
import f1b from "../../assets/before/f1.jpg";
import f2b from "../../assets/before/f2.jpg";
import smo1b from "../../assets/before/smo1.jpg";
import bf1 from "../../assets/before/bf1.jpg";
import beforebraces from "../../assets/before/1braces.jpg";
import afterbraces from "../../assets/after/1braces.jpg";
const surgeryData = [
  {
    id: 1,
    beforeImg: bf1,
    afterImg: af1,
    description: "Teeth Whitening",
  },
  {
    id: 2,
    beforeImg: beforebraces,
    afterImg: afterbraces,
    description: "Braces Alignment",
  },
  {
    id: 4,
    beforeImg: smo1b,
    afterImg: smo1a,
    description: "Smile Makeover",
  },
  {
    id: 5,
    beforeImg: f1b,
    afterImg: f1a,
    description: "Filling",
  },
  {
    id: 5,
    beforeImg: f2b,
    afterImg: f2a,
    description: "Filling",
  },
  {
    id: 6,
    beforeImg: wh1b,
    afterImg: wh1a,
    description: "Teeth Whitening",
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,      // Show navigation dots
    dotsClass: "slick-dots custom-dots",        
    infinite: true,          // Infinite scrolling
    speed: 800,              // Slide transition speed
    slidesToShow: 1,         // Only show 1 slide at a time
    slidesToScroll: 1,       // Scroll 1 slide at a time
    autoplay: true,          // Enable auto sliding
    autoplaySpeed: 2000,     // Speed of auto sliding
    arrows: false,           // Remove arrows from the slider
    pauseOnHover: true,      // Pause auto sliding when hover
  };

  return (
    <div className="custom-slider">
      <h2 className="title">Before & After</h2>
      <Slider {...settings}>
        {surgeryData.map((item) => (
          <div key={item.id} className="slide">
            <h3 className="description">{item.description}</h3>
            <div className="images">
              <div className="image-container">
                <img src={item.beforeImg} alt="Before" />
                <p>Before</p>
              </div>
              <div className="image-container">
                <img src={item.afterImg} alt="After" />
                <p>After</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
