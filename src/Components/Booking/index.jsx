import "./index.scss";

export default function Booking() {
    return (
        <div className="booking-container-all">
            <div className="map">
                <iframe className="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.2175443414189!2d31.342429730416978!3d29.839168861747954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458375d58e8fafb%3A0x609436be3ce4c17b!2zRGVpZiBEZW50YWwgQ2xpbmljINi52YrYp9iv2Kkg2LbZitmBINmE2YTYp9iz2YbYp9mG!5e0!3m2!1sar!2seg!4v1732223041121!5m2!1sar!2seg"
                    width="500"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                ></iframe>
                <h2 className="map-title">map</h2>
            </div>
            <div className="bookingContent">
                <h2 id="bookingTitle">Get your Care</h2>
                <p>You can simply communicate with us by submitting this form and we will respond to you ASAP.</p>
                <form className="bookingForm">
                    <div className="inputSell">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name .." required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="Email" id="Email" placeholder="Enter Your Email .." />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone .." required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="Service">Dental Service</label>
                        <select name="Service" id="Service">
                            <option value="Full">Full Mouth Cases</option>
                            <option value="implants">Dental implants</option>
                            <option value="Child">Child Dentistry</option>
                            <option value="Whitening">Teeth Whitening</option>
                        </select>
                    </div>
                    <div className="inputSell">
                        <label htmlFor="date">chose a date</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="time">chose a time</label>
                        <input type="time" name="time" id="time" />
                    </div>
                    <div className="textarea inputSell">
                        <label htmlFor="massage">Leave a Messages</label>
                        <textarea name="massage" id="massage" rows="4" cols="50" placeholder="Enter Your Messages  ..">
                            
                        </textarea>
                    </div>
                </form>
            </div>
        </div>
    );
}
