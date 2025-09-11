import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Building, CheckCircle, ArrowRight, Clock, Award, Star, MapPin, Phone, Mail, Check, DollarSign, Globe, Heart, UserCheck, Stethoscope } from 'lucide-react';
import banner from '../components/Assets/Images/hero_banner.jpeg'
import securityguardline from '../components/Assets/Images/securityguardsline.jpg'
import ondutyguard from '../components/Assets/Images/ondutyguard.jpg'

import amMotorsLogo from '../components/Assets/client logos/am motors logo.jpg';
import assetLogo from '../components/Assets/client logos/asset logo.jpg';
import benzLogo from '../components/Assets/client logos/benz.jpg';
import evmVolkswagenLogo from '../components/Assets/client logos/evm_volkswagen_logo.jpg';
import malabarHospLogo from '../components/Assets/client logos/malabar hosp logo.jpg';
import muthootHospLogo from '../components/Assets/client logos/muthoot hosp logo.jpg';


const SecurityServices = () => {
  const serviceCategories = [
    {
      title: 'Facility Access & Perimeter Security',
      description: 'We provide trained security personnel to control and monitor all facility entry and exit points, ensuring only authorized individuals gain access. Our team maintains a secure perimeter, deterring unauthorized activity and enhancing overall site safety.',
      features: ['Entrance & Exit Monitoring', 'Perimeter Patrols', 'ID & Credential Verification', 'Intrusion Prevention'],
      image: ondutyguard
    },
    {
      title: 'Access Control & Incident Response',
      description: 'From digital access systems to on-ground gatekeeping, our experts ensure strict access control protocols. In case of any security breach or threat, our rapid response team acts immediately to contain and resolve incidents with minimal disruption.',
      features: ['Access Control Systems', 'Visitor Management', 'Emergency Lockdown Procedures', 'Quick Incident Resolution'],
      image: 'https://lh3.googleusercontent.com/p/AF1QipOQ1K5NWtmMe1R8gRspr-T2z146fiavR2YQHAVN=s1360-w1360-h1020-rw'
    },
    {
      title: 'Fire & Safety Management',
      description: 'Our personnel are trained in fire prevention, evacuation procedures, and emergency safety protocols. We integrate safety monitoring with security operations to protect lives and property from potential fire hazards.',
      features: ['Fire Hazard Monitoring', 'Evacuation Drills', 'Safety Equipment Checks', 'Emergency Medical Assistance'],
      image: 'https://www.shutterstock.com/image-photo/fire-alarm-training-class-by-260nw-2268988173.jpg'
    }
  ];

  const trainingModules = [
    'Basic Security Training (Appearance, Attitude, Conduct)',
    'Emergency Response Procedures',
    'First Aid Certification',
    'Communication Skills',
    'Patrol & Observation Techniques',
    'Access Control Protocols',
    'Report Writing & Documentation',
    'Frisking Techniques'
  ];

  const whyChooseUs = [
    'Fully compliant with ESI, PF, and government regulations',
    'Well-groomed, uniformed staff',
    'Regular performance monitoring and client feedback',
    '24x7 support and quick emergency response',
    'Trusted across industries in Kerala'
  ];

const clients = [
  {
    name: 'Malabar Hospital, Kasargod', // ✅ matched with malabarHospLogo
    logo: malabarHospLogo,
    alt: 'Malabar Hospital Logo'
  },
  {
    name: 'Muthoot Hospital, Kozhikode', // ✅ matched with muthootHospLogo
    logo: muthootHospLogo,
    alt: 'Muthoot Hospital Logo'
  },
  {
    name: 'Asset Homes Corporate Office', // ✅ matched with assetLogo
    logo: assetLogo,
    alt: 'Asset Homes Logo'
  },
  {
    name: 'EVM Volkswagen Showrooms', // ✅ matched with evmVolkswagenLogo
    logo: evmVolkswagenLogo,
    alt: 'EVM Volkswagen Logo'
  },
  {
    name: 'AM Motors Facilities', // ✅ matched with amMotorsLogo
    logo: amMotorsLogo,
    alt: 'AM Motors Logo'
  },
  {
    name: 'Mercedes-Benz Showrooms', // ✅ matched with benzLogo
    logo: benzLogo,
    alt: 'Mercedes-Benz Logo'
  }
];


  return (
    <div className="overflow-x-hidden">
      <Helmet>
        {/* Page Title */}
        <title>Security Guard Services in Kottayam | Smart Security & Cleaning Services</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Professional security guard services in Kottayam for residential, commercial, and private security needs. Smart Security offers trained security personnel, access control, and 24/7 security services across Kerala. ESI & PF compliant with 25+ years experience." 
        />
        
        {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="security guard services Kottayam, private security Kottayam, security services near me Kottayam, professional security guards Kerala, residential security Kottayam, commercial security services Kottayam, access control Kottayam, facility security Kerala, security personnel Kottayam, 24x7 security services Kerala" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://smartsecuritycleaning.com/services/security" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Security Guard Services in Kottayam | Professional Security Guards Kerala" />
        <meta property="og:description" content="Professional security guard services in Kottayam for residential, commercial, and private security needs. Trained personnel, access control, and 24/7 security services across Kerala." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartsecuritycleaning.com/services/security" />
        <meta property="og:image" content="https://smartsecuritycleaning.com/assets/security-services-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Security Guard Services in Kottayam - Smart Security & Cleaning Services" />
        <meta property="og:site_name" content="Smart Security & Cleaning Services" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security Guard Services in Kottayam | Professional Security Guards Kerala" />
        <meta name="twitter:description" content="Professional security guard services in Kottayam for residential, commercial, and private security needs. 24/7 trained personnel across Kerala." />
        <meta name="twitter:image" content="https://smartsecuritycleaning.com/assets/security-services-twitter-card.jpg" />
        <meta name="twitter:image:alt" content="Professional Security Guard Services in Kottayam - Smart Security & Cleaning Services" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Smart Security & Cleaning Services" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kottayam, Kerala" />
        
        {/* JSON-LD Structured Data for Security Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Security Guard Services Kottayam",
            "description": "Professional security guard services in Kottayam for residential, commercial, and private security needs. Trained security personnel with access control and 24/7 monitoring.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Smart Security & Cleaning Services",
              "image": "https://smartsecuritycleaning.com/assets/smart-security-cleaning-logo.png",
              "url": "https://smartsecuritycleaning.com/services/security",
              "telephone": "+91-481-2563333",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Parayil Building, Opp. Punjab National Bank, Kalathipady",
                "addressLocality": "Kottayam",
                "addressRegion": "Kerala",
                "postalCode": "686010",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Security Services",
            "areaServed": [
              {
                "@type": "City",
                "name": "Kottayam"
              },
              {
                "@type": "State", 
                "name": "Kerala"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Security Guard Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Facility Access & Perimeter Security",
                    "description": "Trained security personnel for facility entry and exit point control with perimeter security."
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Access Control & Incident Response",
                    "description": "Digital access systems management and rapid incident response services."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Fire & Safety Management",
                    "description": "Fire prevention, evacuation procedures, and emergency safety protocol management."
                  }
                }
              ]
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Training Modules",
                "value": "8 comprehensive training modules including emergency response and first aid"
              },
              {
                "@type": "PropertyValue", 
                "name": "Compliance",
                "value": "ESI, PF, and government regulation compliant"
              },
              {
                "@type": "PropertyValue",
                "name": "Support",
                "value": "24x7 support and emergency response"
              }
            ],
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "areaServed": {
                "@type": "Place",
                "name": "Kerala, India"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Compact Hero Section - Enhanced mobile responsiveness */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={banner}
            alt="Professional Security Guard Services in Kottayam - Smart Security"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up leading-tight">
              Professional{' '}
              <span className="text-white">
                Security Services
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-300 px-2">
             Your trusted partner in business security and cleaning excellence since 2001.
            </p>
          </div>
        </div>
      </section>

     {/* Security Services Section - Enhanced mobile layout */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
    <div className="mb-8 sm:mb-12 lg:mb-12">
      <div className="inline-block mb-4 sm:mb-6">
        <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
          OUR SERVICES
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
        COMPREHENSIVE SECURITY
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>SOLUTIONS
      </h2>
    </div>
  </div>

  {/* Full-width alternating sections - Mobile optimized */}
  {/* Full-width alternating sections */}
          <div className="space-y-0">
            {serviceCategories.map((service, index) => (
              <div 
                key={index}
                className={`w-full ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}
                style={{ backgroundColor: index % 2 === 0 ? '#2b2b2b' : '#1f1f1f' }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={`space-y-4 sm:space-y-6 lg:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg lg:text-lg text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
  
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#1E88E5' }}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300 text-sm lg:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
  
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 lg:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                      />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

       {/* Training Program Section - Mobile optimized */}
      <section
        className="py-16 sm:py-20 lg:py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${ondutyguard})`,
          backgroundColor: "#f8f9fa"
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16 lg:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                TRAINING PROGRAM
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              COMPREHENSIVE STAFF
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>TRAINING MODULES
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white mt-4 sm:mt-6 max-w-4xl drop-shadow-md">
              Our security personnel undergo rigorous, industry-standard training to
              handle emergencies and maintain professionalism at all times. Each
              module is designed to build expertise and ensure the highest standards
              of service delivery.
            </p>
          </div>

          {/* Training Modules Grid - Responsive layout with mobile limitation */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingModules.map((module, index) => (
              <div
                key={index}
                className="bg-white/95 p-4 sm:p-6 rounded-xl border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-3 xl:space-y-0 xl:space-x-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#1E88E5' }}>
                    <span className="text-white font-bold text-base">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-base xl:text-lg font-bold leading-tight" style={{ color: '#2B2B2B' }}>
                    {module}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-12">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                WHY CHOOSE US
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#2B2B2B' }}>
              PROFESSIONAL SECURITY
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>EXCELLENCE
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl">
              We provide exceptional security services with trained professionals who understand 
              the importance of safety, professionalism, and comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 items-center">
            {/* Left Side - Professional Image */}
            <div className="relative order-last lg:order-first">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={securityguardline}
                  alt="Professional security team"
                  className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-first lg:order-last">
              <div className="p-4 sm:p-6 rounded-xl text-white relative overflow-hidden" style={{ backgroundColor: '#1E88E5' }}>
                <div className="relative z-10">
                  <div className="mb-3">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-2">
                    Advanced Protection
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#E3F2FD' }}>
                    Comprehensive security protocols with state-of-the-art equipment and trained personnel.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-3">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#1E88E5' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2" style={{ color: '#2B2B2B' }}>
                  24/7 Monitoring
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Round-the-clock surveillance and immediate response to any security threats or emergencies.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-3">
                  <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#1E88E5' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight mb-2" style={{ color: '#2B2B2B' }}>
                  Certified Guards
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Professionally trained and certified security personnel with extensive field experience.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl text-white relative overflow-hidden" style={{ backgroundColor: '#1E88E5' }}>
                <div className="relative z-10">
                  <div className="mb-3">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-2">
                    Proven Excellence
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#E3F2FD' }}>
                    20+ years of experience with 300+ successful security implementations across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Trusted Clients Section - Mobile optimized */}
     <section className="py-16 sm:py-20 lg:py-20" style={{ backgroundColor: '#f8f9fa' }}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12 sm:mb-16 lg:mb-16">
           <div className="inline-block mb-4 sm:mb-6">
             <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
               TRUSTED CLIENTS
             </div>
           </div>
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#2B2B2B' }}>
             TRUSTED BY HEALTHCARE
             <br className="hidden sm:block" />
             <span className="sm:hidden"> </span>& CORPORATE LEADERS
           </h2>
           <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-2">
             Leading hospitals, corporate offices, and industrial facilities trust us with their cleaning needs. 
             Our reputation for excellence speaks through our long-term client partnerships.
           </p>
         </div>
     
         {/* Client Logos Grid - Updated with actual logo images */}
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
           {clients.map((client, index) => (
             <div
               key={index}
               className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[100px] sm:min-h-[120px] group"
             >
               <div className="text-center">
                 <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center p-1">
                   <img 
                     src={client.logo} 
                     alt={client.alt}
                     className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
                   />
                 </div>
                 <p className="text-xs text-gray-600 font-medium leading-tight text-center px-1">
                   {client.name}
                 </p>
               </div>
             </div>
           ))}
         </div>
     
         {/* Trust Indicators - Mobile optimized */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
           <div className="text-center">
             <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
               <Building className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
             </div>
             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>300+</h3>
             <p className="text-sm sm:text-base text-gray-600">Facilities Served</p>
           </div>
           <div className="text-center">
             <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
               <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
             </div>
             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>25+</h3>
             <p className="text-sm sm:text-base text-gray-600">Years of Experience</p>
           </div>
           <div className="text-center">
             <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
               <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
             </div>
             <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>1500+</h3>
             <p className="text-sm sm:text-base text-gray-600">Trained Staff</p>
           </div>
         </div>
     
         {/* Call to Action - Mobile friendly */}
         <div className="text-center">
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
             <div className="h-px bg-gray-300 w-12 sm:w-20 hidden sm:block"></div>
             <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#1E88E5' }}>
               View All Our Clients
               <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
             </button>
             <div className="h-px bg-gray-300 w-12 sm:w-20 hidden sm:block"></div>
           </div>
           <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
             Discover our complete portfolio of trusted partnerships
           </p>
         </div>
       </div>
     </section>

      
    </div>
  );
};

export default SecurityServices;