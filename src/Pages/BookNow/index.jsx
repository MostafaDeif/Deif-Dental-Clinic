import Booking from "../../Components/Booking"
import Navbar from "../../Components/Navbar"
import "./index.scss"

export default function BookNow() {
    return (
        <div className="col-12 d-flex flex-column">
            <div className="navcomp">
                <Navbar />
            </div>
            <div>
                <Booking />
            </div>
        </div>
    )
}
