import { useEffect, useState } from "react";
import { auth, db } from "../../Firebase/index";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


export default function Userdata() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid)
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
        console.log(docSnap.data())
      } else {
        console.log("user is not logged in")
      }
    })
  }
  async function handelLogout() {
    try{
      await auth.signOut();
      navigate("/login");
    }catch(error){
      console.error("error logging out: ", error.message)
    }

  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <div>
      <Navbar activeLogin="active" />
      {userInfo ? (
        <div>
          <p>Name: {userInfo.fullName}</p>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phoneNumber}</p>
          <button className="btn btn-danger" onClick={handelLogout}>LogOut</button>
        </div>
      ) : <h1>Loading...</h1>
      }
    </div>
  )
}
