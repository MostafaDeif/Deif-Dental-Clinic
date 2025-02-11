import "./index.scss";
import tooth1 from "../../assets/tooth1.jpg";
import smile from "../../assets/smile.jpg";
import surgical2 from "../../assets/sergical2.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "../CardService";
import ss from "../../assets/dental-care1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServicesSection() {
  return (
    <div className="ServicesSection">
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
      {/* cards here */}
      <div className="cardss">
        <Card head="General Denistry" img={ss} para=" Preventive care, cleanings, and fillings to keep your teeth and gums healthy." />
        <Card head="Dental Implant" img={ss} para="Long-lasting, natural-looking replacements for missing teeth to restore function and aesthetics." />
        <Card head="Teeth Whitening" img={ss} para="Professional whitening treatments to remove stains and brighten your smile instantly." />
      </div>
      {/* <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src={tooth1} className="card-img-top" alt="Card Image 1" />
              <div className="card-body text-center">
                <h5 className="card-title">General Dentistry</h5>
                <p className="card-text">
                  Comprehensive care for a healthy smile! From cleanings to
                  fillings, we keep your teeth strong and bright.
                </p>
                <Link to="/services" className="routelinkS">
                  Learn More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="faArrowRight"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src={surgical2}
                className="card-img-top"
                alt="Card Image 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Dental Implant</h5>
                <p className="card-text">
                  A permanent, natural-looking solution for missing teeth.
                  Designed to last a lifetime. Restore your smile with
                  confidence!
                </p>
                <Link to="/services" className="routelinkS">
                  Learn More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="faArrowRight"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img src={smile} className="card-img-top" alt="Card Image 3" />
              <div className="card-body text-center">
                <h5 className="card-title">Teeth Whitening</h5>
                <p className="card-text">
                  Brighten your smile with professional teeth whitening! Safe,
                  effective, and long-lasting results for a radiant, confident
                  look.
                </p>
                <Link to="/services" className="routelinkS">
                  Learn More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="faArrowRight"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
