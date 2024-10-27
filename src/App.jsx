import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
// import Navbar from "./Components/Navbar";



export default function App() {
  return (
    <div className="col-12 App d-flex">

      <BrowserRouter>
        
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="join" element={<JoinPage />} />
            <Route path="join/:join_type" element={<JoinPage />} /> */}
            <Route path="*" element={<h1>error 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
