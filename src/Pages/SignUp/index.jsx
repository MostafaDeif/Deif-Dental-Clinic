import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import loginimg from "../../assets/cover.jpg";
import { useState } from "react";
import { auth, db } from "../../Firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Capture user data from the result

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    fullName: name,
                    phoneNumber: phone,
                    token: user.uid,
                });
            }

            Swal.fire({
                icon: 'success',
                title: 'Account Created Successfully',
                text: 'Your account has been created successfully!',
                timer: 2000,
                showConfirmButton: false
            });

            setTimeout(() => {
                navigate("/");
            }, 2000);

        } catch (error) {
            let errorMessage;

            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'This email is already in use. Please try a different email.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'The email address is not valid. Please enter a valid email.';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'The password is too weak. Please choose a stronger password.';
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
                <h2>Sign Up</h2>
                <div className="contentform">
                    <form className="signForm" onSubmit={handleSubmit}>
                        <input className="normalInput" type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                        <input className="normalInput" type="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                        <input className="normalInput" type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                        <input className="normalInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div>
                            <button className="signbtn" type="submit">Sign Up</button>
                            <span></span>
                        </div>
                    </form>
                    <Link className="Rlink" to="/login">Already have an account?</Link>
                    {/* <Link className="Rlink" to="/login">Sign Up with E-mail</Link> */}
                    {/* <Link className="Rlink" to="/phonesignup">Sign Up with Phone Number</Link> */}
                </div>
            </div>
            <div className="signWallpaper">
                <h1>Welcome to Deif Dental Clinic</h1>
                <img src={loginimg} alt="clinic" />
            </div>
        </div>
    );
}
