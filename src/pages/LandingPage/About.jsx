import { useState, useEffect } from 'react';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Custom decorative icons
const TechIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

const CircuitIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    <circle cx="8" cy="8" r="1.5"/>
    <circle cx="16" cy="8" r="1.5"/>
    <circle cx="12" cy="16" r="1.5"/>
  </svg>
);

const PlayIcon = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#1e3d76] via-[#2a4a8a] to-[#1e3d76] py-24 relative overflow-hidden" name='aboutUs'>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-blue-400/15 to-cyan-300/10 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s' }} />
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 right-1/4 animate-spin opacity-20" style={{ animationDuration: '20s' }}>
          <TechIcon size={32} className="text-orange-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-bounce opacity-30">
          <CircuitIcon size={24} className="text-yellow-300" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-pulse opacity-25">
          <div className="w-6 h-6 border-2 border-orange-300 rounded-full" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                 backgroundSize: '30px 30px'
               }} />
        </div>
      </div>

      <Container className={'flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20 text-white relative z-10'}>
        
        {/* Left Content Section */}
        <div className={`lg:w-1/2 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <TechIcon size={16} className="text-orange-400 animate-pulse" />
            <span className="text-sm font-semibold text-orange-200 tracking-wider uppercase">About TechFest</span>
          </div>

          {/* Main Title */}
          <div className="relative mb-8">
            <h2 className="font-bold text-5xl lg:text-6xl xl:text-7xl pb-4 relative">
              <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default inline-block">
                WHO WE ARE
              </span>
            </h2>
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] rounded-full transform transition-all duration-1000 delay-500" 
                 style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }} />
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-6">
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] rounded-full animate-pulse"></div>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-100 pl-6 group-hover:text-white transition-colors duration-300">
                Morgan TechFest is a <span className="text-orange-300 font-semibold">student-led technology conference</span> that 
                educates students on the impact of technology in shaping their career paths, inspires them through 
                <span className="text-yellow-300 font-semibold"> tech talks, projects, and research expos</span>, empowers them 
                with mentorship and career opportunities, and bridges the gap between 
                <span className="text-orange-300 font-semibold"> academia and industry</span>.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "🎓", text: "Educational Workshops" },
                { icon: "🤝", text: "Industry Networking" },
                { icon: "💡", text: "Innovation Showcase" },
                { icon: "🚀", text: "Career Opportunities" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                     style={{ transitionDelay: `${800 + index * 100}ms` }}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Video Section */}
        <div className={`lg:w-1/2 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="relative group">
            
            {/* Video Container with Enhanced Styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FC711B] via-[#FF8C42] to-[#FBFF4B] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift bg-300%"></div>
              
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
                {/* Video Placeholder/Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                  
                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'bg-black/60' : ''}`}>
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isHovered ? 'scale-110 shadow-orange-500/50' : 'scale-100'}`}>
                        <PlayIcon size={32} className="text-white ml-1" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Actual Video - Note: YouTube embed URL corrected */}
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src="https://www.youtube.com/embed/MLX3J9nk0cI"
                    title="Morgan TechFest Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Morgan TechFest 2025 Preview</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements Around Video */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full animate-bounce opacity-80 shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-orange-300 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-400 rotate-45 animate-spin opacity-70" style={{ animationDuration: '3s' }}></div>
          </div>

          {/* Video Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { number: "500+", label: "Students" },
              { number: "50+", label: "Speakers" },
              { number: "20+", label: "Workshops" }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                   style={{ transitionDelay: `${1200 + index * 100}ms` }}>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default About;
