import { Link } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export default function Navbar() {
  const [userlog, setUserLog] = useState(null); 
  const [admin, setAdmin] = useState(false); 

  const checkAdminStatus = async (user) => {
    try {
      const userRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.admin === true) {
          setAdmin(true);
          console.log("User is an Admin.");
        } else {
          setAdmin(false);
          console.log("User is not an Admin.");
        }
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error fetching admin status:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLog(user);
        checkAdminStatus(user); 
      } else {
        setUserLog(null); 
        setAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faTooth} className="toothLogo" />
        <label>Deif Dental Clinic</label>
      </div>
      <nav>
    
        <ul>
          <li><Link to="/" className="routelink">Home</Link></li>
          <li><Link to="about_us" className="routelink">About Us</Link></li>
          <li><Link to="services" className="routelink">Services</Link></li>
          <li><Link to="book_now" className="routelink">Book Now</Link></li>
          <li>
            <Link to={userlog ? "/user" : "/login"} className="routelink">
              {userlog ? "User Info" : "Login"}
            </Link>
          </li>
          {admin && (
            <li>
              <Link to="/admin" className="routelink">Admin</Link>
            </li>
          )}
        </ul>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn" >
          <i className="fas fa-bars"></i>
        </label>
      </nav>
    </header>
  );
}
