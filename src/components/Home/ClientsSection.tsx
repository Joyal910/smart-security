import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const clients = [
    'BMW', 'Mercedes-Benz', 'Honda', 'Hyundai', 'Toyota', 'Nissan', 'KIA', 'Volkswagen',
    'Muthoot Healthcare', 'Sree Sankara Hospital', 'Lakshmi Hospital', 'GIMCARE Hospital',
    'Malabar Gold', 'Capitol Mall', 'PVS Builders', 'LandMark Builders', 'Apco Honda',
    'AM Motors', 'EVM', 'DKH KIA', 'KVR', 'Popular Hyundai', 'Classic Hyundai',
    'TVS', 'Rubco', 'Nippon Toyota', 'Dianova Labs', 'Labour India', 'Bismi',
    'PSN', 'Ladder', 'Asset', 'Priyadarshini', 'Zealots Villas', 'LandMark Builders'
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600">
            Serving 300+ satisfied clients across various industries
          </p>
        </div>

        {/* Moving Client Logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-white mx-4 px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{ minWidth: '200px' }}
              >
                <div className="text-center font-medium text-gray-700">{client}</div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-white mx-4 px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{ minWidth: '200px' }}
              >
                <div className="text-center font-medium text-gray-700">{client}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/clients"
            className="inline-flex items-center bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            View All Clients
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;