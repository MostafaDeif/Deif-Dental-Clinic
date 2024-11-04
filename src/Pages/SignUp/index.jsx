import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import loginimg from "../../assets/cover.jpg";
import { useRef, useState } from "react";
import { auth, db } from "../../Firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    // ارجعله
    // const bcrypt = require('bcrypt'); // or a similar library for SCRYPT
    // const hashConfig = {
    //     algorithm: 'SCRYPT',
    //     base64SignerKey: 'eNoeLjmVrhFqEM63DnsK2KNxt7t53Cz8i2kTTeAY0tHZiZN+fD32/WLoiR2brkQAWodFBCZLdIG/0W8yTkk9hA==',
    //     base64SaltSeparator: 'Bw==',
    //     rounds: 8,
    //     memCost: 14,
    // };

    // // Example usage in a function
    // const hashPassword = async (password) => {
    //     const salt = await bcrypt.genSalt(hashConfig.rounds);
    //     const hashedPassword = await bcrypt.hash(password, salt);
    //     return hashedPassword;
    // };

    // const nameInput = useRef();
    // const emailInput = useRef();
    // const passwordInput = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const userCredential = await 
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    fullName: name,
                    phoneNumber: phone,
                    token: user.uid,
                    
                });
            }
            console.log("Account Created");
            Swal.fire({
                icon: 'success',
                title: 'Account Created Successfully',
                text: 'Your account has been created successfully!',
                position: 'top-center',
                timer: 2000,
                showConfirmButton: false
            });
            // toast.success("Account Created successfully", { position: "top-center" })
            // setTimeout(() => {
            //     navigate("/login"); // Redirects to the login page
            // }, 2000); // Adjust delay as needed for the alert timing

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Account Already Registered",
                position: 'center',
                showConfirmButton: true
                
            });
            
            // toast.error(error.message, { position: "bottom-center" });

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
                </div>
            </div>
            <div className="signWallpaper">
                <h1>Welcome to Deif Dental Clinic</h1>
                <img src={loginimg} alt="clinic" />
            </div>
        </div>
    );
}
