import Landing from "../../Components/Landing"
import Navbar from "../../Components/Navbar"
import "./index.scss"

export default function Home() {
  return (
    <div className="col-12 d-flex">
      <Navbar />
      <Landing />
    </div>
  )
}
