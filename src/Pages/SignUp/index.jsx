import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import loginimg from "../../assets/cover.jpg";
import { useState } from "react";
import { auth, db } from "../../Firebase/index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
            const user = userCredential.user;

            // Optional: update Firebase display name
            // await updateProfile(user, {
            //     displayName: name
            // });

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    fullName: name,
                    phoneNumber: phone,
                    token: user.uid,
                });

                // Save user info to localStorage
                localStorage.setItem("user", JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    fullName: name,
                    phoneNumber: phone
                }));
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
                        <input
                            className="normalInput"
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            className="normalInput"
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="01[0125][0-9]{8}"
                            maxLength="11"
                            title="Enter a valid Egyptian phone number starting with 010, 011, 012, or 015"
                            required
                        />
                        <input
                            className="normalInput"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="normalInput"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="6"
                            required
                        />
                        <div>
                            <button className="signbtn" type="submit">Sign Up</button>
                            <span></span>
                        </div>
                    </form>
                    <Link className="Rlink" to="/login">Already have an account?</Link>
                </div>
            </div>
            <div className="signWallpaper">
                <h1>Welcome to Deif Dental Clinic</h1>
                <img src={loginimg} alt="clinic" />
            </div>
        </div>
    );
}
