import Booking from "../../Components/Booking"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import "./index.scss"

export default function BookNow() {
    return (
        <div>
            <Navbar activeBook="active" />

            <Booking />

            <Footer />
        </div>
    )
}
