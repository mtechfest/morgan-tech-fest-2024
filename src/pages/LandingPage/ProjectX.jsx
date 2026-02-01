import { useState, useEffect } from 'react';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const ProjectX = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white py-20" name="projectX">
      
      {/* Background blur effects - lighter for white background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        
        <div className={`max-w-4xl mx-auto text-center space-y-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Section Label */}
          <div className="inline-block">
            <span className="text-orange-500 text-sm font-medium tracking-wider uppercase">Build Your Future</span>
          </div>

          {/* Main Title */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
                Ready to Build Your Tech Portfolio?
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto" />
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Join <span className="text-orange-500 font-semibold">ProjectX</span> and 
            transform your learning into real-world experience. Work on hands-on projects, 
            earn <span className="text-orange-500 font-semibold">TechTalent Badges</span>, and build a 
            portfolio that showcases actual skills employers want to see.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            
            {/* Feature 1 */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Real-World Projects</h3>
              <p className="text-gray-600 text-sm">Contribute to actual tech projects and build practical experience</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Industry Simulation</h3>
              <p className="text-gray-600 text-sm">Collaborate like a real organization and develop essential soft skills</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">AI Career Navigator</h3>
              <p className="text-gray-600 text-sm">Get AI-powered guidance to accelerate your professional growth</p>
            </div>
            
          </div>

          {/* Call-to-Action Button */}
          <div className="pt-8">
            <a 
              href="https://careers.morgantechfest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              Start Your ProjectX Journey →
            </a>
          </div>

          {/* Additional Benefits */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> 21 Industry Tracks
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Badge System
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Portfolio Building
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> No Experience Required
            </span>
          </div>

        </div>

      </Container>
    </div>
  );
};

export default ProjectX;
