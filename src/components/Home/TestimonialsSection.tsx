import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const TestimonialsSection: React.FC = () => {

  const navigate = useNavigate(); // ✅ moved inside the component
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "General Manager, BMW Kottayam",
      content: "Smart Security has been our trusted partner for over 5 years. Their professional staff and reliable service have helped us maintain a secure environment for our customers and premium vehicles. The compliance with all labor laws gives us complete peace of mind.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr. Priya Nair",
      position: "Administrator, Muthoot Healthcare",
      content: "The cleaning and security services provided by Smart Security are exceptional. Their staff understands the critical hygiene requirements of healthcare facilities and maintains the highest standards consistently.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#1f1f1f" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block mb-6 md:mb-8">
            <div className="absolute left-0 top-0 w-1 h-12 md:h-16" style={{ backgroundColor: "#1E88E5" }}></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-6 md:ml-8 text-white">
              CLIENT <span style={{ color: "#1E88E5" }}>TESTIMONIALS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4">
            Hear what our valued clients across Kerala have to say about our security and facility management services
          </p>
        </div>

        {/* Desktop Carousel (md and up) */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 50}%)`,
                width: `${testimonials.length * 50}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div
                    className="border border-gray-600 transition-all duration-300 rounded-lg p-8 h-full relative"
                    style={{ 
                      backgroundColor: "#363636",
                      borderColor: "#555555"
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8" style={{ color: "#1E88E5" }} />
                    </div>

                    {/* Star Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#1E88E5" }} />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2"
                        style={{ borderColor: "#1E88E5" }}
                      />
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.name}</div>
                        <div className="font-medium" style={{ color: "#1E88E5" }}>{testimonial.position}</div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div 
                      className="absolute top-4 right-4 w-12 h-12 opacity-10 rounded-full"
                      style={{ backgroundColor: "#1E88E5" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stack (sm and below) */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-600 transition-all duration-300 rounded-lg p-6 relative"
              style={{ 
                backgroundColor: "#363636",
                borderColor: "#555555"
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-6 h-6" style={{ color: "#1E88E5" }} />
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#1E88E5" }} />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2"
                  style={{ borderColor: "#1E88E5" }}
                />
                <div>
                  <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                  <div className="font-medium text-xs sm:text-sm" style={{ color: "#1E88E5" }}>{testimonial.position}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div 
                className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 opacity-10 rounded-full"
                style={{ backgroundColor: "#1E88E5" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Indicators - Only show on desktop */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-30'
              }`}
              style={{ backgroundColor: "#1E88E5" }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
            Join 300+ satisfied clients who trust Smart Security with their protection needs
          </p>
          <button 
          onClick={() => navigate("/contact")}
            className="border-2 hover:text-white transition-all duration-300 bg-transparent px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wider uppercase rounded text-white w-full sm:w-auto"
            style={{ borderColor: "#1E88E5" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1E88E5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            BECOME OUR CLIENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;