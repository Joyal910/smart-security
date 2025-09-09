import React from 'react';
import { Shield, Users, Award, Headphones, Clock, CheckCircle } from 'lucide-react';
import about_image from '../Assets/Images/about image.jpeg';
const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#2B2B2B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4" style={{ color: "#1E88E5" }}>
                Smart Security & Cleaning Services
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8" style={{ color: "#F1F5F9" }}>
                Total Protection, 
                <br />
               Care & Assist
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style={{ color: "#F1F5F9" }}>
                  EXCELLENCE IN PROFESSION
                </h3>
                <div className="w-16 sm:w-20 lg:w-24 h-1 mb-4 sm:mb-6" style={{ backgroundColor: "#1E88E5" }}></div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "#F1F5F9", opacity: 0.8 }}>
                Since our establishment, we have been Kerala's trusted partner in security, cleaning, and patient assistance services. 
                Our integrated approach combines skilled professionals, modern technology, and a dedication to quality, delivering 
                tailored solutions for residential, commercial, industrial, and healthcare sectors.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}>
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: "#F1F5F9" }}>Multi-Sector Expertise</h4>
                  <p className="text-xs sm:text-sm" style={{ color: "#F1F5F9", opacity: 0.7 }}>
                    Specialized services for residential complexes, commercial establishments, and industrial facilities
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: "#F1F5F9" }}>Complete Compliance</h4>
                  <p className="text-xs sm:text-sm" style={{ color: "#F1F5F9", opacity: 0.7 }}>
                    ESI, PF benefits and minimum wage compliance ensuring ethical employment practices
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}>
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: "#F1F5F9" }}>Professional Team</h4>
                  <p className="text-xs sm:text-sm" style={{ color: "#F1F5F9", opacity: 0.7 }}>
                    Trained and certified personnels with skill development programs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-1.5 sm:p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}>
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: "#F1F5F9" }}>Statewide Coverage</h4>
                  <p className="text-xs sm:text-sm" style={{ color: "#F1F5F9", opacity: 0.7 }}>
                    Strategic presence across Kerala with local expertise and immediate response capabilities
                  </p>
                </div>
              </div>
            </div>

            <button 
              className="border-2 hover:bg-opacity-90 transition-colors bg-transparent px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded w-full sm:w-auto"
              style={{ 
                borderColor: "#1E88E5", 
                backgroundColor: "transparent",
                color: "#F1F5F9"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1E88E5";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#F1F5F9";
              }}
            >
              <span className="hidden sm:inline">REQUEST A FREE CONSULTATION</span>
              <span className="sm:hidden">FREE CONSULTATION</span>
            </button>
          </div>

          {/* Right Content - Image with Quote Overlay */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={about_image}
                alt="Professional security team providing comprehensive protection services"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />

              {/* Quote Overlay */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 p-3 sm:p-4 lg:p-6 max-w-48 sm:max-w-56 lg:max-w-xs" style={{ backgroundColor: "#1E88E5" }}>
                <blockquote className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight">
                  " SECURING YOUR WORLD,
                  <br />
                  ONE STEP AHEAD. "
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;