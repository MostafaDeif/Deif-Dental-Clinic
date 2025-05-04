import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import Mohamed1 from "../../assets/before/one.jpg";
import Mohamed2 from "../../assets/before/three.jpg";
import Mohamed3 from "../../assets/before/two.jpg";
const surgeryData = [
  {
    id: 1,
    beforeImg: Mohamed1,
    afterImg: Mohamed2,
    description: "Teeth Whitening",
  },
  {
    id: 2,
    beforeImg: Mohamed3,
    afterImg: Mohamed2,
    description: "Braces Alignment",
  },
  {
    id: 3,
    beforeImg: Mohamed1,
    afterImg: Mohamed3,
    description: "Smile Makeover",
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
    autoplaySpeed: 2500,     // Speed of auto sliding
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
