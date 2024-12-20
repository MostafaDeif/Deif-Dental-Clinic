import About from "../../Components/AboutUs"
import Landing from "../../Components/Landing"
import Navbar from "../../Components/Navbar"
import "./index.scss"

export default function Home() {
  return (
    <div className="col-12 d-flex flex-column">
      <div className="navcomp">
        <Navbar />
      </div>
      <div>
        <Landing />
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}
