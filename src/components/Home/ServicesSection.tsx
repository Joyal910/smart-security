import React from 'react';
import { useNavigate } from "react-router-dom";
import patient_pic from "../Assets/Images/patient4.jpeg"
import security_pic from "../Assets/Images/ondutyguard.jpg"



const ServicesSection: React.FC = () => {
  const navigate = useNavigate(); // ✅ moved inside the component

  return (
    <section id="services" className="py-16 sm:py-20" style={{ backgroundColor: "#2B2B2B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute left-0 top-0 w-1 h-12 sm:h-16" style={{ backgroundColor: "#1E88E5" }}></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-6 sm:ml-8 text-white">
              OUR PROFESSIONAL <span style={{ color: "#1E88E5" }}>SERVICES</span>
            </h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-2">
            Comprehensive security and cleaning solutions tailored to meet your specific needs with the
            highest standards of professionalism and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Smart Security Services */}
          <div className="flip-card">
            {/* Front of card - Image */}
            <div className="flip-card-front">
              <img
                src={security_pic}
                alt="Smart Security Services"
                className="w-full h-full object-cover"
              />
              <div className="flip-card-title">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Smart Security Services</h3>
              </div>
            </div>
            
            {/* Back of card - Content */}
            <div className="flip-card-content">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Smart Security Services</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Professional security personnel with 20+ years experience serving personal, residential, and industrial needs with 1500+ trained staff.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Fully Trained Staffs
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Facility & Perimeter Security
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Fire & Safety Management
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  24/7 Support & Monitoring
                </li>
              </ul>
              <button 
                onClick={() => navigate("/services/security")}
                className="w-full border-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-500 hover:text-white text-sm sm:text-base"
                style={{ 
                  borderColor: "#1E88E5", 
                  color: "#1E88E5",
                  backgroundColor: "transparent"
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Smart Clean Services */}
          <div className="flip-card">
            {/* Front of card - Image */}
            <div className="flip-card-front">
              <img
                src="https://burst.shopifycdn.com/photos/holding-bucket-of-cleaning-supplies.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                alt="Smart Clean Services"
                className="w-full h-full object-cover"
              />
              <div className="flip-card-title">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Smart Clean Services</h3>
              </div>
            </div>
            
            {/* Back of card - Content */}
            <div className="flip-card-content">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Smart Clean Services</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Expert cleaning services with hospital-grade sanitation protocols. Our experienced staff ensures highest cleanliness standards for facilities.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Hospital & Healthcare Cleaning
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Commercial & Office Cleaning
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Industrial & Facility Cleaning
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Infection Control Protocols
                </li>
              </ul>
              <button 
              onClick={() => navigate("/services/cleaning-service")}
                className="w-full border-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-500 hover:text-white text-sm sm:text-base"
                style={{ 
                  borderColor: "#1E88E5", 
                  color: "#1E88E5",
                  backgroundColor: "transparent"
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Patient Assist Services */}
          <div className="flip-card">
            {/* Front of card - Image */}
            <div className="flip-card-front">
              <img
                src={patient_pic}
                alt="Patient Assist Services"
                className="w-full h-full object-cover"
              />
              <div className="flip-card-title">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Patient Assist Services</h3>
              </div>
            </div>
            
            {/* Back of card - Content */}
            <div className="flip-card-content">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Patient Assist Services</h3>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
               Compassionate assistance in healthcare facilities. Our trained attendants provide professional support with dignity and empathy for patient care needs.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Patient Escort & Mobility
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Admission & Discharge Support
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  Bedside Care & Comfort
                </li>
                <li className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: "#1E88E5" }}></div>
                  24/7 Patient Support
                </li>
              </ul>
              <button 
              onClick={() => navigate("/services/patient-assist")}
                className="w-full border-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-500 hover:text-white text-sm sm:text-base"
                style={{ 
                  borderColor: "#1E88E5", 
                  color: "#1E88E5",
                  backgroundColor: "transparent"
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          position: relative;
          width: 100%;
          height: 350px;
          border-radius: 10px;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (min-width: 640px) {
          .flip-card {
            height: 400px;
          }
        }

        @media (max-width: 639px) {
          .flip-card {
            height: 320px;
          }
          
          /* Enable tap to flip on mobile */
          .flip-card:active .flip-card-front {
            transform: rotateX(-90deg);
          }
          
          .flip-card:active .flip-card-content {
            transform: rotateX(0deg);
          }
        }

        .flip-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(30, 136, 229, 0.3);
        }

        @media (max-width: 639px) {
          .flip-card:hover {
            transform: scale(1.02);
          }
        }

        .flip-card-front {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #1a1a1a;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .flip-card:hover .flip-card-front {
          transform: rotateX(-90deg);
        }

        .flip-card-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 15px;
          padding-top: 30px;
        }

        @media (min-width: 640px) {
          .flip-card-title {
            padding: 20px;
            padding-top: 40px;
          }
        }

        .flip-card-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 15px;
          box-sizing: border-box;
          background-color: #1a1a1a;
          border-radius: 10px;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 640px) {
          .flip-card-content {
            padding: 20px;
          }
        }

        .flip-card:hover .flip-card-content {
          transform: rotateX(0deg);
        }

        /* Smooth scrolling for mobile content */
        @media (max-width: 639px) {
          .flip-card-content {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;