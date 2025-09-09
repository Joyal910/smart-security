import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import StatsSection from '../components/Home/StatsSection';
import ServicesSection from '../components/Home/ServicesSection';
import PatnersLogosSection from '../components/Home/PatnersLogosSection';
import IndustriesSection from '../components/Home/IndustriesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import ClientsSection from '../components/Home/ClientsSection';
import CTASection from '../components/Home/CTASection';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PatnersLogosSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      
     
    </div>
  );
};

export default Home;