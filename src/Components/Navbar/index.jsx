import { Link } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTooth } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (

        // <nav className="col-12 d-flex justify-content-between align-items-center  ">
    //   <div className="logo font-weight-bold"><i className="fa-solid fa-tooth"></i> Deif Dental Clinic</div>
    //   <ul className="nav nav-pills">
    //     <li className="nav-item">
    //       <a className="nav-link active" href="#">Home</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">About Us</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Services</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Contact Us</a>
    //     </li>
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Book Now</a>
    //     </li>
    //   </ul>
    // </nav>

    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faTooth} className="toothLogo" />
        <p>Deif Dental Clinic</p>
      </div>
      {/* menu icon
      <FontAwesomeIcon icon={faBars} className="menuIcon" /> */}
      <nav>
        <ul>
          <li><Link to="/" className="routelink">Home</Link></li>
          <li><Link to="about_us" className="routelink">About Us</Link></li>
          <li><Link to="services" className="routelink">Services</Link></li>
          <li><Link to="book_now" className="routelink">Book Now</Link></li>
        </ul>
      </nav>
    </header>
  );
}
