import { useState, useEffect } from 'react';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Simple play icon
const PlayIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20" name='aboutUs'>
      
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="flex flex-col lg:flex-row lg:items-center gap-16 text-white relative z-10">
        
        {/* Left Content Section */}
        <div className={`lg:w-1/2 space-y-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Section Label */}
          <div className="inline-block">
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">About TechFest</span>
          </div>

          {/* Main Title */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          </div>
          
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
              Morgan TechFest is a <span className="text-orange-300 font-medium">student-led initiative</span> that 
              empowers students to build tech careers through <span className="text-orange-300 font-medium">ProjectX</span>, our year-round career development platform, and <span className="text-orange-300 font-medium">Innovation Expo</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              Innovation Expo is our <span className="text-orange-300 font-medium">annual one-day event</span> where attendees participate in networking sessions, tune into keynote panels, and expand their knowledge while celebrating outstanding student innovation. Students showcase their research and technology projects and connect with industry professionals.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              We inspire through <span className="text-orange-300 font-medium">continuous skill-building</span>, 
              empower through TechTalents badges and real-world opportunities, and bridge the gap between 
              <span className="text-orange-300 font-medium"> academia and industry</span>.
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className={`lg:w-1/2 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative group">
            
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800">
              
              <div className="relative aspect-video bg-slate-800">
                
                {/* Video */}
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/MLX3J9nk0cI"
                  title="Morgan TechFest Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                {/* Simple overlay for when video isn't playing */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <PlayIcon size={24} className="text-slate-800 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white font-medium text-lg">Morgan TechFest 2025</h3>
                <p className="text-gray-300 text-sm mt-1">Bridging Academia & Industry</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
