import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";




export default function App() {
  return (
    <div className="col-12 App d-flex">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact_us" element={<h1>contact us</h1>} />
            <Route path="about_us" element={<h1>About us</h1>} />
            <Route path="services" element={<h1>Services</h1>} />
            <Route path="book_now" element={<h1>book now</h1>} />
            {/* <Route path="join/:join_type" element={<JoinPage />} /> */}
            <Route path="*" element={<h1>error 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
