import { useState, useEffect } from 'react';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Custom SVG icons
const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const SparkleIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0l3.09 6.26L22 9.27l-6.91 3.01L12 24l-3.09-11.72L2 9.27l6.91-3.01L12 0z"/>
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Container className="flex items-center min-h-screen pt-20 lg:pt-24 xl:pt-28 2xl:pt-32 text-white relative overflow-hidden">
      
      {/* Enhanced animated background with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs with mouse interaction */}
        <div 
          className="absolute w-[600px] h-[600px] opacity-30 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(252, 113, 27, 0.4) 0%, rgba(251, 255, 75, 0.2) 50%, transparent 70%)',
            left: `${20 + mousePosition.x * 0.05}%`,
            top: `${10 + mousePosition.y * 0.03}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] opacity-20 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(251, 255, 75, 0.3) 0%, rgba(252, 113, 27, 0.1) 40%, transparent 70%)',
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${10 + mousePosition.y * 0.04}%`,
            transform: 'translate(50%, 50%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-300 rotate-45 animate-spin opacity-60" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-orange-300 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-yellow-400 animate-bounce opacity-50" 
             style={{ animationDelay: '1s' }} />
        
        {/* Sparkle effects */}
        <SparkleIcon size={12} className="absolute top-1/5 right-1/3 text-yellow-300 animate-pulse opacity-70" />
        <SparkleIcon size={8} className="absolute top-2/3 left-1/4 text-orange-300 animate-pulse opacity-50" />
        <SparkleIcon size={10} className="absolute top-1/3 right-1/5 text-yellow-200 animate-pulse opacity-60" />
      </div>

      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-grid-pattern bg-[length:40px_40px]" 
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
             }} />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0 relative z-10">
        {/* Left spacer for larger screens */}
        <div className="hidden lg:block lg:w-[30%] xl:w-[35%] 2xl:w-[45%]"></div>
        
        {/* Main content */}
        <div className="w-full lg:w-[70%] xl:w-[65%] 2xl:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0 lg:pl-8">
          
          {/* Main heading with enhanced animations and effects */}
          <div className={`transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[120px] 2xl:text-[140px] font-bold flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 xl:gap-8 leading-[60px] sm:leading-[70px] md:leading-[80px] lg:leading-[85px] xl:leading-[110px] 2xl:leading-[130px] relative">
              <span className="hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-default inline-block transform-gpu hover:text-shadow-glow relative group">
                <strong>Discover</strong>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </span>
              <span className="bg-gradient-to-r from-[#FC711B] via-[#FF8C42] to-[#FBFF4B] inline-block text-transparent bg-clip-text hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-default transform-gpu relative group bg-300% animate-gradient-shift">
                <strong>Network</strong>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-yellow-300/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </span>
              <span className="hover:scale-110 hover:-rotate-1 transition-all duration-500 cursor-default inline-block transform-gpu relative group">
                <strong>Innovate</strong>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </span>
            </h1>
          </div>

          {/* Decorative line */}
          <div className={`w-24 h-1 bg-gradient-to-r from-[#FC711B] to-[#FBFF4B] rounded-full mt-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

          {/* Event details section */}
          <div className={`w-full flex flex-col lg:flex-row lg:justify-between lg:items-end pt-12 lg:pt-16 gap-8 lg:gap-4 transform transition-all duration-1500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            
            {/* Left side - Event info */}
            <div className="flex flex-col gap-8 items-center lg:items-start">
              
              {/* Date and time with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-12 items-center text-lg sm:text-xl font-bold">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative">
                    <span className="w-3 h-3 bg-gradient-to-r from-[#FC711B] to-[#FF8C42] rounded-full block animate-pulse"></span>
                    <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-[#FC711B] to-[#FF8C42] rounded-full animate-ping opacity-75"></span>
                  </div>
                  <p className="hover:text-[#FC711B] transition-all duration-300 group-hover:scale-105 transform">
                    November 18, 2025
                  </p>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative">
                    <span className="w-3 h-3 bg-gradient-to-r from-[#FBFF4B] to-[#FFD700] rounded-full block animate-pulse"></span>
                    <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-[#FBFF4B] to-[#FFD700] rounded-full animate-ping opacity-75"></span>
                  </div>
                  <p className="hover:text-[#FBFF4B] transition-all duration-300 group-hover:scale-105 transform">
                    10AM - 6PM
                  </p>
                </div>
              </div>
              
              {/* Location with enhanced styling */}
              <div className="text-center lg:text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 transform group">
                <p className="font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed group-hover:text-[#FC711B] transition-colors duration-300">
                  Morgan State University
                </p>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mt-2 font-medium">
                  Graves School of Business and Management
                </p>
              </div>
              
              {/* Enhanced registration button */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FC711B] via-[#FF8C42] to-[#FBFF4B] rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500 animate-gradient-shift bg-300%"></div>
                <a 
                  href="https://form.jotform.com/233056575770057" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative inline-flex items-center gap-4 py-4 px-10 border-2 border-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 bg-transparent hover:border-transparent overflow-hidden"
                  aria-label="Register for Morgan TechFest 2025"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <SparkleIcon size={14} className="animate-spin" style={{ animationDuration: '3s' }} />
                    Register Now
                    <SparkleIcon size={14} className="animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FC711B] via-[#FF8C42] to-[#FBFF4B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient-shift bg-300%"></span>
                </a>
              </div>
            </div>

            {/* Right side - Enhanced social media */}
            <div className="flex items-center justify-center lg:justify-end gap-6">
              <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform shadow-2xl">
                <span className="text-sm font-semibold text-gray-300 hidden sm:block">Follow Us</span>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/morgan-techfest/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-150 hover:rotate-12 transition-all duration-500 hover:text-blue-400 group p-2 rounded-full hover:bg-blue-500/20"
                    aria-label="Follow us on LinkedIn"
                  >
                    <LinkedInIcon size={22} className="cursor-pointer transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.instagram.com/morgantechfest?igsh=MTFkNm8yMXdxeHRseQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-150 hover:rotate-12 transition-all duration-500 hover:text-pink-400 group p-2 rounded-full hover:bg-pink-500/20"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon size={22} className="cursor-pointer transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute bottom-16 left-16 hidden xl:block animate-float">
        <div className="w-4 h-4 bg-gradient-to-r from-[#FC711B] to-[#FF8C42] rounded-full shadow-lg shadow-orange-500/50" />
      </div>
      <div className="absolute top-1/3 right-16 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-gradient-to-r from-[#FBFF4B] to-[#FFD700] rounded-full shadow-lg shadow-yellow-400/50" />
      </div>
      <div className="absolute top-1/4 left-1/2 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full shadow-lg shadow-purple-400/50" />
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-300% {
          background-size: 300% 300%;
        }
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </Container>
  );
};

export default Hero;
