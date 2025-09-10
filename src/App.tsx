import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingCTA from './components/Layout/FloatingCTA';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SecurityServices from './pages/SecurityServices';
import FacilityManagement from './pages/FacilityManagement';
import HardFM from './pages/HardFM';

import Locations from './pages/Locations';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/services/security" element={<SecurityServices />} />
            <Route path="/services/cleaning-service" element={<FacilityManagement />} />
            <Route path="/services/patient-assist" element={<HardFM />} />
           
            <Route path="/locations" element={<Locations />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;