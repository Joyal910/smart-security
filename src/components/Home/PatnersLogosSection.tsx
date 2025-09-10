import React, { useState, useRef } from 'react';

// Import statements for company logos
import amMotorsLogo from '../Assets/client logos/am motors logo.jpg';
import assetLogo from '../Assets/client logos/asset logo.jpg';
import benzLogo from '../Assets/client logos/benz.jpg';
import evmVolkswagenLogo from '../Assets/client logos/evm_volkswagen_logo.jpg';
import malabarHospLogo from '../Assets/client logos/malabar hosp logo.jpg';
import muthootHospLogo from '../Assets/client logos/muthoot hosp logo.jpg';
//import pushpagiriCollegeLogo from '../components/Assets/client logos/pushpagiri college logo.jpg';
//import storiesBuilderLogo from '../components/Assets/client logos/stories builder logo.jpg';
import toyotaLogo from '../Assets/client logos/toyota logo.jpg';
import avgGroupLogo from '../Assets/client logos/avg group logo.png';
import classicRegencyHotelLogo from '../Assets/client logos/classic regency hotel logo.png';
//import kalyanKendraSilksLogo from '../components/Assets/client logos/Kalyan Kendra Silks & Sarees logo.png';
//import mayooriHomeAppliancesLogo from '../components/Assets/client logos/Mayoori Home Appliances logo.png';
import nipponToyotaLogo from '../Assets/client logos/nippon toyota logo.png';
import popularHyundaiLogo from '../Assets/client logos/popular hyundai logo.png';
import pvsSunriseHospitalLogo from '../Assets/client logos/pvs sunsrise hospital logo.png';
//import reachxpressSupermarketLogo from '../components/Assets/client logos/Reachxpress Supermarket logo.png';
import skylineBuildersLogo from '../Assets/client logos/skyline builders logo.png';
import sunnyDiamondsLogo from '../Assets/client logos/Sunny Diamonds logo.webp';
//import avgLogo from '../components/Assets/client logos/avg logo.png';
import kimsHospLogo from '../Assets/client logos/KIMS hosp logo.jpg';
import abadBuilderLogo from '../Assets/client logos/abad builders logo.png';

// Company logos data
const companiesData = [
  { name: "Mercedes-Benz", logo: benzLogo },
  { name: "Toyota", logo: toyotaLogo },
  { name: "Nippon Toyota", logo: nipponToyotaLogo },
  { name: "Popular Hyundai", logo: popularHyundaiLogo },
  { name: "EVM Volkswagen", logo: evmVolkswagenLogo },
  { name: "AM Motors", logo: amMotorsLogo },
  { name: "Malabar Hospitals", logo: malabarHospLogo },
  { name: "KIMS Hospital", logo: kimsHospLogo },
  { name: "Muthoot Hospital", logo: muthootHospLogo },
  { name: "PVS Sunrise Hospital", logo: pvsSunriseHospitalLogo },
  { name: "Classic Regency Hotel", logo: classicRegencyHotelLogo },
  { name: "Asset Homes", logo: assetLogo },
  { name: "Abad Builders", logo: abadBuilderLogo },
  { name: "Skyline Builders", logo: skylineBuildersLogo },
  { name: "AVG Group", logo: avgGroupLogo },
  { name: "Sunny Diamonds", logo: sunnyDiamondsLogo }
];

const PartnerLogosSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create three sets for seamless looping
  const logoSets = [companiesData, companiesData, companiesData];

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsPaused(true);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== null) {
      const diff = e.clientX - dragStart;
      setCurrentOffset(prev => prev + diff * 0.5);
      setDragStart(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
    setIsPaused(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (dragStart !== null) {
      setDragStart(null);
      setIsPaused(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#1f1f1f" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-between relative">
            {/* Left side - Blue line and text */}
            <div className="flex items-center z-10">
              <div className="w-1 h-16 mr-6" style={{ backgroundColor: "#1E88E5" }}></div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                WE WORKED WITH TOP
                <br />
               COMPANIES.
              </h3>
            </div>

            {/* Right side - Animated logos container */}
            <div className="flex-1 relative ml-8 h-28 overflow-hidden">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                <div 
                  ref={containerRef}
                  className={`${isPaused ? '' : 'animate-slide-right'} flex items-center space-x-16 whitespace-nowrap cursor-grab select-none`}
                  style={{ 
                    transform: `translateX(${currentOffset}px)`,
                    userSelect: 'none'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  draggable={false}
                >
                  {logoSets.map((logoSet, setIndex) =>
                    logoSet.map((company, index) => (
                      <div key={`${setIndex}-${index}`} className="flex items-center justify-center flex-shrink-0">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-lg">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="max-w-full max-h-full object-contain"
                            draggable={false}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile logos - horizontal sliding like desktop */}
          <div className="lg:hidden mt-8 relative overflow-hidden" style={{ height: '80px' }}>
            <div className="absolute inset-0 flex items-center">
              <div 
                className={`${isPaused ? '' : 'animate-slide-right'} flex items-center space-x-8 whitespace-nowrap cursor-grab select-none`}
                style={{ 
                  transform: `translateX(${currentOffset}px)`,
                  userSelect: 'none'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={(e) => {
                  setDragStart(e.touches[0].clientX);
                  setIsPaused(true);
                }}
                onTouchMove={(e) => {
                  if (dragStart !== null) {
                    const diff = e.touches[0].clientX - dragStart;
                    setCurrentOffset(prev => prev + diff * 0.5);
                    setDragStart(e.touches[0].clientX);
                  }
                }}
                onTouchEnd={() => {
                  setDragStart(null);
                  setIsPaused(false);
                }}
                draggable={false}
              >
                {logoSets.map((logoSet, setIndex) =>
                  logoSet.map((company, index) => (
                    <div key={`mobile-${setIndex}-${index}`} className="flex items-center justify-center flex-shrink-0">
                      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`}
                          className="max-w-full max-h-full object-contain"
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-2304px);
          }
        }
        
        .animate-slide-right {
          animation: slideRight 13s linear infinite;
          animation-fill-mode: none;
        }

        .animate-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerLogosSection;