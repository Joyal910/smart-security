import React from 'react';
import { Users, Award, Shield, Clock, CheckCircle, Target, Check } from 'lucide-react';
import founder from '../components/Assets/Images/founder.jpg'
import whyusbg from '../components/Assets/Images/whyusbg.jpg'
import banner from '../components/Assets/Images/hero_banner.jpeg'
import about_image from '../components/Assets/Images/about image.jpeg'

const About = () => {


  const values = [
    { icon: Shield, title: 'Trust & Reliability', description: 'Building lasting relationships through consistent, dependable service delivery' },
    { icon: Users, title: 'Employee Welfare', description: 'Ensuring ESI, PF benefits and fair wages for all our team members' },
    { icon: Award, title: 'Excellence', description: 'Commitment to the highest standards in every service we provide' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock availability to meet our clients needs' }
  ];

  const leadership = [
    {
      name: 'Managing Director',
      role: 'Strategic Leadership',
      description: 'Guiding the companys vision and growth across Kerala',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Operations Director',
      role: 'Service Excellence',
      description: 'Ensuring quality standards across all service delivery',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'HR Director',
      role: 'People & Culture',
      description: 'Managing our most valuable asset - our people',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Compact Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={banner}
            alt="About Just Hearing Clinic background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              About{' '}
              <span className="text-white">
                Smart Services
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-300">
             Your trusted partner in business security and facility excellence since 2001."
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Founder Image - Mobile Order */}
            <div className="relative animate-slide-up order-2 lg:order-1">
              <div className="relative">
                <img
                  src={founder}
                  alt="Founder - Smart Security & Cleaning Services"
                  className="w-full h-auto max-w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Right Column - Founder Content - Mobile Order */}
            <div className="space-y-4 sm:space-y-6 animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
              <div className="inline-block">
                <div
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white"
                  style={{ backgroundColor: "#1E88E5" }}
                >
                  MEET OUR FOUNDER
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
                Mr. Kuriakose John
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Founder & Managing Director, Smart Security & Cleaning Services
                </span>
              </h2>

           <div className="space-y-4 max-w-3xl mx-auto text-justify">
  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
    Mr. Kuriakose John, the visionary Founder and Managing Director of Smart Security & Cleaning Services, is a seasoned professional with a legacy of dedication, discipline, and leadership. He began his career at the young age of 19 by joining the Indian Navy, where he proudly served the nation for 18 years before voluntarily retiring to pursue his entrepreneurial ambitions.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
    In 2001, he laid the foundation of Smart, driven by his passion to deliver dependable and professional security, and cleaning services.
  </p>

  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
    His journey is a testament to hard work, optimism, and relentless perseverance. As the strategic head of the company, he continues to guide Smart's growth, setting new benchmarks in the industry. He is now joined by his son, Mr. Arun Abey John, sharing a common vision—to build Smart into a globally trusted brand that not only ensures client satisfaction but also uplifts the lives of its employees.
  </p>
</div>



            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* About Us Label */}
              <div className="inline-block">
                <div
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white"
                  style={{ backgroundColor: "#1E88E5" }}
                >
                  OUR STORY
                </div>
              </div>

              {/* Main Heading - Mobile Responsive */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#2B2B2B" }}>
                BUILDING TRUST,
                <br />
                QUALITY, AND
                <br />
                EXCELLENCE
              </h1>

              {/* Team Image - Mobile Optimized */}
              <div className="relative">
                <img
                  src={about_image}
                  alt="Professional security team members"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
                />
              </div>

              {/* More About Us Button - Mobile Centered */}
              
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Description Text */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Founded in 2001, Smart Security & Cleaning Services began with a simple yet powerful vision: 
                to provide Kerala with the most reliable and professional security and Cleaning services. 
                What started as a small security service provider has grown into a comprehensive cleaning company, 
                serving over 300 clients across various industries.
              </p>

              {/* Vision and Mission Sections - Mobile Stacked */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Our Vision */}
                <div>
                  <div
                    className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-2 sm:py-3 mb-4"
                    style={{ backgroundColor: "#2B2B2B" }}
                  >
                    OUR VISION
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be Kerala's leading security and cleaning service provider, recognized for our excellence, 
                    integrity, and innovation. We envision a future where every client feels completely secure and every 
                    employee is valued.
                  </p>
                </div>

                {/* Our Mission */}
                <div>
                  <div
                    className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-3 sm:px-4 py-2 sm:py-3 mb-4"
                    style={{ backgroundColor: "#2B2B2B" }}
                  >
                    OUR MISSION
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#1E88E5" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">Provide reliable security services with integrity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#1E88E5" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">Maintain highest standards of employee welfare</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#1E88E5" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">Build long-term relationships with clients</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#1E88E5" }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">Continually invest in our team's development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Statistics - Mobile Responsive */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "#2B2B2B" }}>
                      20
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-1" style={{ color: "#1E88E5" }}>
                      +
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Years experience</p>
                </div>

                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ color: "#2B2B2B" }}>
                      1500
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ml-1" style={{ color: "#1E88E5" }}>
                      +
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Professional team</p>
                </div>

                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "#2B2B2B" }}>
                      300
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-1" style={{ color: "#1E88E5" }}>
                      +
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Us Section - Mobile Optimized */}
      <section
        className="py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whyusbg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 pt-4">
            <div className="inline-block mb-4">
              <div
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white"
                style={{ backgroundColor: "#1E88E5" }}
              >
                WHY US
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 px-2"
              style={{ color: "#2B2B2B" }}
            >
              BUILDING TRUST WITH
              <br />
              UNMATCHED EXCELLENCE
            </h2>
          </div>

          {/* Features Layout - Mobile Responsive */}
          <div className="relative mt-8 sm:mt-16 lg:mt-40">
            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden space-y-8">
              {[
                { title: "TRAINED PROFESSIONALS", desc: "Our team is fully trained and certified in security, cleaning, and healthcare support to ensure exceptional service delivery." },
                { title: "TAILORED SOLUTIONS", desc: "We customize our services to meet the unique needs of each client, whether for safety, hygiene, or patient care." },
                { title: "RELIABLE & ON-TIME", desc: "We value punctuality and consistency, ensuring our personnel are always ready when you need them." },
                { title: "STRICT QUALITY CONTROL", desc: "Regular audits and supervision guarantee that our services meet the highest industry standards." },
                { title: "24/7 AVAILABILITY", desc: "Our teams are available around the clock for emergencies, urgent requirements, or scheduled tasks." },
                { title: "COMPASSION & CARE", desc: "Especially in healthcare assistance, we deliver support with empathy, dignity, and respect." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold text-xs sm:text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 items-center">
              {/* Left Column Features */}
              <div className="space-y-12 lg:pr-12">
                {/* Trained Professionals */}
                <div className="text-left">
                  <div className="flex items-center justify-start mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      TRAINED PROFESSIONALS
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    Our team is fully trained and certified in security, cleaning, and healthcare assistance to ensure excellence.
                  </p>
                  <div className="mt-4">
                    <div className="w-32 h-px border-t-2 border-dotted" style={{ borderColor: "#1E88E5" }}></div>
                  </div>
                </div>

                {/* Tailored Solutions */}
                <div className="text-left">
                  <div className="flex items-center justify-start mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      TAILORED SOLUTIONS
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    We adapt our services to match your specific requirements — from high-security protocols to sensitive patient care.
                  </p>
                  <div className="mt-4">
                    <div className="w-32 h-px border-t-2 border-dotted" style={{ borderColor: "#1E88E5" }}></div>
                  </div>
                </div>

                {/* Reliable & On-Time */}
                <div className="text-left">
                  <div className="flex items-center justify-start mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      RELIABLE & ON-TIME
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    Punctuality and consistency are at the core of our operations — we're always ready when you need us.
                  </p>
                  <div className="mt-4">
                    <div className="w-32 h-px border-t-2 border-dotted" style={{ borderColor: "#1E88E5" }}></div>
                  </div>
                </div>
              </div>

              {/* Center Column - Empty for background image */}
              <div className="flex justify-center items-center px-6"></div>

              {/* Right Column Features */}
              <div className="space-y-12 lg:pl-12">
                {/* Strict Quality Control */}
                <div className="text-right">
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      STRICT QUALITY CONTROL
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs ml-auto">
                    Continuous monitoring and audits ensure our work meets the highest industry benchmarks.
                  </p>
                  <div className="mt-4">
                    <div
                      className="w-32 h-px border-t-2 border-dotted ml-auto"
                      style={{ borderColor: "#1E88E5" }}
                    ></div>
                  </div>
                </div>

                {/* 24/7 Availability */}
                <div className="text-right">
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      24/7 AVAILABILITY
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs ml-auto">
                    Our teams are on standby day and night for emergencies, urgent calls, or scheduled tasks.
                  </p>
                  <div className="mt-4">
                    <div
                      className="w-32 h-px border-t-2 border-dotted ml-auto"
                      style={{ borderColor: "#1E88E5" }}
                    ></div>
                  </div>
                </div>

                {/* Compassion & Care */}
                <div className="text-right">
                  <div className="flex items-center justify-end mb-4">
                    <div
                      className="px-6 py-3 rounded-full text-white font-bold text-sm tracking-wider uppercase"
                      style={{ backgroundColor: "#1E88E5" }}
                    >
                      COMPASSION & CARE
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs ml-auto">
                    In healthcare services, we treat every patient with empathy, dignity, and respect while meeting their needs.
                  </p>
                  <div className="mt-4">
                    <div
                      className="w-32 h-px border-t-2 border-dotted ml-auto"
                      style={{ borderColor: "#1E88E5" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;