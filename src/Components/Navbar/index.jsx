import { Link } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { auth, db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../../assets/logo/Vector.png"

export default function Navbar(props) {
  const [userlog, setUserLog] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [isWidthLessThan600, setIsWidthLessThan600] = useState(window.innerWidth < 600);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const isSmallScreen = window.innerWidth < 600;
      setIsWidthLessThan600(isSmallScreen);

      // Ensure menu is closed on small screens by default
      if (isSmallScreen) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const checkAdminStatus = async (user) => {
    try {
      const userRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        setAdmin(userDoc.data().admin === true);
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
    <nav>
      <a href="#" className="linklogo">
        <div className="logo">
          <FontAwesomeIcon icon={faTooth} className="toothLogo" />
          {/* <img src={logo} width={30} alt="check" /> */}

          <h1>Deif Dental Clinic</h1>
        </div>
      </a>

      {/* Toggle Button for Small Screens */}
      {isWidthLessThan600 && (
        <div className="checkbtn" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      )}

      {/* Navigation Menu */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" className={props.activeHome + " routelink"}>Home</Link></li>
        <li><Link to="/about_us" className={props.activeAbout + " routelink"}>About Us</Link></li>
        <li><Link to="/services" className={props.activeServices + " routelink"}>Services</Link></li>
        <li><Link to="/book_now" className={props.activeBook + " routelink"}>Book Now</Link></li>
        <li>
          <Link to={userlog ? "/user" : "/login"} className={props.activeLogin + " routelink"}>
            {userlog ? "User Info" : "Login"}
          </Link>
        </li>
        {admin && (
          <li>
            <Link to="/admin" className="routelink">Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
