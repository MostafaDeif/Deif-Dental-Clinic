// // cost money dead end
// import React, { useState } from 'react';
// import './index.scss';   
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword } from 'firebase/auth';

// const PhoneEmailSignUp = () => {
//   const [isPhoneSignup, setIsPhoneSignup] = useState(true);
//   const [countryCode, setCountryCode] = useState('+20');
//   const [mainNumber, setMainNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [error, setError] = useState('');

//   const auth = getAuth();

//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//       'size': 'invisible',
//       'callback': (response) => {
//         console.log('reCAPTCHA solved');
//       }
//     });
//   };

//   const handlePhoneSignUp = async (e) => {
//     e.preventDefault();
//     const egyptianRegex = /^1[0-9]{9}$/;
//     if (!egyptianRegex.test(mainNumber)) {
//       alert('Please enter a valid Egyptian phone number like 1124166303');
//       return;
//     }

//     setupRecaptcha();
//     const appVerifier = window.recaptchaVerifier;

//     try {
//       const fullPhoneNumber = countryCode + mainNumber;
//       const result = await signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier);
//       setConfirmationResult(result);
//     } catch (error) {
//       console.error(error);
//       if (error.code === 'auth/billing-not-enabled') {
//         setError('Billing is not enabled for your Firebase project. Please enable billing in Firebase console.');
//       } else {
//         setError('Error sending OTP. Please try again.');
//       }
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     if (confirmationResult && otp) {
//       try {
//         await confirmationResult.confirm(otp);
//         alert('Phone number verified and signed in!');
//       } catch (error) {
//         console.error(error);
//         setError('Error verifying OTP. Please try again.');
//       }
//     }
//   };

//   const handleEmailSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert('Email sign-up successful!');
//     } catch (error) {
//       console.error(error);
//       setError('Error signing up with email. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       {error && <div className="error-message">{error}</div>}
//       <div className="toggle-buttons">
//         <button onClick={() => setIsPhoneSignup(true)} className={isPhoneSignup ? 'active' : ''}>Phone</button>
//         <button onClick={() => setIsPhoneSignup(false)} className={!isPhoneSignup ? 'active' : ''}>Email</button>
//       </div>

//       {isPhoneSignup ? (
//         <form onSubmit={confirmationResult ? verifyOtp : handlePhoneSignUp} className="signup-form">
//           <div className="phone-input-group">
//             <input
//               type="text"
//               placeholder="Country Code"
//               value={countryCode}
//               onChange={(e) => setCountryCode(e.target.value)}
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone number e.g. 1124166303"
//               value={mainNumber}
//               onChange={(e) => setMainNumber(e.target.value)}
//               pattern="1[0-9]{9}"
//               maxLength="10"
//               required
//             />
//           </div>
//           {confirmationResult && (
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//           )}
//           <div id="recaptcha-container"></div>
//           <button type="submit">{confirmationResult ? 'Verify OTP' : 'Send OTP'}</button>
//         </form>
//       ) : (
//         <form onSubmit={handleEmailSignUp} className="signup-form">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Sign Up with Email</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default PhoneEmailSignUp;
