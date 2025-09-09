import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-primary-100">
            Contact us today for a free consultation and customized security & cleaning solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+9179944 55047"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Now: +91 79944 55047
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;