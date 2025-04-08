import React, { useState, useEffect } from "react";
import { db, collection, getDocs, deleteDoc, doc } from "../../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Navbar from "../../Components/Navbar";

const Admin = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);
    
    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long" });
      };
    const fetchBookings = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Reservations"));
            const bookingsList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const sortedAppointments = [...bookingsList].sort((a, b) =>
                new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
            );
            setBookings(sortedAppointments);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const deleteBooking = async (id) => {
        try {
            await deleteDoc(doc(db, "Reservations", id));
            setBookings(bookings.filter((booking) => booking.id !== id));
            toast.success("Booking deleted successfully!");
        } catch (error) {
            console.error("Error deleting booking:", error);
            toast.error("Error deleting booking. Please try again.");
        }
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="admin-bookings-container">
                <h2>All Bookings</h2>
                <ul>
                    {bookings.length === 0 ? (
                        <p>No bookings found.</p>
                    ) : (
                        bookings.map((booking) => (
                            <li key={booking.id} className="booking-item">
                                <div className="booking-info">
                                    <p><strong>Name:</strong> {booking.name}</p>
                                    <p><strong>Phone:</strong> {booking.phone}</p>
                                    <p><strong>Email:</strong> {booking.email}</p>
                                    <p><strong>Service:</strong> {booking.service}</p>
                                    <p><strong>Date:</strong> {booking.date} ({getDayName(booking.date)})</p>
                                    <p><strong>Time:</strong> {booking.time}</p>
                                </div>
                                <button className="delete-button" onClick={() => deleteBooking(booking.id)}>Delete</button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
};

export default Admin;
