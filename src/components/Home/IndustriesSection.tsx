import React from 'react';
import { Car, Heart, GraduationCap, Building2, ShoppingBag, Hammer, Factory, Home } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: Car,
      title: 'Automotive',
      description: 'Leading car dealerships and service centers across Kerala',
      clients: ['BMW', 'Mercedes-Benz', 'Honda', 'Hyundai', 'Toyota', 'Nissan'],
      color: '#1E88E5'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Hospitals, clinics, and medical facilities with specialized protocols',
      clients: ['Muthoot Healthcare', 'Sree Sankara Hospital', 'Lakshmi Hospital'],
      color: '#1E88E5'
    },
    {
      icon: ShoppingBag,
      title: 'Commercial',
      description: 'Retail establishments, malls, and commercial complexes',
      clients: ['Malabar Gold', 'Capitol Mall', 'Bismi', 'PSN'],
      color: '#1E88E5'
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Builders and real estate developers with site security',
      clients: ['PVS Builders', 'LandMark Builders', 'Zealots Villas'],
      color: '#1E88E5'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Manufacturing facilities and industrial complexes',
      clients: ['Various Manufacturing Units', 'Industrial Parks'],
      color: '#1E88E5'
    },
    {
      icon: GraduationCap,
      title: 'Educational',
      description: 'Schools, colleges, and educational institutions',
      clients: ['Educational Institutions', 'Training Centers'],
      color: '#1E88E5'
    },
    {
      icon: Building2,
      title: 'Corporate',
      description: 'Office buildings and corporate headquarters',
      clients: ['Corporate Offices', 'Business Centers'],
      color: '#1E88E5'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Apartment complexes and residential communities',
      clients: ['Residential Complexes', 'Gated Communities'],
      color: '#1E88E5'
    }
  ];

  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div
              className="px-3 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white"
              style={{ backgroundColor: "#1E88E5" }}
            >
              INDUSTRIES WE SERVE
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
            TRUSTED ACROSS
            <br />
            DIVERSE SECTORS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            From automotive showrooms to healthcare facilities, from construction sites to corporate offices - 
            we provide specialized security and cleaning solutions tailored to each industry's unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Icon and Count */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#1E88E5" }}
                >
                  <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: "#2B2B2B" }}>
                    {industry.count}
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: "#2B2B2B" }}>
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl sm:rounded-b-2xl"
                style={{ backgroundColor: "#1E88E5" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="h-px bg-gray-300 w-8 sm:w-20"></div>
            <a
              href="/clients"
              className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#1E88E5" }}
            >
              <span className="hidden sm:inline">View All Our Clients</span>
              <span className="sm:hidden">View Clients</span>
              <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <div className="h-px bg-gray-300 w-8 sm:w-20"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 639px) {
          .group:hover {
            transform: translateY(-4px);
          }
        }

        /* Ensure smooth animations on all devices */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;