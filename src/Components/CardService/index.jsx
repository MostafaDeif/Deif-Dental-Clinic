import "./index.scss";
import ss from "../../assets/dental-care1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link  } from 'react-router-dom'
export default function Card(props) {
  return (
    <div className="cardComponent">
      <img src={props.img} alt={props.alt} />
      <div className="cardText">
        <h2>{props.head}</h2>
        <p>
          {props.para}
        </p>
        <Link to="/book_now" className="Book_Now">
          Book Now
        </Link>
      </div>
    </div>
  );
}
