import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages & Components
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UserInfo from "./Components/Userdata";
import BookNow from "./Pages/BookNow";
import Admin from "./Pages/Admin";
import Services from "./Pages/Services";
import About from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";
import ProtectedRoute from "./Components/Portected";
// import PhoneEmailSignUp from "./Pages/PhoneSign";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book_now" element={<BookNow />} />

          {/* Protected routes */}
          <Route path="/user" element={
            <ProtectedRoute user={user}>
              <UserInfo />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute user={user}>
              <Admin />
            </ProtectedRoute>
          } />

          {/* Public routes */}
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/phonesignup" element={<PhoneEmailSignUp />} /> */}

          <Route path="*" element={<h1>Error 404 - Page Not Found</h1>} />
        </Routes>

        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
      </BrowserRouter>
    </div>
  );
}
