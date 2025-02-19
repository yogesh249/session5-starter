import React from "react";
import Hero from '../components/Hero'
import AboutSection from '../components/aboutsec'
import StatsSection from '../components/statssec'
import ServiceSec from '../components/servicesec'
import ClientsSection from '../components/clientsec'
import PortfolioSection from '../components/portfoliosec'
import Team from '../components/team' 

function Home() {
    return (
        <div class="home-page">
        <Hero />
        <AboutSection />
        <StatsSection />
        <ServiceSec />
        <ClientsSection />
        <PortfolioSection />
        <Team />
          
    </div>    
       
    );
}

export default Home;