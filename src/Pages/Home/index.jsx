import AboutSection from "../../Components/AboutUs";
import Footer from "../../Components/Footer";
import Landing from "../../Components/Landing";
import Navbar from "../../Components/Navbar";
import ServicesSection from "../../Components/OurServices";
import "./index.scss";

export default function Home() {
  return (
    <div className="col-12">
      <Navbar activeHome="active" />
      
      <Landing />
      <AboutSection />
      <ServicesSection />

      <Footer />
    </div>
  );
}
