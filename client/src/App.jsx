import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Appoinment from "./pages/Appointment";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mx-4 sm:mx-[10%]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctors />} />
            <Route path="/doctor/:speciality" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/myappointment" element={<MyAppointment />} />
            <Route path="/appointments/:docId" element={<Appointment />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
