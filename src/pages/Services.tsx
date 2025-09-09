import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SecurityServices: React.FC = () => {
  const serviceAreas = [
    'Personal & Residential Security',
    'Industrial & Construction Site Security',
    'Event Security (exhibitions, festivals)',
    'Fire & Safety Services',
    '24/7 Supervised Security Staff',
    'Male and Female Security Personnel',
    'Customized Security Plans for Clients'
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

  const highlights = [
    'Fully compliant with ESI, PF, and government regulations',
    'Well-groomed, uniformed staff',
    'Regular performance monitoring and client feedback',
    '24x7 support and quick emergency response',
    'Trusted across industries in Kerala'
  ];

  const clients = [
    'EVM Motors (All Showrooms in Kerala)',
    'Bridgeway Motors (Mercedes-Benz)',
    'Nippon Toyota, Thrissur',
    'KIMS Hospital, Kasargod',
    'Skyline Builders, Calicut & Kannur',
    'PVS Sunrise Super Specialty Hospital, Kozhikode'
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal-900 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Security Solutions for Every Environment</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            SMART offers dependable, professional security personnel for personal, commercial, and industrial spaces. With over 20 years of experience and 1500+ trained staff, our services are trusted by leading businesses, hospitals, and institutions across Kerala.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-6">What We Offer</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {serviceAreas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Staff Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Robust Security Staff Training</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our security personnel undergo rigorous, industry-standard training to handle emergencies and maintain professionalism at all times.
          </p>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {trainingModules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-6">What Sets Us Apart</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Client Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Our Trusted Security Clients</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            {clients.map((client, index) => (
              <li key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">{client}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Interested in Our Security Services?</h3>
          <p className="mb-6 text-gray-700">Contact us today to customize a security solution tailored for your needs.</p>
          <Link
            to="/contact"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
