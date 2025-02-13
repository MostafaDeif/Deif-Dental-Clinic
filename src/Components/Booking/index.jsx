import "./index.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, auth, collection, addDoc, query, where, getDocs } from "../../Firebase"; // Import Firebase functions

const Booking = () => {
    const getToday = () => new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "Full",
        date: getToday(),
        time: "",
        message: ""
    });

    const [bookedSlots, setBookedSlots] = useState([]);
    const allowedTimes = ["04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"];

    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 5 || day === 6; // Friday (5), Saturday (6)
    };

    useEffect(() => {
        if (formData.date) {
            fetchBookedSlots(formData.date);
        }
    }, [formData.date]);

    const fetchBookedSlots = async (date) => {
        const q = query(collection(db, "reservations"), where("date", "==", date));
        const querySnapshot = await getDocs(q);
        const booked = querySnapshot.docs.map((doc) => doc.data().time);
        setBookedSlots(booked);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isWeekend(formData.date)) {
            toast.error("Appointments cannot be scheduled on Friday or Saturday.");
            return;
        }

        if (!/^01[0-9]{9}$/.test(formData.phone)) {
            toast.error("Please enter a valid Egyptian phone number (e.g., 01012345678).");
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            toast.error("You must be logged in to book an appointment.");
            return;
        }

        if (bookedSlots.includes(formData.time)) {
            toast.error("This time slot is already booked. Please choose another.");
            return;
        }

        try {
            await addDoc(collection(db, "reservations"), {
                userId: user.uid,
                ...formData
            });
            toast.success("Reservation submitted successfully!");
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "Full",
                date: getToday(),
                time: "",
                message: ""
            });
            fetchBookedSlots(formData.date); // Refresh booked slots
        } catch (error) {
            console.error("Error adding reservation: ", error);
            toast.error("Error submitting reservation. Please try again.");
        }
    };

    return (
        <div className="booking-container-all">
            <div className="map">
                <div className="clinicHours">
                    <h3 id="Hours">Clinic Hours</h3>
                    <div className="aline"></div>
                    <div className="session"><span>Saturday to Thursday</span> <span>04:00 - 10:00</span></div>
                    <div className="session"><span>Friday</span> <span>Closed</span></div>
                </div>
                <iframe className="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.2175443414189!2d31.342429730416978!3d29.839168861747954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458375d58e8fafb%3A0x609436be3ce4c17b!2zRGVpZiBEZW50YWwgQ2xpbmljINi52YrYp9iv2Kkg2LbZitmBINmE2YTYp9iz2YbYp9mG!5e0!3m2!1sar!2seg!4v1732223041121!5m2!1sar!2seg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                ></iframe>
            </div>

            <div className="bookingContent">
                <h2 id="bookingTitle">Get your Care</h2>
                <p>You can simply communicate with us by submitting this form and we will respond to you ASAP.</p>
                
                <form className="bookingForm" onSubmit={handleSubmit}>
                    <div className="inputSell">
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name .." value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone .." value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email .." value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="service">Dental Service</label>
                        <select name="service" id="service" value={formData.service} onChange={handleChange}>
                            <option value="Full">Full Mouth Cases</option>
                            <option value="implants">Dental Implants</option>
                            <option value="Child">Child Dentistry</option>
                            <option value="Whitening">Teeth Whitening</option>
                        </select>
                    </div>
                    <div className="inputSell">
                        <label htmlFor="date">Preferred Date</label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            min={getToday()} 
                        />
                        {isWeekend(formData.date) && <p style={{ color: "red" }}>⚠️ Cannot book on Friday or Saturday</p>}
                    </div>
                    <div className="inputSell">
                        <label htmlFor="time">Preferred Time</label>
                        <select name="time" id="time" value={formData.time} onChange={handleChange} required>
                            <option value="" disabled>Select Time</option>
                            {allowedTimes.map((time) => (
                                <option key={time} value={time} disabled={bookedSlots.includes(time)}>
                                    {time} {bookedSlots.includes(time) ? "(Booked)" : ""}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="textarea inputSell">
                        <label htmlFor="message">Leave a Message</label>
                        <textarea name="message" id="message" rows="4" cols="50" placeholder="Enter Your Message .." value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submitButton" disabled={isWeekend(formData.date)}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
