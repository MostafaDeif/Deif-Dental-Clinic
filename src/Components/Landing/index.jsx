import "./index.scss"
import Mohamed from "../../assets/Mohamed Deif.jpg"
export default function Landing() {

    return (
        <div className="landing" id="landingpage">
            <main>
                <div className="left">
                    <div className="top">
                        <h3>WELCOME TO Deif Dental Clinic</h3>
                        <h1>For a <span>brighter</span>, whiter<span> smile</span>, discover the perfect care solution today!</h1>
                        {/* <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud.</p> */}
                    </div>
                    <div className="bottom">
                        <button>CONTACT US</button>
                    </div>
                </div>
                {/* <div className="right">
                    <div className="c1">
                        <div  className="c2">
                            <div className="c3">
                                <div  className="c4">
                                    <div  className="c5">
                                        <img src={test} alt="me" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="circle-container">
                    <div className="circle">
                        <div className="inner-circle">
                            <img src={Mohamed} width="300" alt="Doctor Image" className="profile-img" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
