import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Header from "./components/Header";
import Home from "./pages/home";

import "./assets/css/aos.css";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.css";
import "./assets/css/lightgallery.min.css";
import "./assets/css/loaders.css";
import "./assets/css/responsive.css";
// import "./assets/css/style.css";
import "../src/App.css";
import "./assets/css/swiper.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Routes, Route} from 'react-router-dom';

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";


function App() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      
      <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      </div>
      <div className="footer">

      <Footer />
      </div>
    </div>
  );
}

export default App;
