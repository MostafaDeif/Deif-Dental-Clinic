import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // ❌ This will cause the error

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footTop">
        <div className="dental-info">
          <h1>Deif Dental Clinic</h1>
          <p>
            Quality dental care for a healthy, bright smile. Book now!
          </p>
          <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/DrMohamedDeif"><FontAwesomeIcon icon={faFacebook} /></a>
            <a target="_blank" href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>


          </div>
        </div>
        <div className="pages">
          <h2>Pages</h2>
          <div className="footerRoute">
            <Link to="/" className={props.activeHome + " routelink routelinkk"}>Home</Link>
            <Link to="/about_us" className={props.activeHome + " routelink routelinkk"}>About Us</Link>
            <Link to="/services" className={props.activeHome + " routelink routelinkk"}>Services</Link>
            <Link to="/book_now" className={props.activeHome + " routelink routelinkk"}>Book Now</Link>
          </div>
        </div>
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="mail">
            <FontAwesomeIcon icon={faPhone} />
            <p>+20 11 2416 6303</p>
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            <a target="_blank" href="#" className="email">mostafadeif11@gmail.com</a>
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faLocationDot} />
            بجوار مستشفى الهدي, ٦٥ش وائل مدينة الشمس, قسم حلوان، محافظة القاهرة
          </div>
        </div>
        <div className="clinic-hours">
          <h2>Clinic Hours</h2>
          <div className="clinic-hours-content">
            <span>Saturday to Thursday</span>
            <span>04:00 - 11:00</span>
          </div>
          <div className="clinic-hours-content">
            <span>Friday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
      <div className="lineFoot"></div>
      <div className="copyRights">
        <span className="footFoot">Copyright © 2025 Deif Dental Clinic.</span>
        <span>User Terms & Conditions | Privacy Policy</span>
      </div>
    </div>
  );
}
