import "./index.scss";
import { Link } from "react-router-dom";

export default function CardS({ img, alt, head, para }) {
  
  return (
    <div className="cardComponentt">
      <img src={img} alt={alt} className="cardImagee" />
      <div className="cardTextt">
        <h2>{head}</h2>
        <p>{para}</p>
        <Link to="/book_now" className="Book_Noww">
          Book Now
        </Link>
      </div>
    </div>
  );
}
