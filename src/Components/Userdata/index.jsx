import { useState, useEffect } from "react";
import {
  auth,
  db,
  doc,
  getDoc,
  setDoc,
  deleteDoc
} from "../../Firebase";
import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.scss";
import Navbar from "../Navbar";

const UserInfo = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        const newUser = {
          name: user.displayName || "Anonymous",
          email: user.email,
          photoURL: "", // no longer used
        };
        await setDoc(docRef, newUser);
        setUserInfo(newUser);
      }
    };

    const fetchUserBookings = async (userId) => {
      const q = query(collection(db, "Reservations"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const userBookings = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(userBookings);
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUserData(user);
        await fetchUserBookings(user.uid);
      } else {
        setUserInfo(null);
        setBookings([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out!");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed.");
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, "Reservations", id));
      setBookings(prev => prev.filter(b => b.id !== id));
      toast.success("Booking deleted.");
    } catch {
      toast.error("Error deleting.");
    }
  };

  const getDayName = (date) => new Date(date).toLocaleDateString("en-US", { weekday: "long" });

  // Use name from first booking if exists, else userInfo name
  const displayName = bookings.length > 0
    ? bookings[0].name || userInfo?.name || "User"
    : userInfo?.name || "User";

  return (
    <>
      <Navbar />
      <div className="user-info-container">
        {userInfo && (
          <div className="profile-card">
            <div className="profile-details">
              <p className="profile-name">{displayName}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        )}

        <div className="appointments-section">
          <h3>My Appointments</h3>
          {loading ? (
            <p>Loading...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="bookings-grid">
              {bookings.map(book => (
                <div className="booking-card" key={book.id}>
                  <h4>{book.service}</h4>
                  <p><strong>Name:</strong> {book.name}</p>
                  <p><strong>Phone:</strong> {book.phone}</p>
                  {book.email && <p><strong>Email:</strong> {book.email}</p>}
                  <p><strong>Date:</strong> {book.date} ({getDayName(book.date)})</p>
                  <p><strong>Time:</strong> {book.time}</p>
                  {book.message && <p><strong>Message:</strong> {book.message}</p>}
                  <button className="cancel-btn" onClick={() => handleDeleteBooking(book.id)}>Cancel</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default UserInfo;
