import "./index.scss"

export default function Navbar() {
  return (
    <nav className="col-12 d-flex justify-content-between align-items-center  ">
    <div className="logo font-weight-bold"><i className="fa-solid fa-tooth"></i> Deif Dental Clinic</div>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Book Now</a>
      </li>
    </ul>
  </nav>
  
  )
}
