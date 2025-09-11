import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import banner from '../components/Assets/Images/hero_banner.jpeg';
import { Helmet } from 'react-helmet-async';

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  // Branch locations with coordinates
  const branchLocations = [
    {
      name: "Co-Operate Office - Kottayam",
      address: "Smart Security and Cleaning Services, Kottayam, Kerala",
      phone: "+91 79944 55047",
      coords: { lat: 9.5915, lng: 76.5222 },
      isHeadOffice: true
    },
    {
      name: "Ernakulam Branch",
      address: "Vytila, Ernakulam, Kerala",
      phone: "+91 9847105748",
      coords: { lat: 9.9675, lng: 76.3158 }
    },
    {
      name: "Thrissur Branch",
      address: "Chundel, Thrissur, Kerala",
      phone: "+91 9744130060",
      coords: { lat: 10.5276, lng: 76.2144 }
    },
    {
      name: "Kozhikode Branch",
      address: "Cheruvannur, Kozhikode, Kerala",
      phone: "+91 9526415575",
      coords: { lat: 11.2588, lng: 75.7804 }
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  // Load Google Maps API
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        setMapLoaded(true);
        return;
      }

      const script = document.createElement('script');
      // Replace 'YOUR_API_KEY' with your actual Google Maps API key
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;

      window.initMap = () => {
        setMapLoaded(true);
      };

      script.onerror = () => {
        console.error('Error loading Google Maps API');
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize map when loaded
  useEffect(() => {
    if (mapLoaded && mapRef.current && !mapInstance.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 8,
        center: { lat: 10.8505, lng: 76.2711 }, // Kerala center
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }]
          }
        ]
      });

      mapInstance.current = map;

      // Add markers for each branch
      branchLocations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.coords,
          map: map,
          title: location.name,
          icon: location.isHeadOffice ? {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#1E88E5" stroke="white" stroke-width="4"/>
                <text x="20" y="26" text-anchor="middle" fill="white" font-size="12" font-weight="bold">HQ</text>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40)
          } : undefined
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="color: #1E88E5; margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">
                ${location.name}
              </h3>
              ${location.isHeadOffice ? '<span style="background: #1E88E5; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">Co-Operate Office</span><br><br>' : ''}
              <p style="margin: 4px 0; color: #666; font-size: 14px;">
                <strong>Address:</strong><br>${location.address}
              </p>
              <p style="margin: 4px 0; color: #666; font-size: 14px;">
                <strong>Phone:</strong><br>
                <a href="tel:${location.phone}" style="color: #1E88E5; text-decoration: none;">
                  ${location.phone}
                </a>
              </p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    }
  }, [mapLoaded]);

  const services = [
  'Security Services',
  'Cleaning Services',
  'Patient-Assist Services',
  'General Enquiry',
  'Request a Quote',
  'Partnership Opportunity',
  'Careers ',
  'Feedback',
  'Other'
];


  const locations = [
    'Kottayam', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode',
    'Wayanad', 'Kannur', 'Kasaragod', 'Alappuzha', 'Pathanamthitta', 'Kollam',
    'Thiruvananthapuram', 'Idukki'
  ];

  const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    phones: ['+91 79944 55047', '+91 98472 20060'], 
    secondary: 'Co-Operate Office - Kottayam'
  },
  {
    icon: Mail,
    title: 'Email Us',
    emails: ['arun@smartsecuritycleaning.com'], // 👈 Now works
    secondary: ''
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: 'Co-Operate Office',
    secondary: 'Kottayam, Kerala',
    action: '#'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    primary: 'Always Available',
    secondary: 'Emergency Response',
    action: 'tel:+917994455047'
  }
];



