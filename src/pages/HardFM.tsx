import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Building, CheckCircle, ArrowRight, Clock, Award, Star, MapPin, Phone, Mail, Check, DollarSign, Globe, Shield, UserCheck, Stethoscope } from 'lucide-react';
import banner from '../components/Assets/Images/hero_banner.jpeg';
import patientasssit1 from '../components/Assets/Images/patientassist1.jpeg';
import patientasssit2 from '../components/Assets/Images/patient2.jpg';
import patientasssit3 from '../components/Assets/Images/patient3.jpeg';
import patientasssit4 from '../components/Assets/Images/patient4.jpeg';

const HardFM: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Patient Escort & Mobility',
      description: 'Professional patient escort services within hospital premises, ensuring safe transportation between departments, wards, and treatment areas with compassionate care.',
      features: ['Wheelchair Assistance', 'Stretcher Transportation', 'Walking Support', 'Inter-Department Escort'],
      image: patientasssit1
    },
    {
      title: 'Admission & Discharge Support',
      description: 'Comprehensive assistance during hospital admissions and discharges, helping patients and families navigate procedures, paperwork, and transitions smoothly.',
      features: ['Admission Documentation', 'Discharge Planning', 'Family Coordination', 'Insurance Assistance'],
      image: patientasssit2
    },
    {
      title: 'Bedside Care & Comfort',
      description: 'Dedicated bedside attendants providing basic comfort, emotional support, and assistance with daily needs to ensure patient well-being and recovery.',
      features: ['Bedside Companionship', 'Meal Assistance', 'Basic Personal Care', 'Emotional Support'],
      image: patientasssit3
    }
  ];

  const trainingModules = [
    'Patient Care Ethics & Compassion',
    'Basic First Aid & Emergency Response',
    'Hospital Protocols & Procedures',
    'Patient Privacy & Confidentiality',
    'Communication with Patients & Families',
    'Infection Control & Hygiene Standards',
    'Medical Equipment Handling',
    'Emergency Evacuation Procedures'
  ];

  const whyChooseUs = [
    'Trained in patient care ethics and hospital protocols',
    'Compassionate staff with healthcare experience',
    'Strict adherence to patient confidentiality',
    '24x7 availability for patient assistance needs',
    'Trusted by leading hospitals across Kerala'
  ];

  const clients = [
    'KIMS Hospital, Kasargod',
    'PVS Sunrise Super Specialty Hospital, Kozhikode',
    'Various Multi-Specialty Hospitals',
    'Regional Healthcare Centers',
    'Private Medical Facilities',
    'Rehabilitation Centers'
  ];

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        {/* Page Title */}
        <title>Patient Care Services for Hospitals in Kottayam | Home Nursing & Elderly Care</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Affordable home nursing, patient care services, and elderly care at home in Kottayam. Smart Security provides professional patient escort, bedside care, and healthcare assistance for hospitals and home care with trained compassionate staff across Kerala." 
        />
        
        {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="home nursing Kottayam, patient care services Kottayam, home care services Kottayam, elderly care Kottayam, patient escort services, bedside care Kottayam, hospital assistance Kerala, healthcare support services, nursing services Kottayam, patient mobility assistance, home healthcare Kerala, medical attendant services Kottayam" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://smartsecuritycleaning.com/services/patient-assist" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Patient Care Services for Hospitals in Kottayam | Home Nursing & Elderly Care" />
        <meta property="og:description" content="Affordable home nursing, patient care services, and elderly care at home in Kottayam. Professional patient escort, bedside care, and healthcare assistance with trained compassionate staff." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartsecuritycleaning.com/services/patient-assist" />
        <meta property="og:image" content="https://smartsecuritycleaning.com/assets/patient-care-services-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Patient Care Services in Kottayam - Home Nursing, Elderly Care, Patient Assist Services" />
        <meta property="og:site_name" content="Smart Security & Cleaning Services" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patient Care Services for Hospitals in Kottayam | Home Nursing & Elderly Care" />
        <meta name="twitter:description" content="Affordable home nursing, patient care services, and elderly care at home in Kottayam. Professional healthcare assistance with trained compassionate staff." />
        <meta name="twitter:image" content="https://smartsecuritycleaning.com/assets/patient-care-services-twitter-card.jpg" />
        <meta name="twitter:image:alt" content="Patient Care Services in Kottayam - Home Nursing & Elderly Care" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Smart Security & Cleaning Services" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kottayam, Kerala" />
        
        {/* JSON-LD Structured Data for Patient Care Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Patient Care Services Kottayam",
            "description": "Professional patient care services including home nursing, elderly care, patient escort, bedside care, and healthcare assistance in Kottayam and across Kerala hospitals.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Smart Security & Cleaning Services",
              "image": "https://smartsecuritycleaning.com/assets/smart-security-cleaning-logo.png",
              "url": "https://smartsecuritycleaning.com/services/patient-assist",
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
            "serviceType": "Healthcare Support Services",
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
              "name": "Patient Care & Home Nursing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Patient Escort & Mobility Services",
                    "description": "Professional patient escort services with wheelchair assistance, stretcher transportation, and inter-department mobility support."
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Admission & Discharge Support",
                    "description": "Comprehensive hospital admission and discharge assistance including documentation, family coordination, and insurance support."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Bedside Care & Comfort Services",
                    "description": "Dedicated bedside attendants providing companionship, meal assistance, basic personal care, and emotional support."
                  }
                }
              ]
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Training Modules",
                "value": "8 comprehensive healthcare training modules including patient care ethics and hospital protocols"
              },
              {
                "@type": "PropertyValue", 
                "name": "Specialization",
                "value": "Patient care ethics, hospital protocols, and compassionate healthcare assistance"
              },
              {
                "@type": "PropertyValue",
                "name": "Confidentiality",
                "value": "Strict adherence to patient privacy and confidentiality standards"
              },
              {
                "@type": "PropertyValue",
                "name": "Availability",
                "value": "24x7 patient assistance services"
              }
            ],
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "areaServed": {
                "@type": "Place",
                "name": "Kerala, India"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "Affordable patient care services"
              }
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Hospitals, Healthcare Centers, Families, Elderly Patients, Home Care Recipients"
            },
            "category": [
              "Home Nursing",
              "Patient Care",
              "Elderly Care", 
              "Healthcare Support",
              "Hospital Assistance"
            ]
          })}
        </script>
      </Helmet>

      {/* Compact Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={banner}
            alt="Patient Care Services in Kottayam - Home Nursing, Elderly Care, Patient Assist Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up leading-tight">
              Patient{' '}
              <span className="text-white">
                Assist Services
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-300 px-2">
             Your trusted partner in compassionate patient care and healthcare excellence since 2001.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                OUR SERVICES
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              COMPREHENSIVE PATIENT
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>ASSISTANCE
            </h2>
          </div>
        </div>

        {/* Full-width alternating sections */}
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

      {/* Training Program Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${patientasssit1})`,
          backgroundColor: "#f8f9fa"
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                TRAINING PROGRAM
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              SPECIALIZED ATTENDANT
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>TRAINING MODULES
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white mt-4 sm:mt-6 max-w-4xl drop-shadow-md">
              Our patient attendants receive comprehensive training in healthcare protocols, patient care ethics, 
              and compassionate service delivery to ensure the highest standards of patient assistance and comfort.
            </p>
          </div>

          {/* Training Modules Grid - Responsive grid with 2 modules per row on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingModules.map((module, index) => (
              <div
                key={index}
                className="bg-white/95 p-4 sm:p-6 rounded-xl border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md mx-auto sm:mx-0" style={{ backgroundColor: '#1E88E5' }}>
                    <span className="text-white font-bold text-sm sm:text-base">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold leading-tight text-center sm:text-left" style={{ color: '#2B2B2B' }}>
                    {module}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                WHY CHOOSE US
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#2B2B2B' }}>
              COMPASSIONATE PATIENT
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>CARE SERVICES
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl">
              We provide exceptional patient assistance services with trained attendants who understand 
              the importance of dignity, compassion, and professional healthcare support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Side - Professional Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src= {patientasssit4}
                  alt="Professional patient care attendant"
                  className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
              <div className="p-4 sm:p-6 rounded-xl text-white relative overflow-hidden" style={{ backgroundColor: '#1E88E5' }}>
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-3">
                    <Heart className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1 sm:mb-2">
                    Compassionate Care
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#E3F2FD' }}>
                    Trained in empathetic patient care, ensuring comfort and dignity in all interactions.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-2 sm:mb-3">
                  <Clock className="h-5 sm:h-6 w-5 sm:w-6" style={{ color: '#1E88E5' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>
                  24/7 Availability
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Round-the-clock patient assistance services for emergency and routine healthcare needs.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-2 sm:mb-3">
                  <UserCheck className="h-5 sm:h-6 w-5 sm:w-6" style={{ color: '#1E88E5' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>
                  Trained Professionals
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Certified attendants with healthcare training and hospital protocol experience.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl text-white relative overflow-hidden" style={{ backgroundColor: '#1E88E5' }}>
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-3">
                    <Stethoscope className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1 sm:mb-2">
                    Healthcare Expertise
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#E3F2FD' }}>
                    Deep understanding of healthcare environments and medical protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white" style={{ backgroundColor: '#1E88E5' }}>
                TRUSTED PARTNERS
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#2B2B2B' }}>
              TRUSTED BY HEALTHCARE
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>FACILITIES
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-2">
              Premier hospitals and healthcare facilities trust us with their patient assistance needs. 
              Our commitment to compassionate care has built lasting partnerships across the healthcare sector.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[100px] sm:min-h-[120px]"
              >
                <div className="text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Building className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-tight">{client}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
                <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>10,000+</h3>
              <p className="text-sm sm:text-base text-gray-600">Patients Assisted</p>
            </div>
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>12+</h3>
              <p className="text-sm sm:text-base text-gray-600">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: '#1E88E5' }}>
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: '#2B2B2B' }}>300+</h3>
              <p className="text-sm sm:text-base text-gray-600">Trained Attendants</p>
            </div>
          </div>

          {/* Call to Action - View More Clients */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="h-px bg-gray-300 w-8 sm:w-20"></div>
              <button className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#1E88E5' }}>
                <span className="hidden sm:inline">View Healthcare Partners</span>
                <span className="sm:hidden">View Partners</span>
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <div className="h-px bg-gray-300 w-8 sm:w-20"></div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
              Discover our complete network of healthcare partnerships
            </p>
          </div>
        </div>
      </section>

      

      
    </div>
  );
};

export default HardFM;