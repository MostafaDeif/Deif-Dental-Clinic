import Booking from "../../Components/Booking"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import "./index.scss"

export default function BookNow() {
    return (
        <div className="col-12 d-flex flex-column">
            <div className="navcomp">
                <Navbar activeBook="active" />
            </div>
            <div>
                <Booking />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