return (
  <div className="animate-fade-in">
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Contact Us | Smart Security & Cleaning Services Kottayam</title>
      <meta name="description" content="Contact us for security, cleaning, and patient care in Kottayam. Get quotes for security guard services, office cleaning, home nursing, and patient care services. Available 24/7." />
      <meta name="keywords" content="contact security services Kottayam, book cleaning service Kottayam, home nursing services Kottayam, security guard contact Kottayam, cleaning service booking, patient care contact Kerala, 24/7 security services, office cleaning quotes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://yourdomain.com/contact" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/contact" />
      <meta property="og:title" content="Contact Us | Smart Security & Cleaning Services Kottayam" />
      <meta property="og:description" content="Contact us for security, cleaning, and patient care in Kottayam. Get quotes for security guard services, office cleaning, home nursing, and patient care services. Available 24/7." />
      <meta property="og:image" content="https://yourdomain.com/images/contact-og-image.jpg" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Smart Security & Cleaning Services" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yourdomain.com/contact" />
      <meta property="twitter:title" content="Contact Us | Smart Security & Cleaning Services Kottayam" />
      <meta property="twitter:description" content="Contact us for security, cleaning, and patient care in Kottayam. Get quotes for security guard services, office cleaning, home nursing, and patient care services. Available 24/7." />
      <meta property="twitter:image" content="https://yourdomain.com/images/contact-twitter-image.jpg" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Smart Security & Cleaning Services" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kottayam" />
      <meta name="geo.position" content="9.5916;76.5222" />
      <meta name="ICBM" content="9.5916, 76.5222" />
    </Helmet>

    {/* Hero Section - Matching About page style */}
    <section className="relative min-h-[30vh] sm:min-h-[35vh] lg:min-h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={banner}
          alt="Contact Smart Security background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up leading-tight">
            Get In{' '}
             <span className="text-white block sm:inline">
              Touch
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed animate-fade-in-up animation-delay-300 px-4 sm:px-0">
            Ready to secure your business? Contact Kerala's most trusted security and cleaning partner.
          </p>
        </div>
      </div>
    </section>

      {/* Contact Methods Section - Matching About page style */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-6">
              <div
                className="px-3 py-2 text-xs font-bold tracking-wider uppercase text-white"
                style={{ backgroundColor: "#1E88E5" }}
              >
                CONTACT METHODS
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
              MULTIPLE WAYS TO
              <br />
              REACH US
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center space-y-3 sm:space-y-4 animate-slide-up p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: "#1E88E5" }}>
                  <method.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#2B2B2B" }}>{method.title}</h3>
                <div className="space-y-1 px-2 sm:px-0">
  {/* Phones */}
  {method.phones?.map((phone, idx) => (
    <div key={idx}>
      <a
        href={`tel:${phone}`}
        className="font-medium hover:underline transition-colors text-sm sm:text-base break-words"
        style={{ color: "#1E88E5" }}
      >
        {phone}
      </a>
    </div>
  ))}

  {/* Emails */}
  {method.emails?.map((email, idx) => (
    <div key={idx}>
      <a
        href={`mailto:${email}`}
        className="font-medium hover:underline transition-colors text-sm sm:text-base break-words"
        style={{ color: "#1E88E5" }}
      >
        {email}
      </a>
    </div>
  ))}

  {/* Single primary (fallback for Map, Support, etc.) */}
  {method.primary && (
    <div>
      <a
        href={method.action}
        className="font-medium hover:underline transition-colors text-sm sm:text-base break-words"
        style={{ color: "#1E88E5" }}
      >
        {method.primary}
      </a>
    </div>
  )}

  {/* Secondary text */}
  <div className="text-xs sm:text-sm text-gray-500">{method.secondary}</div>
</div>


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Updated styling */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-6">
              <div
                className="px-3 py-2 text-xs font-bold tracking-wider uppercase text-white"
                style={{ backgroundColor: "#1E88E5" }}
              >
                GET A QUOTE
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
              REQUEST YOUR
              <br />
              FREE CONSULTATION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
                {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4" style={{ color: "#1E88E5" }} />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#1E88E5" }}>Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <select
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                          style={{ focusRingColor: "#1E88E5" }}
                        >
                          <option value="">Select location</option>
                          {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                        style={{ focusRingColor: "#1E88E5" }}
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information with Embedded Map */}
            <div className="space-y-6 sm:space-y-8 animate-slide-up order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
               {/* Embedded Google Map */}
              <div className="bg-gray-100 rounded-xl overflow-hidden">
               
                <div className="w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.0612654586225!2d76.5552579!3d9.5899877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d3ee2ee929f%3A0x75b6b430c54429af!2sSmart%20Security%20%26%20Cleaning%20Services!5e0!3m2!1sen!2sin!4v1755246964518!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>

              
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: "#2B2B2B" }}>
                  Why Choose Smart Security?
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#1E88E5" }} />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold" style={{ color: "#2B2B2B" }}>20+ Years Experience</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Proven track record in security and cleaning service provider</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#1E88E5" }} />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold" style={{ color: "#2B2B2B" }}>300+ Satisfied Clients</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Trusted by leading brands across Kerala</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#1E88E5" }} />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold" style={{ color: "#2B2B2B" }}>Complete Compliance</h3>
                      <p className="text-xs sm:text-sm text-gray-600">ESI, PF, and labor law compliance guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#1E88E5" }} />
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold" style={{ color: "#2B2B2B" }}>24/7 Support</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Round-the-clock availability across 14 branches</p>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations Quick Access - Updated styling */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block mb-6">
              <div
                className="px-3 py-2 text-xs font-bold tracking-wider uppercase text-white"
                style={{ backgroundColor: "#1E88E5" }}
              >
                QUICK ACCESS
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
              CONTACT OUR
              <br />
              BRANCHES
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Reach out to our nearest branch for immediate assistance and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-white p-4 sm:p-6 rounded-lg animate-slide-up" style={{ backgroundColor: "#1E88E5" }}>
              <h3 className="font-bold text-base sm:text-lg mb-2">Co-Operate Office - Kottayam</h3>
              <p className="mb-3 text-sm sm:text-base" style={{ color: "#E3F2FD" }}>Central Kerala Operations</p>
              <a
                href="tel:+9179944 55047"
                className="hover:text-white font-medium transition-colors text-sm sm:text-base"
                style={{ color: "#E3F2FD" }}
              >
                +91 79944 55047
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:border-blue-300 transition-colors animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "#2B2B2B" }}>Ernakulam Branch</h3>
              <p className="text-gray-600 mb-3 text-sm sm:text-base">Commercial Hub</p>
              <a
                href="tel:+919847105748"
                className="hover:underline font-medium transition-colors text-sm sm:text-base"
                style={{ color: "#1E88E5" }}
              >
                +91 9847105748
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 p-4 sm:p-6 rounded-lg hover:border-blue-300 transition-colors animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "#2B2B2B" }}>All Other Branches</h3>
              <p className="text-gray-600 mb-3 text-sm sm:text-base">14 Locations Statewide</p>
              <a
                href="/locations"
                className="hover:underline font-medium transition-colors text-sm sm:text-base"
                style={{ color: "#1E88E5" }}
              >
                View All Locations →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;