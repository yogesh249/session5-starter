import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

import "./assets/css/aos.css";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.css";
import "./assets/css/lightgallery.min.css";
import "./assets/css/loaders.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/swiper.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
