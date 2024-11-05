import { Link, useNavigate } from "react-router-dom";
// import "./index.scss";
import loginimg from "../../assets/cover.jpg"
import "../SignUp/index.scss"
import { useRef, useState } from "react";
import { auth } from "../../Firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Account loged in");
      Swal.fire({
        icon: 'success',
        title: 'Account login Successfully',
        text: 'Welcome back!',
        // position: 'center',
        timer: 1500,
        showConfirmButton: false
      });
      setTimeout(() => {
        navigate("/"); // Redirects to the login page
      }, 1500); // Adjust delay as needed for the alert timing

    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Account Already Registered!!!!",
        // position: 'center',
        showConfirmButton: true

      });
    }
  };


  return (
    <div className="signPage">
      <div className="signCard">
        <h1>Deif Dental Clinic</h1>
        <h2>Login to your account</h2>
        <p>Don’t have an account?
          <Link className="Rlink" to="/signup"> Sign Up</Link>
        </p>
        <div className="contentform">
          <form className="signForm" onSubmit={handleSubmit}>
            <input className="normalInput" type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
            <input className="normalInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
  )
}
