import React from 'react';
import { Star, Award, Users, Building, ArrowRight, Shield, Globe } from 'lucide-react';
import banner from '../components/Assets/Images/hero_banner.jpeg';

import amMotorsLogo from '../components/Assets/client logos/am motors logo.jpg';
import assetLogo from '../components/Assets/client logos/asset logo.jpg';
import benzLogo from '../components/Assets/client logos/benz.jpg';
import evmVolkswagenLogo from '../components/Assets/client logos/evm_volkswagen_logo.jpg';
import malabarHospLogo from '../components/Assets/client logos/malabar hosp logo.jpg';
import muthootHospLogo from '../components/Assets/client logos/muthoot hosp logo.jpg';
import pushpagiriCollegeLogo from '../components/Assets/client logos/pushpagiri college logo.jpg';
import storiesBuilderLogo from '../components/Assets/client logos/stories builder logo.jpg';
import toyotaLogo from '../components/Assets/client logos/toyota logo.jpg';
import avgGroupLogo from '../components/Assets/client logos/avg group logo.png';
import classicRegencyHotelLogo from '../components/Assets/client logos/classic regency hotel logo.png';
import kalyanKendraSilksLogo from '../components/Assets/client logos/Kalyan Kendra Silks & Sarees logo.png';
import mayooriHomeAppliancesLogo from '../components/Assets/client logos/Mayoori Home Appliances logo.png';
import nipponToyotaLogo from '../components/Assets/client logos/nippon toyota logo.png';
import popularHyundaiLogo from '../components/Assets/client logos/popular hyundai logo.png';
import pvsSunriseHospitalLogo from '../components/Assets/client logos/pvs sunsrise hospital logo.png';
import reachxpressSupermarketLogo from '../components/Assets/client logos/Reachxpress Supermarket logo.png';
import skylineBuildersLogo from '../components/Assets/client logos/skyline builders logo.png';
import sunnyDiamondsLogo from '../components/Assets/client logos/Sunny Diamonds logo.webp';
import avgLogo from '../components/Assets/client logos/avg logo.png';
import kimsHospLogo from '../components/Assets/client logos/KIMS hosp logo.jpg';
import abadBuilderLogo from '../components/Assets/client logos/abad builders logo.png';


// International Security Clients Data
const internationalClientsData = [
  { name: "AM Motors", country: "INDIA", logo: amMotorsLogo, showCountry: true },
  { name: "Mercedes-Benz", country: "INDIA", logo: benzLogo, showCountry: true },
  { name: "EVM Volkswagen", country: "INDIA", logo: evmVolkswagenLogo, showCountry: true },
  { name: "Toyota", country: "INDIA", logo: toyotaLogo, showCountry: true },
  { name: "Nippon Toyota", country: "INDIA", logo: nipponToyotaLogo, showCountry: true },
  { name: "Popular Hyundai", country: "INDIA", logo: popularHyundaiLogo, showCountry: true },
 { name: "Malabar Hospitals", country: "INDIA", logo: malabarHospLogo, showCountry: true },
  { name: "Muthoot Hospital", country: "INDIA", logo: muthootHospLogo, showCountry: true },
   { name: "KIMS Hospital", country: "INDIA", logo: kimsHospLogo, showCountry: true },
  { name: "Pushpagiri College", country: "INDIA", logo: pushpagiriCollegeLogo, showCountry: true },
  { name: "PVS Sunrise Hospital", country: "INDIA", logo: pvsSunriseHospitalLogo, showCountry: true },
{ name: "Classic Regency Hotel", country: "INDIA", logo: classicRegencyHotelLogo, showCountry: true },
  { name: "Asset Homes", country: "INDIA", logo: assetLogo, showCountry: true },
  { name: "Stories Builder", country: "INDIA", logo: storiesBuilderLogo, showCountry: true },
  { name: "Abad Builders", country: "INDIA", logo: abadBuilderLogo, showCountry: true },
  { name: "Skyline Builders", country: "INDIA", logo: skylineBuildersLogo, showCountry: true },
{ name: "Kalyan Kendra Silks & Sarees", country: "INDIA", logo: kalyanKendraSilksLogo, showCountry: true },
  { name: "Mayoori Home Appliances", country: "INDIA", logo: mayooriHomeAppliancesLogo, showCountry: true },
  { name: "Reachxpress Supermarket", country: "INDIA", logo: reachxpressSupermarketLogo, showCountry: true },
  { name: "Sunny Diamonds", country: "INDIA", logo: sunnyDiamondsLogo, showCountry: true },
  { name: "AVG Group", country: "INDIA", logo: avgGroupLogo, showCountry: true },
  { name: "AVG", country: "INDIA", logo: avgLogo, showCountry: true }
];

// International Client Card Component
interface ClientCardProps {
  name: string
  country: string
  logo?: string | null
  showCountry?: boolean
}

