import Card from "../../Components/CardService";
import Navbar from "../../Components/Navbar";
import "./index.scss";
import ss from "../../assets/dental-care1.webp";
import Footer from "../../Components/Footer";

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
        <Card head="General Denistry" img={ss} para=" Preventive care, cleanings, and fillings to keep your teeth and gums healthy." />
        <Card head="Dental Implant" img={ss} para="Long-lasting, natural-looking replacements for missing teeth to restore function and aesthetics." />
        <Card head="Teeth Whitening" img={ss} para="Professional whitening treatments to remove stains and brighten your smile instantly." />
        <Card head="Tooth Extraction" img={ss} para="When necessary, we provide pain-free tooth extractions using advanced techniques." />
        <Card head="Wisdom Teeth Removal" img={ss} para="Safe and gentle extraction of problematic wisdom teeth to prevent pain and complications." />
        <Card head="Broken Tooth Repairs" img={ss} para="Quick and effective solutions like bonding, crowns, or veneers to restore damaged teeth." />
        <Card head="Smile Makeover" img={ss} para="A customized treatment plan combining cosmetic and restorative dentistry to transform your smile." />
        <Card head="Oral Surgery" img={ss} para="Expert surgical care, including corrective procedures and extractions, for improved oral function." />
        <Card head="Orthodontics" img={ss} para="Straighten your teeth with braces or clear aligners for a healthier, more aligned smile." />
      
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
