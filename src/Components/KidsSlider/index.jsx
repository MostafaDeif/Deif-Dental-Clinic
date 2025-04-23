import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

// Use Vite's import.meta.glob to import all images from /assets/kids
const imageModules = import.meta.glob("../../assets/kids/*.jpg", { eager: true });
const imageData = Object.values(imageModules).map((module) => module.default);

// Sort the images numerically by file name
imageData.sort((a, b) => {
  const getNumber = (str) => parseInt(str.match(/(\d+)\.jpg$/)?.[1] || 0);
  return getNumber(a) - getNumber(b);
});

const KidsSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="image-only-slider">
      <h1 className="title">Friendly Doctor</h1>
      <Slider {...settings}>
        {imageData.map((img, index) => (
          <div key={index} className="image-slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KidsSlider;
