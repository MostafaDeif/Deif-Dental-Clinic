import Mohamed from '../../assets/Mohamed Deif.jpg'
import "./index.scss"
import check from "../../assets/check.png"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";


export default function AboutSection() {
  return (
    <div className="bigContainer">
      <div className='aboutUs'>
        <div className='imageContainer'>
          {/* <div className='DR'>
            <div className='iconColor'>
              <FontAwesomeIcon className="icon" icon={faUserDoctor} />
            </div>
            <div>
              <h2>Dr. Mohamed Deif</h2>
              <h3>Dentist</h3>
            </div>
          </div> */}
          <img className='drImage' src={Mohamed} alt="DR.Mohamed Deif" />
        </div>
        <div className='aboutText'>
          <h3>About us</h3>
          <h2>your <span>trusted partner</span> for dental Health</h2>
          <p>Our team is dedicated to providing the best possible dental care for you. A healthy smile is a happy smile – we help you achieve both!</p>
          <div className='advantages'>
            <h5><img src={check} width={20} alt="check" /> Modern Equipment</h5>
            <h5><img src={check} width={20} alt="check" /> Comfortable Clinic</h5>
            <h5><img src={check} width={20} alt="check" /> Online Appointment</h5>
            <h5><img src={check} width={20} alt="check" /> Always Monitored</h5>
          </div>
          <Link to="about_us" className='readMore'>Read more</Link>
        </div>
      </div>
    </div>
  )
}
