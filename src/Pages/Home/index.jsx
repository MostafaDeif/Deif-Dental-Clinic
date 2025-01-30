import About from "../../Components/AboutUs";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";
import Services from "../../Components/OurServices";
import "./index.scss";

export default function Home() {
  return (
    <div className="col-12 d-flex flex-column">
      <div className="navcomp">
        <Navbar />
      </div>
      <div id="mother">
        <div>
          <Landing />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Services />
        </div>
      </div>
    </div>
  );
}
