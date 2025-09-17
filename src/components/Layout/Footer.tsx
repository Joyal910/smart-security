import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import footer from '../Assets/Images/footer image.png';
import brochure from '../Assets/brochure/SMART BROCHURE.pdf'
import logo from "../Assets/Images/favicon.png"

const CTASection = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-center">
          {/* Left side - Image */}
          <div className="bg-gray-300 h-48 sm:h-56 md:h-64 lg:h-80 flex items-center justify-center rounded-lg overflow-hidden">
            <img 
              src={footer}
              alt="Professional security team"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right side - CTA content */}
          <div className="text-left px-1 sm:px-4 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Join Our Growing Family of Satisfied Clients
            </h2>
            <a
              href="/contact"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto inline-block text-center"
            >
              Become our client
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const certifications = [
    { name: 'ESI', subtitle: 'Registration', icon: CheckCircle },
    { name: 'PF', subtitle: 'Compliance', icon: CheckCircle },
    { name: 'GST', subtitle: 'Certified', icon: CheckCircle },
    { name: 'Labor', subtitle: 'Law Compliant', icon: CheckCircle }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Certifications Section */}
      <div className="border-b border-gray-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 sm:space-y-8 lg:space-y-0">
            {/* Certifications */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 w-full lg:w-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 min-w-[100px] sm:min-w-[120px] text-center hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm">{cert.name}</div>
                  <div className="text-xs text-gray-400">{cert.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Trust Message */}
            <div className="text-center lg:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                We take security and compliance seriously!
              </h3>
               <a
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors text-sm sm:text-base"
              >
                View our Brochure
                <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-2xl shadow-md">
                  <img
                    src={logo}
                    alt="Smart logo"
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Smart Security
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                    & Cleaning Services
                  </p>
                </div>
              </div>


              
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">
                The intuitive platform and the perfect partner for your security and cleaning services needs. 
                Deploy professional services, trained personnel, and comprehensive solutions effortlessly.
              </p>

              <div className="text-xs sm:text-sm text-gray-500">
                Smart is a{' '}
                <span className="text-orange-400 font-medium">Kerala-based</span> company.
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-300">
                    <div className="font-medium">Head Office</div>
                    <div>Kottayam, Kerala</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-300">
                    <a href="tel:+9179944 55047" className="hover:text-blue-400 transition-colors">
                      +91 79944 55047
                    </a>
                    <a href="tel:+9198472 20060" className="hover:text-blue-400 transition-colors">
                      +91 98472 20060
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                    <div>
                      <a href="mailto:arun@smartsecuritycleaning.com" className="hover:text-blue-400 transition-colors break-all">
                        arun@smartsecuritycleaning.com
                      </a>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/services/security" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    Security Services
                  </a>
                </li>
                <li>
                  <a href="/services/cleaning-service" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="/services/patient-assist" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    Patient Assist Services
                  </a>
                </li>
              </ul>
            </div>

            

            {/* Company */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/clients" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    Client Portfolio
                  </a>
                </li>
                <li>
                  <a href="/locations" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                    Branch Network
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm inline-flex items-center">
                    Contact
                    <ExternalLink className="ml-1 h-2 w-2 sm:h-3 sm:w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © 2001 - 2024 Smart Security & Cleaning Services. All rights reserved. 
              <span className="block sm:inline sm:ml-1">Smart Security® and Smart Clean® are registered trademarks.</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-400">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function CTAWithFooter() {
  return (
    <>
      <CTASection />
      <Footer />
    </>
  );
}