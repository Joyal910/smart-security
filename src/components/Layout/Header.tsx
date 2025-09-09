import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Shield, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../Assets/Images/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
 return (
    <>
      {/* Utility Bar */}
      <div className="text-white py-1 sm:py-2 text-xs sm:text-sm overflow-hidden" style={{ backgroundColor: '#2B2B2B' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center space-x-2 sm:space-x-4">
            {/* Left Section - Location and Phone */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 flex-shrink-0">
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#1E88E5' }} />
                <span className="text-gray-300 whitespace-nowrap">All Over Kerala</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#1E88E5' }} />
                <a href="tel:+9179944 55047" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm">
                  +91 79944 55047 
                </a>
              </div>
            </div>
            
            {/* Right Section - Email and Support */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 flex-shrink-0">
              <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: '#1E88E5' }} />
                <a href="mailto:arun@smartsecuritycleaning.com" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm">
                  arun@smartsecuritycleaning.com
                </a>
              </div>
              <div className="font-medium text-xs sm:text-sm whitespace-nowrap" style={{ color: '#1E88E5' }}>
                <span className="hidden sm:inline">24/7 Support Available</span>
                <span className="sm:hidden">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
           <a href="/" className="flex items-center">
              <img src={logo} alt="Smart Security Logo" className="h-10 sm:h-14 w-auto object-contain" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/') ? 'font-semibold' : 'hover:text-blue-700'
                }`}
                style={{ color: isActive('/') ? '#1E88E5' : '#2B2B2B' }}
              >
                Home
              </a>
              
              <a
                href="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'font-semibold' : 'hover:text-blue-700'
                }`}
                style={{ color: isActive('/about') ? '#1E88E5' : '#2B2B2B' }}
              >
                About Us
              </a>

              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-blue-700 ${
                    location.pathname.startsWith('/services') ? 'font-semibold' : ''
                  }`}
                  style={{ color: location.pathname.startsWith('/services') ? '#1E88E5' : '#2B2B2B' }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <a
                      href="/services/security"
                      className="block px-4 py-3 text-sm transition-colors"
                      style={{ color: '#2B2B2B' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E88E5';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = '#2B2B2B';
                      }}
                    >
                      <div className="font-medium">Security Services</div>
                      <div className="text-xs text-gray-500 mt-1">Perimeter, Incidence, Industrial Security</div>
                    </a>
                    <a
                      href="/services/cleaning-service"
                      className="block px-4 py-3 text-sm transition-colors"
                      style={{ color: '#2B2B2B' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E88E5';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = '#2B2B2B';
                      }}
                    >
                      <div className="font-medium">Cleaning Services</div>
                      <div className="text-xs text-gray-500 mt-1">Cleaning & Maintenance Services</div>
                    </a>
                    <a
                      href="/services/patient-assist"
                      className="block px-4 py-3 text-sm transition-colors"
                      style={{ color: '#2B2B2B' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1E88E5';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = '#2B2B2B';
                      }}
                    >
                      <div className="font-medium">Patient Assist Services</div>
                      <div className="text-xs text-gray-500 mt-1">Patient, Desk Support</div>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/locations"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/locations') ? 'font-semibold' : 'hover:text-blue-700'
                }`}
                style={{ color: isActive('/locations') ? '#1E88E5' : '#2B2B2B' }}
              >
                Locations
              </a>

              <a
                href="/clients"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/clients') ? 'font-semibold' : 'hover:text-blue-700'
                }`}
                style={{ color: isActive('/clients') ? '#1E88E5' : '#2B2B2B' }}
              >
                Clients
              </a>

              <a
                href="/contact"
                className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#1E88E5' }}
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              style={{ color: '#1E88E5' }}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="font-medium transition-colors hover:text-blue-700" 
                  style={{ color: isActive('/') ? '#1E88E5' : '#2B2B2B' }} 
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="font-medium transition-colors hover:text-blue-700" 
                  style={{ color: isActive('/about') ? '#1E88E5' : '#2B2B2B' }} 
                  onClick={toggleMenu}
                >
                  About Us
                </a>
                <div className="space-y-2 pl-4">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Services</div>
                  <a 
                    href="/services/security" 
                    className="block transition-colors hover:text-blue-700" 
                    style={{ color: '#2B2B2B' }} 
                    onClick={toggleMenu}
                  >
                    Security Services
                  </a>
                  <a 
                    href="/services/cleaning-service" 
                    className="block transition-colors hover:text-blue-700" 
                    style={{ color: '#2B2B2B' }} 
                    onClick={toggleMenu}
                  >
                    Cleaning Services
                  </a>
                  <a 
                    href="/services/patient-assist" 
                    className="block transition-colors hover:text-blue-700" 
                    style={{ color: '#2B2B2B' }} 
                    onClick={toggleMenu}
                  >
                    Patient Assist Services
                  </a>
                </div>
              
                <a 
                  href="/locations" 
                  className="font-medium transition-colors hover:text-blue-700" 
                  style={{ color: isActive('/locations') ? '#1E88E5' : '#2B2B2B' }} 
                  onClick={toggleMenu}
                >
                  Locations
                </a>
                <a 
                  href="/clients" 
                  className="font-medium transition-colors hover:text-blue-700" 
                  style={{ color: isActive('/clients') ? '#1E88E5' : '#2B2B2B' }} 
                  onClick={toggleMenu}
                >
                  Clients
                </a>
                <a
                  href="/contact"
                  className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 inline-block text-center transition-all shadow-md"
                  style={{ backgroundColor: '#1E88E5' }}
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;