import React from 'react';
import '../assets/css/hero.css';

function Hero () {
    return (
        <section id="hero" className="hero section dark-background">
            <img src="../src/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className="aos-init aos-animate" />
            <div className="container d-flex flex-column align-items-center">
                <h2>PLAN. LAUNCH. GROW.</h2>
                <p>We are team of talented designers making websites with Bootstrap</p>
                
            </div>
        </section>
    );
};

export default Hero;