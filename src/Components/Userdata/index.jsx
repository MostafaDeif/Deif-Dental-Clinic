import { useState, useEffect } from "react";
import { auth, db, deleteDoc, doc } from "../../Firebase";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.scss";
import Navbar from "../Navbar";

const UserInfo = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserBookings = async () => {
            if (auth.currentUser) {
                try {
                    const q = query(collection(db, "reservations"), where("userId", "==", auth.currentUser.uid));
                    const querySnapshot = await getDocs(q);
                    const userBookings = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setBookings(userBookings);
                } catch (error) {
                    console.error("Error fetching bookings:", error);
                    toast.error("Failed to load bookings.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserBookings();
    }, []);

    const handleDeleteBooking = async (bookingId) => {
        try {
            await deleteDoc(doc(db, "reservations", bookingId));
            setBookings(bookings.filter(booking => booking.id !== bookingId));
            toast.success("Booking deleted successfully!");
        } catch (error) {
            console.error("Error deleting booking:", error);
            toast.error("Failed to delete booking.");
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully!");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Failed to log out.");
        }
    };

    return (
      <>
        <div>
          <Navbar/>
        </div>
         <div className="user-info-container">
            <h2>My Appointments</h2>

            {loading ? (
                <p className="loading-text">Loading...</p>
            ) : bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <ul id="ul">
                    {bookings.map(booking => (
                        <li id="li" key={booking.id}>
                            <strong>Date:</strong> {booking.date} <strong>Time:</strong> {booking.time}
                            <button className="delete-btn" onClick={() => handleDeleteBooking(booking.id)}>Cancel</button>
                        </li>
                    ))}
                </ul>
            )}

            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </>
    );
};

export default UserInfo;