function InternationalClientCard({ name, country, logo, showCountry = true }: ClientCardProps) {
  return (
    <div className="text-center group">
      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 h-20 sm:h-24 lg:h-32 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 hover:border-blue-500 transition-colors group-hover:shadow-lg">
        {logo ? (
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="object-contain transition-transform group-hover:scale-105"
              style={{ 
                width: 'auto',
                height: 'auto',
                maxWidth: '90%',
                maxHeight: '90%',
                minWidth: '60px',
                minHeight: '40px'
              }}
              loading="lazy"
            />
          </div>
        ) : (
          // Fallback to company name if logo is not available
          <div className="text-xs sm:text-sm lg:text-lg font-bold text-center text-gray-700 px-1">
            {name}
          </div>
        )}
      </div>
      {showCountry && (
        <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase leading-tight">
          {name}
        </p>
      )}
    </div>
  )
}

const Clients: React.FC = () => {
  // Local Kerala clients data
  const automotiveClients = [
    'BMW', 'Mercedes-Benz', 'Honda', 'Hyundai', 'Toyota', 'Nissan', 'KIA', 'Volkswagen',
    'Apco Honda', 'AM Motors', 'EVM', 'DKH KIA', 'KVR', 'Popular Hyundai', 'Classic Hyundai',
    'TVS', 'Rubco', 'Nippon Toyota'
  ];

  const healthcareClients = [
    'Muthoot Healthcare', 'Sree Sankara Hospital', 'Lakshmi Hospital', 'GIMCARE Hospital',
    'Dianova Labs', 'Labour India'
  ];

  const commercialClients = [
    'Malabar Gold', 'Capitol Mall', 'Bismi', 'PSN', 'Ladder', 'Asset', 'Priyadarshini'
  ];

  const constructionClients = [
    'PVS Builders', 'LandMark Builders', 'Zealots Villas'
  ];

  // Split international clients into rows of 5
  const internationalClientRows = [];
  for (let i = 0; i < internationalClientsData.length; i += 5) {
    internationalClientRows.push(internationalClientsData.slice(i, i + 5));
  }

  const testimonials = [
    {
      name: 'Automotive Dealership Manager',
      company: 'Leading Car Dealership',
      content: 'Smart Security has been our trusted partner for over 5 years. Their professional staff and reliable service have helped us maintain a secure environment for our customers and vehicles.',
      rating: 5
    },
    {
      name: 'Hospital Administrator',
      company: 'Healthcare Facility',
      content: 'The cleaning and security services provided by Smart Security are exceptional. Their staff understands the critical hygiene requirements of healthcare facilities.',
      rating: 5
    },
    {
      name: 'Facility Manager',
      company: 'Corporate Office',
      content: 'Professional, reliable, and cost-effective. Smart Security delivers exactly what they promise. Their 24/7 support gives us complete peace of mind.',
      rating: 5
    }
  ];

  const industries = [
    {
      icon: Building,
      title: 'Automotive',
      count: '18+',
      description: 'Leading car dealerships and service centers',
      clients: automotiveClients
    },
    {
      icon: Users,
      title: 'Healthcare',
      count: '6+',
      description: 'Hospitals, clinics, and medical facilities',
      clients: healthcareClients
    },
    {
      icon: Award,
      title: 'Commercial',
      count: '7+',
      description: 'Retail, malls, and commercial establishments',
      clients: commercialClients
    },
    {
      icon: Building,
      title: 'Construction',
      count: '3+',
      description: 'Builders and real estate developers',
      clients: constructionClients
    }
  ];

  return (
    <div className="animate-fade-in">
     {/* Compact Hero Section - Enhanced Mobile Responsiveness */}
 <section className="relative min-h-[30vh] sm:min-h-[35vh] lg:min-h-[40vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src={banner}
      alt="About Just Hearing Clinic background"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute inset-0 bg-black/25"></div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up leading-tight">
        Trusted By{' '}
        <span className="text-white block sm:inline">
          Leading Brands
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed animate-fade-in-up animation-delay-300 px-2 sm:px-0">
       Your trusted partner in business security and cleaning excellence since 2001.
      </p>
    </div>
  </div>
</section>

      {/* International Security Clients Section - Enhanced Mobile Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Globe className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                International Security Partners
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
              Being Kerala's best security and cleaning service .We have worked for over 500 security clients over the last 25 years across Kerela. Our Customer
              list is the Proof of our Ability and Quality. Most of our customers are corporate enterprises, we work
              directly with their security or facility teams. 
            </p>
          </div>

          {/* International Client Logos Grid - Mobile Optimized */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {internationalClientRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                {row.map((client, clientIndex) => (
                  <InternationalClientCard
                    key={`${rowIndex}-${clientIndex}`}
                    name={client.name}
                    country={client.country}
                    logo={client.logo}
                    showCountry={client.showCountry}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Clients;