import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Pause } from 'lucide-react';
import heroBgImage from '../Assets/Images/hero_bg_image.jpg';
import cleaningBgImage from '../Assets/Images/cleaning_lady_hero_bg_image.jpg';
import ad from '../Assets/videos/ad.mp4';

const HeroSection: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0 for security, 1 for cleaning
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-transition every 8 seconds (paused during video playback)
  useEffect(() => {
    if (!isVideoPlaying) {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSection(prev => prev === 0 ? 1 : 0);
        }, 800);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1600);
      }, 8000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVideoPlaying]);

  // Handle ESC key to close video
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVideoPlaying) {
        handleCloseVideo();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVideoPlaying]);

  const sections = [
    {
      // Security Section
      backgroundImage: heroBgImage,
      videoSrc: ad,
      title: ["KERALA'S MOST", "TRUSTED", "SECURITY."],
      subtitle: "YOUR SECURITY - OUR PROMISE",
      description: "For over two decades, we've safeguarded businesses and communities across Kerala with dependable, professional security solutions.",
      buttonText: "GET A QUOTE"
    },
    {
      // Cleaning Section
      backgroundImage: cleaningBgImage,
      videoSrc: ad,
      title: ["KERALA'S MOST", "RELIABLE", "CLEANING."],
      subtitle: "SPOTLESS RESULTS - OUR SPECIALTY",
      description: "Professional cleaning and maintenance solutions for businesses and residences, combining eco-friendly practices with consistent, high-quality service.",
      buttonText: "GET SERVICE"
    }
  ];


  const currentData = sections[currentSection];

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setVideoPaused(false);
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    setVideoPaused(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setVideoPaused(false);
  };

  const handleVideoPlay = () => {
    setVideoPaused(false);
  };

  const handleVideoPause = () => {
    setVideoPaused(true);
  };

  const toggleVideoPause = () => {
    if (videoRef.current) {
      if (videoPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out ${
              currentSection === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-102'
            }`}
            style={{
              backgroundImage: `url(${section.backgroundImage})`,
              transitionProperty: 'opacity, transform',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        ))}
      </div>

      {/* Video Overlay */}
      {isVideoPlaying && (
        <div className="absolute inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-60 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl cursor-default">
              <video
                ref={videoRef}
                src={currentData.videoSrc}
                className="w-full h-auto max-h-[80vh] cursor-default"
                autoPlay
                controls
                onEnded={handleVideoEnd}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                style={{ outline: 'none' }}
                onClick={(e) => e.stopPropagation()}
              >
                <source src={currentData.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Overlay */}
              {videoPaused && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                  onClick={toggleVideoPause}
                >
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
                    <Play className="w-8 h-8 text-black ml-1" fill="black" />
                  </div>
                </div>
              )}
            </div>

            {/* Video Title */}
            <div className="mt-4 text-center pointer-events-none">
              <h3 className="text-white text-xl font-semibold">
                {currentSection === 0 ? 'Security Services Overview' : 'Cleaning Services Overview'}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-8 py-6">
        <div className="flex justify-end">
          {/* Add your ContactButton component here if needed */}
        </div>
      </nav>

      {/* Main Content */}
      <div className={`flex items-center min-h-screen relative z-10 transition-opacity duration-500 ${
        isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading with Blue Accent and Fade Effect */}
              <div className="relative">
                {/* Blue Gradient Accent Line */}
                <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-blue-400" 
                     style={{ backgroundColor: '#1E88E5' }}></div>
                
                {/* Stacked Text with Smooth Fade Effect and Transition Animation */}
                <div className="ml-8 space-y-2">
                  {currentData.title.map((line, index) => (
                    <h1 
                      key={`${currentSection}-${index}`}
                      className={`text-white font-bold leading-none tracking-tight transition-all duration-1000 transform ${
                        isTransitioning 
                          ? 'opacity-0 translate-y-4 blur-sm' 
                          : 'opacity-100 translate-y-0 blur-0'
                      }`}
                      style={{ 
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        background: index === 0 
                          ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                          : index === 1
                          ? 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)'
                          : 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: index === 0 ? 'white' : 'transparent',
                        transitionDelay: isTransitioning ? `${index * 50}ms` : `${(2 - index) * 150}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      {line}
                    </h1>
                  ))}
                </div>
              </div>

              {/* Subtitle */}
              <h2 
                className={`text-lg font-normal mb-2 ml-8 tracking-wide transition-all duration-1000 transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-4 blur-sm' 
                    : 'opacity-100 translate-y-0 blur-0'
                }`}
                style={{ 
                  color: '#1E88E5',
                  transitionDelay: isTransitioning ? '150ms' : '450ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {currentData.subtitle}
              </h2>

              {/* Description */}
              <p 
                className={`text-lg text-gray-300 max-w-md ml-8 leading-relaxed transition-all duration-1000 transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-4 blur-sm' 
                    : 'opacity-80 translate-y-0 blur-0'
                }`}
                style={{ 
                  transitionDelay: isTransitioning ? '200ms' : '600ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {currentData.description}
              </p>

              {/* Action Buttons */}
              <div 
                className={`flex items-center space-x-6 ml-8 transition-all duration-1000 transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-4 blur-sm' 
                    : 'opacity-100 translate-y-0 blur-0'
                }`}
                style={{ 
                  transitionDelay: isTransitioning ? '250ms' : '750ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <a
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 border-2 text-white hover:text-white transition-all duration-300 font-semibold tracking-wide uppercase"
                  style={{ 
                    borderColor: '#1E88E5',
                    color: '#1E88E5'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1E88E5';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1E88E5';
                  }}
                >
                  <span>{currentData.buttonText}</span>
                </a>
                
                {/* Play Button - Now Functional */}
                <button 
                  onClick={handlePlayVideo}
                  className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group hover:scale-110"
                  style={{ backgroundColor: '#1E88E5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1976D2'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E88E5'}
                >
                  <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="white" />
                </button>
              </div>
            </div>

            {/* Right Content - Image area (handled by background) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Section Indicators */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40 transition-opacity duration-500 ${
        isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isVideoPlaying) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSection(index);
                }, 800);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 1600);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className={`absolute right-8 bottom-20 z-30 flex gap-4 transition-opacity duration-500 ${
        isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button 
          onClick={() => {
            if (!isVideoPlaying) {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSection(prev => prev === 0 ? 1 : 0);
              }, 800);
              setTimeout(() => {
                setIsTransitioning(false);
              }, 1600);
            }
          }}
          className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1E88E5';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-white">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          onClick={() => {
            if (!isVideoPlaying) {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSection(prev => prev === 0 ? 1 : 0);
              }, 800);
              setTimeout(() => {
                setIsTransitioning(false);
              }, 1600);
            }
          }}
          className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1E88E5';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-white">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;