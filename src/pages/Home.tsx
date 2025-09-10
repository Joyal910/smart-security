import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/Home/HeroSection';
import StatsSection from '../components/Home/StatsSection';
import ServicesSection from '../components/Home/ServicesSection';
import PatnersLogosSection from '../components/Home/PatnersLogosSection';
import IndustriesSection from '../components/Home/IndustriesSection';
import WhyChooseUsSection from '../components/Home/WhyChooseUsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import ClientsSection from '../components/Home/ClientsSection';
import CTASection from '../components/Home/CTASection';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Helmet>
        {/* Page Title */}
        <title>Smart Security & Cleaning Services | Security, Cleaning & Patient Care in Kottayam</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Smart Security & Cleaning Services offers professional security guard services, cleaning services, and patient care services in Kottayam, Kerala. 25+ years experience, 300+ clients, 1500+ employees. Your trusted partner for residential, commercial, and healthcare facilities across Kottayam." 
        />
        
        {/* Meta Keywords */}
        <meta 
          name="keywords" 
          content="security guard services Kottayam, cleaning services Kottayam, patient care services Kottayam, home nursing Kottayam, private security Kottayam, office cleaning Kottayam, hospital cleaning Kottayam, home care services Kottayam, elderly care Kottayam, security services near me Kottayam, cleaning services near me Kottayam" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://smartsecuritycleaning.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Smart Security & Cleaning Services | Security, Cleaning & Patient Care in Kottayam" />
        <meta property="og:description" content="Professional security guard services, cleaning services, and patient care services in Kottayam, Kerala. 25+ years experience, 300+ clients, 1500+ employees. Your trusted partner for all security, cleaning, and healthcare needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartsecuritycleaning.com/" />
        <meta property="og:image" content="https://smartsecuritycleaning.com/assets/home-page-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Smart Security & Cleaning Services - Home Page - Security, Cleaning & Patient Care in Kottayam" />
        <meta property="og:site_name" content="Smart Security & Cleaning Services" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Security & Cleaning Services | Security, Cleaning & Patient Care in Kottayam" />
        <meta name="twitter:description" content="Professional security guard services, cleaning services, and patient care services in Kottayam, Kerala. 25+ years experience, 300+ clients, 1500+ employees." />
        <meta name="twitter:image" content="https://smartsecuritycleaning.com/assets/home-page-twitter-card.jpg" />
        <meta name="twitter:image:alt" content="Smart Security & Cleaning Services - Security, Cleaning & Patient Care in Kottayam" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Smart Security & Cleaning Services" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kottayam, Kerala" />
        
        {/* JSON-LD Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Smart Security & Cleaning Services",
            "url": "https://smartsecuritycleaning.com",
            "logo": "https://smartsecuritycleaning.com/assets/smart-security-cleaning-logo.png",
            "description": "Leading provider of security guard services, cleaning services, and patient care services in Kottayam, Kerala. 25+ years experience serving 300+ clients with 1500+ trained professionals.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Parayil Building, Opp. Punjab National Bank, Kalathipady",
              "addressLocality": "Kottayam",
              "addressRegion": "Kerala",
              "postalCode": "686010",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-481-2563333",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Malayalam"],
              "areaServed": "Kerala, India"
            },
            "sameAs": [
              "https://www.facebook.com/smartsecuritycleaningservices",
              "https://www.instagram.com/smartsecuritycleaning",
              "https://www.linkedin.com/company/smart-security-cleaning-services"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Security, Cleaning & Patient Care Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Security Guard Services Kottayam",
                    "description": "Professional security guard services for homes, offices, and commercial properties in Kottayam."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Cleaning Services Kottayam",
                    "description": "Comprehensive cleaning services including office cleaning, hospital cleaning, and deep cleaning in Kottayam."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Patient Care Services Kottayam", 
                    "description": "Home nursing, patient care, and elderly care services provided by trained healthcare professionals in Kottayam."
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PatnersLogosSection />
      <IndustriesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;