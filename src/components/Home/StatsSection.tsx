import React, { useState, useEffect } from 'react';

const StatsSection: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    experience: 0,
    districts: 0,
    support: 0
  });
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  // Animation targets - updated to match the new design
  const targets = {
    clients: 300,
    experience: 24,
    districts: 14,
    support: 24
  };

  // Counter animation effect
  useEffect(() => {
    if (!hasStartedCounting) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(Math.ceil(increment * step), target);
        
        setCounters(prev => ({
          ...prev,
          [key]: current
        }));

        if (current >= target) {
          clearInterval(intervals.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [hasStartedCounting]);

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedCounting) {
            setHasStartedCounting(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasStartedCounting]);

  return (
    <section 
      id="stats-section" 
      className="py-16 sm:py-20" 
      style={{ backgroundColor: '#1E88E5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - All 4 stats in one row */}
        <div className="grid grid-cols-4 gap-2 text-center sm:hidden">
          <div className="transform hover:scale-105 transition-transform duration-300 px-1">
            <div className="text-xl font-bold text-white mb-1">
              {counters.clients}+
            </div>
            <div className="text-blue-100 text-xs font-medium leading-tight">
              Clients Protected
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300 px-1">
            <div className="text-xl font-bold text-white mb-1">
              {counters.experience}+
            </div>
            <div className="text-blue-100 text-xs font-medium leading-tight">
              Years Experience
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300 px-1">
            <div className="text-xl font-bold text-white mb-1">
              {counters.districts}
            </div>
            <div className="text-blue-100 text-xs font-medium leading-tight">
              Districts covered
            </div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300 px-1">
            <div className="text-xl font-bold text-white mb-1">
              {counters.support}/7
            </div>
            <div className="text-blue-100 text-xs font-medium leading-tight">
              Support Available
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout - Original responsive design */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {counters.clients}+
            </div>
            <div className="text-blue-100 text-base md:text-lg font-medium">Clients Protected</div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {counters.experience}+
            </div>
            <div className="text-blue-100 text-base md:text-lg font-medium">Years Experience</div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {counters.districts}
            </div>
            <div className="text-blue-100 text-base md:text-lg font-medium">Districts covered</div>
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {counters.support}/7
            </div>
            <div className="text-blue-100 text-base md:text-lg font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;