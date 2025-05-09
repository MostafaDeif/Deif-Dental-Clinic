import Navbar from "../../Components/Navbar";
import "./index.scss";
import ss from "../../assets/dental-care1.webp";
import Footer from "../../Components/Footer";
import CardS from "../../Components/CardPageService";

import implant from "../../assets/services/implant.jpg";
import or from "../../assets/services/or.jpg";
import borken from "../../assets/services/borken.jpg";
import general from "../../assets/services/general.jpg";
import white from "../../assets/services/white.jpg";
import surg from "../../assets/services/surg.jpg";
import smile from "../../assets/services/smile.jpg";
export default function Services() {
  return (
    <>
      <Navbar activeServices="active" />
      <div className="ServicesPage">
        <div className="headerOfServices">
          <div className="OurServices">
            <h2>Our Services</h2>
            <h3 className="headerS">
              <span> A Wide Range of Services</span> for your Best Smile
            </h3>
          </div>
        </div>
      </div>
      <div id="cardss">
        <CardS head="General Denistry" img={general} para=" Preventive care, cleanings, and fillings to keep your teeth and gums healthy." />
        <CardS head="Dental Implant" img={implant} para="Long-lasting, natural-looking replacements for missing teeth to restore function and aesthetics." />
        <CardS head="Teeth Whitening" img={white} para="Professional whitening treatments to remove stains and brighten your smile instantly." />
        <CardS head="Tooth Extraction" img={surg} para="When necessary, we provide pain-free tooth extractions using advanced techniques." />
        <CardS head="Wisdom Teeth Removal" img={surg} para="Safe and gentle extraction of problematic wisdom teeth to prevent pain and complications." />
        <CardS head="Broken Tooth Repairs" img={borken} para="Quick and effective solutions like bonding, crowns, or veneers to restore damaged teeth." />
        <CardS head="Smile Makeover" img={smile} para="A customized treatment plan combining cosmetic and restorative dentistry to transform your smile." />
        <CardS head="Orthodontics" img={or} para="Straighten your teeth with braces or clear aligners for a healthier, more aligned smile." />
        <CardS head="Oral Surgery" img={surg} para="Expert surgical care, including corrective procedures and extractions, for improved oral function." />
    
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
