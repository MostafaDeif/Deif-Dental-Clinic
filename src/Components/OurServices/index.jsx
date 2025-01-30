import "./index.scss";
import tooth1 from "../../assets/tooth1.jpg";
import smile from "../../assets/smile.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="OurServices">
      <h2>Our Services</h2>
      <h3>
        <span> A Wide Range of Services</span> for your Best Smile
      </h3>
      {/* <div className="cardsContainer">
        <div className="cards">
          <div className="card">
            <img src={tooth1} alt="tooth" />
            <div className="containText">
              <h3>General Dentistry</h3>
              <p>
              Comprehensive care for a healthy smile! From cleanings to fillings, we keep your teeth strong and bright.
              </p>
              <Link to="services" className="readMore">
                Learn more
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={smile} alt="tooth" />
            <div className="containText">
              <h3>Teeth Whitening</h3>
              <p>
              Brighten your smile with professional teeth whitening! Safe, effective, and long-lasting results for a radiant, confident look.
              </p>
              <Link to="services" className="readMore">
                Learn more
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={tooth1} alt="tooth" />
            <div className="containText">
              <h3>dental implant</h3>
              <p>
              A permanent, natural-looking solution for missing teeth. Strong, durable, and designed to last a lifetime. Restore your smile with confidence!
              </p>
              <Link to="services" className="readMore">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div> */}

<div className="container mt-4">
  <div className="row justify-content-center">
    
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={tooth1} className="card-img-top" alt="Card Image 1"/>
        <div className="card-body text-center">
          <h5 className="card-title">General Dentistry</h5>
          <p className="card-text">Comprehensive care for a healthy smile! From cleanings to fillings, we keep your teeth strong and bright.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={tooth1} className="card-img-top" alt="Card Image 2"/>
        <div className="card-body text-center">
          <h5 className="card-title">Dental Implant</h5>
          <p className="card-text">A permanent, natural-looking solution for missing teeth. Strong, durable, and designed to last a lifetime. Restore your smile with confidence!</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={smile} className="card-img-top" alt="Card Image 3"/>
        <div className="card-body text-center">
          <h5 className="card-title">Teeth Whitening</h5>
          <p className="card-text">Brighten your smile with professional teeth whitening! Safe, effective, and long-lasting results for a radiant, confident look.
          </p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  );
}
