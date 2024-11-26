import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
// import { db } from "./fireBase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdata from "./Components/Userdata";
import { auth } from "./Firebase";
import BookNow from "./Pages/BookNow";
import Admin from "./Pages/Admin";




export default function App() {
  //   const [products ,setProducts] = useState([]);
  //   const getData = async () => {
  //     const products = await getDocs(collection(db, "products"));
  //     products.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   }
  //   useEffect(()=>{

  //     getData();
  //   },[])
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
  }, [])

  return (
    <div className="col-12 App d-flex">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/"> 
            <Route index element={<Home />} />
            <Route path="contact_us" element={<h1>contact us</h1>} />
            <Route path="about_us" element={<h1>About us</h1>} />
            <Route path="services" element={<h1>Services</h1>} />
            <Route path="book_now" element={<BookNow />} />
            {/* <Route path="join/:join_type" element={<JoinPage />} /> */}
          </Route>
          <Route path="*" element={<h1>error 404</h1>} />
          <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="user" element={<Userdata />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        <ToastContainer /> {/* Add this to render the toast notifications */}

      </BrowserRouter>
    </div>
  )
}
