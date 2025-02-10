import AboutSection from "../../Components/AboutUs";
import Footer from "../../Components/Footer";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";
import ServicesSection from "../../Components/OurServices";
import "./index.scss";

export default function Home() {
  return (
    <div className="col-12">
      <div className="navcomp">
        <Navbar activeHome="active"/>
      </div>
      <div>
        <div>
          <Landing />
        </div>
        <div>
          <AboutSection />
        </div>
        <div>
          <ServicesSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
