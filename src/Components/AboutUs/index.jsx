import test from '../../assets/test.jpg'
import Mohamed from '../../assets/Mohamed Deif.jpg'
import "./index.scss"
import check from "../../assets/check.png"
import { Link  } from 'react-router-dom'

export default function AboutSection() {
  return (
    <div className="bigContainer">
      <div className='aboutUs'>
        <div className="containerImage">
          <div className='image'>
            <img src={Mohamed} alt="DR.Mohamed Deif" />
          </div>
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
