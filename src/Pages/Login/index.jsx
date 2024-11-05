import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/cover.jpg";
import "../SignUp/index.scss";
import { useState } from "react";
import { auth } from "../../Firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Account logged in");
      Swal.fire({
        icon: 'success',
        title: 'Account Login Successfully',
        text: 'Welcome back!',
        timer: 1500,
        showConfirmButton: false
      });
      setTimeout(() => {
        navigate("/"); // Redirects to the home page
      }, 1500);

    } catch (err) {
      console.log(err);
      let errorMessage;

      // Check for specific Firebase authentication errors
      if (err.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email. Please check your email or sign up.';
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'The email address is not valid. Please enter a valid email.';
      } else {
        errorMessage = 'An unknown error occurred. Please try again later.';
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        showConfirmButton: true
      });
    }
  };

  return (
    <div className="signPage">
      <div className="signCard">
        <h1>Deif Dental Clinic</h1>
        <h2>Login to your account</h2>
        <p>
          Don’t have an account? 
          <Link className="Rlink" to="/signup"> Sign Up</Link>
        </p>
        <div className="contentform">
          <form className="signForm" onSubmit={handleSubmit}>
            <input 
              className="normalInput" 
              type="email" 
              placeholder="Email Address" 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              className="normalInput" 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div>
              <input className="signbtn" type="submit" value="Login" />
              <span></span>
            </div>
          </form>
        </div>
      </div>
      <div className="signWallpaper">
        <img src={loginimg} alt="clinic" />
      </div>
    </div>
  );
}
