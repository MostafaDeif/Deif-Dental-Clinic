import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "../CardService";
import implant from "../../assets/services/implant.jpg";
import or from "../../assets/services/or.jpg";
import borken from "../../assets/services/borken.jpg";
import general from "../../assets/services/general.jpg";
import white from "../../assets/services/white.jpg";
import surg from "../../assets/services/surg.jpg";
import smile from "../../assets/services/smile.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServicesSection() {
  // In your ServicesSection component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,  // Enable center mode
    centerPadding: '0',  // Remove any extra padding
    arrows: false,
    responsive: [
      {
        breakpoint: 1500, // Laptops
        settings: {
          slidesToShow: 3,
          centerMode: true,  // Enable center mode
          centerPadding: '0',  // Remove any extra padding
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 982, // Small laptops/tablets
        settings: {
          slidesToShow: 2,
          centerMode: true,  // Enable center mode
          centerPadding: '0',  // Remove any extra padding
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900, // Tablets
        settings: {
          centerMode: true,  // Enable center mode
          centerPadding: '0',  // Remove any extra padding
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, // Mobile
        settings: {
          centerMode: true,  // Enable center mode
          centerPadding: '0',  // Remove any extra padding
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1, // Tablets
        settings: {
          centerMode: true,  // Enable center mode
          centerPadding: '0',  // Remove any extra padding
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  const services = [
    {
      head: "General Dentistry",
      img: general,
      para: "Preventive care, cleanings, and fillings to keep your teeth and gums healthy."
    },
    {
      head: "Oral Surgery",
      img: surg,
      para: "Expert surgical care, including corrective procedures and extractions, for improved oral function."
    },
    {
      head: "Dental Implant",
      img: implant,
      para: "Long-lasting, natural-looking replacements for missing teeth to restore function and aesthetics."
    },
    {
      head: "Teeth Whitening",
      img: white,
      para: "Professional whitening treatments to remove stains and brighten your smile instantly."
    },
    {
      head: "Tooth Extraction",
      img: surg,
      para: "When necessary, we provide pain-free tooth extractions using advanced techniques."
    },
    {
      head: "Broken Tooth Repairs",
      img: borken,
      para: "Quick and effective solutions like bonding, crowns, or veneers to restore damaged teeth."
    },
    {
      head: "Smile Makeover",
      img: smile,
      para: "A customized treatment plan combining cosmetic and restorative dentistry to transform your smile."
    },
    {
      head: "Wisdom Teeth Removal",
      img: surg,
      para: "Safe and gentle extraction of problematic wisdom teeth to prevent pain and complications."
    },

    {
      head: "Orthodontics",
      img: or,
      para: "Straighten your teeth with braces or clear aligners for a healthier, more aligned smile."
    }
  ];

  return (
    <div className="ServicesSection">
      <div className="containService">
        <div className="headerOfServices">
          <div className="OurServices">
            <h2>Our Services</h2>
            <h3>
              <span> A Wide Range of Services</span> for your Best Smile
            </h3>
          </div>
          <div className="explore">
            <Link to="/services" className="routelinkEX">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slider with cards */}
      <div className="cardss">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="slider-card" >
              <Card
                head={service.head}
                img={service.img}
                para={service.para}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}