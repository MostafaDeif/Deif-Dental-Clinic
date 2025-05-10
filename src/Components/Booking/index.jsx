import "./index.scss";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, auth, collection, addDoc, query, where, getDocs } from "../../Firebase";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Booking = () => {
    const { t, i18n } = useTranslation();

    const getToday = () => new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: getToday(),
        time: "",
        message: ""
    });

    const [bookedSlots, setBookedSlots] = useState([]);
    const allowedTimes = ["04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"];

    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 5 || day === 6;
    };

    const fetchBookedSlots = async (date) => {
        const q = query(collection(db, "Reservations"), where("date", "==", date));
        const querySnapshot = await getDocs(q);
        const booked = querySnapshot.docs.map((doc) => doc.data().time);//[2:00 , 4:00]
        setBookedSlots(booked);
    };

    useEffect(() => {
        if (formData.date) {
            fetchBookedSlots(formData.date);
        }
    }, [formData.date]);

    //فن 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isWeekend(formData.date)) {
            toast.error(t("You Can't Book on Weekends"));
            return;
        }

        if (!/^01[0-9]{9}$/.test(formData.phone)) {
            toast.error(t("Phone number is wrong"));
            return;
        }

        const user = auth.currentUser;
        if (!user) {
            toast.error(t("You have to login first"));
            return;
        }

        if (bookedSlots.includes(formData.time)) {
            toast.error(t("Already Booked"));
            return;
        }

        try {
            await addDoc(collection(db, "Reservations"), {
                userId: user.uid,
                ...formData
            });
            toast.success(t("success"));
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "Full",
                date: getToday(),
                time: "",
                message: ""
            });
            fetchBookedSlots(formData.date);
        } catch (error) {
            console.error("Error adding reservation: ", error);
            toast.error(t("errorSubmit"));
        }
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="booking-container-all">
            <div className="map">
                <div className="clinicHours">
                    <h3 id="Hours">{t("clinicHours")}</h3>
                    <div className="aline"></div>
                    <div className="session">
                        <span>{t("sundayToThursday")}</span> <span>04:00 - 10:00</span>
                    </div>
                    <div className="session">
                        <span>{t("days.Friday")} - {t("days.Saturday")}</span> <span>{t("closed")}</span>
                    </div>
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
                <div className="titelFlex">
                    <h2 id="bookingTitle">{t("getYourCare")}</h2>
                    <button onClick={toggleLanguage} className="lang-switch">
                        🌐 {i18n.language === "en" ? "عربي" : "English"}
                    </button>
                </div>

                <p>{t("formNote")}</p>

                <form className="bookingForm" onSubmit={handleSubmit}>
                    <div className="inputSell">
                        <label htmlFor="name">{t("name")} *</label>
                        <input type="text" name="name" id="name" placeholder={t("placeholderName")} value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="phone">{t("phone")} *</label>
                        <input type="tel" name="phone" id="phone" title="Enter a valid Egyptian phone number starting with 010, 011, 012, or 015"
                            pattern="01[0125][0-9]{8}"
                            maxLength="11"
                            placeholder={t("placeholderPhone")} value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="email">{t("email")}</label>
                        <input type="email" name="email" id="email" placeholder={t("placeholderEmail")} value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="inputSell">
                        <label htmlFor="service">{t("service")}</label>
                        <select name="service" id="service" value={formData.service} onChange={handleChange} required>
                            <option value="" hidden>{t("services.select")}</option>
                            <option value="Dental implants">{t("services.implants")}</option>
                            <option value="General Denistry">{t("services.general")}</option>
                            <option value="Teeth Whitening">{t("services.whitening")}</option>
                            <option value="Tooth Extraction">{t("services.extraction")}</option>
                            <option value="Wisdom Teeth Removal">{t("services.wisdom")}</option>
                            <option value="Broken Tooth Repairs">{t("services.repair")}</option>
                            <option value="Smile Makeover">{t("services.smile")}</option>
                            <option value="Oral Surgery">{t("services.surgery")}</option>
                            <option value="Orthodontics">{t("services.ortho")}</option>
                        </select>
                    </div>
                    <div className="inputSell">
                        <label htmlFor="date">{t("preferredDate")}</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={getToday()}
                        />
                        {isWeekend(formData.date) && <p style={{ color: "red" }}>{t("bookingError")}</p>}
                    </div>
                    <div className="inputSell">
                        <label htmlFor="time">{t("preferredTime")}</label>
                        <select name="time" id="time" value={formData.time} onChange={handleChange} required>
                            <option value="" disabled>{t("selectTime")}</option>
                            {allowedTimes.map((time) => (
                                <option key={time} value={time} disabled={bookedSlots.includes(time)}>
                                    {time} {bookedSlots.includes(time) ? `(${t("booked")})` : ""}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="textarea inputSell">
                        <label htmlFor="message">{t("message")}</label>
                        <textarea name="message" id="message" rows="4" cols="50" placeholder={t("placeholderMessage")} value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submitButton" disabled={isWeekend(formData.date)}>
                        {t("submitText")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
