import "./index.scss";
import { Link } from "react-router-dom";

export default function Card({ img, alt, head, para }) {
  return (
    <div className="cardComponent">
      <img src={img} alt={alt} className="cardImage" />
      <div className="cardText">
        <h2>{head}</h2>
        <p>{para}</p>
        <Link to="/book_now" className="Book_Now">
          Book Now
        </Link>
      </div>
    </div>
  );
}
